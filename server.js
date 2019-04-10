const express = require('express');
const app = express();
const bobyParser = require('body-parser');
const cors = require('cors')
const path = require('path');
const methodOverride = require('method-override');
require('./connection');
//middleware
app.use(cors());
app.use(bobyParser.json());

///
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

//Routes
app.use(require('./routes/users'));
//server port Conf
const PORT = 5000;

app.listen(PORT,function(){
    console.log('Server is Running: ',PORT);
})