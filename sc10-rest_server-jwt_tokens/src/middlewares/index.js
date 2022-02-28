const  validateJWT  = require( './validate-JWT' )
const  isAdminRole  = require( './validateRole' )
const  userHashRole  = require( './validateRole' )
const  validationFields  = require('./validationFields')


module.exports = {
    ...validateJWT,
    ...userHashRole,
    ...isAdminRole,
    ...validationFields
}