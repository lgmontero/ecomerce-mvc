const express = require('express');
const path = require("path");
const app = express();
const rutasMain = require('./routes/main.js')
const publicFolder = path.resolve(__dirname,'./public');

app.listen(3000, ()=>{
    console.log('Servidor funcionando');
    });
app.use(express.static(publicFolder));
app.use('/',rutasMain);
app.use('/.',rutasMain);