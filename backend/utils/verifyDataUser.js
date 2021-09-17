module.exports = {
    login(email,password){
        if(!email || email == '') return false
        if(!password || password == '') return false
        return true
    },
    
    user(name,email,cpf,password){
        if(!name || name == '') return false
        if(!email || email == '') return false
        if((!cpf || cpf == '')) return false
        if(!password || password == '') return false
        return true
    },

    id(id){
        if(!id || id == '' || id.length != 24)return false
        else return true
    }
}