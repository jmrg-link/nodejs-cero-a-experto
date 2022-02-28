const { config } = require( '../../config' )
const jwt = require( 'jsonwebtoken' )

const generateJWT = ( uid = '' ) => {
    return new Promise( ( resolve , reject ) => {
        const payload = { uid }
        jwt.sign( payload , config.secretKey , {
            expiresIn: '4h'
        } , ( err , token ) => {
            if ( err ) {
                console.error( err )
                reject( 'token not created' )
            } else {
                resolve( token )
            }
        } )
    } )
}

module.exports = {
    generateJWT
}