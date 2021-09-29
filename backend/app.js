const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
const routes = require('./routes/routes')
const mongoose = require("mongoose")
const seeder = require("./seeds")
const passport = require('passport')
const app = express();

mongoose.connect("mongodb://localhost:27017/ingressosHub", {useNewUrlParser: true, useUnifiedTopology: true})
//seeder()
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize())
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes)

module.exports = app;
