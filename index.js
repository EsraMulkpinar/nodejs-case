const bodyParser = require("body-parser")
const express = require("express")// == import express from "express"
const { db } = require("./db")
const router = require("./src/controllers/main")
const User = require("./src/models/UserModel")
const app = express() // express'i ayaga kaldir
const cors = require("cors")
const PORT = 3000
app.use(cors())
app.use(bodyParser.json())
app.use(router)

try {
    db.authenticate().then(() => {
      User.sync({alter:true})
    })
} catch (error) {
    console.log(error)
}

app.listen(PORT,() => { // app.listen ile uygulamayi ayaga kaldirdik - sonrasinda callback function tetikledik
    console.log("Server is running from: "+PORT) 
})


