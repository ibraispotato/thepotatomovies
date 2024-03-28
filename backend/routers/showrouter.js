
const {getallShows,deleteShows,CreateSHows} = require("../controllers/SHowControllers")
const {requires}  = require('../middleware/middleware')
const express = require('express')
const routes = express.Router()



routes.use(requires)

routes.get('/', getallShows)
routes.post('/', CreateSHows)
routes.delete('/:id', deleteShows)
module.exports = routes