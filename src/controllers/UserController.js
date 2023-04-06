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
      data: findUser,
      message: 'Succesfully User found ',
    })
  } catch (error) {
    res.status(400).send({
      message: 'Succesfully User found ',
    })
  }
})

userRouter.put("/:id",async (req,res) => {
  try {
   const updatedUser = await User.update(req.body,{where:{
      id:req.params.id
    }})
    if(updatedUser){
      res.send({
        message:"User updated successfully",
        data: updatedUser
      })
    }
    else {
      res.status(400).send({message:"User update failed"})
    }
  } catch (error) {
    res.status(400).send(error)
  }
})

userRouter.delete('/:id', async (req, res) => {
  try {
    const deletedRowCount = await User.destroy({ where: { id: req.params.id } })
    
    if(deletedRowCount > 0) {
      res.send({
        message: "User deleted successfully"
      })
    }
    else {
      res.status(404).send({
        message: "User not found"
      })
    }
  } catch (error) {
    res.status(400).send({
      message: 'User delete error',
    })
  }
})
module.exports = userRouter
