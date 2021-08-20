class User{
    constructor(){
        this.users = [
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
    }

    async getAll(){
        return this.users
    }

    async findOne(email){
        return this.users.find(user=> user.email == email)
    }

    async create(name,email,cpf,password){
        try{
            this.users.push({
                id: Date.now(),
                name,
                email,
                cpf,
                password,
                role: 2
            })
        }
        catch(error){
            console.log(error)
        }
    }
}

module.exports = new User()