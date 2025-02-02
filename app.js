let amigos = new Set(); // Usamos um Set para evitar repetições

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, digite um nome válido.");
        return;
    }

    if (amigos.has(nome)) {
        alert("Esse nome já foi adicionado!");
        return;
    }

    amigos.add(nome); // Adiciona ao Set (garante que não há repetição)
    
    const lista = document.getElementById("listaAmigos");
    const item = document.createElement("li");
    item.textContent = nome;
    lista.appendChild(item);

    input.value = ""; // Limpa o campo de entrada
}

function sortearAmigoSecreto() {
    if (amigos.size < 2) {
        alert("Adicione pelo menos dois amigos para realizar o sorteio.");
        return;
    }

    const listaAmigos = Array.from(amigos);
    let sorteio = [];
    let sorteados = new Set();

    for (let i = 0; i < listaAmigos.length; i++) {
        let sorteado;
        do {
            sorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
        } while (sorteado === listaAmigos[i] || sorteados.has(sorteado));

        sorteados.add(sorteado);
        sorteio.push(`${listaAmigos[i]} → ${sorteado}`);
    }

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = sorteio.map(par => `<li>${par}</li>`).join('');
}