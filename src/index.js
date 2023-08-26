const http = require('http');
const bodyParser = require("body-parser");
// let fs = require('fs');
const express = require("express");
const config = require("./config/config");
const { connectDB } = require("./db/dbConnection");
const routes = require('./routes/v1');


const app = express();

// http.createServer(function (req, res) { 
//     fs.appendFile("test.txt", "hello my name is server...\n", (err, data) => {
//         res.end("Hello from Server Again...heyylooo");
//     });

//     fs.writeFile("text.txt", "Hey serverrrr is good......", (err, data) => {
//         res.end('Hello from Serverrrrrrrrrrrr Again....');
//     });
// }).listen(4000);




// const server = http.createServer((req, res) => {
//     const logs = `${req.url} : new request recieved\n`;
//     fs.appendFile("test.txt", logs, (err, data) => {
//         switch (req.url) {
//             case'/': res.end("This is home page...");
//             break; 
//             case'/about': res.end("This is about page...");
//             break; 
//         }
//     });
// }).listen(5000);


/**
 * allow form-data from body
 * form-data is use for image upload
 * parse application/x-www-form-urlencoded
 */
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * allow json data from body
 * parse application/json
 */
app.use(bodyParser.json());

/** create server using http */
const server = http.createServer(app);

server.listen(config.port, () => {
    console.log("Server is running on port number 4500");
})

/** Database connection */
connectDB();

/* use routes */
app.use("/v1", routes);

/** whenever route not created and you try to use that route then throw error. */
app.use((req, res, next) => {
    next(new Error("Route not found!"));
});