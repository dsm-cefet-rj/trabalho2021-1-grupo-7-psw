export const events = [
  {
    id: 1,
    name: 'Um lugar silencioso 2',
    slug: "um-lugar-silencioso-2",
    type: 'Cinema',
    descricao: 'lorem',
    empresa: 'Paramount',
    qtd_ingresso: 10,
    imagens: ['https://tracklist.com.br/wp-content/uploads/2021/06/FOTO-54.jpg', 'https://www.hollywoodreporter.com/wp-content/uploads/2021/05/2cb5d5a5-3519-4b23-bf65-c4e31cbb714f-2.png']
  },
  {
    id: 2,
    name: 'Rock in Rio',
    slug: "rock-in-rio",
    type: 'Show',
    descricao: 'lorem',
    empresa: 'Rock in Rio',
    qtd_ingresso: 1,
    imagens: ['https://tracklist.com.br/wp-content/uploads/2021/08/rock-in-rio.png']
  },
  {
    id: 3,
    name: 'Loki',
    slug: "loki",
    type: 'Cinema',
    descricao: 'lorem',
    empresa: 'Marvel',
    qtd_ingresso: 13,
    imagens: ['https://img.olhardigital.com.br/wp-content/uploads/2021/05/Loki-1.jpg']
  },
  {
    id: 4,
    name: 'CBLOL',
    slug: "cblol",
    type: 'Evento',
    descricao: 'lorem',
    empresa: 'CBLOL',
    qtd_ingresso: 2,
    imagens: ['https://imagens.ebc.com.br/sy2XzPi9f9XV9zkKyZDZyBb_FD8=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/imagem_rio.jpg?itok=ikxPLMpd']
  },
  {
    id: 5,
    name: 'Velozes e Furiosos 9',
    slug: "velozes-e-furiosos-9",
    type: 'Filme',
    descricao: 'lorem',
    empresa: 'Universal',
    qtd_ingresso: 20,
    imagens: ['https://cdn.ome.lt/o4KVf1xxVkdCbqavTCQW-KWURJI=/1200x630/smart/extras/conteudos/Velozes_e_Furiosos_9_poster.jpg']
  },
  {
    id: 6,
    name: 'Major CSGO',
    slug: "major-csgo",
    type: 'Evento',
    descricao: 'lorem',
    empresa: 'CSGO',
    qtd_ingresso: 3,
    imagens: ['https://s2.glbimg.com/RcC7UETKZDZVV_o84Bo4LsKLpD4=/0x0:2048x1365/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2020/8/U/DBrBCdTtCYV7srdTUKZw/palco-major-berlin.jpg']
  }, {
    id: 7,
    name: 'Teste',
    slug: "teste",
    type: 'Evento',
    descricao: 'lorem',
    empresa: 'CSGO',
    qtd_ingresso: 3,
    imagens: ['https://s2.glbimg.com/RcC7UETKZDZVV_o84Bo4LsKLpD4=/0x0:2048x1365/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2020/8/U/DBrBCdTtCYV7srdTUKZw/palco-major-berlin.jpg']
  }
]

export const getEventById = ((id) => events.find((event) => event.id === id))

export const getEventBySlug = ((slug) => events.find((event) => event.slug === slug))