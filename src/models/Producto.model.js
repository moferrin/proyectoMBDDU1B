const { Schema, model } = require('mongoose');

const productoSchema = new Schema({
    nombre : String,
    precio : Number,
    categoria : String,
    cantidad : Number,
    //imagen : String
});

export default model('Producto',productoSchema,'productos');
