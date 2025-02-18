const express = require('express');
const cors = require('cors');
const ntlm = require('express-ntlm');
const ActiveDirectory = require('activedirectory2');

const PORT = process.env.PORT || 448
const app = express();

app.set('trust proxy', true);

// 🔹 Додаємо CORS (для підтримки credentials)
app.use(cors({
    origin: 'https://sds.nemiroff.local', // 🔥 Вказуємо точний клієнтський домен
    credentials: true,                  // 🔥 Дозволяємо передавати сесії та кукі
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
}));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://sds.nemiroff.local"); 
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
    
    if (req.method === "OPTIONS") {
        return res.sendStatus(200);
    }
    next();
});

// 🔹 Налаштування NTLM-аутентифікації
app.use(ntlm({
    domain: 'nemiroff.local', // 🔹 Вкажи свій домен, наприклад "company.local"
    domaincontroller: 'ldap://dc2.nemiroff.local' // 🔹 Вкажи адресу контролера домену (LDAP)
}));

// 🔹 Налаштування Active Directory
const config = {
    url: 'ldap://dc2.nemiroff.local',
    baseDN: "DC=nemiroff, DC=local",
    username: "load@nemiroff.local",
    password: "Dfhbfyn66"              // 🔹 Пароль адміністратора AD
};
const ad = new ActiveDirectory(config);

// 🔹 Ендпоінт для отримання інформації про користувача
app.get('/api/userinfo', (req, res) => {
    if (!req.ntlm) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    const username = req.ntlm.UserName; // 🔥 Отримуємо ім'я користувача з NTLM
    const domain = req.ntlm.DomainName; // 🔥 Отримуємо домен користувача

    console.log(`User authenticated: ${domain}\\${username}`);

    // 🔹 Перевіряємо чи користувач існує в Active Directory
    ad.findUser(username, (err, user) => {
        if (err) {
            console.error('Error searching for user in AD:', err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        if (!user) {
            return res.status(404).json({ error: "User not found in Active Directory" });
        }

        ad.getGroupMembershipForUser(username, (err, groups) => {
            if (err) {
                return res.status(500).json({ error: "Error retrieving groups" });
            }

            // 🔹 Відправляємо відповідь
             res.json({
                username: user.sAMAccountName,
                fullName: user.displayName,
                email: user.mail,
                department: user.department,
                groups: user.groups
            });
        })

        
    });
});

// 🔹 Запуск сервера
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));