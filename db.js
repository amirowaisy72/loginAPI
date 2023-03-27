const mongoose = require('mongoose');
// const url = 'mongodb://0.0.0.0:27017/fb';
const url = "mongodb+srv://amirowaisy72:iVVKYSj5rugATyVg@cluster0.mpb1bfz.mongodb.net/login"
mongoose.set('strictQuery', false);

const connecToMongoose = ()=>{
    mongoose.connect(url);
};

module.exports = connecToMongoose;