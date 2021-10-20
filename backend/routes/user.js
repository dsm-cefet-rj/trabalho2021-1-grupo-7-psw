const router = require('express').Router();
const verifyUser = require('../utils/verifyDataUser');
const User = require('../models/user');
const Favorite = require('../models/favorite');
const Event = require('../models/events');
const verifyDataUser = require('../utils/verifyDataUser');
const auth = require('../middlewares/authenticate');
const passport = require('passport');
const userType = require('../utils/enumTypeUser');
const jwt = require('jsonwebtoken');
const config = require('../config');

//Pega todos os usuários
router.get('/', auth.verifyUser, auth.userAdmin, async (req, res, next) => {
  try {
    let users = await User.find({}).sort([['created_at', 'descending']]);
    res.status(200).json(users);
  } catch (e) {
    res.status(500).json({ msg: 'Erro interno' });
  }
});

//Pegar um usuário
router.get('/:id', auth.verifyUser, auth.userAdmin, async (req, res, next) => {
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
    
    let { name, email, document, password } = req.body;
    let verifyData = verifyUser.user(name, email, document, password);
    if (!verifyData) {
      return res.status(400).json({ msg: 'Dados inválidos.' });
    }

    let user_role;
    if (document.length == 14) user_role = 0;
    else user_role = 1;

    let userFound = await User.findOne({ email: email });
    if (userFound != null) {
      return res.status(401).json({ msg: 'E-mail já cadastrado.' });
    }

    User.register(
      new User({ name, email, document, role: user_role, username: email }),
      password,
      (err, user) => {
        if (err) {
          res.status(500).json({ msg: 'Erro ao criar usuário' });
        } else {
          return res
            .status(200)
            .json({ msg: 'Usuário cadastrado com sucesso' });
        }
      }
    );
  } catch (e) { console.log(e)
    res.status(500).json({ msg: 'Erro interno' });
  }
});

//Login do usuário
router.post(
  '/login',
  passport.authenticate('local'),
  async (req, res, next) => {
    let token = auth.getToken({ _id: req.user._id, name: req.user.name, email: req.user.email, role: req.user.role});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
      success: true,
      token: token,
      status: 'Login feito com sucesso!',
      user: {
        name: req.user.name,
        email: req.user.email,
        role: req.user.role,
        id: req.user._id,
        document: req.user.document,
      },
    });
  }
);

//Deleta um usuário
router.delete(
  '/:id',
  auth.verifyUser,
  auth.userAdmin,
  async (req, res, next) => {
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
  }
);

//Atualiza um usuário
router.put('/:id', auth.verifyUser, auth.userAdmin, async (req, res, next) => {
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

    if (userFound != null) {
      return res.status(406).json({ msg: 'E-mail já cadastrado.' });
    }

    await User.findByIdAndUpdate(id, { name, email, cpf, password });
    return res.status(200).json({ status: 'Usuário atualizado com sucesso' });
  } catch (e) {
    res.status(500).json({ msg: 'Erro interno' });
  }
});

//Pega os favoritos do usuário
router.get(
  '/:id/favoritos',
  auth.verifyUser,
  auth.userClient,
  async (req, res, next) => {
    let id = req.params.id;

    if (!verifyDataUser.id(id)) {
      return res.status(400).json({ msg: 'Dados inválidos.' });
    }

    let userFound = await User.findOne({ _id: id });
    if (userFound == undefined) {
      return res.status(404).json({ msg: 'Usuário não encontrado.' });
    }

    let token = req.headers.authorization.split(' ')[1];
    let decoded = jwt.verify(token, config.secret);

    if (userFound._id != decoded._id) {
      return res
        .status(403)
        .json({ msg: 'Usuário não permitido para esta ação' });
    }

    let getFavorites = await Favorite.find({ user: id }).populate('event')
    .sort([['created_at', 'descending']]);
    if (getFavorites.length === 0) {
      return res.status(200).json({ msg: 'Nenhum favorito registrado.' });
    }
    res.status(200).json(getFavorites);
  }
);

