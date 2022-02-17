const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    res.writeHead(200, { contentType: "text/html" });
    const homePage = fs.readFileSync("dummy.html");
    res.write(homePage);
    res.end();
  } else if (req.url === "/tempImage.jpg") {
    res.writeHead(200, { contentType: "text/png" });
    const img = fs.readFileSync("tempImage.jpg");
    res.write(img);
    res.end();
  } else {
    res.writeHead(404, { contentType: "text/plain" });
    res.write("Page not found :(");
    res.end();
  }
});

server.listen(3000);
