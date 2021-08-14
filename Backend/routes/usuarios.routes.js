/*

    Rutas de usuarios / user
    host + /api/user

*/

const { Router } = require('express');
const router = Router();
const { crearUsuario ,loginUsuario ,renewTokeUsuario } = require('../controllers/usuariosController');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

router.post('/new',
[ //middlewares
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').not().isEmpty().isLength({min:6}),
    validarCampos
], crearUsuario);

router.post('/login', [ //middlewares
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').not().isEmpty().isLength({min:6}),
    validarCampos
], loginUsuario);

router.get('/renew', renewTokeUsuario);

module.exports = router;

