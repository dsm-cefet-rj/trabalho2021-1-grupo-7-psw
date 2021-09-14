const router = require('express').Router()

const users = require('./users')
const events = require('./events')

router.use('/usuarios', users)
router.use('/eventos', events)

module.exports = router