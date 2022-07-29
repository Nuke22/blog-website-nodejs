const express = require("express")
const bodyParser = require("body-parser");
const app = express()
const port = 3001

app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.render("index")
})
app.listen(port, () => {
    console.log("listening to port: " + port)
})