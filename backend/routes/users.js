const router = require('express').Router(); 
const verifyDataUser = require('../utils/verifyData')
const createAllUsers = require('../utils/createAllUsers')

let users = [
  {
      id: 1,
      name: "Lucas Farolfi",
      email: "lucas123@gmail.com",
      cpf: "123.456.789-10",
      password: "123123123",
      role: 1 //Admin
  },
  {
      id: 2,
      name: "Caio Abreu",
      email: "caio123@gmail.com",
      cpf: "345.654.426-91",
      password: "123123123",
      role: 1 //Admin
  },
  {
      id: 3,
      name: "João Marcos",
      email: "joao123@gmail.com",
      cpf: "123.456.789-10",
      password: "123123123",
      role: 1 //Admin
  },
  {
      id: 4,
      name: "Andrey Alves",
      email: "andrey123@gmail.com",
      cpf: "123.456.789-10",
      password: "123123123",
      role: 1 //Admin
  },
  {
      id: 5,
      name: "Felipe Júnior",
      email: "felipe123@gmail.com",
      cpf: "886.452.708-02",
      password: "123123123",
      role: 1 //Admin
  },
  {
      id: 6,
      name: "John Snow",
      email: "johnsnow@gmail.com",
      cpf: "123.543.239-71",
      password: "123123123",
      role: 2 //Cliente
  },
]

let companies = [
  {
    id: 7,
    name: 'olimpo',
    email: 'olimpo@gmail.com',
    cnpj: '123.456.789.11',
    password: '12345678',
    role: 3,
  },
];

let allUsers = createAllUsers(users,companies)

//Pega todos os usuários
router.get('/', (req, res, next) => {
  res.status(200).json(allUsers)
});

//Pega todos os usuários que sao clientes
router.get('/clientes', (req, res, next) => {
  res.status(200).json(users)
});

//Pega todos os usuários de empresas
router.get('/empresas', (req, res, next) => {
  res.status(200).json(companies)
});

//Pegar um usuário
router.get('/:id', (req, res, next) => {
  let id = req.params.id

  let userFound = allUsers.find(user=>user.id === parseInt(id))
  console.log(userFound)

  if(userFound == undefined){
    return res.status(404).json({msg: "Usuário não encontrado"})
  }

  return res.status(200).json(userFound)
})

//Cadastra um usuário
router.post('/', (req, res, next) =>{
  let {name,email,cpf,cnpj,password} = req.body

  let verifyData = verifyDataUser(name, email, cpf, cnpj, password)

  if(!verifyData){
    return res.status(400).json({msg: "Dados inválidos."})
  }

  let userFound = allUsers.find(user=> user.email === email)

  if(userFound != undefined){
    return res.status(401).json({msg: "E-mail já cadastrado."})
  }

  if(cpf != ''){
    users.push({
      id: Date.now(),
      name,
      email,
      cpf,
      password,
      role: 2,
    });
  }

  if(cnpj != ''){
    companies.push({
      id: Date.now(),
      name,
      email,
      cnpj,
      password,
      role: 3,
    });

    allUsers.push({
      id: Date.now(),
      name,
      email,
      cnpj,
      password,
      role: 3,
    });
  }
      
  return res.status(200).json({status: "Usuário criado com sucesso!"})
})

//Deleta um usuário
router.delete('/:id', (req, res, next) => {
  let id = req.params.id

  if(id == undefined || id == ''){
    return res.status(400).json({msg: "Dados inválidos."})
  }

  let indexUsers = users.findIndex(user=>user.id === parseInt(id))
  let indexCompanies = companies.findIndex(user=>user.id === parseInt(id))

  if(indexUsers === -1 && indexCompanies === -1){
    return res.status(404).json({msg: "Usuário não encontrado."})
  }

  if(indexUsers != -1){
    try{
      users.splice(indexUsers, 1)
    }
    catch(error){
      console.log(error)
    } 
  }
  if(indexCompanies != -1){
    try{
      companies.splice(indexCompanies, 1)
    }
    catch(error){
      console.log(error)
    } 
  }

  return res.status(200).json({status: "Usuário deletado com sucesso."})
})

//Atualiza um usuário
router.put('/:id', (req, res, next) => {
  let { name, email, cpf, cnpj, password} = req.body
  let id = req.params.id

  if((name == undefined || name == '') && (email == undefined || email == '')
  && (cpf == undefined || cpf == '') && (cnpj == undefined || cnpj == '')
  && (password == undefined || password == '')){
    return res.status(400).json({msg: "Dados inválidos."})
  }

  let indexUsers = users.findIndex(user=>user.id === parseInt(id))
  let indexCompanies = companies.findIndex(user=>user.id === parseInt(id))

  if(indexUsers === -1 && indexCompanies === -1){
    return res.status(404).json({msg: "Usuário não encontrado."})
  }

  if(indexUsers != -1){
    try{
      let user = users.find(user=>user.id === parseInt(id))

      if(name.length > 0 && name !== undefined) user.name = name
      else user.name = user.name

      if(email.length > 0 && email !== undefined) user.email = email
      else user.email = user.email

      if(cpf.length > 0 && cpf !== undefined) user.cpf = cpf
      else user.cpf = user.cpf

      if(password.length > 0 && password !== undefined) user.password = password
      else user.password = user.password

      console.log(user)
    }
    catch(error){
      console.log(error)
    } 
  }
  if(indexCompanies != -1){
    try{
      let company = companies.find(user=>user.id === parseInt(id))
      
      if(name.length > 0 && name !== undefined)company.name = name
      else company.name = company.name

      if(email.length > 0 && email !== undefined)company.email = email
      else company.email = company.email

      if(cnpj.length > 0 && cnpj !== undefined) company.cnpj = cnpj
      else company.cnpj = company.cnpj

      if(password.length > 0 && password !== undefined) company.password = password
      else company.password = company.password

      console.log(company)
    }
    catch(error){
      console.log(error)
    } 
  }

  return res.status(200).json({status: "Usuário atualizado com sucesso"})
})

module.exports = router;