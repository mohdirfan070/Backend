require('dotenv').config();

const express = require('express');
const app = express();

// Cross Origin Setup
const cors = require('cors');
app.use(cors());

// DB Connections
const ConnectDB  = require('./controller/mongoose.js');
ConnectDB(); 

//Parsing the data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Requriing All Routes
const homeRoute = require('./routes/home.js');

// All Middlewears
app.use('/',homeRoute);

app.get('/end',(req,res)=>{
    process.exit(0);
})

app.listen(process.env.PORT,(req,res)=>{
    console.log("Listenning on PORT:"+process.env.PORT);
})
