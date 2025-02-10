const { Router } = require('express')
const userRouter = require("./User.routes")
const sessionRouter = require("./Session.routes")
const productRouter = require('./product.routes')

const router = Router()

router.use('/user', userRouter)
router.use('/session', sessionRouter)
router.use('/products', productRouter)

module.exports = router;