let express = require("express");
let app = express();

app.get("/", function (req, res) {
  res.send("Primeira rota com express");
});

app.get("/okay", (req, res) => {
  res.send("Ola planeta");
});

app.listen(9000, function () {
  console.log("na porta 3000");
});
