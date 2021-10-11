const User = require('./models/user')
const Event = require('./models/events')
const Favorite = require('./models/favorite')
const Buy = require('./models/buy')

const userData = [
    {
        name: "Lucas Farolfi" ,
        email: "lucas123@email.com",
        document: "123.123.123-12",
        password: "123123123",
        role: 2
    },
    {
        name: "Joao Marcos" ,
        email: "joao123@email.com",
        document: "123.123.123-12",
        password: "123123123",
        role: 2
    },
    {
        name: "Felipe Junior" ,
        email: "felipe123@email.com",
        document: "123.123.123-12",
        password: "123123123",
        role: 2
    },
    {
        name: "Caio Abreu" ,
        email: "caio123@email.com",
        document: "123.123.123-12",
        password: "123123123",
        role: 2
    },
    {
        name: "Andrey Alves" ,
        email: "andrey123@email.com",
        document: "123.123.123-12",
        password: "123123123",
        role: 2
    },
    {
        name: "Kinoplex" ,
        email: "linoplex@email.com",
        document: "12.123.123/1234-12",
        password: "123123123",
        role: 1
    },
    {
        name: "Sony" ,
        email: "sony@email.com",
        document: "12.123.123/1234-12",
        password: "123123123",
        role: 1
    },
    {
        name: "John Doe" ,
        email: "john123@email.com",
        document: "123.123.123-12",
        password: "123123123",
        role: 0
    },
    {
        name: "Pedro Alvares" ,
        email: "pedro123@email.com",
        document: "123.123.123-12",
        password: "123123123",
        role: 0
    }
]

const userSeed = async () =>{
    try{
        //Deleta dados já existentes
        await User.deleteMany()

        userData.forEach(u =>{
            User.register(
                new User({ name:u.name, email:u.email, document:u.document,
                    role: u.role, username: u.email }),
                u.password,(err, user) => {}
            );
        })
        console.log("Usuarios criados")
    }catch(e){
        console.log("Erro ao criar as seeds"+ "\n" + e)
    }
}

const seeders = async () =>{
    try{
        //Deleta dados já existentes
        await Event.deleteMany()
        await Favorite.deleteMany()
        await Buy.deleteMany()

        let users = await User.find({role:0})
        let companies = await User.find({role:1})
        await Event.create([
            {
                name: "E3 2021",
                slug: "e3-2021",
                type: "Games",
                company: companies[1]._id,
                num_tickets: "100",
                date: "2021-12-25",
                price: "199.99",
                description: "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet",
                address: {
                    long: -22.886205000766278,
                    lat: -43.28361798050839,
                },
                images: [
                    'http://localhost:8080/files/e3-2021.jpg',
                ],
            },
            {
                name: "BGS São Paulo",
                slug: "bgs-sao-paulo",
                type: "Games",
                company: companies[1]._id,
                num_tickets: "100",
                date: "2021-12-25",
                price: "199.99",
                description: "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet",
                address: {
                    long: -22.886205000766278,
                    lat: -43.28361798050839,
                },
                images: [
                    'http://localhost:8080/files/bgs-sp.jpg',
                ],
            },
            {
                name: "Velozes e Furiosos 9",
                slug: "velozes-e-furiosos-9",
                type: "Filmes",
                company: companies[0]._id,
                num_tickets: "100",
                date: "2021-12-25",
                price: "39.99",
                description: "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet",
                address: {
                    long: -22.886205000766278,
                    lat: -43.28361798050839,
                },
                images: [
                    'http://localhost:8080/files/Velozes_e_Furiosos_9_poster.jpg',
                ],
            },
            {
                name: "John Wick 4",
                slug: "john-wick-4",
                type: "Filmes",
                company: companies[0]._id,
                num_tickets: "100",
                date: "2021-12-25",
                price: "39.99",
                description: "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet",
                address: {
                    long: -22.886205000766278,
                    lat: -43.28361798050839,
                },
                images: [
                    'http://localhost:8080/files/John-Wick-4.jpg',
                ],
            },
            {
                name: "Maratona Round 6",
                slug: "maratona-round-6",
                type: "Series",
                company: companies[0]._id,
                num_tickets: "100",
                date: "2021-12-25",
                price: "39.99",
                description: "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet",
                address: {
                    long: -22.886205000766278,
                    lat: -43.28361798050839,
                },
                images: [
                    'http://localhost:8080/files/round-6-poster.jpg',
                ],
            },
            {
                name: "Campus Party 2021",
                slug: "campus-party-2021",
                type: "Tecnologia",
                company: companies[1]._id,
                num_tickets: "100",
                date: "2021-12-25",
                price: "79.99",
                description: "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet",
                address: {
                    long: -22.886205000766278,
                    lat: -43.28361798050839,
                },
                images: [
                    'http://localhost:8080/files/campus-party-2021.jpg',
                ],
            },
            {
                name: "CCXP",
                slug: "ccxp",
                type: "Geek",
                company: companies[1]._id,
                num_tickets: "100",
                date: "2021-12-25",
                price: "159.99",
                description: "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet",
                address: {
                    long: -22.886205000766278,
                    lat: -43.28361798050839,
                },
                images: [
                    'http://localhost:8080/files/ccxp-poster.png',
                ],
            },
            {
                name: "Venom 2",
                slug: "venom-2",
                type: "Filmes",
                company: companies[0]._id,
                num_tickets: "100",
                date: "2021-12-25",
                price: "29.99",
                description: "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet",
                address: {
                    long: -22.886205000766278,
                    lat: -43.28361798050839,
                },
                images: [
                    'http://localhost:8080/files/venom-2-poster.jpg',
                ],
            },
        ]);

        let events = await Event.find({})
        await Favorite.create([
            {
                user: users[0]._id,
                event: events[0]._id,
            },
            {
                user: users[0]._id,
                event: events[1]._id,
            },
            {
                user: users[1]._id,
                event: events[3]._id,
            },
            {
                user: users[0]._id,
                event: events[4]._id,
            },
        ])

        await Buy.create([
            {
                company: companies[1]._id,
                user: users[0]._id,
                event: events[0]._id
            },
            {
                company: companies[1]._id,
                user: users[0]._id,
                event: events[1]._id
            },
            {
                company: companies[0]._id,
                user: users[1]._id,
                event: events[3]._id
            },
            {
                company: companies[0]._id,
                user: users[1]._id,
                event: events[4]._id
            },
        ])

        console.log("Seeds criadas")
    }catch(e){
        console.log("Erro ao criar as seeds"+ "\n" + e)
    }
}

module.exports = {userSeed, seeders}