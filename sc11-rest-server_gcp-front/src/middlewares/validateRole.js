const { response , request } = require( 'express' )

const isAdminRole = ( req = request , res = response , next ) => {
    if ( !req.user ) {
        return res.status( 500 ).json( {
            msg: 'You want to verify the role without validating the token first.'
        } )
    }

    const { role , name , email } = req.user
    if ( role !== 'ADMIN_ROLE' ) {
        return res.status( 401 ).json( {
            msg: `Name: ${ name }, with Email: ${ email }, user not administrator - request denied`
        } )
    }
    next()
}

const userHashRole = ( ...role ) => {
    return ( req , res = response , next ) => {
        if ( !req.user ) {
            return res.status( 500 ).json( {
                msg: 'You want to verify the role without validating the token first.'
            } )
        }
        if ( !role.includes( req.user.role ) ) {
            return res.status( 401 ).json( {
                msg: `This service is required this role ${ role } `
            } )
        }
        //console.log(role, req.user.role)
        next()
    }
}

module.exports = {
    isAdminRole ,
    userHashRole
}