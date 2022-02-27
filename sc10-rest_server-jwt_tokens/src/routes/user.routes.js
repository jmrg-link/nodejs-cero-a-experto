// users - router
const { Router } = require( "express" );
const { check } = require( 'express-validator' )
const { validationFields } = require( "../middlewares/validationFields" );
const { isValidRole , isExistEmail , isExistUserById } = require( "../helpers/" );
const {
          usersGet ,
          usersPut ,
          usersPatch ,
          usersPost ,
          usersDelete ,
      } = require( "../controllers" );

const router = Router();

//GET ALL USERS
router.get( "/" , usersGet );

//PUT : UPDATE USER
router.put( "/:id" , [
    check( 'id' , 'Id is not valid' ).isMongoId() ,
    check( 'id' ).custom( isExistUserById ) ,
    check( 'role' ).custom( isValidRole ) ,
    validationFields
] , usersPut );

//PATCH :
router.patch( "/" , usersPatch );

//POST: CREATE USERS
router.post( "/" , [
    check( 'name' , 'Name is required' ).not().isEmpty() ,
    check( 'lastname' , 'Lastname is required' ).not().isEmpty() ,
    check( 'password' , 'Password is required' ).not().isEmpty() ,
    check( 'password' , 'Password required min:6 letters & max:16 letters ' ).isLength( { min: 6 , max: 16 } ) ,
    //check( 'role' , 'The role is not allowed ' ).isIn( [ 'ADMIN_ROLE' , 'USER_ROLE' ] ) ,
    check( 'email' ).custom( isExistEmail ) ,
    check( 'email' , 'Please send valid email format.' ).isEmail() ,
    check( 'role' ).custom( isValidRole ) ,
    validationFields
] , usersPost );

//DELETE :
router.delete( "/:id" , [
    check( 'id' , 'Id is not valid' ).isMongoId() ,
    check( 'id' ).custom( isExistUserById ) ,
    validationFields
] , usersDelete );

module.exports = router;
