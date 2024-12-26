const express = require('express');
const config = require('./config.js');
const clientes = require('./modulos/clientes/rutas.js');

const app = express();

//configuring the port
app.set('port', config.app.port);

//rutas
app.use('/api/clientes', clientes)

module.exports = app;