const Role = require( "../models/role" );
const User = require( "../models/user" );

const isValidRole = async ( role = '' ) => {
    const roleExist = await Role.findOne( { role } )
    if ( !roleExist ) {
        throw new Error( `Error in role : ${ role } not registered in bd` )
    }
}

const isExistEmail = async (email='') => {
    const existEmail = await User.findOne({email})
    if ( existEmail ) {
        throw new Error( `Error in email: ${email} is registered in bd` )
    }
}

const isExistUserById = async (id) => {
    const existUserById = await User.findById(id)
    if ( !existUserById ) {
        throw new Error( `Error in ID : ${id} is not registered in bd` )
    }
}

module.exports = {
    isValidRole,
    isExistEmail,
    isExistUserById
}