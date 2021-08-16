const { response } = require("express");
const connection = require("../config/db");
const bcrypt = require("bcryptjs");
const { generarJWT } = require('../helpers/jwt');

const crearUsuario = async (req, res = response) => {
  const { name, email, password } = req.body;


  try {
    const sqlComprobacion = `SELECT email FROM usuarios WHERE email='${email}'`;

    await connection.query(sqlComprobacion)
    .then(([result]) => {
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
          .then((result) => {
            const idUsuario = result[0].insertId;

            generarJWT(idUsuario, name ).then( token => {
              res.status(201).json({
                ok: true,
                token,
                idUsuario,
                name,
                email,
                msg: "registro",
              });
            })
            
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
        const [{id, nombre, email, password}] = result
        const validPassword = bcrypt.compareSync(passwordUsuario, password);

        if(!validPassword){
          return res.json({
            ok:false,
            msg: 'contraseña icorrecta'
          })
        }

        generarJWT(id, nombre ).then( token => {
          res.json({
            ok:true,
            msg: 'loggin bien',
            id,
            nombre,
            token,
            email
          })
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
  const id = req.id;
  const name = req.name;

  generarJWT(id, name ).then( token => {
    res.json({
      ok: true,
      token
    })
  })
  
};

module.exports = {
  crearUsuario,
  loginUsuario,
  renewTokeUsuario,
};
