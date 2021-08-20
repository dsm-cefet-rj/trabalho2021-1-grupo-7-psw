const express = require('express')
const app = express()
const Router = require('./Router/router')
const cors = require('cors')

//Arquivo de start do servidor
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

app.use("/", Router)

app.listen(8080, () => console.log("Server is running"))