class Company{
    //nesta classe tem tudo relacionado a inserção, remoção e consulta a dados
    constructor(){

    }
    static lista = [{
        name: "olimpo",
        email: "olimpo@gmail.com",
        cnpj: "123.456.789.11",
        password: "12345678",
        role: 3
      }]

    create(name, email, cnpj, password){

        Company.lista.push({
            name, 
            email, 
            cnpj, 
            password, 
            role: 3
        })
        this.showCompanys()
        return Promise.resolve("O cadastro foi realizado com sucesso")
    }
    showCompanys(){
        Company.lista.forEach(empresa =>{
            console.log(empresa)
        })
    }
    async findOne(email){
        const company = Company.lista.find(company => company.email === email)
        return company
    }
}
module.exports = new Company()