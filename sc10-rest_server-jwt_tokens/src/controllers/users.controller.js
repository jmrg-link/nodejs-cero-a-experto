// users - controllers
const { response , request } = require( "express" );
const bcryptjs = require( 'bcryptjs' )
const User = require( '../models/user' )


// GET ALL USER
const usersGet = async ( req = request , res = response ) => {
    const { limit = 5 , from = 0 } = req.query
    const query = { status: true }

    const [ total , users ] = await Promise.all( [
        User.countDocuments( query ) ,
        User.find( query )
            .limit( Number( limit ) )
            .skip( Number( from ) )
    ] )

    res.json( {
        total ,
        users
    } );
};


// PUT : MODIFY USER
const usersPut = async ( req , res = response ) => {
    const { id } = req.params
    const { _id , password , google , email , ...rest } = req.body

    if ( password ) {
        // encrypt password -> user.password (10 salt)
        const salt = bcryptjs.genSaltSync( 10 )
        rest.password = bcryptjs.hashSync( password , salt )
    }
    const user = await User.findByIdAndUpdate( id , rest , { new: true } )

    res.json( {
        msg: "put api - controller" ,
        user ,
    } );
};

const usersPatch = ( req , res = response ) => {
    res.json( {
        msg: "patch api - controller" ,
    } );
};

// POST : CREATE USER
const usersPost = async ( req , res = response ) => {
    const { name , lastname , email , password , role } = req.body;
    const user = new User( { name , lastname , password , email , role } )

    // encrypt password -> user.password (10 salt)
    const salt = bcryptjs.genSaltSync( 10 )
    user.password = bcryptjs.hashSync( password , salt )

    await user.save()
    res.json( { user } );
};

// DELETE : DELETE USER ID
const usersDelete = async ( req , res = response ) => {
    const { id } = req.params
    // const user = await User.findByIdAndDelete(id) // borrar usuario
    const user = await User.findByIdAndUpdate( id , { status: false } )
    const userAuthenticated = req.user

    res.json( {
        user ,
        userAuthenticated
    } );
};

module.exports = {
    usersGet ,
    usersPut ,
    usersPatch ,
    usersPost ,
    usersDelete ,
};
