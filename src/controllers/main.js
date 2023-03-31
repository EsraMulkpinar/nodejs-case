const express = require("express")
const authRouter = require("./AuthController")
const userRouter = require("./UserController")
const router = express.Router()

router.use("/user",userRouter)
router.use("/auth",authRouter)
module.exports = router