export const users = [
    {
        id: 1,
        firstName: "Lucas",
        lastName: "Farolfi",
        email: "lucas123@gmail.com",
        cpf: "123.456.789-10",
        password: "123123123",
        role: 2 //Admin
    },
    {
        id: 2,
        name: "CaioFilms",
        email: "caio123@gmail.com",
        cnpj: "35.235.235/2342-34",
        password: "123123123",
        role: 1 //Empresa
    },
    {
        id: 3,
        firstName: "João",
        lastName: "Marcos",
        email: "joao123@gmail.com",
        cpf: "123.456.789-10",
        password: "123123123",
        role: 2 //Admin
    },
    {
        id: 4,
        firstName: "Andrey",
        lastName: "Alves",
        email: "andrey123@gmail.com",
        cpf: "123.456.789-10",
        password: "123123123",
        role: 0 //Cliente
    },
    {
        id: 5,
        name: "FelipeCompany",
        email: "felipe123@gmail.com",
        cnpj: "12.312.312/3123-13",
        password: "123123123",
        role: 1 //Empresa
    },
]

export const getUserBySlug = ((slug) => users.find((user) => user.slug === slug))
