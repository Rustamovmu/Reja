console.log("web Serverni boshlash");
const express = require("express");
const app = express();
const PORT = 3000;
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf-8", function (err, data) {
    if (err) {
        console.log("ERROR:", err);
        return;
    } else {
        user = JSON.parse(data)
    }
});
        
        

// 1: Kirish codelari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session code

// 3: views codelari
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Router codelari
app.post("/create-item", function (req, res) {
    console.log(req.body);
    res.json({ test: "Item created successfully" });
});

app.get("/author", function (req, res) {
    res.render("author", {
        user: user
    });
});

app.get("/", function (req, res) {
    res.render("Reja");
});

const server = http.createServer(app);
server.listen(PORT, function ()  {
    console.log(`Server is running successfully on port ${PORT}, http://localhost:${PORT}`);
});