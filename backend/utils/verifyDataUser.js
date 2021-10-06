module.exports = {
    login(email,password){
        if(!email || email == '') return false
        if(!password || password == '') return false
        return true
    },
    
    user(name,email,document,password){
        if(!name || name == '') return false
        if(!email || email == '') return false
        if((!document || document == '') || (document.length != 14 && document.length != 18)) return false
        if(!password || password == '') return false
        return true
    },

    id(id){
        if(!id || id == '' || id.length != 24)return false
        else return true
    }
}