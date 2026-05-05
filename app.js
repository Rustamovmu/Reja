console.log("web Serverni boshlash");
const express = require("express");
const app = express();
const PORT = 3000;
const fs = require("fs");
// const { connect } = require("http2");

let user;
fs.readFile("database/user.json", "utf-8", function (err, data) {
    if (err) {
        console.log("ERROR:", err);
        return;
    } else {
        user = JSON.parse(data)
    }
});
     

// MongoDB chaqirish
const db = require("./server").db();
const mongodb = require("mongodb");
        

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
    console.log("user entered /create-item");
    // console.log(req.body);
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({ reja: new_reja }, function (err, data) {
       console.log(data.ops);
       res.json(data.ops[0]);
    });
});

app.post("/delete-item", function (req, res) {
    const id = req.body.id;
    db.collection("plans").deleteOne({ _id: new mongodb.ObjectId(id) }, function (err, data) {
        res.json({ state: "success" });
    });

});

app.post("/edit-item", function (req, res) {
    const data = req.body;
    console.log(data);
    db.collection("plans").findOneAndUpdate(
        { _id: new mongodb.ObjectId(data.id) },
        { $set: { reja: data.new_input } },
        function (err, data) {
            res.json({ state: "success" });
        }
    );
});

app.post("/delete-all", function (req, res) {
    if (req.body.delete_all) {
        db.collection("plans").deleteMany(function () {
            res.json({ message: "hamma rejalar ochirildi " });
        });
    }
});

app.get("/author", function (req, res) {
    res.render("author", {
        user: user
    });
});

app.get("/", function (req, res) {
    console.log("user entered /")
    db.collection("plans").find().toArray(function (err, data) {
        if (err) {
            console.log("Error fetching plans:", err);
            res.end("something went wrong");
        } else {
            res.render("Reja", {
                items: data
            });
        }
    });
});

module.exports = app;

