const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bear',{useNewUrlParser:true})
.then(db=>console.log('connected to database'))
.catch(err =>console.log('Cant connection :' + err));