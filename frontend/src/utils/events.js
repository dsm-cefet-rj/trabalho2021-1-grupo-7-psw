export const events = [
  {
    id: 1,
    name: 'Um lugar silencioso 2',
    slug: "um-lugar-silencioso-2",
    type: 'Cinema',
    descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    empresa: 'Paramount',
    qtd_ingresso: 10,
    price: 150,
    address: {
      long:-22.886205000766278,
      lat:-43.28361798050839,
    },
    imagens: ['https://tracklist.com.br/wp-content/uploads/2021/06/FOTO-54.jpg', 'https://www.hollywoodreporter.com/wp-content/uploads/2021/05/2cb5d5a5-3519-4b23-bf65-c4e31cbb714f-2.png']
  },
  {
    id: 2,
    name: 'Rock in Rio',
    slug: "rock-in-rio",
    type: 'Show',
    descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    empresa: 'Rock in Rio',
    qtd_ingresso: 1,
    price: 600,
    address: {
      long:-22.978110205365084,
      lat:-43.39416502708061,
    },
    imagens: ['https://tracklist.com.br/wp-content/uploads/2021/08/rock-in-rio.png']
  },
  {
    id: 3,
    name: 'Loki',
    slug: "loki",
    type: 'Cinema',
    descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    empresa: 'Marvel',
    qtd_ingresso: 13,
    price: 150,
    address: {
      long:-22.85005165732935,
      lat:-43.31048008105505,
    },
    imagens: ['https://img.olhardigital.com.br/wp-content/uploads/2021/05/Loki-1.jpg']
  },
  {
    id: 4,
    name: 'CBLOL',
    slug: "cblol",
    type: 'Evento',
    descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    empresa: 'CBLOL',
    qtd_ingresso: 2,
    price: 500,
    address: {
      long:-22.912328949859138,
      lat:-43.22496622098693,
    },
    imagens: ['https://imagens.ebc.com.br/sy2XzPi9f9XV9zkKyZDZyBb_FD8=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/imagem_rio.jpg?itok=ikxPLMpd']
  },
  {
    id: 5,
    name: 'Velozes e Furiosos 9',
    slug: "velozes-e-furiosos-9",
    type: 'Filme',
    descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    empresa: 'Universal',
    qtd_ingresso: 20,
    price: 25,
    address: {
      long:-22.886205000766278,
      lat:-43.28361798050839,
    },
    imagens: ['https://cdn.ome.lt/o4KVf1xxVkdCbqavTCQW-KWURJI=/1200x630/smart/extras/conteudos/Velozes_e_Furiosos_9_poster.jpg']
  },
  {
    id: 6,
    name: 'Major CSGO',
    slug: "major-csgo",
    type: 'Evento',
    descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    empresa: 'CSGO',
    qtd_ingresso: 3,
    price: 1000,
    address: {
      long:-22.99755449306113,
      lat:-43.36012305318558,
    },
    imagens: ['https://s2.glbimg.com/-OxBJy8ZDlVopt1Jvh6Y8RRTJO0=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2019/2/J/WlQvthQO2EQtu5oIPYNQ/dciyy7wxoaebwnl.jpg']
  }, {
    id: 7,
    name: 'Teste',
    slug: "teste",
    type: 'Evento',
    descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    empresa: 'CSGO',
    qtd_ingresso: 3,
    price: 200,
    address: {
      long:-22.886205000766278,
      lat:-43.28361798050839,
    },
    imagens: ['https://cdn.ome.lt/o4KVf1xxVkdCbqavTCQW-KWURJI=/1200x630/smart/extras/conteudos/Velozes_e_Furiosos_9_poster.jpg']
  }
]

export const getEventById = ((id) => events.find((event) => event.id === id))

export const getEventBySlug = ((slug) => events.find((event) => event.slug === slug))