const database = require('./database');
const express = require('express');
const ejs = require('ejs');
const pageRoute= require('./routes/pageRoute');
const projectRoute= require('./routes/projectRoute');
const fileUpload = require('express-fileupload');

const app= express();

//template engine
app.set('view engine', 'ejs');

//middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());

//Routes
app.use('/',pageRoute);
app.use('/project',projectRoute);



const port= process.env.PORT || 3000;
app.listen(port, (err)=>{
    if (err) throw err;
    console.log("app started. port:"+port);
})