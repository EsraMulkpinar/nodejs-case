const express = require('express')
const User = require('../models/UserModel')
const authRouter = express.Router()
const jwt = require('jsonwebtoken')

authRouter.post('/register', async (req, res) => {
  try {
   const registeredUser = await User.findOne({where:{
      user_name: req.body.user_name
    }})
    if(registeredUser){
      res.status(400).send({message:"User already exists"})
    }
    else {
      const response = await User.create(req.body)
    res.send(response)
    }
  } catch (error) {
    res.send(error)
  }
})
authRouter.post('/login', async (req, res) => {
  try {
    const response = await User.findOne({
      where: {
        user_name: req.body.user_name,
      },
    })
    if (response) {
      if (response.getDataValue('password') === req.body.password) {
        const token = jwt.sign(
          {
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
          },
          'my_secret',
        )
        response.update({
          token,
        })
        res.send({
          message: 'Login Successful',
          data: {
            token,
          },
        })
      } else {
        res.send({
          message: 'Wrong password',
        })
      }
    } else {
      res.status(400).send({
        message: 'User not found',
      })
    }
  } catch (error) {
    console.log(error)
  }
})
authRouter.get('/logout', async (req, res) => {
  try {
    const foundUser = await User.findOne({
      where: { token: req.headers.token },
    })
    if (foundUser) {
      await foundUser.update({ token: null })
      res.send({
        message:"Succesfully Logout"
      })
    }
    else{
        res.send({
            message:"User not found"
        })
    }
    // axios.create({
    //     headers:{
    //         token: localStorage.getItem("token")
    //     }
    // })
  } catch (error) {
    res.send(error)
  }
})
authRouter.put("/updateRole/:id",async (req,res) => {
  const foundUser = await User.findOne({where:{
    id: req.params.id
  }})
  if(foundUser){
    await foundUser.update({role: foundUser.getDataValue("role")  === "admin" ? "user" : "admin"})
    res.send({message:"Role Updated successfully"})
  }
  else {
    res.status(404).send({messae:"User not found"})
  }
})

module.exports = authRouter
