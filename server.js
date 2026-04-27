const http = require("http");
const PORT = 3000;
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://rustamov_m_u:Muhammadumar2004$@cluster0.1tginhv.mongodb.net/?appName=Cluster0&authSource=admin&replicaSet=atlas-1l7j8c-shard-0&w=majority";

mongodb.connect(connectionString, {
     useNewUrlParser: true, 
     useUnifiedTopology: true 
    }, function(err, client) {
    if (err) {
        console.log("MongoDB connection error:", err);
    } else {
        console.log("MongoDB connected successfully");
        module.exports = client;
        const app = require("./app");
        const server = http.createServer(app);
        server.listen(PORT, function ()  {
            console.log(`Server is running successfully on port ${PORT}, http://localhost:${PORT}`
            );
        });
    }
});
    
// const server = http.createServer(app);
// server.listen(PORT, function ()  {
//     console.log(`Server is running successfully on port ${PORT}, http://localhost:${PORT}`);
     