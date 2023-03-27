const connecToMongoose = require('./db');
const express = require('express');
const app = express();
connecToMongoose();
var cors = require('cors');


app.use(express.json());
app.use(cors());
//Available Routes
app.use('/login', require('./routes/allRoutes.js'));

app.listen(5000, ()=>{
    console.log('listening at port 5000');
})
