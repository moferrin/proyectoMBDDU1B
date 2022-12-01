import ClienteModel from '../models/Cliente.model';

export const guardarCliente = async (req, res) => {
    console.log(req.body)
    try{
        const cliente = new ClienteModel(req.body);
        await cliente.save();
        res.json({
            ok: true,
            cliente : cliente
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

export const darClientes = async (req, res) => {
    try{
        const clientes = await ClienteModel.find();
        console.log(clientes);
        res.json(clientes);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

export const eliminarCliente = async (req, res) => {
    try{
        const { id } = req.params;
        await ClienteModel.findByIdAndRemove(id);
        res.json({status:"registro eliminado"});
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


export const editarCliente = async (req, res) => {
    try{
        const { id } = req.params;
        await ClienteModel.findByIdAndUpdate(id,{$set: req.body},{new: true});
        res.json({status:"registro actualizado"});
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

