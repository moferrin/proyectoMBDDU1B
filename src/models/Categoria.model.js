const { Schema, model } = require('mongoose');

const categoriaSchema = new Schema({
    nombre : String,
});

export default model('Categoria',categoriaSchema,'categorias');
