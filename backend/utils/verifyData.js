
const verifyDataUser = (name,email,cpf,cnpj,password)=>{
    
    if(!name || name == '') return false
    if(!email || email == '') return false
    if((!cpf || cpf == '') && (!cnpj || cnpj == '')) return false
    if(cpf && cnpj) return false
    if(!password || password == '') return false

    return true
}

module.exports = verifyDataUser