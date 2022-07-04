// tipo de dado
// booleanos

// conversao implicita
const numero = 456
const numero_errado = "456a"
const string = "456"
console.log(numero == string);
console.log(numero === string);

//Number()
console.log(numero+Number(string));
//String()
console.log(String(numero)+string);

// conversao com erro
console.log(Number(numero_errado));