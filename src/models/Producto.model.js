const { Schema, model } = require('mongoose');

const productoSchema = new Schema({
    nombre : String,
    precio : Number,
    categoria : String,
    cantidad : Number,
    proveedor: {
        type: Schema.Types.ObjectId,
        ref : "Proveedor"
    }
    //imagen : String
});

export default model('Producto',productoSchema,'productos');
