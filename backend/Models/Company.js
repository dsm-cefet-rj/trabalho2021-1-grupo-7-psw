class Company{
    //nesta classe tem tudo relacionado a inserção, remoção e consulta a dados
    constructor(){

    }
    static lista = []

    

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
}
module.exports = new Company()