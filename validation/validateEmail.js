const validationEmail = (email)=>{
    const atIndex = email.indexOf('@')
    const last = email.splice(email.length-4)
    if ((temp>0 && last == '.com')) {
        res.send('good')
    }
    else{
        res.send('wrong')
    }
}