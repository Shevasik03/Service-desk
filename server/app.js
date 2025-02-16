const express = require('express')
const cors = require('cors')
const app = express()
const authMiddleware = require('./middleware/auth')
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(authMiddleware)

const userRoutes = require('./routes/adUser')
app.use('/api', userRoutes)


app.listen(PORT, () => {
    console.log(`Сервер запущено на ${PORT}`)
})