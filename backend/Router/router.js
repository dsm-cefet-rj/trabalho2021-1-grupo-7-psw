const Router = require('express').Router()
const Empresa = require('../Controllers/Empresa')

//Este arquivo é onde irão ficar os endpoints da api e usar as funções de controller das entidades de dominio
Router.post('/create', Empresa.create)

module.exports = Router