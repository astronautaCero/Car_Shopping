/**
 * Main application file
 */

const express = require('express');
const http = require('http');

// variable para mongoose
const mongoose = require('mongoose');

// Variable para configuraciòn de express con los md
const expressConfig = require('./config/express');

// Variable para rutas
const routeConfig = require('./routes.js');
const config = require('./config/enviroment');

// Connect to MongoDB
mongoose.connect(config.mongo.uri, { useNewUrlParser: true });
mongoose.connection.on('error', (err) => {
  console.error('Error', 'MongoDB connection error', {
    data: err,
    time: new Date().toISOString(),
  });
  process.exit(-1);
});

// Setup Server
const app = express();
const server = http.createServer(app);

// Llamado de la configuraciòn express
expressConfig(app);

// Llamado de las rutas (instancia)
routeConfig(app);

// Start Server
function startServer() {
  app.CarShoppingBK = server.listen(config.port, config.ip, () => {
    console.log(`Express server listening on ${config.port}, in ${app.get('env')} mode`);
  });
}


setImmediate(startServer);

// Expose app
module.exports = app;
