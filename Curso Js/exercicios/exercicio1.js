const nome = 'Igor';
const sobrenome = 'Vidal'
const idade = 26;
const peso = 75;
const altura = 1.76;
let IMC;
let anoNascimento;

IMC = peso / (altura * altura);

console.log(`${nome} ${sobrenome}, tem ${idade} anos, pesa: ${peso}kg `);
console.log(`tem ${altura} de altura e seu IMC é de ${IMC}`);

dateObject = new Date();
anoNascimento = dateObject.getFullYear() - idade;

console.log(`${nome}, nasceu em ${anoNascimento - 1}.`);


