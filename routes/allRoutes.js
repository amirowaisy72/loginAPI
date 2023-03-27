const express = require("express");
const router = express.Router();
const Login = require('../models/Login')

// {Create Operation} Add route/end point description here
router.post('/'  , async (req, res)=>{
  let success = false
  try{
      //store data
      const {username, password} = req.body;  // de-Structure
      let login = await Login.create({
          username:username,
          password: password
      })
      success = true
      res.send({success,login});
  }catch(error){
      res.status(500).json({success,error:error.message});
  }
})

module.exports = router