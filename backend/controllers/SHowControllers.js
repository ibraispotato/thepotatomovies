const FavControllers = require("../schema/schemaShows")
const mongoose = require("mongoose");


const CreateSHows = async (req, res) => {
    
    const { photoImg, nameOfTheShow, raitingOfTheShow, theId, theDatOfTheShow,IdOfTheShow  } = req.body
    
    const user_id = req.user._id
    
    try {
        const favShow = await FavControllers.findOne({ theId })
        if (favShow) {
        throw Error("Already exists in favorites list")
            
        }
        else {
            const show = await FavControllers.create({ photoImg, nameOfTheShow,IdOfTheShow, raitingOfTheShow, theId, theDatOfTheShow,user_id })
        res.status(200).json(show)
        }
    
    }
    catch (err) {
        res.status(400).json({error:err.message})
    }
}
const getallShows = async (req, res) => {
    const user_id = req.user._id
    
    const getallShow = await FavControllers.find({user_id}).sort({ createdAt: -1 })
    res.status(200).json(getallShow)
}
const deleteShows = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Not Found' })
        
    }
    const show = await FavControllers.findOneAndDelete({ _id: id })
    if (!show) {
        return res.status(404).json({ error: 'Not Found' })
        
    }
    res.status(200).json(show)
}
module.exports = {getallShows,deleteShows,CreateSHows}