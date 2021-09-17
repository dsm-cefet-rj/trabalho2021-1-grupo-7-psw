module.exports = {
    body(name,email,cnpj,password){
        if(!name || name == '') return false
        if(!email || email == '') return false
        if((!cnpj || cnpj == '')) return false
        if(!password || password == '') return false
        return true
    },

    id(id){
        if(!id || id == '' || id.length != 24)return false
        else return true
    }
}