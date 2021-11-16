const express = require('express');
const cors = require('cors');

class Server {
  corsOptios = {
    whiteList: ['http://sitiouno.com', 'http://sitiodos.com'],
    origin: function (origin, callback) {
      if (this.whiteList.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Dominio no permitido'));
      }
    },
  };
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    //middlewares
    this.listen();
    //rutas
    this.rutas();
  }

  //   middlewares() {
  //     //directorio publico
  //     this.app.use(express.static('public'));
  //   }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server corriendo en el puerto ${this.port}`);
    });
  }

  rutas() {
    this.app.get('/ok', cors(this.corsOptions), (req, res, next) => {
      console.log('HOME PAGE');
      res.status(200).json({
        status: 'success',
        message: 'Todo Ok!',
      });
    });
  }
}

module.exports = Server;
