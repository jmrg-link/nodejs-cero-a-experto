const { config } = require("../../config");
const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();

    this.Paths = {
      users: "/api/users",
    };

    // Middlewares
    this.middlewares();

    // Rutas App
    this.routes();
  }
  middlewares() {
    // CORS
    this.app.use(cors());
    // FOLDER PUBLIC
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.Paths.users, require("../routes/user.routes"));
  }

  listen() {
    this.app.listen(config.port, () => {
      console.log(`Escuchando localhost:${config.port}`);
    });
  }
}

module.exports = Server;
