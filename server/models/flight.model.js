const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const FlightSchema = new Schema(
  {
    name: { type: String, required: true },
    departureAirport: { type: String, required: true }, // สนามบินต้นทาง
    image: { type: String, require: true },
    arrivalAirport: { type: String, required: true }, // สนามบินปลายทาง
    departureTime: { type: String, required: true }, // เวลาออกเดินทาง
    arrivalTime: { type: String, required: true }, // เวลาถึงที่หมาย
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

const FlightModel = model("Flight", FlightSchema);
module.exports = FlightModel;
