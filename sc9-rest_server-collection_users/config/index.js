const path = require( "path" );
require( "dotenv" ).config( {
    path: path.resolve( __dirname , "../../.env" ) ,
} );

const config = {
    port: process.env.PORT || 8000 ,
    mongodb_cnn_prod: process.env.MONGODB_CNN_PROD ,
    dev: process.env.NODE_DEV ,
    prod: process.env.NODE_ENV ,

};

module.exports = { config: config };
