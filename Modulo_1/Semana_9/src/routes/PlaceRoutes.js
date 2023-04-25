const express = require("express");
const PlaceController = require("./../controller/PlaceController");
const router = express.Router();

router.get("/", PlaceController.getPlaces);
router.post("/", PlaceController.createPlace);
router.patch("/:id", PlaceController.updatePlace);
router.delete("/:id", PlaceController.deletePlace);

module.exports = router;
