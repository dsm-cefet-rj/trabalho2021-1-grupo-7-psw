const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/user')
const Company = require('../models/company')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const jwt = require('jsonwebtoken')
const config = require('../config')

passport.use(new LocalStrategy(User.authenticate()))
//passport.use(new LocalStrategy(Company.authenticate()))
passport.serializeUser(User.serializeUser())
//passport.serializeUser(Company.serializeUser())
passport.deserializeUser(User.deserializeUser())
//passport.deserializeUser(Company.deserializeUser())

let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = config.secret

exports.getToken = user =>{
    return jwt.sign(user, config.secret, {expiresIn: 3600})
}

exports.jwtPassport = passport.use(new JwtStrategy(opts, (jwt_payload, done) =>{
    console.log("JWT Payload", jwt_payload)
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

exports.verifyUser = passport.authenticate('jwt', {session: false})