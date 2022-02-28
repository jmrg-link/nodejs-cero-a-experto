// role - models
const { model , Schema } = require( "mongoose" );

const RoleSchema = Schema( {
    role:{
        type:String,
        require:[true,'Role is required'],
        trim:true,
    }
})

module.exports = model( 'Roles',RoleSchema )