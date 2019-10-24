const express = require(`express`)
const router = express.Router()
const User = require(`../models/users`)



router.get(`/new`, (req, res) => {
	res.render(`new.ejs`)
})







module.exports = router;