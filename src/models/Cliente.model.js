const { Schema, model } = require('mongoose');

const clienteSchema = new Schema({
    nombre : String,
    direccion : String,
    telefono : String
});

export default model('Cliente',clienteSchema,'clientes');
