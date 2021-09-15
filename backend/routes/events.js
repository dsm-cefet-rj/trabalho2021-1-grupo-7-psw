const router = require('express').Router();
const { verifyEventData } = require('../utils/verifyDataEvent');
const Slugify = require('slugify');

const events = [
  {
    id: 1,
    name: 'Um lugar silencioso 2',
    slug: 'um-lugar-silencioso-2',
    type: 'Cinema',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    enterprise: 'Paramount',
    num_tickets: 10,
    date: '2022-05-20',
    price: 150.0,
    address: {
      long: -22.886205000766278,
      lat: -43.28361798050839,
    },
    images: [
      'https://tracklist.com.br/wp-content/uploads/2021/06/FOTO-54.jpg',
      'https://www.hollywoodreporter.com/wp-content/uploads/2021/05/2cb5d5a5-3519-4b23-bf65-c4e31cbb714f-2.png',
    ],
  },
  {
    id: 2,
    name: 'Rock in Rio',
    slug: 'rock-in-rio',
    type: 'Show',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    enterprise: 'Rock in Rio',
    num_tickets: 1,
    date: '2022-10-23',
    price: 600.0,
    address: {
      long: -22.978110205365084,
      lat: -43.39416502708061,
    },
    images: [
      'https://tracklist.com.br/wp-content/uploads/2021/08/rock-in-rio.png',
    ],
  },
  {
    id: 3,
    name: 'Loki',
    slug: 'loki',
    type: 'Cinema',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    enterprise: 'Marvel',
    num_tickets: 13,
    date: '2023-01-11',
    price: 150.0,
    address: {
      long: -22.85005165732935,
      lat: -43.31048008105505,
    },
    images: [
      'https://img.olhardigital.com.br/wp-content/uploads/2021/05/Loki-1.jpg',
    ],
  },
  {
    id: 4,
    name: 'CBLOL',
    slug: 'cblol',
    type: 'Evento',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    enterprise: 'CBLOL',
    num_tickets: 2,
    date: '2021-11-30',
    price: 500.0,
    address: {
      long: -22.912328949859138,
      lat: -43.22496622098693,
    },
    images: [
      'https://imagens.ebc.com.br/sy2XzPi9f9XV9zkKyZDZyBb_FD8=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/imagem_rio.jpg?itok=ikxPLMpd',
    ],
  },
  {
    id: 5,
    name: 'Velozes e Furiosos 9',
    slug: 'velozes-e-furiosos-9',
    type: 'Filme',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    enterprise: 'Universal',
    num_tickets: 20,
    date: '2022-07-04',
    price: 25.0,
    address: {
      long: -22.886205000766278,
      lat: -43.28361798050839,
    },
    images: [
      'https://cdn.ome.lt/o4KVf1xxVkdCbqavTCQW-KWURJI=/1200x630/smart/extras/conteudos/Velozes_e_Furiosos_9_poster.jpg',
    ],
  },
  {
    id: 6,
    name: 'Major CSGO',
    slug: 'major-csgo',
    type: 'Evento',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    enterprise: 'CSGO',
    num_tickets: 3,
    date: '2022-03-03',
    price: 1000.0,
    address: {
      long: -22.99755449306113,
      lat: -43.36012305318558,
    },
    images: [
      'https://s2.glbimg.com/-OxBJy8ZDlVopt1Jvh6Y8RRTJO0=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2019/2/J/WlQvthQO2EQtu5oIPYNQ/dciyy7wxoaebwnl.jpg',
    ],
  },
  {
    id: 7,
    name: 'Teste',
    slug: 'teste',
    type: 'Evento',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    enterprise: 'CSGO',
    num_tickets: 3,
    date: '2023-02-20',
    price: 200.0,
    address: {
      long: -22.886205000766278,
      lat: -43.28361798050839,
    },
    images: [
      'https://cdn.ome.lt/o4KVf1xxVkdCbqavTCQW-KWURJI=/1200x630/smart/extras/conteudos/Velozes_e_Furiosos_9_poster.jpg',
    ],
  },
];

/* GET all events. */
router.get('/', (req, res) => {
  const validateEvents = events.length > 0;

  if (!validateEvents) {
    return res.status(404).json({ msg: 'Nenhum evento encontrado.' });
  }

  return res.status(200).json({ events });
});

router.get('/:slug', (req, res) => {
  const slug = req.params.slug;

  const event = events.find((event) => event.slug === slug);

  if (!event) {
    return res.status(404).json({ msg: 'Evento não localizado.' });
  }

  return res.status(200).json({ event });
});

router.post('/', (req, res) => {
  const { name, type, enterprise, num_tickets, date, price, description } =
    req.body;

  const validation = verifyEventData(
    name,
    type,
    enterprise,
    num_tickets,
    date,
    price,
    description
  );

  if (!validation) {
    return res.status(404).json({ msg: 'Dado(s) Obrigatório(s) ivalido(s).' });
  }

  let slug = Slugify(name).toLowerCase();

  const isEventAvalible = events.some((event) => event.slug === slug);

  if (isEventAvalible) {
    return res.status(401).json({ msg: 'Evento já cadastrado' });
  }

  const newEvent = {
    id: Date.now(),
    name,
    slug,
    type,
    enterprise,
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
  };

  events.push(newEvent);

  return res.status(200).json({ newEvent });
});

router.put('/:slug', (req, res) => {
  const { slug, name, type, num_tickets, date, price, description } = req.body;

  const eventSelected = events.find((event) => event.slug === slug);

  if (!eventSelected) {
    return res.status(404).json({ msg: 'Evento não encontrado' });
  }

  events.forEach((event) => {
    if (event === eventSelected) {
      event.name = name;
      event.type = type;
      event.num_tickets = num_tickets;
      event.date = date;
      event.price = price;
      event.description = description;
    }
  });

  const updatedEvent = events.find((event) => event.slug === slug);

  return res.status(200).json({ updatedEvent });
});

router.delete('/:slug', (req, res) => {
  const slug = req.params.slug;

  const eventSelected = events.find((event) => event.slug === slug);

  if (!eventSelected) {
    return res.status(404).json({ msg: 'Nenhum evento encontrado.' });
  }

  const eventIndex = events.findIndex((event) => event.slug === slug);
  events.splice(eventIndex, 1);

  return res.status(200).json({ status: 'Evento deletado com sucesso!' });
});

module.exports = router;
