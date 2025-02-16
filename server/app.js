const express = require('express')
const cors = require('cors')
const app = express()
const authMiddleware = require('./middleware/auth')
const PORT = process.env.PORT || 3000
app.use(cors())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 
    console.log(req.headers); // Дивимося, які заголовки приходять
    next();
});

app.use(authMiddleware)
app.use(express.json())

const userRoutes = require('./routes/adUser')
app.use('/api', userRoutes)

app.get('/', (req, res) => {
  res.send('Сервер працює!');
});


app.listen(PORT, () => {
    console.log(`Сервер запущено на ${PORT}`)
})