import ProductoModel from '../models/Producto.model';

export const guardarProducto = async (req, res) => {
    console.log(req.body)
    try{
        const producto = new ProductoModel(req.body);
        await producto.save();
        res.json({
            ok: true,
            producto : producto
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

export const darProductos = async (req, res) => {
    try{
        const productos = await ProductoModel.find();
        console.log(productos);
        res.json(productos);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

export const eliminarProducto = async (req, res) => {
    try{
        const { id } = req.params;
        await ProductoModel.findByIdAndRemove(id);
        res.json({status:"registro eliminado"});
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

export const editarProducto = async (req, res) => {
    try{
        const { id } = req.params;
        await ProductoModel.findByIdAndUpdate(id,{$set: req.body},{new: true});
        res.json({status:"registro actualizado"});
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}




