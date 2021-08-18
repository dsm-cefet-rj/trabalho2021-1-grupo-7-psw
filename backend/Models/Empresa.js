class Empresa{
    //nesta classe tem tudo relacionado a inserção, remoção e consulta a dados
    constructor(){

    }
    static lista = []
    create(nome, area){
        const empresa = {nome, area}
        Empresa.lista.push(empresa)
        this.showEmpresas()

    }
    showEmpresas(){
        Empresa.lista.forEach(empresa =>{
            console.log(empresa)
        })
    }
}
module.exports = new Empresa()