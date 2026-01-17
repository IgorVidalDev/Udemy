const numero = Number(prompt('escolha um número: '));

const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = `${numero} <br />`
texto.innerHTML += `${numero} é inteiro?  ${Number.isInteger(numero)} <br />`;
texto.innerHTML += `é NaN? ${isNaN(numero)}`
