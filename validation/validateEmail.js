const validationEmail = (email)=>{
    const atIndex = email.indexOf('@')
    const last = email.splice(email.length-4)
    if ((temp>0 && last == '.com')) {
        return true
    }
    else{
        return false
    }
}

module.exports = validationEmail