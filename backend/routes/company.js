const router = require('express').Router(); 
const verifyCompany = require('../utils/verifyDataCompany')
const User = require('../models/user');
const Events = require('../models/events');
const userType = require('../utils/enumTypeUser');
const {userAdmin, verifyUser, userCompany} = require('../middlewares/authenticate');


//Pega todas as empresas
router.get('/', verifyUser, userAdmin,async (req, res, next) => {
  try{
    let companys = await User.find({role: userType.COMPANY}).sort([['created_at', 'descending']])
    res.status(200).json(companys)
  }catch(e){
    console.log(e)
    res.status(500).json({msg: "Erro interno"})
  }
});

//Pega uma empresa
router.get('/:id', verifyUser, userAdmin,async (req, res, next) => {
  try{
    let id = req.params.id

    if(!verifyCompany.id(id)){
      return res.status(400).json({msg: "Dados inválidos"})
    }

    let companyFound = await User.findById({_id: id, role: userType.COMPANY}).exec()
    
    if(companyFound == undefined){
      return res.status(404).json({msg: "Empresa não encontrada"})
    }

    return res.status(200).json(companyFound)
  }catch(e){
    res.status(500).json({msg: "Erro interno"})
  }
})

//Deleta uma empresa
router.delete('/:id', verifyUser, userAdmin, async (req, res, next) => {
  try{
    let id = req.params.id

    if(!verifyCompany.id(id)){
      return res.status(400).json({msg: "Dados inválidos."})
    }

    let companyExists = await User.findById(id).exec()
    if(companyExists == undefined){
      return res.status(404).json({msg: "Empresa não encontrada ou não existe."})
    }

    await User.findByIdAndDelete(id)
    return res.status(200).json({status: "Empresa deletada com sucesso."})
  }catch(e){
    res.status(500).json({msg: "Erro interno"})
  }
})

//Atualiza uma empresa
router.put('/:id', verifyUser, userAdmin, async (req, res, next) => {
  console.log(req)
  try{
    let { name, email, document, password} = req.body
    let id = req.params.id

    if(!verifyCompany.body(name,email,document,password) || !verifyCompany.id(id)){
      return res.status(400).json({msg: "Dados inválidos."})
    }

    let companyExists = await User.findById(id).exec()
    if(companyExists == undefined){
      return res.status(404).json({msg: "Empresa não encontrada."})
    }

    let companyFound = await User.findOne({'email': email})

    if((companyFound && companyExists.email != companyFound.email)){
      return res.status(406).json({msg: "E-mail já cadastrado."})
    }

    await User.findByIdAndUpdate(id, {name,email,document, password})
    return res.status(200).json({status: "Empresa atualizada com sucesso"})
  }catch(e){
    console.log(e)
    res.status(500).json({msg: "Erro interno"})
  }
})

//Eventos de uma empresa
router.get("/:id/eventos",userCompany, async (req, res)=>{
  const {id} = req.params 
  const user = await User.findById(id)
  if(user==undefined){
    return res.status(404).json({msg: "Usuario não encontrado."})
  }
  const userEvents = await Events.find({company: id})
  res.json(userEvents)
})

module.exports = router