const { Schema, model } = require('mongoose');

const facturaSchema = new Schema({
    fecha : {
        type: Date,
        default: Date.now
    },
    valor_total: Number,
    cliente : {
        required: false,
        type: Schema.Types.ObjectId,
        ref : "Cliente"
    },
    usuario : {
        required:false,
        type: Schema.Types.ObjectId,
        ref : "Usuario"
    },
    productos : [{
        productos : {
            type: Schema.Types.ObjectId,
            ref : "Producto"
        },
        cantidad : Number
    }]
});

export default model('Factura',facturaSchema,'facturas');
