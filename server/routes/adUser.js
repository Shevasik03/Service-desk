const express = require('express')
const router = express.Router()
const adService = require('../models/adService')

router.get('/userinfo', adService.getUserDetailsAD)

module.exports = router;