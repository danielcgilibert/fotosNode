const { response } = require("express");
const connection = require("../config/db");

const cargarImagenes = async (req, res = response) => {
  await connection.query("SELECT * FROM imagenes")
    .then(([result]) => {
      res.json(result)
    })
    .catch((err) => {
      res.send(400);
      console.log(err.message);
    });
};

module.exports = {
  cargarImagenes,
};
