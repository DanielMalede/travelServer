const router = require("express").Router();
const { signUp ,getUsers} = require("../controllers/users-ctrl");

router.get("/", getUsers);
router.post("/signUp", signUp);

module.exports = router;
