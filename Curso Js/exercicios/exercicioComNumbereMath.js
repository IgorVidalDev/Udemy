const {floor, ceil} = Math;

const numero = Number(prompt('escolha um número: '));

const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p>Raiz quadrada: ${Math.sqrt(numero)} </p>`;
texto.innerHTML += `<p>${numero} é inteiro?  ${Number.isInteger(numero)} </p>`;
texto.innerHTML += `<p>é NaN? ${isNaN(numero)} <br />`
texto.innerHTML += `<p>Arredondando para baixo: ${floor(numero)} </p>`;
texto.innerHTML += `<p>Arredondando para cima: ${ceil(numero)} </p>`;
texto.innerHTML += `<p>Com duas casas decimais ${numero.toFixed(2)}</p>`;