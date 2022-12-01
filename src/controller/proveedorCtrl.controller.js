import ProveedorModel from '../models/Proveedor.model';

export const guardarProveedor = async (req, res) => {
    console.log(req.body)
    try{
        const proveedor = new ProveedorModel(req.body);
        await proveedor.save();
        res.json({
            ok: true,
            proveedor : proveedor
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

export const darProveedors = async (req, res) => {
    try{
        const proveedores = await ProveedorModel.find();
        console.log(proveedores);
        res.json(proveedores);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

export const eliminarProveedor = async (req, res) => {
    try{
        const { id } = req.params;
        await ProveedorModel.findByIdAndRemove(id);
        res.json({status:"registro eliminado"});
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


export const editarProveedor = async (req, res) => {
    try{
        const { id } = req.params;
        await ProveedorModel.findByIdAndUpdate(id,{$set: req.body},{new: true});
        res.json({status:"registro actualizado"});
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

