let listaAmigos = [];


function gerarNumeroAleatorio(numeroLimite) {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite);

        return numeroEscolhido;
}  

function adicionarAmigo() {
    
    let inputAmigo = document.getElementById("amigo");
    let nome = inputAmigo.value.trim(); 

    let regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

    if (nome === "") {
        alert("Por favor, insira um nome. Digite um nome valido antes de adicionar!");
    } 
    else if (!regex.test(nome)) {
        alert("Digite apenas letras, sem números ou caracteres especiais!");
    } 
    else {
        listaAmigos.push(nome); 
        atualizarLista(); 
        inputAmigo.value = ""; 
    }
}


function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    listaAmigos.forEach((listaAmigos, index) => {
        let li = document.createElement("li");
        li.textContent = listaAmigos;
        
        let botaoRemover = document.createElement("button");
        botaoRemover.textContent = "X";
        botaoRemover.onclick = () => removerAmigo(index);

        li.appendChild(botaoRemover);
        lista.appendChild(li);
    });
}


function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear!");
        return;
    }

    let indiceSorteado = gerarNumeroAleatorio(listaAmigos.length); 
    let amigoSorteado = listaAmigos[indiceSorteado];

    console.log(indiceSorteado);
    
    console.log(amigoSorteado);

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> Amigo Sorteado: <strong>${amigoSorteado}</strong> </li>`;
    indiceSorteado = gerarNumeroAleatorio(listaAmigos.length); 
}

function removerAmigo(index) {
    listaAmigos.splice(index, 1);
    atualizarLista();
}