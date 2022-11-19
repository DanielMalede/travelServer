const users = require("../model/registerUsers-model");
const { emailValidator } = require("../validation/validateEmail");
const { validationPassword } = require("../validation/validationPassword");
const { validationPassword } = require("../validation/validationPassword");

const getUsers = (req,res)=>{
  res.send(users)
}
const signUp = (req, res) => {
  if (
    emailValidator(res,req.body.users.email) &&
    validationPassword(
      res,
      req.body.users.password,
      req.body.users.validatorPassword
    )
  ) {
    return (res.send("user has created"),users.push(req.body.users));
  }
  return res.send("error");
};

module.exports = {
  signUp,
  getUsers
};
