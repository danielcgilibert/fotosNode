/*

    Rutas de imagenes / img
    host + /api/img

*/

const { Router } = require('express');
const router = Router();

const { cargarImagenes } = require('../controllers/img');



router.get('/', cargarImagenes);

module.exports = router;