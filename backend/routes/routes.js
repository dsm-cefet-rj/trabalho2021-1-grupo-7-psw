const router = require('express').Router()
const buy = require('./buy')
const user = require('./user')
const events = require('./events')
const company = require('./company')

router.use('/usuarios', user)
router.use('/eventos', events)
router.use('/empresas', company)
router.use('/compras', buy)
module.exports = router