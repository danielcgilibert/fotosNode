const { response } = require("express");
const connection = require("../config/db");
const bcrypt = require("bcrypt");

const crearUsuario = async (req, res = response) => {
  const { name, email, password } = req.body;

  const sqlComprobacion = `SELECT email FROM usuarios WHERE email='${email}'`;

  await connection.query(sqlComprobacion)
  .then(([result]) => {
    console.log(result);
    if (result.length > 0) {
      res.status(400).json({
        ok: false,
        msg: "Un usuario ya existe con ese correo",
      });
    } else {
      // Encriptar contraseña
      const salt = bcrypt.genSaltSync();
      const passwordEncriptado = bcrypt.hashSync(password, salt);

      const sql = `INSERT INTO usuarios (nombre, email, password) VALUES ('${name}', '${email}', '${passwordEncriptado}')`;
      connection
        .query(sql)
        .then(([result]) => {
          res.status(201).json({
            ok: true,
            msg: "registro",
          });
        })
        .catch((err) => {
          console.log(sql);
          res.send(400);
          console.log(err.message);
        });
    }
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
