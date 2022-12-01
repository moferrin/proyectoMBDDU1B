const express = require("express");
const router = express.Router();
const proveedor = require("../controller/proveedorCtrl.controller");

router.get("/proveedor", proveedor.darProveedors);
router.post("/proveedor", proveedor.guardarProveedor);
router.delete("/proveedor/:id", proveedor.eliminarProveedor);
router.put("/proveedor/:id", proveedor.editarProveedor);

module.exports = router;