const users = require('../model/registerUsers-model')
const validationEmail = require('../validation/validateEmail')
const signUp = (req,res)=>{
    if (validationEmail(users)) {
        return res.send('not ok')
    }
    res.send("all good keep")
}
const signIn = (req,res)=>{
    if (isIn){
        return res.send('your in')
    }
    return res.send('you not in')
}

module.exports = {
    signUp,
    signIn
}