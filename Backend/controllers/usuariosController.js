const { response } = require("express");
const connection = require("../config/db");
const bcrypt = require("bcrypt");

const crearUsuario = async (req, res = response) => {
  let { name, email, password } = req.body;

  // Encriptar contraseña
  const salt = bcrypt.genSaltSync();
  password = bcrypt.hashSync(password, salt);

  const sql = `INSERT INTO usuarios (nombre, email, password) VALUES ('${name}', '${email}', '${password}')`
  await connection
    .query(
      sql
    )
    .then(([result]) => {
      res.status(201).json({
        ...result,
        ok: true,
        msg: "registro",
      });
    })
    .catch((err) => {
        console.log(sql);
      res.send(400);
      console.log(err.message);
    });
};

const loginUsuario = (req, res = response) => {
  const { email, password } = req.body;

  res.json({
    ok: true,
    msg: "login",
  });
};

const renewTokeUsuario = (req, res = response) => {
  res.json({
    ok: true,
    msg: "Token",
  });
};

module.exports = {
  crearUsuario,
  loginUsuario,
  renewTokeUsuario,
};
