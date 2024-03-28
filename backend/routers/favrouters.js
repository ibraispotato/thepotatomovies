const { deleteFav, GetYourFav, addSchema } = require('../controllers/FavControll')

const express = require('express')
const router = express.Router()
const {requires}  = require('../middleware/middleware')

router.use(requires)

router.get("/",GetYourFav)
router.post("/",addSchema)
router.delete("/:id", deleteFav)


module.exports = router