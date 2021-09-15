const router = require('express').Router()
const buy = require('./buy')
const users = require('./users')
const events = require('./events')

router.use('/usuarios', users)
router.use('/eventos', events)
router.use('/', events)
router.use('/', buy)
module.exports = router