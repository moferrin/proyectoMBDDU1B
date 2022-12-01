const express = require("express");
const router = express.Router();
const factura = require("../controller/facturaCtrl.controller");

router.post("/factura", factura.guardarFactura);
router.get("/factura", factura.listarFactura);

module.exports = router;