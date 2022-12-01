import express from 'express';
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload')

import loginRoute from './routes/login.routes';
import productoRoute from './routes/producto.routes';
import clienteRoute from './routes/cliente.routes';
import facturaRoute from './routes/factura.routes';
import proveedorRoute from './routes/proveedor.routes';
import categoriaRoute from './routes/categoria.routes';


const cors = require('cors');

const app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); 
app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(fileUpload())

app.use(loginRoute);
app.use(productoRoute);
app.use(clienteRoute);
app.use(facturaRoute);
app.use(proveedorRoute);
app.use(categoriaRoute);

export default app;