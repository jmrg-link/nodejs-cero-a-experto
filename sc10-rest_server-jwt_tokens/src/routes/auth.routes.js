// auth - router
const { Router } = require( "express" );
const { check } = require( 'express-validator' )
const { login } = require( "../controllers" );
const { validationFields } = require( "../middlewares/validationFields" );
const { isExistEmail } = require( "../helpers" );

const router = Router()

//POST: LOGIN USER
router.post('/login',[
    check( 'email' , 'Please send valid email format.' ).isEmail() ,
    check('password','Password its not empty').not().isEmpty(),
    validationFields
], login)


module.exports = router