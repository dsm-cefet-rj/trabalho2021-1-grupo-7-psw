const router = require('express').Router(); 
const verifyCompany = require('../utils/verifyDataCompany')
const Company = require('../models/company')
const User = require('../models/user');
const passport = require('passport')
//Pega todas as empresas
router.get('/', async (req, res, next) => {
  try{
    let users = await Company.find({})
    res.status(200).json(users)
  }catch(e){
    res.status(500).json({msg: "Erro interno"})
  }
});

//Pega uma empresa
router.get('/:id', async (req, res, next) => {
  try{
    let id = req.params.id

    if(!verifyCompany.id(id)){
      return res.status(400).json({msg: "Dados inválidos"})
    }

    let companyFound = await Company.findById(id).exec()
    
    if(companyFound == undefined){
      return res.status(404).json({msg: "Empresa não encontrada"})
    }

    return res.status(200).json(companyFound)
  }catch(e){
    res.status(500).json({msg: "Erro interno"})
  }
})

//Cadastra uma empresa
router.post('/', async (req, res, next) =>{
  try{
    let {name,email,cnpj,password} = req.body

    let verifyData = verifyCompany.body(name, email, cnpj, password)
    if(!verifyData){
      return res.status(400).json({msg: "Dados inválidos."})
    }
    
    let userFound = await User.findOne({'email': email})
    let companyFound = await Company.findOne({'email': email})
    
    if(companyFound != undefined || userFound != undefined){
      return res.status(406).json({msg: "E-mail já cadastrado."})
    }
    /*
    let company = new Company({name,email,cnpj,password,role: 0})
    await company.save()
    return res.status(200).json({status: "Empresa criada com sucesso!"})
    */  
    Company.register(new User({name,email, cnpj, role:0, username: email}), password, (err, company) =>{
      if(err){
        res.statusCode = 500
        res.setHeader("Content-Type", "application/json")
        res.json({msg: err})
      }else{
        passport.authenticate('local')(req,res, ()=>{
          res.statusCode = 200
          res.setHeader("Content-Type", "application/json")
          res.json({ success: true, status: "Empresa cadastrada com sucesso!"})
        })
      }
    })
  }catch(e){
    res.status(500).json({msg: "Erro interno"})
  }
})

//Deleta uma empresa
router.delete('/:id', async (req, res, next) => {
  try{
    let id = req.params.id

    if(!verifyCompany.id(id)){
      return res.status(400).json({msg: "Dados inválidos."})
    }

    let companyExists = await Company.findById(id).exec()
    if(companyExists == undefined){
      return res.status(404).json({msg: "Empresa não encontrada ou não existe."})
    }

    await Company.findByIdAndDelete(id)
    return res.status(200).json({status: "Empresa deletada com sucesso."})
  }catch(e){
    res.status(500).json({msg: "Erro interno"})
  }
})

//Atualiza uma empresa
router.put('/:id', async (req, res, next) => {
  try{
    let { name, email, cnpj, password} = req.body
    let id = req.params.id

    if(!verifyCompany.body(name,email,cnpj,password) || !verifyCompany.id(id)){
      return res.status(400).json({msg: "Dados inválidos."})
    }

    let companyExists = await Company.findById(id).exec()
    if(companyExists == undefined){
      return res.status(404).json({msg: "Empresa não encontrada."})
    }

    let userFound = await User.findOne({'email': email})
    let companyFound = await Company.findOne({'email': email})

    if((companyFound && companyExists.email != companyFound.email) || userFound != undefined){
      return res.status(406).json({msg: "E-mail já cadastrado."})
    }

    await Company.findByIdAndUpdate(id, {name,email,cnpj, password})
    return res.status(200).json({status: "Empresa atualizada com sucesso"})
  }catch(e){
    console.log(e)
    res.status(500).json({msg: "Erro interno"})
  }
})

module.exports = router