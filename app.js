/**
 * Main application file
 */

const express = require('express');
const http = require('http');

// Variable para configuraciòn de express con los md
const expressConfig = require('./config/express');

// Setup Server
const app = express();
const server = http.createServer(app);

// Llamado de la configuraciòn express
expressConfig(app);

const config = {
  port: 8080,
  ip: '127.0.0.1',
};

// Start Server
function startServer() {
  app.CarShoppingBK = server.listen(config.port, config.ip, () => {
    console.log(`Express server listening on ${config.port}, in ${app.get('env')} mode`);
  });
}


setImmediate(startServer);

// Expose app
module.exports = app;
