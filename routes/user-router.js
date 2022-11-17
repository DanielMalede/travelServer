const router = require('express').Router()
const {signUp,signIn} = require('../controllers/users-ctrl')

router.get("/",signUp)
router.post('/signIn',signIn)

module.exports = router