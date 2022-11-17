const router = require("express").Router();
const { signUp, signIn } = require("../controllers/users-ctrl");

router.post("/", signIn);
router.post("/signUp", signUp);

module.exports = router;
