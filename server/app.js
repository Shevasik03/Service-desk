// const express = require('express')
// const cors = require('cors')
// const app = express()
// const authMiddleware = require('./middleware/auth')
// const PORT = process.env.PORT || 3000
// app.use(cors({
//     origin: "*",
//     credentials: true,

// }))
// app.use(express.json())
// app.use(authMiddleware)

// const userRoutes = require('./routes/adUser')
// app.use('/api', userRoutes)

// app.get('/', (req, res) => {
//   res.send('Сервер працює!');
// });


// app.listen(PORT, () => {
//     console.log(`Сервер запущено на ${PORT}`)
// })

const express = require('express');
const cors = require('cors');
const ntlm = require('express-ntlm');
const ActiveDirectory = require('activedirectory2');

const app = express();

// 🔹 Додаємо CORS (для підтримки credentials)
app.use(cors({
    origin: 'http://10.10.131.218:86', // 🔥 Вказуємо точний клієнтський домен
    credentials: true,                  // 🔥 Дозволяємо передавати сесії та кукі
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
}));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://10.10.131.218:86"); 
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
    username: "oleksandr.shevchuk@nemiroff.pro",
    password: "Itdxer0130"              // 🔹 Пароль адміністратора AD
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

        // 🔹 Відправляємо відповідь
        res.json({
            username: user.sAMAccountName,
            fullName: user.displayName,
            email: user.mail,
            department: user.department
        });
    });
});

// 🔹 Запуск сервера
app.listen(3000, () => console.log('Server running on port 3000'));