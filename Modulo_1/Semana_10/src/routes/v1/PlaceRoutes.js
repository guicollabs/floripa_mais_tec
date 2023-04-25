const express = require("express");
const router = express.Router();

const validateToken = require("./../../middleware/token");

const {
  getPlaces,
  getPlace,
  createPlace,
  updatePlace,
  deletePlace,
} = require("../../controllers/PlaceController");

router.get("/", validateToken, getPlaces);
router.get("/:id", validateToken, getPlace);
router.post("/", validateToken, createPlace);
router.patch("/:id", validateToken, updatePlace);
router.delete("/:id", validateToken, deletePlace);

module.exports = router;
