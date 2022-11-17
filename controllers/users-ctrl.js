const users = require("../model/registerUsers-model");
const { signUpValidator } = require("../validation/validateEmail");

const signUp = (req, res) => {
  if (!signUpValidator(req.body.users.email)) {
    return res.status(400).json("err");
  }
  users.push(req.body.users);
};
const signIn = (req, res) => {
  if (validationEmail(req.body.users.email)) {
    return res.send("your in");
  }
  return res.send("you not in");
};

module.exports = {
  signUp,
  signIn,
};
