const mongoose = require("mongoose");

const CaseSchema = new mongoose.Schema({
  patientName: { type: String, required: true },
  age: Number,
  gender: String,

  bloodGroup: String,
  BP: String,
  oxygenLevel: Number,
  sugarLevel: Number,
  temperature: Number,

  severity: {
    type: String,
    enum: ["Normal", "Serious", "Critical"],
    required: true
  },

  emergencyNotes: String,

  paramedicId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  assignedDoctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  status: {
    type: String,
    enum: ["Sent", "Received", "In Progress"],
    default: "Sent"
  },

  location: {
    lat: Number,
    lng: Number
  },

  ambulanceETA: Number, // in minutes

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Case", CaseSchema);
