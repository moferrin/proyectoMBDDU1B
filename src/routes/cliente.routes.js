const express = require("express");
const router = express.Router();
const cliente = require("../controller/clienteCtrl.controller");

router.get("/cliente", cliente.darClientes);
router.post("/cliente", cliente.guardarCliente);
router.delete("/cliente/:id", cliente.eliminarCliente);
router.put("/cliente/:id", cliente.editarCliente);

module.exports = router;