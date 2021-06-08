const express = require("express");
const router = express.Router();
const Location = require("../models/Location");

//Get All
router.get("/", async (req, res) => {
  try {
    const locations = await Location.find();
    res.json(locations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Get One
router.get("/:id", getLocation, (req, res) => {
  res.json(res.location);
});

//Create One
router.post("/", async (req, res) => {
    try {
    console.log("doing post");
    console.log(req.body);
  const location = new Location({
    nombre: req.body.nombre,
    email: req.body.email,
    pais: req.body.pais,
    ciudad: req.body.ciudad,
    precio: req.body.precio,
    avatar: req.body.avatar
  });
    const newLocation = await location.save();
    res.status(201).json({ newLocation });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Patch One
router.patch("/:id", getLocation, async (req, res) => {
  if (req.body.nombre != null) {
    res.location.nombre = req.body.nombre;
  }
  if (req.body.email != null) {
    res.location.email = req.body.email;
  }
  if (req.body.pais != null) {
    res.location.pais = req.body.pais;
  }
  if (req.body.ciudad != null) {
    res.location.ciudad = req.body.ciudad;
  }
  if (req.body.precio != null) {
    res.location.precio = req.body.precio;
  }
  if (req.body.avatar != null) {
    res.location.avatar = req.body.avatar;
  }
  try {
    const updatedLocation = await res.location.save();
    res.json(updatedLocation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Put One
router.put("/:id", getLocation, async (req, res) => {
  try {
    const updatedLocation = await res.location.set(req.body);
    res.json(updatedLocation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Delete One
router.delete("/:id", getLocation, async (req, res) => {
  try {
    await res.location.deleteOne();
    res.json({ message: "Location has been deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//getLocation middleware
async function getLocation(req, res, next) {
  let location;
  try {
    location = await Location.findById(req.params.id);
    if (location == null) {
      return res.status(404).json({ message: "Cannot find Location" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.location = location;
  next();
}

module.exports = router;