const FavText = require("../schema/schemaFav")
const mongoose = require("mongoose");


const addSchema = async (req, res) => {
    const { photoImg, nameOfTheMovie, raitingOfTheMovie, theId, theDatOfTheMovie,IdOfTheMovie } = req.body
    const user_id = req.user._id
    // const ComboUserIdAndIdMovie = req.user._id+theId

    // console.log(ComboUserIdAndIdMovie)
    try {
       
        const findones = await FavText.findOne({ theId })
        if (findones) {
        throw Error("Already exists in favorites list")
        
        }
        else {
            const text = await FavText.create({ photoImg, nameOfTheMovie,IdOfTheMovie, raitingOfTheMovie,theId,theDatOfTheMovie,user_id })
        res.status(200).json(text)
        }
        
    }
    catch (err) {
        res.status(400).json({error:err.message})
    }
}

const GetYourFav = async (req, res) => {
    const user_id = req.user._id
    const getfav = await FavText.find({user_id}).sort({ createdAt: -1 })
    res.status(200).json(getfav)
}

const deleteFav = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Not Found' })
        
    }
    const deletext = await FavText.findOneAndDelete({_id:id})
    if (!deletext) {
        return res.status(404).json({ error: 'Not Found' })
        
    }
    res.status(200).json(deletext)
    
}
module.exports = {deleteFav,GetYourFav,addSchema}