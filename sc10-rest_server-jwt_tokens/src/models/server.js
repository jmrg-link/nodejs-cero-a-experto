const { config } = require( "../../config" );
const express = require( "express" );
const cors = require( "cors" );
const { dbConnect } = require( "../../db/config.db" );

class Server {
    constructor() {
        this.app = express();
        this.Paths = {
            users: "/api/users" ,
            auth: "/api/auth"
        };

        // Connect DB
        this.connectDB()

        // Middlewares
        this.middlewares();

        // Rutas App
        this.routes();
    }

    async connectDB() {
        await dbConnect()
    }

    middlewares() {
        // CORS
        this.app.use( cors() );
        // Parser Body Json
        this.app.use( express.json() );
        // FOLDER PUBLIC
        this.app.use( express.static( "public" ) );
    }

    routes() {
        this.app.use( this.Paths.auth , require( "../routes/auth.routes" ) )
        this.app.use( this.Paths.users , require( "../routes/user.routes" ) )
    }


    listen() {
        this.app.listen( config.port , () => {
            console.log( `Escuchando localhost:${ config.port }` );
        } );
    }
}

module.exports = Server;
