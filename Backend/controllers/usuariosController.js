const { response } = require("express");
const connection = require("../config/db");
const bcrypt = require("bcryptjs");

const crearUsuario = async (req, res = response) => {
  const { name, email, password } = req.body;


  try {
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
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
 
};

const loginUsuario = async(req, res = response) => {
  const { email:emailUsuario, password:passwordUsuario } = req.body;

  try {
    const sqlComprobacion = `SELECT * FROM usuarios WHERE email='${emailUsuario}'`;

    await connection.query(sqlComprobacion)
    .then(([result]) => {
      if (!result.length > 0) {
        return res.status(400).json({
          ok: false,
          msg: "El usuario no existe con ese email",
        });
      }
        const [{id, email, password}] = result
        const validPassword = bcrypt.compareSync(passwordUsuario, password);

        if(!validPassword){
          return res.json({
            ok:false,
            msg: 'contraseña icorrecta'
          })
        }

     

     res.json({
       ok:true,
       msg: 'loggin bien',
       id,
       email,
       passwordUsuario
     })


    });
    
    
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }

  
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
