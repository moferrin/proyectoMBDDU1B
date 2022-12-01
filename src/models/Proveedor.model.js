const { Schema, model } = require('mongoose');

const proveedorSchema = new Schema({
    nombre : String,
    direccion : String,
    telefono : String,
    correo: String
});

export default model('Proveedor',proveedorSchema,'proveedores');
