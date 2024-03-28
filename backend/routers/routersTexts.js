const express = require('express');
const { GetOneAndUpdate, GetOneAndDelete, GetOnetext, CreateText, GetAllText } = require("../controllers/controllersTexts")
const router = express.Router()
const {requires}  = require('../middleware/middleware')

// router.use(requires)

router.get("/", GetAllText)
router.get("/:id",GetOnetext)
router.post("/", CreateText)
router.delete("/:id", GetOneAndDelete)
// router.patch("/:id", GetOneAndUpdate)
module.exports = router