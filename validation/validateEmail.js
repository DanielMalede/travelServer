const ok = false;
const signUpValidator = (email) => {
  const temp = email.indexOf("@");
  const last = email.slice(email.length - 4);
  if (temp > 0 && last == ".com") {
    return true;
  } else {
    return false;
  }
};
module.exports = { signUpValidator, ok };
