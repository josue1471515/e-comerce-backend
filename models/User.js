const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

let User = new Schema({
    userName: {type:String,required:true},
    email: {type:String,required:true},
    password: {type:String,required:true},
    state: {type:Boolean,default:true},
});

module.exports = mongoose.model('Users',User);