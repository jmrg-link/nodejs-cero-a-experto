const { config } = require( '../../config' )
const { request , response } = require( 'express' )
const jwt = require( 'jsonwebtoken' )
const User = require( '../models/user' )

const validateJWT = async ( req = request , res = response , next ) => {
    const token = req.header( "x-token" )
    if ( !token ) {
        return res.status( 401 ).json( {
            msg: 'Error: token missing in request'
        } )
    }


    try {
        const { uid } = jwt.verify( token , config.secretKey )
        const user = await User.findById( uid )
        if(!user){
            return res.status(401).json({
                msg:'Token not valid - user not exist in DB'
            })
        }
        if(!user.status){
            return res.status(401).json({
                msg:'Token not valid - user status false'
            })
        }
        req.user = user
        next()
    } catch ( err ) {
        console.error( err )
        res.status( 401 ).json( {
            msg: 'Error: Token not valid'
        } )
    }
    console.log( 'token:' , token )

}

module.exports = {
    validateJWT
}