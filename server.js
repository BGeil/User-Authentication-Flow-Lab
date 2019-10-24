const express = require(`express`)
const app = express()

require(`./db/db`)



//controllers
const usersController = require(`./controllers/users.js`)
app.use(`/`, usersController)







//home page
app.get(`/`, (req, res) => {
	res.render(`index.ejs`)
})

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`App is listening on port: ${PORT}`);
})