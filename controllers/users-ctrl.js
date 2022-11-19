const users = require("../model/registerUsers-model");
const { emailValidator } = require("../validation/validateEmail");
const { validationPassword } = require("../validation/validationPassword");
const checkUserAge = require("../validation/validateUserAge");

const getUsers = (req, res) => {
  res.send(users);
};
const signUp = (req, res) => {
  if (
    emailValidator(res, req.body.users.email) &&
    validationPassword(
      res,
      req.body.users.password,
      req.body.users.validatorPassword
    ) &&
    checkUserAge(req.body.users.age)
  ) {
    req.body.users.id = Math.floor(Math.random() * 10000);
    req.body.users.token = Math.floor(Math.random() * 10000);
    users.push(req.body.users);
    return res.send("user has created");
  }
  return res.send("error");
};

const signIn = (req, res) => {
  const userLogIn = users.find((item) => item.email == req.body.user.email);
  userLogIn
    ? userLogIn.password == req.body.user.password
      ? (res.send(
          "email: " + req.body.user.email +"  "+ "password: " + req.body.user.password
        ),
        next())
      : res.send("password wrong")
    : res.send("email not find");
};

module.exports = {
  signUp,
  getUsers,
  signIn,
};
