const { config } = require( "../config" );
const mongoose  = require( "mongoose" );

const dbConnect = async () => {
    try {
        await mongoose.connect( config.mongodb_cnn_prod ,{
            maxPoolSize: 10,
            autoIndex:false,
            serverSelectionTimeoutMS: 10000,
            socketTimeoutMS: 45000,
            family: 4
        })
        console.log('Base de datos conectada 👌')
    } catch ( err ) {
        console.error( err )
        throw new Error( 'Error al iniciar la base de datos 🚨' )
    }
}

module.exports = {
    dbConnect
}