const campo1 = document.querySelector("#campo1");
const campo2 = document.querySelector("#campo2");
const seletor = document.querySelector("#operacao");
const botao = document.querySelector("#igual");
const resposta = document.querySelector("#resposta");

//botao.addEventListener("click", calcular);

seletor.addEventListener("change", calcular);
campo1.addEventListener("keyup", calcular);
campo2.addEventListener("keyup", calcular);

function calcular() {
    if (campo1.value != "" && campo2.value != "") {
        /*alert("Preencha os campos!");
        return; */
        /*resposta.classList.add("problema");
        resposta.innerHTML = "Campo Vazio";

          setTimeout(()=>{
            resposta.classList.remove("problema");
            resposta.innerHTML = "";
        },2000); */
     // }
    //else {
        const valor1 = parseInt(campo1.value);
        const valor2 = parseInt(campo2.value);
        const operacao = seletor.value;
        if (operacao === "soma")
            resposta.innerHTML = valor1 + valor2;
        else if (operacao === "subtracao")
            resposta.innerHTML = valor1 - valor2;
        else if (operacao === "multiplicacao")
            resposta.innerHTML = valor1 * valor2;
        else if (operacao === "divisao")
            resposta.innerHTML = valor1 / valor2;
    }
}

/* && = e;
!== significa que o valor e o tipo são diferentes ou seja desigualdade;
change = quando o valor do elemento é alterado;
keydown = quando uma tecla é pressionada;
keyup = quando uma tecla é solta;
setTimeout = função que executa uma ação depois de um tempo determinado, ele lê
em milisegundos, ou seja, 1000 milisegundos = 1 segundo;
;
classList.add = adiciona uma classe ao elemento;
 alert = alerta na tela , um prompt de mensagem;
return = retorna um valor;
|| = ou chama-se pipe;
 === significa que o valor e o tipo são iguais ou seja igualdade;
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