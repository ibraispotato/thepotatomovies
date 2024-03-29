const Texter = require('../schema/schemaTexts')
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const user = require("../schema/userSchema")
require("dotenv").config()
////
const createToken = (_id) => {
    return jwt.sign({_id},process.env.SECRET, {expiresIn:"3d"})
}
////createText
const CreateText = async (req,res) => {
    const { text } = req.body
    const { authorization } = req.headers
    const { values } = req.headers
    const { keys } = req.headers



    try {
        const theId = authorization.split(" ")[2]
        const TheTokenOfTheUser = keys
        const theNameOfTheReview = values
        
        const texts = await Texter.create({theNameOfTheReview,text,theId,TheTokenOfTheUser})
        
        res.status(200).json(texts)
    }
    catch (err) {
        res.status(400).json({error:err.message})
    }
}

///GetAllText

const GetAllText = async (req, res) => {
    const { authorization } = req.headers

    const theId = authorization.split(" ")[1]


   
    console.log(theId)
    
    const text = await Texter.find({theId}).sort({ createdAt: -1 })
    res.status(200).json(text)
}

///getOnetext

const GetOnetext = async (req, res) => {
    const { id } = req.params
    

    const text = await Texter.findById(id)
    if (!text) {
        return res.status(404).json({ error: 'Not Found' })
        
    }
    res.status(200).json(text)

}

////getOneAndDelete
const GetOneAndDelete = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Not Found' })
    }
    const text = await Texter.findOneAndDelete({ _id: id })
    if (!text) {
        return res.status(404).json({ error: 'Not Found' })
    }
    res.status(200).json(text)
}

///getoneAndUpdate

const GetOneAndUpdate = async (req,res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Not Found' })
    }
    const text = await Texter.findOneAndUpdate({ _id: id }, {
        ...req.body
    })
    if (!text) {
        return res.status(404).json({ error: 'Not Found' })
    }
    res.status(200).json(text)
}
module.exports = {GetOneAndUpdate,GetOneAndDelete,GetOnetext,CreateText,GetAllText}