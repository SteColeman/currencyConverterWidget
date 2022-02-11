 const express = require("express");
 //import express from 'express';
 // import secure from 'ssl-express-www'

 const app = express();

 // app.use(secure);

 // use the express-static middleware
 app.use(express.static("public"));


 // define the first route
 app.get("/", function (req, res) {
   res.send("/public/index.html");
 });

 // start the server listening for requests
 app.listen(process.env.PORT || 3000,
   () => console.log("Server is running... http://localhost:3000"));