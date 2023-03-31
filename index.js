const express = require('express') // == import express from "express"
const app = express() // express'i ayaga kaldir
const PORT = 3000

app.listen(PORT,() => { // app.listen ile uygulamayi ayaga kaldirdik - sonrasinda callback function tetikledik
 console.log("Server is running from: "+PORT) 
})


