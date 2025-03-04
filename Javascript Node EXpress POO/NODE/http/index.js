const { createServer } = require("http");
let server = createServer((req, res) => {
  res.writeHead(200, { "Constet-Type": "text/html" });
  res.write(`Hello word`);
  res.end();
});

server.listen(8000);
console.log("porta 8000");
