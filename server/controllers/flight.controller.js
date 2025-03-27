const FlightModel = require("../models/flight.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secret = process.env.SECRET;

exports.createFlight = async (req, res) => {
  const firebaseUrl = req.file.firebaseUrl;
  const {
    name,
    departureAirport,
    arrivalAirport,
    departureTime,
    arrivalTime,
    price,
  } = req.body;
  if (
    !name ||
    !departureAirport ||
    !arrivalAirport ||
    !departureTime ||
    !arrivalTime ||
    !price
  )
    return res.status(400).json({
      message: "All Fields is required",
    });
  const flightDoc = await FlightModel.create({
    name,
    departureAirport,
    arrivalAirport,
    departureTime,
    arrivalTime,
    price,
    image: firebaseUrl,
  });
  res.json(flightDoc);
};

exports.getFlights = async (req, res) => {
  const flights = await FlightModel.find();
  //Select * FROM POST WHERE POST.author = USER._id
  res.json(flights);
};

exports.getById = async (req, res) => {
  const { id } = req.params;
  try {
    const flightDoc = await FlightModel.findById(id);
    if (!flightDoc) {
      return res.status(404).send({
        message: "Product Not Found!",
      });
    }
    res.json(flightDoc);
  } catch (error) {
    res.status(500).send({
      message: "Something went wrong while fetching the product!",
    });
  }
};

exports.updateFlight = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "Product ID is required" });
  }

  try {
    const existingFlight = await ProductModel.findById(id);
    if (!existingFlight) {
      return res.status(404).json({ message: "Product not found" });
    }

    const {
      name,
      departureAirport,
      arrivalAirport,
      departureTime,
      arrivalTime,
      price,
    } = req.body;

    if (
      !name ||
      !departureAirport ||
      !arrivalAirport ||
      !departureTime ||
      !arrivalTime ||
      !price
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const updatedData = {
      name,
      departureAirport,
      arrivalAirport,
      departureTime,
      arrivalTime,
      price,
    };

    // ถ้ามีการอัปโหลดรูปใหม่ ให้อัปเดต URL ของ Firebase Storage
    if (req.file && req.file.firebaseUrl) {
      updatedData.image = req.file.firebaseUrl;
    }

    // อัปเดตข้อมูลในฐานข้อมูล
    const updatedFlight = await FlightModel.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    res.status(200).json({
      message: "Product updated successfully",
      product: updatedFlight,
    });
  } catch (error) {
    res.status(500).json({
      message:
        error.message || "Something went wrong while updating the product",
    });
  }
};

exports.deleteFlight = async (req, res) => {
  const { id } = req.params;

  try {
    const flightDoc = await FlightModel.findById(id);
    if (!flightDoc) {
      return res.status(403).send({
        message: "You can not delete this product!",
      });
    }
    await flightDoc.deleteOne();
    res.json(flightDoc);
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Something went wrong while delete the product!",
    });
  }
};
