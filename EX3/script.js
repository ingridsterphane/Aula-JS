const campo1 = document.querySelector("#campo1");
const campo2 = document.querySelector("#campo2");
const seletor = document.querySelector("#operacao");
const botao = document.querySelector("#igual");
const resposta = document.querySelector("#resposta");

botao.addEventListener("click",calcular);

function calcular() {
    const valor1 = parseInt(campo1.value);
    const valor2 = parseInt(campo2.value);
    const operacao = seletor.value;
    if(operacao === "soma")
    resposta.innerHTML = valor1 + valor2;
    else if(operacao === "subtracao")
    resposta.innerHTML = valor1 - valor2;
    else if(operacao === "multiplicacao")
    resposta.innerHTML = valor1 * valor2;
    else if(operacao === "divisao")
    resposta.innerHTML = valor1 / valor2;
}

/*  === significa que o valor e o tipo são iguais ou seja igualdade;
else = se não;
else if = se não, se;
textContent = texto que aparece no elemento é o mesmo que innerText 
a diferença é que o textContent não pega o estilo do elemento;
parseInt = converte uma string em um número inteiro;
*/ 

/*
botao.addEventListener("click", function () {
  const valor1 = Number(campo1.value);
  const valor2 = Number(campo2.value);
  const operacao = seletor.value;

  if (operacao === "soma") {
    resposta.innerHTML = valor1 + valor2;
  } else if (operacao === "subtracao") {
    resposta.innerHTML = valor1 - valor2;
  } else if (operacao === "multiplicacao") {
    resposta.innerHTML = valor1 * valor2;
  } else if (operacao === "divisao") {
    resposta.innerHTML = valor1 / valor2;
  }
});
*/