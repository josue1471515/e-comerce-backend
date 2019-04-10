const express = require('express');
const app = express();
const bobyParser = require('body-parser');
const cors = require('cors')
require('./connection');
//middleware
app.use(cors());
app.use(bobyParser.json());

//server port Conf
const PORT = 5000;

app.listen(PORT,function(){
    console.log('Server is Running: ',PORT);
})