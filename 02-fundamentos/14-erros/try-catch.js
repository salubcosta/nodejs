const x = 10;

try {
  x = 1;
} catch (err) {
  console.log(`Something went wrong. Error: ${err}`);
}

console.log("Continuando o código"); // O Erro NÃO quebra a aplicação
