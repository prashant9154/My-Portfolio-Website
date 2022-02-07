const express = require("express");
const app = express();
const hbs = require('hbs');
const path = require("path");

const port = process.env.PORT || 8000;

const staticPath = path.join(__dirname, "../public")
const templatePath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")

app.set("view engine", "hbs");
app.set('views', templatePath);
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));

//routing
app.get('/', (req, res) => {
    res.render("index");
});

app.get('/myWork', (req, res) => {
    res.render("myWork");
});

app.get('/myResume', (req, res) => {
    res.render("myResume");
});

app.get('*', (req, res) => {
    res.send('Oops! Page Not Found');
});


app.listen(port, () => {
    console.log(`listening at port ${port}`);
})