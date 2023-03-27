const mongoose = require('mongoose');
const { Schema } = mongoose;


const LoginSchema = new Schema({
    //Primary key --> Foriegn Key Definition
    // user:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'model name'
    // },
    //All required fields here
    username:{
        type: String
    },
    password:{
        type: String
    },
    date:{
        type: Date,
        default: Date.now
    }
  });

  module.exports = mongoose.model('login', LoginSchema);