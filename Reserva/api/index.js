require("dotenv").config();

const express = require("express")
const app = express();
const mongoose = require("mongoose")


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", error => console.log(error));
db.once("open", () => console.log("Conexion a la BD "));

app.use(express.json());

const locationsRouter = require("./routes/locations");
app.use("/locations", locationsRouter);

app.listen(process.env.PORT, () => {
    console.log("Servidor con conexion!")
})
