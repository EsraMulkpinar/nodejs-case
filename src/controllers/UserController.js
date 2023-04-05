const express = require('express')
const User = require('../models/UserModel')
const userRouter = express.Router()

userRouter.get('/', async (req, res) => {
  const allUsers = await User.findAll()
  res.send(allUsers)
})
userRouter.get('/:id', async (req, res) => {
  try {
    const findUser = await User.findOne({ where: { id: req.params.id } })
    res.send({
      data:findUser,
      message: 'Succesfully User found ',
    })
  } catch (error) {
    res.status(400).send({
      message: 'Succesfully User found ',
    })
  }
})
module.exports = userRouter
