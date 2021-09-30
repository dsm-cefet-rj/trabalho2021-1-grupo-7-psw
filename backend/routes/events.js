const router = require('express').Router();
const { verifyEventData } = require('../utils/verifyDataEvent');
const Slugify = require('slugify');
const Event = require('../models/events');
const auth = require('../middlewares/authenticate').verifyUser;

/* GET all events. */
router.get('/', async (req, res) => {
  let event = await Event.find().populate('company');

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

router.post('/', auth,async (req, res) => {
  const { name, type, company, num_tickets, date, price, description } =
    req.body;

  const validation = verifyEventData(
    name,
    type,
    company,
    num_tickets,
    date,
    price,
    description
  );
  console.log(name, type, company, num_tickets, date, price, description);
  if (!validation) {
    return res.status(400).json({ msg: 'Dado(s) Obrigatório(s) invalido(s).' });
  }

  let slug = Slugify(name).toLowerCase();

  const isEventAvalible = await Event.findOne({ slug });

  if (isEventAvalible != undefined) {
    return res.status(401).json({ msg: 'Evento já cadastrado' });
  }

  const event = new Event({
    name,
    slug,
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
      'https://cdn.ome.lt/o4KVf1xxVkdCbqavTCQW-KWURJI=/1200x630/smart/extras/conteudos/Velozes_e_Furiosos_9_poster.jpg',
    ],
  });

  await event.save();

  return res.status(200).json({ event });
});

router.put('/:slug', auth,async (req, res) => {
  const { slug, name, type, num_tickets, date, price, description } = req.body;

  const eventSelected = await Event.findOne({ slug });

  if (!eventSelected) {
    return res.status(404).json({ msg: 'Evento não encontrado' });
  }

  await Event.findByIdAndUpdate(eventSelected.id, {
    name,
    type,
    num_tickets,
    date,
    price,
    description,
  });

  const updatedEvent = await Event.findOne({ slug });

  return res.status(200).json({ updatedEvent });
});

router.delete('/:slug', auth,async (req, res) => {
  const slug = req.params.slug;

  let eventSelected = await Event.findOne({ slug });

  if (!eventSelected) {
    return res.status(404).json({ msg: 'Nenhum evento encontrado.' });
  }

  await Event.findByIdAndDelete(eventSelected.id);

  return res
    .status(200)
    .json({ status: 'Evento deletado com sucesso!', id: eventSelected.id });
});

module.exports = router;
