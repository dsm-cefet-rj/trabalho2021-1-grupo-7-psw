const router = require('express').Router(); 

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

//Pega todos os usuários
router.get('/', (req, res, next) => {
  res.status(200).json(users)
});

//Pegar um usuário
router.get('/:id', (req, res, next) => {
  let id = req.params.id

  let userFound = users.find(user=>user.id === parseInt(id))
  console.log(userFound)

  if(userFound == undefined){
    return res.status(404).json({msg: "Usuário não encontrado"})
  }

  return res.status(200).json(userFound)
})

router.post('/', (req, res, next) =>{
  res.json({status: "Usuário cadastrado com sucesso !"})
})

module.exports = router;
