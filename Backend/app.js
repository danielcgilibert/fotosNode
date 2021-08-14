const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");

//CORS
app.use(cors());

// Lectura y parseo del body
app.use(express.json());

//Directorio Público
app.use(express.static("public"));

// Rutas
app.use("/api/img", require("./routes/img.routes"));
app.use("/api/auth", require("./routes/auth.routes")); //Rutas de usuarios

// Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor funcionando!! :: PUERTO ==> ${process.env.PORT}`);
});
