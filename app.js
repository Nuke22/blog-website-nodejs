const express = require("express")
const bodyParser = require("body-parser");
const app = express()
const port = 3001
let dataArray = {"Home page": "Welcome to the home page!",
                    "some other lorem": "lorem"}

app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))


app.get("*", (req, res) => {
    switch (req.url) {
        case "/":
            res.render("index", {data: dataArray})
            break
        case "/about-us":
            break
        case "/contact-us":
            break
        default:

    }
})
// res.render("index")
app.listen(port, () => {
    console.log("listening to port: " + port)
})