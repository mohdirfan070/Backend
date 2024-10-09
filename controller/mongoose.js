const mongoose = require('mongoose');

const ConnectDB = ()=>{

    mongoose.connect(process.env.MONGODB_URL).then((res)=>{
       
    }).catch((err)=>{
        console.log('Mongoose me error hai')
        console.log(err);
    });
    
    mongoose.connection.on('connected', () =>  console.log('Connected to DB'));
    mongoose.connection.on('disconnected', () => console.log('DB disconnected'));
};

module.exports= ConnectDB;