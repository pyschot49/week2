//test
const myhttp = require("http");
const fs = require('fs').promises;

const port = "80";
const host = "0.0.0.0";
const httpRequestResponse = function (req, res){

  fs.readFile(__dirname + "/index.html").then( contents =>{
    res.setHeader("Content-Type", "text/html; charset=UTF-8");
    res.writeHead(200);

    res.end(contents);

  })








};

const myserver = myhttp.createServer(httpRequestResponse);

myserver.listen(port, host, function(){console.log(`Okay, server started on http://${host}:${port}`);});
