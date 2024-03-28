const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const TExt = require('../schema/userSchema')
const requires = async (req,res,next) => {
    const { authorization } = req.headers
    if (!authorization) {
        return res.status(401).json({error: 'Invalid authorization'})
        
    }
    const token = authorization.split(" ")[1]
    
    try {
        const { _id } = jwt.verify(token, process.env.SECRET)
        req.user = await TExt.findOne({_id}).select("_id")
        next()
    }
    catch (error) {
        console.log(error)
        return res.status(401).json({error: 'Invalid token'})
    }
}
module.exports = {requires}
