let botao = document.querySelector("#botao");
botao.style.background = "blue";
let estaQuebrado = false;
let contaCliques = 0;

botao.addEventListener("mouseover", e => {
    if (estaQuebrado === false) {
        botao.style.background = "green";
        botao.style.color = "white";
    }
});

botao.addEventListener("mouseout", e => {
    if (!estaQuebrado)
        botao.style.background = "blue";
});

botao.addEventListener("click", e => {
    contaCliques++;
    if (contaCliques >= 5) {
        botao.style.background = "red";
        botao.innerHTML = "Quebrei";
        estaQuebrado = true;
    }
});




/* ! = querrySelector é um método que seleciona um elemento do html, no caso o botão no exemplo;
é uma negação, ou seja, se o elemento não estiver quebrado, ele vai mudar a cor para verde;
colocando { } no if, você pode colocar mais de uma linha de código;
mouse over = é quando o mouse passa por cima do elemento;
mouse out = é quando o mouse sai do elemento;
inner html = é o texto que está dentro do elemento;
conta cliques = é uma variável que conta quantas vezes o botão foi clicado, exemplo: contaCliques++
ou contaCliques = contaCliques + 1 ;
addEventListener = é um evento que adiciona uma função a um elemento;
e => { botao.style.background = "green"; } é a mesma coisa 
que function(e) { botao.style.background = "green"; } serve quando
você não precisa chamar a função em outro lugar, podemos chamar de função
lambda ou função anônima(sem nome);
*/ 