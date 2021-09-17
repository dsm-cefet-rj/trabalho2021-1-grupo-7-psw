const router = require('express').Router(); 
const verifyUser = require('../utils/verifyDataUser')
const User = require('../models/user')
const Company = require('../models/company')
const bcrypt = require('bcrypt');

//Pega todos os usuários
router.get('/', async (req, res, next) => {
  try{
    let users = await User.find({})
    res.status(200).json(users)
  }catch(e){
    res.status(500).json({msg: "Erro interno"})
  }
});

//Pegar um usuário
router.get('/:id', async (req, res, next) => {
  let id = req.params.id

  if(!verifyUser.id(id)){
    return res.status(400).json({msg: "Dados inválidos"})
  }

  let userFound = await User.findById(id).exec()
  
  if(userFound == undefined){
    return res.status(404).json({msg: "Usuário não encontrado"})
  }

  return res.status(200).json(userFound)
})

//Cadastra um usuário
router.post('/', async (req, res, next) =>{
  try{
    let {name,email,cpf,password} = req.body

    let verifyData = verifyUser.user(name, email, cpf, password)
    if(!verifyData){
      return res.status(400).json({msg: "Dados inválidos."})
    }
    
    let userFound = await User.findOne({'email': email})
    let companyFound = await Company.findOne({'email': email})
    
    if(userFound != undefined || companyFound != undefined){
      return res.status(401).json({msg: "E-mail já cadastrado."})
    }

    let user = new User({name,email,cpf,password,role: 0})
    await user.save()

    return res.status(200).json({status: "Usuário criado com sucesso!"})
  }catch(e){
    res.status(500).json({msg: "Erro interno"})
  }
})

//Deleta um usuário
router.delete('/:id', async (req, res, next) => {
  try{
    let id = req.params.id

    if(!verifyUser.id(id)){
      return res.status(400).json({msg: "Dados inválidos."})
    }

    let userExists = await User.findById(id).exec()
    if(userExists == undefined){
      return res.status(404).json({msg: "Usuário não encontrado."})
    }

    await User.findByIdAndDelete(id)
    return res.status(200).json({status: "Usuário deletado com sucesso."})
  }catch(e){
    res.status(500).json({msg: "Erro interno"})
  }
})

//Atualiza um usuário
router.put('/:id', async (req, res, next) => {
  try{
    let { name, email, cpf, password} = req.body
    let id = req.params.id

    if(!verifyUser.user(name,email,cpf,password) || !verifyUser.id(id)){
      return res.status(400).json({msg: "Dados inválidos."})
    }

    let userExists = await User.findById(id).exec()
    if(userExists == undefined){
      return res.status(404).json({msg: "Usuário não encontrado."})
    }

    let userFound = await User.findOne({'email': email})
    let companyFound = await Company.findOne({'email': email})

    if((userFound && userExists.email != userFound.email) || companyFound != undefined){
      return res.status(406).json({msg: "E-mail já cadastrado."})
    }

    await User.findByIdAndUpdate(id, {name,email,cpf, password})
    return res.status(200).json({status: "Usuário atualizado com sucesso"})
  }catch(e){
    res.status(500).json({msg: "Erro interno"})
  }
})

//Login do usuário
router.post('/login', async (req, res, next) =>{
  try{
    let {email, password} = req.body

    if(!verifyUser.login(email,password)){
      return res.status(400).json({msg: "Dados inválidos."})
    }

    let userFound = await User.findOne({'email': email})
    let companyFound = await Company.findOne({'email': email})

    if(!userFound && !companyFound){
      return res.status(404).json({msg: "Usuário não encontrado ou não existe."})
    }

    if((companyFound && companyFound.password != password) ||
    (userFound && userFound.password != password)){
      return res.status(404).json({msg: "Senha incorreta."})
    }

    res.status(200).json({status: "Login feito com sucesso."})
  }catch(e){
    res.status(500).json({msg: "Erro interno."})
  }
})

