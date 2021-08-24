const User = require("../Models/User")

class UserController{

    async index(req, res){
        let users = await User.getAll()
        res.status(200).json({users : users})
    }

    async find(req, res){
        let email = req.query.email

        if(email == undefined || email == ''){
            return res.status(400).json({msg: "Dados inválidos"})
        }

        let user = await User.findOne(email)

        if(user == undefined){
            return res.status(404).json({msg: "Usuário não encontrado"})
        }
        
        return res.status(200).json({user: {id: user.id, name: user.name, email: user.email, role: user.role}})
    }

    async create(req, res){
        let {name,email,cpf,password} = req.body

        if((name == undefined || name == '') || (email == undefined || email == '') ||
        (cpf == undefined || cpf == '') || (password == undefined || password == '')){
            return res.status(400).json({msg: "Dados inválidos."})
        }

        let user = await User.findOne(email)
        if(user != undefined){
            return res.status(401).json({msg: "E-mail já cadastrado."})
        }
        
        await User.create(name,email,cpf,password)

        return res.status(200).json({status: "Usuário criado com sucesso!"})
    }
}

module.exports = new UserController()