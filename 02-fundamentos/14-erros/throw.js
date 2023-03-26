const x = "10";

// Checar se x é um número. Se não for, lançar error
if (!Number.isInteger(x)) {
  throw new Error("X não é um número");
}

console.log("Continuando o código"); // O Erro quebra a aplicação
