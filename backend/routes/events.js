const router = require('express').Router();
const { verifyEventData } = require('../utils/verifyDataEvent');
const Slugify = require('slugify');
const Event = require('../models/events');
const {verifyUser, userCompany} = require('../middlewares/authenticate');
const jwt = require("jsonwebtoken")
const User = require('../models/user');
const {secret} = require('../config')
const multer = require('multer')
const multerConfig = require('../middlewares/multer')

/* GET all events. */
router.get('/', async (req, res) => {
  let event = await Event.find().populate('company').sort([['created_at', 'descending']]);
  if (event.length === 0) {
    return res.status(404).json({ msg: 'Nenhum evento encontrado.' });
  }

  return res.status(200).json({ events: event });
});

router.get('/:slug', async (req, res) => {
  const slug = req.params.slug;

  if (slug == '' || slug == undefined) {
    return res.status(400).json({ msg: 'Dados inválidos.' });
  }
  let event = await Event.findOne({ slug }).populate('company');

  if (event == undefined) {
    return res.status(404).json({ msg: 'Nenhum evento encontrado.' });
  }

  return res.status(200).json({ event });
});

router.post('/', verifyUser, userCompany,multer(multerConfig).single('file') ,async (req, res) => {
  const { name, type, company, num_tickets, date, price, description } = req.body;
  const filename = req.file.filename;
  console.log(req.file)

  const validation = verifyEventData(
    name,
    type,
    company,
    num_tickets,
    date,
    price,
    description
  );

  if (!validation || filename == undefined) {
    return res.status(400).json({ msg: 'Dado(s) Obrigatório(s) invalido(s).' });
  }

  let token = req.headers.authorization.split(' ')[1];
  let decoded = jwt.verify(token, secret);
  if(decoded.role != 1){
    return res.status(403).json({ msg: 'Ação não permitida.' });
  }
  
  let slug = Slugify(name).toLowerCase();

  const isEventAvalible = await Event.findOne({ slug });
  if (isEventAvalible != undefined) {
    return res.status(401).json({ msg: 'Evento já cadastrado' });
  }

  const event = new Event({
    name,
    slug,
    company: decoded._id,
    type,
    num_tickets,
    date,
    price,
    description,
    address: {
      long: -22.886205000766278,
      lat: -43.28361798050839,
    },
    images: [
      'http://localhost:8080/files/' + filename,
    ],
  });

  await event.save();

  return res.status(200).json({ status: "Evento criado com sucesso!"});
});

router.put('/:slug', verifyUser, userCompany,async (req, res) => {
  const { slug, name, type, num_tickets, date, price, description } = req.body;

  const eventSelected = await Event.findOne({ slug });

  if (!eventSelected) {
    return res.status(404).json({ msg: 'Evento não encontrado' });
  }

  let token = req.headers.authorization.split(' ')[1]
  let decoded = jwt.verify(token, secret)
  
  if(eventSelected.company != decoded._id){
    return res.status(403).json({ msg: 'Ação não permitida' });
  }

  await Event.findByIdAndUpdate(eventSelected.id, {
    name,
    type,
    num_tickets,
    date,
    price,
    description,
  });

  return res.status(200).json({ status: "Evento atualizado com sucesso!" });
});

router.delete('/:slug', verifyUser, userCompany,async (req, res) => {
  const slug = req.params.slug;

  let eventSelected = await Event.findOne({ slug });

  if (!eventSelected) {
    return res.status(404).json({ msg: 'Nenhum evento encontrado.' });
  }

  let token = req.headers.authorization.split(' ')[1]
  let decoded = jwt.verify(token, secret)
  
  if(eventSelected.company != decoded._id){
    return res.status(403).json({ msg: 'Ação não permitida' });
  }

  await Event.findByIdAndDelete(eventSelected.id);

  return res
    .status(200)
    .json({ status: 'Evento deletado com sucesso!'});
});

module.exports = router;
