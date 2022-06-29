const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const io = require("socket.io");
const http = require("http");
const { socketController } = require("../sockets/contoller");
const { dbConnection } = require("../db/config");
const { PORT_SEV } = process.env;
require("colors");

class Server {
  constructor() {
    this.app = express();
    this.port = PORT_SEV;
    this.server = http.createServer(this.app);
    this.io = io(this.server);
    this.path = {
      RoutePrueba: "/prueba",
    };
    this.conectarDB();
    this.middleware();
    this.router();
    this.sockets();
  }
  async conectarDB() {
    await dbConnection();
  }

  sockets() {
    this.io.on("connection", socketController);
  }
  middleware() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(morgan("dev"));
    this.app.use(express.static("public"));
  }

  router() {
    this.app.use(this.path.RoutePrueba, require("../router/prueba.routes"));
  }

  lister() {
    this.server.listen(this.port, (err) => {
      if (err) {
        console.log(`${"Algo salio mal".red} ${err}`);
      }
      console.log(
        `${"Server coriendo en el puerto".brightCyan} ${this.port.rainbow}`
      );
    });
  }
}

module.exports = Server;
