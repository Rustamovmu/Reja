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
app.get("/Hello", function (req, res) { 
    res.end("<h1 style='background-color: red;'>Hello World by Nathan</h1>");
}); 

app.get("/gift", function (req, res) { 
    res.end("<h1 style='background-color: red;'>you got a gift!</h1>");
});

const server = http.createServer(app);
server.listen(PORT, function ()  {
    console.log(`Server is running successfully on port ${PORT}`);
});  