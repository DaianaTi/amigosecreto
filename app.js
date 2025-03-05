
document.addEventListener("DOMContentLoaded", function () {
    const nomeInput = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");
    const amigos = [];
    const botaoAdicionar = document.querySelector(".button-add");
    const botaoSortear = document.querySelector(".button-draw");

    function exibirTextoNaTela(tag, texto) {
        let campo = document.querySelector(tag);
        campo.innerHTML = texto;
    }

    function adicionarAmigo() {
        const nome = nomeInput.value.trim();
        if (nome === "") {
            alert("Por favor, insira um nome válido.");
            return;
        }
        
        amigos.push(nome);
        atualizarLista();
        nomeInput.value = "";
    }

    function sortearAmigo() {
        if (amigos.length === 0) {
            alert("Nenhum nome foi adicionado ainda. Adicione nomes antes de sortear.");
            return;
        }
        
        const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
        exibirTextoNaTela("#resultado", `<li>O nome sorteado foi: <strong>${sorteado}</strong></li>`);
    }

    function atualizarLista() {
        listaAmigos.innerHTML = "";
        amigos.forEach(nome => {
            const li = document.createElement("li");
            li.textContent = nome;
            listaAmigos.appendChild(li);
        });
    }

    botaoAdicionar.addEventListener("click", adicionarAmigo);
    botaoSortear.addEventListener("click", sortearAmigo);
});
