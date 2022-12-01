import Usuario from "../models/Usuario.model";

export const todosUsuarios = async (req, res) => {
    const usuarios = await Usuario.find();
    res.json(usuarios);
}