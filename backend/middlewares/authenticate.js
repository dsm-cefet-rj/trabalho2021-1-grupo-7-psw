const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/user')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const jwt = require('jsonwebtoken')
const config = require('../config')

passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = config.secret

exports.getToken = user =>{
    return jwt.sign(user, config.secret, {expiresIn: "1h"})
}

exports.jwtPassport = passport.use(new JwtStrategy(opts, (jwt_payload, done) =>{
    //console.log("JWT Payload", jwt_payload)
    User.findOne({_id: jwt_payload._id}, (err, user)=>{
        if(err){
            return done(err,false)
        }
        if(user){
            return done(null, true)
        } 
        else{
            return done(null, true)
        }
    })
}))

exports.userClient = async (req, res, next) =>{
    const authToken = req.headers['authorization']

    if(authToken != undefined){
        const bearer = authToken.split(' ')
        const token = bearer[1]
        try{
            let decoded = jwt.verify(token, config.secret)
            let user = await User.findById({_id: decoded._id})

            if(user.role === 0){
                next()
            }
            else{
                return res.status(401).json({msg: "Usuário não permitido"})
            }
        }catch(e){
            return res.status(401).json({msg: "Usuário não autenticado"})
        }
    }
    else{
        return res.status(401).json({msg: "Usuário não autenticado"})
    }
}

exports.userCompany = async (req, res, next) =>{
    const authToken = req.headers['authorization']

    if(authToken != undefined){
        const bearer = authToken.split(' ')
        const token = bearer[1]
        try{
            let decoded = jwt.verify(token, config.secret)
            let user = await User.findById({_id: decoded._id})

            if(user.role === 1){
                next()
            }
            else{
                return res.status(401).json({msg: "Usuário não permitido"})
            }
        }catch(e){
            return res.status(401).json({msg: "Usuário não autenticado"})
        }
    }
    else{
        return res.status(401).json({msg: "Usuário não autenticado"})
    }
}

exports.userAdmin = async (req, res, next) =>{
    const authToken = req.headers['authorization']

    if(authToken != undefined){
        const bearer = authToken.split(' ')
        const token = bearer[1]
        try{
            let decoded = jwt.verify(token, config.secret)
            let user = await User.findById({_id: decoded._id})

            if(user.role === 2){
                next()
            }
            else{
                return res.status(401).json({msg: "Usuário não permitido"})
            }
        }catch(e){
            return res.status(401).json({msg: "Usuário não autenticado"})
        }
    }
    else{
        return res.status(401).json({msg: "Usuário não autenticado"})
    }
}

exports.verifyUser = passport.authenticate('jwt', {session: false})