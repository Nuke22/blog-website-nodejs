const express = require("express")
const bodyParser = require("body-parser")
const ejs = require('ejs')
const app = express()
const port = 3000
let dataArray = []
const aboutUs = {"About us": "Lorem orem ipsum dolor sit amet, consectetur adipiscing elit. In nec vehicula arcu. Donec in nisl aliquet, interdum mi nec, tincidunt purus. Maecenas lacinia vel arcu in aliquet. Nunc laoreet nec massa vitae tincidunt. Nam elementum, ante nec dapibus hendrerit, felis risus tristique nunc, quis fermentum turpis felis et justo. Duis rutrum tellus vitae lacinia rutrum. Nunc scelerisque lectus ex, quis tincidunt metus varius eleifend.\n" +
        "\n" +
        "Nunc euismod justo eu eros placerat placerat. Phasellus sollicitudin rhoncus felis accumsan fermentum. Aliquam erat volutpat. Donec dui nunc, lobortis at volutpat a, ultrices eu ante. Integer non accumsan sem. Nullam sed ligula quis orci mollis placerat. Maecenas iaculis bibendum purus, id gravida enim maximus sed. Vestibulum quis tellus vitae enim sagittis maximus ut quis nibh. Phasellus non mauris purus. Pellentesque libero ligula, sollicitudin non lectus fermentum, porta auctor justo. Mauris eu eros orci. Vivamus accumsan, lorem sit amet tincidunt commodo, dolor lacus auctor sem, quis laoreet sapien est quis velit.\n" +
        "\n" +
        "Maecenas cursus malesuada"}
const contactUs = {"Contact Us": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec vehicula arcu. Donec in nisl aliquet, interdum mi nec, tincidunt purus. Maecenas lacinia vel arcu in aliquet. Nunc laoreet nec massa vitae tincidunt. Nam elementum, ante nec dapibus hendrerit, felis risus tristique nunc, quis fermentum turpis felis et justo. Duis rutrum tellus vitae lacinia rutrum. Nunc scelerisque lectus ex, quis tincidunt metus varius eleifend.\n" +
        "\n" +
        "Nunc euismod justo eu eros placerat placerat. Phasellus sollicitudin rhoncus felis accumsan fermentum. Aliquam erat volutpat. Donec dui nunc, lobortis at volutpat a, ultrices eu ante. Integer non accumsan sem. Nullam sed ligula quis orci mollis placerat. Maecenas iaculis bibendum purus, id gravida enim maximus sed. Vestibulum quis tellus vitae enim sagittis maximus ut quis nibh. Phasellus non mauris purus. Pellentesque libero ligula, sollicitudin non lectus fermentum, porta auctor justo. Mauris eu eros orci. Vivamus accumsan, lorem sit amet tincidunt commodo, dolor lacus auctor sem, quis laoreet sapien est quis velit.\n" +
        "\n" +
        "Maecenas cursus malesuada "}

app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))


app.get("*", (req, res) => {
    let options = {}
    let renderContent = true
    switch (req.url) {
        case "/":
            options = {data: dataArray}
            break
        case "/about-us":
            options = {data: aboutUs}
            break
        case "/contact-us":
            options = {data: contactUs}
            break
        case "/create-node":
            renderContent = false
            res.render("create-node")
            break
        case "/favicon.ico":
            renderContent = false
            break
        default:
            for (let i = 0; i < dataArray.length; i++){
            if (req.url === dataArray[i].route) {
                console.log("if statement was triggered!")
                renderContent = false
                options = {data: dataArray[i]}
                res.render("node", options)
            }
        }

    }
    if (renderContent) {
        res.render("index", options)
    }
})

app.post("/create-node", (req, res) => {
    let title = req.body.title
    let text = req.body.text
    let titleRoute = "/" + title.toLowerCase()
    titleRoute = titleRoute.replace(/ /g, "-")
    console.log(titleRoute)
    dataArray.push({title: title, text: text, route: titleRoute})
    console.log(dataArray)
    res.redirect('/')
})
app.listen(port, () => {
    console.log("listening to port: " + port)
})