/*
let favorites = [
  {
    id: 1,
    date: "2021-05-21",
    event_id: 1,
    user_id: 1 //Admin
  },{
    id: 2,
    date: "2021-05-23",
    event_id: 2,
    user_id: 1 //Admin
  },{
    id: 3,
    date: "2021-05-24",
    event_id: 3,
    user_id: 1 //Admin
  },{
    id: 4,
    date: "2021-05-25",
    event_id: 2,
    user_id: 2 //Admin
  },{
    id: 5,
    date: "2021-05-26",
    event_id: 3,
    user_id: 2 //Admin
  },
]

let events = [
    {
        id: 1,
        name: 'Um lugar silencioso 2',
        slug: "um-lugar-silencioso-2",
        type: 'Cinema',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
        enterprise: 'Paramount',
        num_tickets: 10,
        date: "2022-05-20",
        price: 150.00,
        address: {
          long:-22.886205000766278,
          lat:-43.28361798050839,
        },
        images: ['https://tracklist.com.br/wp-content/uploads/2021/06/FOTO-54.jpg', 'https://www.hollywoodreporter.com/wp-content/uploads/2021/05/2cb5d5a5-3519-4b23-bf65-c4e31cbb714f-2.png']
      },
      {
        id: 2,
        name: 'Rock in Rio',
        slug: "rock-in-rio",
        type: 'Show',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
        enterprise: 'Rock in Rio',
        num_tickets: 1,
        date: "2022-10-23",
        price: 600.00,
        address: {
          long:-22.978110205365084,
          lat:-43.39416502708061,
        },
        images: ['https://tracklist.com.br/wp-content/uploads/2021/08/rock-in-rio.png']
      },
      {
        id: 3,
        name: 'Loki',
        slug: "loki",
        type: 'Cinema',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
        enterprise: 'Marvel',
        num_tickets: 13,
        date: "2023-01-11",
        price: 150.00,
        address: {
          long:-22.85005165732935,
          lat:-43.31048008105505,
        },
        images: ['https://img.olhardigital.com.br/wp-content/uploads/2021/05/Loki-1.jpg']
      },
      {
        id: 4,
        name: 'CBLOL',
        slug: "cblol",
        type: 'Evento',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
        enterprise: 'CBLOL',
        num_tickets: 2,
        date: "2021-11-30",
        price: 500.00,
        address: {
          long:-22.912328949859138,
          lat:-43.22496622098693,
        },
        images: ['https://imagens.ebc.com.br/sy2XzPi9f9XV9zkKyZDZyBb_FD8=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/imagem_rio.jpg?itok=ikxPLMpd']
      },
      {
        id: 5,
        name: 'Velozes e Furiosos 9',
        slug: "velozes-e-furiosos-9",
        type: 'Filme',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
        enterprise: 'Universal',
        num_tickets: 20,
        date: "2022-07-04",
        price: 25.00,
        address: {
          long:-22.886205000766278,
          lat:-43.28361798050839,
        },
        images: ['https://cdn.ome.lt/o4KVf1xxVkdCbqavTCQW-KWURJI=/1200x630/smart/extras/conteudos/Velozes_e_Furiosos_9_poster.jpg']
      },
      {
        id: 6,
        name: 'Major CSGO',
        slug: "major-csgo",
        type: 'Evento',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
        enterprise: 'CSGO',
        num_tickets: 3,
        date: "2022-03-03",
        price: 1000.00,
        address: {
          long:-22.99755449306113,
          lat:-43.36012305318558,
        },
        images: ['https://s2.glbimg.com/-OxBJy8ZDlVopt1Jvh6Y8RRTJO0=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2019/2/J/WlQvthQO2EQtu5oIPYNQ/dciyy7wxoaebwnl.jpg']
      }, {
        id: 7,
        name: 'Teste',
        slug: "teste",
        type: 'Evento',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
        enterprise: 'CSGO',
        num_tickets: 3,
        date: "2023-02-20",
        price: 200.00,
        address: {
          long:-22.886205000766278,
          lat:-43.28361798050839,
        },
        images: ['https://cdn.ome.lt/o4KVf1xxVkdCbqavTCQW-KWURJI=/1200x630/smart/extras/conteudos/Velozes_e_Furiosos_9_poster.jpg']
    }
]

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

//Pega os favoritos do usuário
router.get('/:id/favoritos', (req, res, next)=>{
  let id = req.params.id

  if(id == undefined || id == ''){
    return res.status(400).json({msg: "Dados inválidos."})
  }

  let user = users.find(user => user.id === parseInt(id))  
  if(user == undefined){
    return res.status(404).json({msg: "Usuário não encontrado."})
  }

  let getFavorites = favorites.filter(fav => fav.user_id === parseInt(id))
  res.status(200).json(getFavorites)
})

//Adiciona favorito
router.post('/:user_id/favoritos/:event_id', (req, res, next)=>{
  let {user_id, event_id} = req.params

  if(user_id == undefined || user_id == ''){
    return res.status(400).json({msg: "Dados inválidos."})
  }

  let user = users.find(user => user.id === parseInt(user_id))  
  if(user == undefined){
    return res.status(404).json({msg: "Usuário não encontrado."})
  }

  let event = events.find(evt => evt.id === parseInt(event_id))  
  if(event == undefined){
    return res.status(404).json({msg: "Evento não encontrado."})
  }

  try{
    favorites.push(
      {
        id: Date.now(),
        date: new Date(),
        event_id: event.id,
        user_id: user.id
      } 
    )
  }catch(error){
    console.log(error)
  }
  res.status(200).json({status: "Favorito adicionado com sucesso."})
})

//Deleta favorito
router.delete('/:user_id/favoritos/:favorite_id', (req, res,next) =>{
  let {user_id, favorite_id} = req.params

  if((user_id == undefined || user_id == '') || (favorite_id == undefined || favorite_id == '')){
    return res.status(400).json({msg: "Dados inválidos."})
  }

  let getUser = users.find(user => user.id === parseInt(user_id))  
  if(getUser == undefined){
    return res.status(404).json({msg: "Usuário não encontrado."})
  }

  let indexFavorite = favorites.findIndex(fav=>fav.id === parseInt(favorite_id))
  if(indexFavorite === -1){
    return res.status(404).json({msg: "Favorito não encontrado."})
  }

  if(indexFavorite != -1){
    try{
      favorites.splice(indexFavorite, 1)
    }
    catch(error){
      console.log(error)
    } 
  }

  return res.status(200).json({status: "Favorito deletado com sucesso."})
})
*/
module.exports = router;