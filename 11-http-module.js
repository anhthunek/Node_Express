const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("This is home page");
  }
  if (req.url === "/about") {
    res.end("This is a short history")
  }
  res.end("Hello")
});

server.listen(5000);
