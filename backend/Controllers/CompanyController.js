const CompanyModel = require('../Models/Company')

class Company{
    //Nesta classe tem todas as funções que lidam com as requisições e respostas da entidade empresa
    constructor(){  
    
    }
    static isEmptyOrWhiteSpace(...args) {
        for (let i = 0; i < args.length; i++) {
            const arg = args[i];
            const result= /^\s*$/.test(arg) 
            //se só houver espaço em branco retorna true "  " e ""
            if((/^\s*$/.test(arg))){
               return true 
           }
       }
    }
    create(req, res){
        const {name, email, cnpj, password, confirmPassword} = req.body
        if(!(name && email && cnpj && password && confirmPassword))
                return res.status(400).json({error: "Todos os campos são de preenchimento obrigatorio"})           
        
        if(Company.isEmptyOrWhiteSpace(name, email, cnpj, password, confirmPassword))
            return res.status(400).json({error: "Os inputs nao devem conter apenas espaços em branco"})
        
        if(password !== confirmPassword)
            return res.status(400).json({error: "As senhas não correspondem."})
        
        CompanyModel.create(name, email, cnpj, password).then((msg)=>{
            res.status(200).json({msg})
            console.log(msg)
        })
    }

    edit(req, res){
        res.send()
    }

}

module.exports = new Company()