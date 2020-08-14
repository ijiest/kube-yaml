const https = require("https"), fs = require("fs");
const express = require("express");
const logger = require("morgan");

const options = {
  key: fs.readFileSync("./cert/tls.key"),
  cert: fs.readFileSync("./cert/tls.crt")
}

const app = express();

app.use(logger("common"));

app.use((req, res) => {
  res.writeHead(200);
  res.end("hello world\n");
});

app.listen(8080);

https.createServer(options, app).listen(8443);
