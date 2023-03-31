const express = require("express")
const userRouter = express.Router() 

userRouter.post("/",(req,res) => {
  res.send("Hello world")
})

module.exports = userRouter