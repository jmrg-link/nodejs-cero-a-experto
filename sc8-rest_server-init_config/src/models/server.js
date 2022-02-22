const { config } = require("../../config");
const express = require("express");

class Server {
  constructor() {
    this.app = express();

    // Middlewares
    this.middlewares();
    // Rutas App
    this.routes();
  }
  middlewares() {
    //dir public
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.get("/", (req, res) => {
      res.send("hi");
    });
  }

  listen() {
    this.app.listen(config.port, () => {
      console.log(`Escuchando localhost:${config.port}`);
    });
  }
}

module.exports = Server;
