const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const validater= require("validator")
const schema = new Schema({
    username: {
        type: String,
        required:true,
        
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        
    }
})

schema.statics.signup = async function(username,email, password) {
    if (!username||!email || !password) {
        throw Error('Please provide a valid inputs!')
    }
    const user = await this.findOne({email})
    const namexists = await this.findOne({username})
    if (user) {
        throw Error("Email already exists!")
        
    }
    if (namexists) {
        throw Error("Username already exists!")
        
    }
    if (!validater.isEmail(email)) {
        throw Error("email must be a valid")
    }
    if (!validater.isStrongPassword(password)) {
        throw Error("Password must be strong!")
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    const users = await this.create({ username, email, password: hash })
    return users
}
schema.statics.login = async function(email, password) {
    if (!email || !password) {
        throw Error('Please provide a valid inputs!')
    }
    const user = await this.findOne({ email })
    
    if (!user) {
        throw Error("incorrect Email!")
        
    }
    const compare = await bcrypt.compare(password,user.password)
    if (!compare) {
        throw Error("incorrect password!")
        
    }
    return user
}
schema.statics.forgotpassword = async function (email) {
    if (!email) {
        throw Error("Email must be provided")
    }
    const user = await this.findOne({ email })
    if (!user) {
        throw Error("Email Not Found!")
        
    }
    if (!validater.isEmail(email)){
        throw Error("email must be a valid")
        
    }
    return user
}
module.exports = mongoose.model("Users",schema)