const User = require('./models/user')
const Company = require('./models/company')
const Event = require('./models/events')
const Favorite = require('./models/favorite')
const Buy = require('./models/buy')

const user = [
  {
      name: "LucasHub" ,
      email: "lucashub@email.com",
      cnpj: "12.123.123/1234-12",
      password: "123123123",
      role: 0
  },
  {
      name: "JoaoHub" ,
      email: "joaohub@email.com",
      cnpj: "12.123.123/1234-12",
      password: "123123123",
      role: 0
  },
  {
      name: "FelipeHub" ,
      email: "felipehub@email.com",
      cnpj: "12.123.123/1234-12",
      password: "123123123",
      role: 0
  },
  {
      name: "CaioHub" ,
      email: "caiohub@email.com",
      cnpj: "12.123.123/1234-12",
      password: "123123123",
      role: 0
  },
  {
      name: "AndreyHub" ,
      email: "andreyhub@email.com",
      cnpj: "12.123.123/1234-12",
      password: "123123123",
      role: 0
  }
]

const company = [
  {
      name: "LucasHub" ,
      email: "lucashub@email.com",
      cnpj: "12.123.123/1234-12",
      password: "123123123",
      role: 0
  },
  {
      name: "JoaoHub" ,
      email: "joaohub@email.com",
      cnpj: "12.123.123/1234-12",
      password: "123123123",
      role: 0
  },
  {
      name: "FelipeHub" ,
      email: "felipehub@email.com",
      cnpj: "12.123.123/1234-12",
      password: "123123123",
      role: 0
  },
  {
      name: "CaioHub" ,
      email: "caiohub@email.com",
      cnpj: "12.123.123/1234-12",
      password: "123123123",
      role: 0
  },
  {
      name: "AndreyHub" ,
      email: "andreyhub@email.com",
      cnpj: "12.123.123/1234-12",
      password: "123123123",
      role: 0
  }
]

const seeder = async () =>{
    try{
        //Deleta dados já existentes
        await User.deleteMany()
        await Company.deleteMany()
        await Event.deleteMany()
        await Favorite.deleteMany()
        await Buy.deleteMany()

        //Cria novos dados na tabela
        await User.create(user)
        await Company.create(company)
        let companies = await Company.find()
        await Event.create([
          {
            name: "Um lugar silencioso 2",
            slug: "um-lugar-silencioso-2",
            type: "Cinema",
            company: companies[0]._id,
            num_tickets: 100,
            date: "2022-05-20",
            price: 150.00,
            description: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
            address: {
              long: -22.886205000766278,
              lat: -43.28361798050839,
            },
            images:'https://tracklist.com.br/wp-content/uploads/2021/06/FOTO-54.jpg',
          },
          {
            name: "Rock in Rio",
            slug: "rock-in-rio",
            type: "Show",
            company:  companies[0]._id,
            num_tickets: 100,
            date: "2022-05-20",
            price: 150.00,
            description: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
            address: {
              long: -22.886205000766278,
              lat: -43.28361798050839,
            },
            images:'https://tracklist.com.br/wp-content/uploads/2021/08/rock-in-rio.png',
          },
          {
            name: "Loki",
            slug: "loki",
            type: "Cinema",
            company:  companies[1]._id,
            num_tickets: 100,
            date: "2022-05-20",
            price: 150.00,
            description: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
            address: {
              long: -22.886205000766278,
              lat: -43.28361798050839,
            },
            images:'https://img.olhardigital.com.br/wp-content/uploads/2021/05/Loki-1.jpg',
          },{
            name: "CBLOL",
            slug: "cblol",
            type: "E-Sports",
            company:  companies[1]._id,
            num_tickets: 100,
            date: "2022-05-20",
            price: 150.00,
            description: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
            address: {
              long: -22.886205000766278,
              lat: -43.28361798050839,
            },
            images:'https://imagens.ebc.com.br/sy2XzPi9f9XV9zkKyZDZyBb_FD8=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/imagem_rio.jpg?itok=ikxPLMpd',
          },
          ,{
            name: "Velozes e Furiosos 9",
            slug: "velozes-e-furiosos-9",
            type: "Filme",
            company:  companies[2]._id,
            num_tickets: 50,
            date: "2022-05-20",
            price: 30.00,
            description: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
            address: {
              long: -22.886205000766278,
              lat: -43.28361798050839,
            },
            images:'https://cdn.ome.lt/o4KVf1xxVkdCbqavTCQW-KWURJI=/1200x630/smart/extras/conteudos/Velozes_e_Furiosos_9_poster.jpg',
          },
          ,{
            name: "Major CSGO",
            slug: "major-csgo",
            type: "E-Sports",
            company:  companies[2]._id,
            num_tickets: 100,
            date: "2022-05-20",
            price: 150.00,
            description: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
            address: {
              long: -22.886205000766278,
              lat: -43.28361798050839,
            },
            images:'https://tracklist.com.br/wp-content/uploads/2021/08/rock-in-rio.png',
          },
          ,{
            name: "BGS São Paulo",
            slug: "bgs-sao-paulo",
            type: "Games",
            company:  companies[2]._id,
            num_tickets: 100,
            date: "2022-05-20",
            price: 50.00,
            description: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
            address: {
              long: -22.886205000766278,
              lat: -43.28361798050839,
            },
            images:'https://dropsdejogos.uai.com.br/wp-content/uploads/sites/10/2019/09/bgs-1280x720.jpg',
          },
        ])
        let users = await User.find()
        let events = await Event.find()
        await Favorite.create([
          {
            user: users[0].id,
            event: events[0].id
          },
          {
            user: users[0].id,
            event: events[1].id
          },
          {
            user: users[1].id,
            event: events[2].id
          },
          {
            user: users[0].id,
            event: events[3].id
          },
        ])
        await Buy.create([
          {
            userId: users[0].id,
            eventId: events[0].id
          },
          {
            userId: users[0].id,
            eventId: events[1].id
          },
          {
            userId: users[1].id,
            eventId: events[2].id
          },
          {
            userId: users[0].id,
            eventId: events[3].id
          },
        ])

        console.log("Seeds criadas")
    }catch(e){
        console.log("Erro ao criar as seeds"+ "\n" + e)
    }
}

module.exports = seeder