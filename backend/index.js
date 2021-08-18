const express = require('express')
const app = express()
const Router = require('./Router/router')

//Arquivo de start do servidor
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/admin", Router)


app.listen(8080, () => console.log("Server is running"))
