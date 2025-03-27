const express = require("express");
const router = express.Router();
const flightController = require("../controllers/flight.controller");
const { upload, uploadToFirebase } = require("../middlewares/file.middleware");
const authJwt = require("../middlewares/authJWT.middleware");

router.post("/", upload, uploadToFirebase, flightController.createFlight);

router.get("/", flightController.getFlights);

router.get("/:id", flightController.getById);

router.delete("/:id", flightController.deleteFlight);

router.put("/:id", upload, uploadToFirebase, flightController.updateFlight);

module.exports = router;
