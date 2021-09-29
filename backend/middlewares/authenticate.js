const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/user')
const Company = require('../models/company')

passport.use(new LocalStrategy(User.authenticate()))
passport.use(new LocalStrategy(Company.authenticate()))
passport.serializeUser(User.serializeUser())
passport.serializeUser(Company.serializeUser())
passport.deserializeUser(User.deserializeUser())
passport.deserializeUser(Company.deserializeUser())