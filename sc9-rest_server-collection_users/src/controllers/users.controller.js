// users - controllers
const { response , request } = require( "express" );
const bcryptjs = require( 'bcryptjs' )
const User = require( '../models/user' )


// GET ALL USER
const usersGet = async ( req = request , res = response ) => {
    const { limit = 5 , from = 0 } = req.query
    const users = await User.find()
        .limit( Number( limit ) )
        .skip(Number(from))

    res.json( {
        users
    } );
};

// PUT : CREATE USER
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

// DELETE : delete user :id
const usersDelete = ( req , res = response ) => {
    res.json( {
        msg: "delete api - controller" ,
    } );
};

module.exports = {
    usersGet ,
    usersPut ,
    usersPatch ,
    usersPost ,
    usersDelete ,
};
