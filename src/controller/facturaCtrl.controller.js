import FacturaModel from './../models/Factura.model';
import ProductoModel from './../models/Producto.model';

let guardarFactura = async (req, res) => {

    let body = req.body;
    console.log(body)

    /*

    const venta = new FacturaModel({
        valor_total: body.total,
        cliente: body.cliente,
        productos: body.productos_detalle,
        //usuario:""

    });

    venta.save((err, ventaNew) => {
        if (err){
        console.log(err)
            return res.json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            ventaNew
        });
    })
*/
    
    validar_cantidad(body.productos_detalle, (respuesta) => {
        
        if (respuesta== false){
            return res.json({
                ok: false,
                mensaje: "No hay productos para guardar"
            });

        }


        let venta = new FacturaModel({
            valor_total: body.total,
            cliente: body.cliente,
            usuario: body.usuario,
            productos: respuesta
        });


        venta.save((err, ventaNew) => {

            if (err)
                return res.json({
                    ok: false,
                    err
                });

            res.json({
                ok: true,
                ventaNew
            });
        }
        
        )
    }
    
    )
}


let validar_cantidad = async (productos, callback) => {

    let productos_id = [];
    productos.forEach(element => {
        productos_id.push(element.producto_id);
    });

    let respuesta = [];

    ProductoModel.find({})
        .where("_id").in(productos_id)
        .exec(async (err, data) => {

            for(let i = 0; i < data.length; i++){

                let cantidad = productos.find(p => p.producto_id == data[i]._id).cantidad;

                if (cantidad <= data[i].cantidad) {

                    let cantidad_nueva = data[i].cantidad - cantidad;

                    let modifico = await ProductoModel.findByIdAndUpdate(data[i]._id, {
                        cantidad: cantidad_nueva
                    });

                    if (modifico != false) {
                        respuesta.push({
                            productos: data[i]._id,
                            cantidad: cantidad
                        });
                    }
                }
            }

            callback(respuesta.length == 0 ? false : respuesta);
        })
}

let listarFactura = (req, res) => {
    FacturaModel.find({})
        .populate("cliente")
        .populate("productos.productos")
        .exec((err, data) => {
            res.json(data);
        });
}

module.exports = {
    guardarFactura,
    listarFactura
}