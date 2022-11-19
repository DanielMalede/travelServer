const router = require("express").Router();
const { signUp } = require("../controllers/users-ctrl");

router.post("/", signUp);
// router.post("/signUp", signUp);

module.exports = router;
