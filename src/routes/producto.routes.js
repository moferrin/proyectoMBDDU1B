const express = require("express");
const router = express.Router();
const producto = require("../controller/productoCtrl.controller");

router.get("/producto", producto.darProductos);
router.post("/producto", producto.guardarProducto);
router.delete("/producto/:id", producto.eliminarProducto);
router.put("/producto/:id", producto.editarProducto);

module.exports = router;