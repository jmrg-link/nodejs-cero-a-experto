// auth - controllers
const { response , request } = require( "express" );
const User = require( '../models/user' )
const bcryptjs = require( 'bcryptjs' )
const { generateJWT } = require( '../helpers' )

const login = async ( req = request , res = response ) => {
    const { email , password } = req.body
    try {
        const user = await User.findOne( { email } )

        if ( !user ) {
            return res.status( 400 ).json( {
                msg: 'Error: Please check * email * & password'
            } )
        }

        if ( !user.status ) {
            return res.status( 400 ).json( {
                msg: 'Error:Please check email is invalid : status - false'
            } )
        }

        const validPassword = bcryptjs.compareSync( password , user.password )
        if ( !validPassword ) {
            return res.status( 400 ).json( {
                msg: 'Error: Please check email & * password *'
            } )
        }

        const token = await generateJWT( user.id )

        res.json( {
            user ,
            token
        } )
    } catch ( err ) {
        console.error( err )
        return res.status( 500 ).json( {
            msg: 'internal server error : Talk to administrator'
        } )
    }
}
module.exports = {
    login
}