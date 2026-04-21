console.log("web Serverni boshlash");
const express = require("express");
const app = express();
const PORT = 3000;
const http = require("http");

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

app.get("/", function (req, res) {
    res.render("harid");
});

const server = http.createServer(app);
server.listen(PORT, function ()  {
    console.log(`Server is running successfully on port ${PORT}`);
});  