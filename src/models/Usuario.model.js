const { Schema, model } = require('mongoose');

const usuarioSchema = new Schema({
    email: String,
    password: String
}, {
    timestamps: true
});

module.exports = model('Usuario', usuarioSchema, 'usuarios');