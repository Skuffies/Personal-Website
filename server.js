const express = require("express");
const favicon = require('serve-favicon');

// File system
const fs = require("fs");
const path = require("path");

const app = new express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static('public'));
app.use(favicon(path.join(__dirname, 'public', '/images/bracket.png')));

// Home Page
app.get("/", (req, res) => {
    const left_content = fs.readFileSync("content/left-content.html", "utf8");
    const right_content = fs.readFileSync("content/right-content.html");

    res.render("index", {left_content, right_content});
});

// 404 Page
app.get("/*", (req, res) => {
    res.render("404");
});

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})