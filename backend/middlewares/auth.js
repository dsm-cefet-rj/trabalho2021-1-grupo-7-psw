module.exports = auth = (req, res, next) =>{
    console.log(req.user)
    if(!req.user){
        let err = new Error('Você não está autenticado!')
        res.status(403)
        next(err)
    }else{
        next()
    }
}