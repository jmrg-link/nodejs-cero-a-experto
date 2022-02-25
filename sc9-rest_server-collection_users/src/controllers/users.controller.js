// users - controllers
const { response , request } = require( "express" );
const bcryptjs = require( 'bcryptjs' )
const User = require( '../models/user' )

const usersGet = ( req = request , res = response ) => {
    const { q , name = "no name" , apikey , page = 1 , limit = 10 } = req.query;
    res.json( {
        msg: "get api - controller" ,
        q ,
        name ,
        apikey ,
        page ,
        limit
    } );
};

const usersPut = ( req , res = response ) => {
    const { id } = req.params;
    res.json( {
        msg: "put api - controller" ,
        id ,
    } );
};

const usersPatch = ( req , res = response ) => {
    res.json( {
        msg: "patch api - controller" ,
    } );
};

// POST : create Users
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
