const express = require('express');
const ntlm = require('express-ntlm')
const cors = require('cors');

const PORT = process.env.PORT || 449
const app = express();

app.set('trust proxy', true);

// 🔹 Додаємо CORS (для підтримки credentials)
app.use(cors({
    origin: 'https://sds.nemiroff.local', // Вказуємо точний клієнтський домен
    credentials: true,                  // Дозволяємо передавати сесії та кукі
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

app.get('/', (res, rej) => {
    rej.send("Hello World!")
})

const adUserRouter = require('./routes/adUser')
app.use('/api', adUserRouter)

// 🔹 Запуск сервера
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));