//Verifica se um evento é Favorito de um usuário
router.get('/:user_id/favoritos/:event_id',
auth.verifyUser, auth.userClient, async (req, res, next) => {
    let { user_id, event_id } = req.params;

    if (!verifyDataUser.id(user_id) || !verifyDataUser.id(event_id)) {
      return res.status(400).json({ msg: 'Dados inválidos.' });
    }

    let userFound = await User.findOne({ _id: user_id });
    if (userFound == undefined) {
      return res.status(404).json({ msg: 'Usuário não encontrado.' });
    }

    let token = req.headers.authorization.split(' ')[1];
    let decoded = jwt.verify(token, config.secret);

    if (userFound._id != decoded._id) {
      return res
        .status(403)
        .json({ msg: 'Usuário não permitido para esta ação' });
    }

    let eventFound = await Event.findOne({ _id: event_id });
    if (eventFound == undefined) {
      return res.status(404).json({ msg: 'Favorito não encontrado.' });
    }

    let favoriteFound = await Favorite.findOne({ event: event_id });
    if (favoriteFound == null) {
      return res.status(404).json({ msg: 'Favorito não existe' });
    }

    res.status(200).json({ favorite: favoriteFound });
  }
);

//Adiciona favorito
router.post(
  '/:user_id/favoritos/:event_id',
  auth.verifyUser,
  auth.userClient,
  async (req, res, next) => {
    let { user_id, event_id } = req.params;

    if (!verifyDataUser.id(user_id) || !verifyDataUser.id(event_id)) {
      return res.status(400).json({ msg: 'Dados inválidos.' });
    }

    let userFound = await User.findOne({ _id: user_id });
    if (userFound == undefined) {
      return res.status(404).json({ msg: 'Usuário não encontrado.' });
    }

    let token = req.headers.authorization.split(' ')[1];
    let decoded = jwt.verify(token, config.secret);

    if (userFound._id != decoded._id) {
      return res
        .status(403)
        .json({ msg: 'Usuário não permitido para esta ação' });
    }

    let eventFound = await Event.findOne({ _id: event_id });
    if (eventFound == undefined) {
      return res.status(404).json({ msg: 'Evento não encontrado.' });
    }

    let favoriteFound = await Favorite.findOne({ event: event_id });
    if (favoriteFound != null) {
      return res.status(406).json({ msg: 'Favorito já existe.' });
    }

    let favorite = new Favorite({
      user: user_id,
      event: event_id,
    });

    favorite.save();
    res.status(200).json({ status: 'Favorito adicionado com sucesso.' });
  }
);

//Deleta favorito
router.delete(
  '/:user_id/favoritos/:favorite_id',
  auth.verifyUser,
  auth.userClient,
  async (req, res, next) => {
    let { user_id, favorite_id } = req.params;

    if (!verifyDataUser.id(user_id) || !verifyDataUser.id(favorite_id)) {
      return res.status(400).json({ msg: 'Dados inválidos.' });
    }

    let userFound = await User.findOne({ _id: user_id });
    if (userFound == undefined) {
      return res.status(404).json({ msg: 'Usuário não encontrado.' });
    }

    let token = req.headers.authorization.split(' ')[1];
    let decoded = jwt.verify(token, config.secret);

    if (userFound._id != decoded._id) {
      return res
        .status(403)
        .json({ msg: 'Usuário não permitido para esta ação' });
    }

    let favoriteFound = await Favorite.findOne({ _id: favorite_id });
    if (favoriteFound == undefined) {
      return res.status(404).json({ msg: 'Favorito não encontrado.' });
    }

    await Favorite.findByIdAndDelete(favorite_id);
    return res.status(200).json({ status: 'Favorito deletado com sucesso.' });
  }
);

module.exports = router;
