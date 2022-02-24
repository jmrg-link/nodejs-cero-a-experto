// users - controllers

const { response , request } = require( "express" );

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

const usersPost = ( req , res = response ) => {
    const { name , age } = req.body;
    res.json( {
        msg: "post api - controller" ,
        age ,
        name ,
    } );
};

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
