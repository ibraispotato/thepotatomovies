const mongoose = require('mongoose');
const User = require('../schema/userSchema');
const jwt = require('jsonwebtoken')
require("dotenv").config()
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');

const CreateToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET,{expiresIn:"3d"})
}

const signupUser = async(req,res) => {
    const { username, email, password } = req.body
    
    try {
        const user = await User.signup(username, email, password)
        const token = CreateToken(user._id)
        res.status(200).json({ username, email, token,user_ids: user._id })
    }
    catch (err) {
        res.status(404).json({error:err.message})
    }
}

const LoginUser = async(req,res) => {
    const {email, password } = req.body
    
    try {
        const user = await User.login(email, password)
        const username = await user.username
        const token = CreateToken(user._id)
        res.status(200).json({username, email, token,user_ids: user._id})
    }
    catch (err) {
        res.status(404).json({error:err.message})
    }
}
const forgotpassword = async (req, res) => {
    const { email } = req.body
    try {
        const user = await User.forgotpassword(email)
        const token = jwt.sign({ _id: user._id }, process.env.SECRET, { expiresIn: "5m" })
        
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
    user: 'ibrapotato@gmail.com',
    pass: 'hxmm taha pcbt ebvo'
}
});

var mailOptions = {
  from: 'ibrapotato@gmail.com',
  to: email,
  subject: 'Reset Password over Here!',
  text: `http://localhost:3000/register/resetpassword/${token}`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    return res.json({message:"error sending email"})

  } else {
    return res.json({status:true, message:"email sent"})

  }
});
    }
    catch (err) {
        res.status(404).json({error:err.message})
    }
}

const reset = async (req,res) => {
    const { token } = req.params
    const { password } = req.body
    console.log(token)
    try {
        const dec = jwt.verify(token, process.env.SECRET)
        const id = dec._id
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)
        await User.findByIdAndUpdate({ _id: id }, { password: hash })
        return res.json({status:true,message:"update"})
    }
    catch (err) {
        res.status(404).json({error:err.message})
        
    }
}
module.exports = {signupUser,LoginUser,reset,forgotpassword}