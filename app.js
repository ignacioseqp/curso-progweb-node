require('dotenv').config();
const Server = require('./server');

// const express = require('express');
// const { Server } = require('http');
// const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello world');
// });

// app.listen(process.env.PORT, () => {
//   console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
// });

const server = new Server();
