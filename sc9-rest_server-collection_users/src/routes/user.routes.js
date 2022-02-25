// users - router
const { Router } = require( "express" );
const { check } = require( 'express-validator' )
const { validationFields } = require( "../middlewares/validationFields" );
const { isValidRole , isExistEmail } = require( "../helpers/" );
const {
          usersGet ,
          usersPut ,
          usersPatch ,
          usersPost ,
          usersDelete ,
      } = require( "../controllers" );

const router = Router();

//GET :
router.get( "/" , usersGet );

//PUT :
router.put( "/:id" , usersPut );

//PATCH :
router.patch( "/" , usersPatch );

//POST: USERS
router.post( "/" , [
    check( 'name' , 'Name is required' ).not().isEmpty() ,
    check( 'lastname' , 'Lastname is required' ).not().isEmpty() ,
    check( 'password' , 'Password is required' ).not().isEmpty() ,
    check( 'password' , 'Password required min:6 letters & max:16 letters ' ).isLength( { min: 6 , max: 16 } ) ,
    //check( 'role' , 'The role is not allowed ' ).isIn( [ 'ADMIN_ROLE' , 'USER_ROLE' ] ) ,
    check('email').custom(isExistEmail),
    check( 'email' , 'Please send valid email format.' ).isEmail() ,
    check( 'role' ).custom( isValidRole ) ,
    validationFields
] , usersPost );

//DELETE :
router.delete( "/" , usersDelete );

module.exports = router;
