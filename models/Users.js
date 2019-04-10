const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

let Users = new Schema({
    userName: {type:String,required:true},
    userEmail: {type:String,required:true},
    userPassword: {type:String,required:true},
    userState: {type:Boolean,default:true},
});

module.exports = mongoose.model('Users',Users);