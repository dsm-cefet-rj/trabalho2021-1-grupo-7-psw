const router = require('express').Router();
const verifyUser = require('../utils/verifyDataUser');
const User = require('../models/user');
const Company = require('../models/company');
const Favorite = require('../models/favorite');
const Event = require('../models/events');
const bcrypt = require('bcrypt');
const verifyDataUser = require('../utils/verifyDataUser');

//Pega todos os usuários
router.get('/', async (req, res, next) => {
  try {
    let users = await User.find({});
    res.status(200).json(users);
  } catch (e) {
    res.status(500).json({ msg: 'Erro interno' });
  }
});

//Pegar um usuário
router.get('/:id', async (req, res, next) => {
  let id = req.params.id;

  if (!verifyUser.id(id)) {
    return res.status(400).json({ msg: 'Dados inválidos' });
  }

  let userFound = await User.findById(id).exec();

  if (userFound == undefined) {
    return res.status(404).json({ msg: 'Usuário não encontrado' });
  }

  return res.status(200).json(userFound);
});

//Cadastra um usuário
router.post('/', async (req, res, next) => {
  try {
    let { name, email, cpf, password } = req.body;

    let verifyData = verifyUser.user(name, email, cpf, password);
    if (!verifyData) {
      return res.status(400).json({ msg: 'Dados inválidos.' });
    }

    let userFound = await User.findOne({ email: email });
    let companyFound = await Company.findOne({ email: email });

    if (userFound != undefined || companyFound != undefined) {
      return res.status(401).json({ msg: 'E-mail já cadastrado.' });
    }

    let user = new User({ name, email, cpf, password, role: 0 });
    await user.save();

    return res.status(200).json({ status: 'Usuário criado com sucesso!' });
  } catch (e) {
    res.status(500).json({ msg: 'Erro interno' });
  }
});

//Deleta um usuário
router.delete('/:id', async (req, res, next) => {
  try {
    let id = req.params.id;

    if (!verifyUser.id(id)) {
      return res.status(400).json({ msg: 'Dados inválidos.' });
    }

    let userExists = await User.findById(id).exec();
    if (userExists == undefined) {
      return res.status(404).json({ msg: 'Usuário não encontrado.' });
    }

    await User.findByIdAndDelete(id);
    return res.status(200).json({ status: 'Usuário deletado com sucesso.' });
  } catch (e) {
    res.status(500).json({ msg: 'Erro interno' });
  }
});

//Atualiza um usuário
router.put('/:id', async (req, res, next) => {
  try {
    let { name, email, cpf, password } = req.body;
    let id = req.params.id;

    if (!verifyUser.user(name, email, cpf, password) || !verifyUser.id(id)) {
      return res.status(400).json({ msg: 'Dados inválidos.' });
    }

    let userExists = await User.findById(id).exec();
    if (userExists == undefined) {
      return res.status(404).json({ msg: 'Usuário não encontrado.' });
    }

    let userFound = await User.findOne({ email: email });
    let companyFound = await Company.findOne({ email: email });

    if (
      (userFound && userExists.email != userFound.email) ||
      companyFound != undefined
    ) {
      return res.status(406).json({ msg: 'E-mail já cadastrado.' });
    }

    await User.findByIdAndUpdate(id, { name, email, cpf, password });
    return res.status(200).json({ status: 'Usuário atualizado com sucesso' });
  } catch (e) {
    res.status(500).json({ msg: 'Erro interno' });
  }
});

//Login do usuário
router.post('/login', async (req, res, next) => {
  try {
    let { email, password } = req.body;

    if (!verifyUser.login(email, password)) {
      return res.status(400).json({ msg: 'Dados inválidos.' });
    }

    let userFound = await User.findOne({ email: email });
    let companyFound = await Company.findOne({ email: email });

    if (!userFound && !companyFound) {
      return res
        .status(404)
        .json({ msg: 'Usuário não encontrado ou não existe.' });
    }

    if (
      (companyFound && companyFound.password != password) ||
      (userFound && userFound.password != password)
    ) {
      return res.status(404).json({ msg: 'Senha incorreta.' });
    }

    if (userFound) {
      res.status(200).json({ user: { ...userFound._doc } });
    } else if (companyFound) {
      console.log(companyFound);
      res.status(200).json({ user: { ...companyFound._doc } });
    }
  } catch (e) {
    res.status(500).json({ msg: 'Erro interno.' });
  }
});

//Pega todos os favoritos do banco
router.get('/favoritos/favoritos', async (req, res) => {
  let favorites = await Favorite.find({});
  if (favorites.length === 0) {
    return res
      .status(200)
      .json({ msg: 'Nenhum favorito registrado.' })
      .populate(['user', 'event']);
  }
  res.json(favorites);
});

//Pega os favoritos do usuário
router.get('/:id/favoritos', async (req, res, next) => {
  let id = req.params.id;

  if (!verifyDataUser.id(id)) {
    return res.status(400).json({ msg: 'Dados inválidos.' });
  }

  let userFound = await User.findOne({ _id: id });
  if (userFound == undefined) {
    return res.status(404).json({ msg: 'Usuário não encontrado.' });
  }

  let getFavorites = await Favorite.find({ user: id }).populate([
    'user',
    'event',
  ]);
  if (getFavorites.length === 0) {
    return res.status(200).json({ msg: 'Nenhum favorito registrado.' });
  }
  res.status(200).json(getFavorites);
});

//Adiciona favorito
router.post('/:user_id/favoritos/:event_id', async (req, res, next) => {
  let { user_id, event_id } = req.params;

  if (!verifyDataUser.id(user_id) || !verifyDataUser.id(event_id)) {
    return res.status(400).json({ msg: 'Dados inválidos.' });
  }

  let userFound = await User.findOne({ _id: user_id });
  if (userFound == undefined) {
    return res.status(404).json({ msg: 'Usuário não encontrado.' });
  }

  let eventFound = await Event.findOne({ _id: event_id });
  if (eventFound == undefined) {
    return res.status(404).json({ msg: 'Evento não encontrado.' });
  }

  let favorite = new Favorite({
    user: user_id,
    event: event_id,
  });

  favorite.save();
  res.status(200).json({ status: 'Favorito adicionado com sucesso.' });
});

//Deleta favorito
router.delete('/:user_id/favoritos/:favorite_id', async (req, res, next) => {
  let { user_id, favorite_id } = req.params;

  if (!verifyDataUser.id(user_id) || !verifyDataUser.id(favorite_id)) {
    return res.status(400).json({ msg: 'Dados inválidos.' });
  }

  let userFound = await User.findOne({ _id: user_id });
  if (userFound == undefined) {
    return res.status(404).json({ msg: 'Usuário não encontrado.' });
  }

  let favoriteFound = await Favorite.findOne({ _id: favorite_id });
  if (favoriteFound == undefined) {
    return res.status(404).json({ msg: 'Favorito não encontrado.' });
  }

  await Favorite.findByIdAndDelete(favorite_id);
  return res.status(200).json({ status: 'Favorito deletado com sucesso.' });
});

module.exports = router;
