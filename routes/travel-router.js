const router = require("express").Router();
const {
  getTravel,
  createTravelById,
  getTravelById,
  deleteTravel,
  updateTravel,
} = require("../controllers/travel-ctrl");

router.get("/", getTravel);
router.get("/getById/:id", getTravelById);
router.post("/saveData", createTravelById);
router.delete("/delete/:id", deleteTravel);
router.put("/update/:id", updateTravel);

module.exports = router;
