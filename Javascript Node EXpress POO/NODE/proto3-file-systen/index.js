let { readFile, writeFile } = require("fs");

readFile("arquivo.txt", "utf8", (error, text) => {
  if (error) {
    throw error;
  } else {
    console.log(text);
  }
});
let textoRecebido;
writeFile("arquivo.txt", "texto por wruite file", (error) => {
  if (error) {
    throw error;
  } else {
    console.log("escreveu no arquivo");
  }
});
