import CategoriaModel from '../models/Categoria.model';

export const guardarCategoria = async (req, res) => {
    console.log(req.body)
    try{
        const categoria = new CategoriaModel(req.body);
        await categoria.save();
        res.json({
            ok: true,
            categoria : categoria
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

export const darCategorias = async (req, res) => {
    try{
        const categoriaes = await CategoriaModel.find();
        console.log(categoriaes);
        res.json(categoriaes);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

export const eliminarCategoria = async (req, res) => {
    try{
        const { id } = req.params;
        await CategoriaModel.findByIdAndRemove(id);
        res.json({status:"registro eliminado"});
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


export const editarCategoria = async (req, res) => {
    try{
        const { id } = req.params;
        await CategoriaModel.findByIdAndUpdate(id,{$set: req.body},{new: true});
        res.json({status:"registro actualizado"});
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

