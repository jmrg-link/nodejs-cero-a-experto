const { model , Schema } = require( "mongoose" );

const UserSchema = Schema( {
        name: {
            type: String ,
            required: [ true , 'Name is required' ] ,
            trim: true
        } ,
        lastname: {
            type: String ,
            required: [ true , 'Lastname is required' ] ,
            trim: true
        } ,
        email: {
            type: String ,
            required: [ true , 'Email is required' ] ,
            unique: true ,
            trim: true ,
            index: true
        } ,
        password: {
            type: String ,
            required: true ,
            trim: true
        } ,
        img: {
            type: String ,
            trim: true
        } ,
        role: {
            type: String ,
            required: true ,
            enum: [ 'ADMIN_ROLE' , 'USER_ROLE' , 'SALES_ROLE' ] ,
            default: 'USER_ROLE'
        } ,
        status: {
            type: Boolean ,
            default: true
        } ,
        age: {
            type: Number ,
            trim: true
        } ,
        google: {
            type: Boolean ,
            default: false
        }
    } ,
    {
        timestamps: true ,
    } )

UserSchema.methods.toJSON = function () {
    const {__v, password, ...objUser} = this.toObject()
    return objUser
}
module.exports = model( 'Users' , UserSchema )