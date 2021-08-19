const empresaModel = require('../Models/Empresa')

class Empresa{
    //Nesta classe tem todas as funções que lidam com as requisições e respostas da entidade empresa
    constructor(){    
    }
    create(req, res){
        empresaModel.create(req.body.nome, req.body.area)
        res.send("Cadastrado com sucesso")
    }
    edit(req, res){
        res.send()
    }

}

module.exports = new Empresa()