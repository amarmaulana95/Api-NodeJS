const express = require('express');
//memanggil contoller
var penggunaController = require('./../controller/penggunaController');

var router = express.Router();
//memakai library router

//mengirim fungsi ke masing2 route
router.get('/pengguna', penggunaController.index);
router.post('/pengguna', penggunaController.simpan);
router.get('/pengguna/:id', penggunaController.getid);
router.put('/pengguna/:id', penggunaController.edit);
router.delete('/pengguna/:id/:status', penggunaController.hapus);

module.exports = router;
//expor router/bungkus

