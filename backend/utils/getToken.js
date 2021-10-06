const jwt = require("jsonwebtoken")
const config = require('../config')

function isUserCompanyOrAdmin(req){
    let token = req.headers.authorization
    let bearerToken = token.split(' ')
    console.log(bearerToken[1])
    let decoded = jwt.verify(bearerToken[1], config.secret)
    let user = await User.findById({_id: decoded._id})

    if(user==undefined)
        return false
    
        return true
}