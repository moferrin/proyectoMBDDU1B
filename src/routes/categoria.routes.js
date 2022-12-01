const express = require("express");
const router = express.Router();
const categoria = require("../controller/categoriaCtrl.controller");

router.get("/categoria", categoria.darCategorias);
router.post("/categoria", categoria.guardarCategoria);
router.delete("/categoria/:id", categoria.eliminarCategoria);
router.put("/categoria/:id", categoria.editarCategoria);

module.exports = router;