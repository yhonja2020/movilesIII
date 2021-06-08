
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  email: { 
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  ciudad: {
    type: String,
    required: true
  },
  pais: {
    type: String,
    required: true
  },
  precio: {
    type: String,
    required: true
  },
  avatar: 
  {
    type: String
  }

});

const Location = mongoose.model("Location", locationSchema);
module.exports = Location;
