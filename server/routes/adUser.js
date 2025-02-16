const express = require('express')
const router = express.Router()
const { getUserDetails } = require('../models/adService')

router.get('/userinfo', async (req, res) => {
    if (!req.user) {
        return res.status(401).json({error: 'Неавторизований користувач' })
    }

    try {
        const userDetails = await getUserDetails(req.user)
        res.json(userDetails)
    } catch (err) {
        res.status(500).json({err})
    }
})

module.exports = router;