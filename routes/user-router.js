const router = require("express").Router();
const { signUp, getUsers, signIn } = require("../controllers/users-ctrl");

router.get("/", getUsers);
router.post("/signUp", signUp);
router.post("/signIn", signIn);

module.exports = router;
