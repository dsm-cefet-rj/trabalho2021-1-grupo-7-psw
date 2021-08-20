const User = require("../Models/User")

class UserController{

    async index(req, res){
        let users = await User.getAll()
        res.status(200).json({users : users})
    }

    async find(req, res){
        let {email, password} = req.body

        if(email == undefined || email == '' || password == undefined || password == ''){
            return res.status(400).json({error: "Dados inválidos"})
        }

        let user = await User.findOne(email)

        if(user == undefined){
            return res.status(404).json({error: "Usuário não encontrado"})
        }

        if(user.password != password){
            return res.status(401).json({error: "Senha incorreta"})
        }
        
        return res.status(200).json({user: {id: user.id, name: user.name, email: user.email, role: user.role}})
    }

    async create(req, res){
        let {name,email,cpf,password} = req.body

        if((name == undefined || name == '') || (email == undefined || email == '') ||
        (cpf == undefined || cpf == '') || (password == undefined || password == '')){
            return res.status(400).json({error: "Dados inválidos."})
        }

        let user = await User.findOne(email)
        if(user != undefined){
            return res.status(401).json({error: "E-mail já cadastrado."})
        }
        
        await User.create(name,email,cpf,password)

        return res.status(200).json({status: "Usuário criado com sucesso!"})
    }
}

module.exports = new UserController()