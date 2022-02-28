const {
          usersGet ,
          usersPut ,
          usersPatch ,
          usersPost ,
          usersDelete ,
      } = require( "./users.controller.js" );
const {
    login
      } = require('./auth.controller.js')

module.exports = {
    usersGet ,
    usersPut ,
    usersPatch ,
    usersPost ,
    usersDelete ,
    login
};
