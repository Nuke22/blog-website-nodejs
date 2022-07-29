const express = require("express")
const bodyParser = require("body-parser");
const app = express()
const port = 3001
let dataArray = {"Home page": "Welcome to the home page!",
                    "some other lorem": "lorem"}
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
            options = //todo: page for creation nodes
        default:
            //todo: new nodes catch by adding their titles into the array
    }
    res.render("index", options);

})
// res.render("index")
app.listen(port, () => {
    console.log("listening to port: " + port)
})