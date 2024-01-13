let contadorArvores = 0;

function plantarArvore() {
    contadorArvores++;
    atualizarContador();
}

function atualizarContador() {
    const contadorElement = document.getElementById("contador-arvores");
    if (contadorElement) {
        contadorElement.textContent = `Árvores plantadas: ${contadorArvores}`;
    }
}

let temaEscuro = false;

function alternarTema() {
    const body = document.body;
    temaEscuro = !temaEscuro;

    if (temaEscuro) {
        body.classList.add("dark-theme");
    } else {
        body.classList.remove("dark-theme");
    }
}

function adicionarEvento() {
    const nomeEvento = document.getElementById("nome-evento").value;
    const descricaoEvento = document.getElementById("descricao-evento").value;
    const dataEvento = document.getElementById("data-evento").value;

    const listaEventos = document.getElementById("lista-eventos");
    const novoEvento = document.createElement("li");
    novoEvento.textContent = `${nomeEvento} - ${descricaoEvento} (Data: ${dataEvento})`;
    listaEventos.appendChild(novoEvento);

    // Limpar formulário
    document.getElementById("form-evento").reset();
}

function adicionarTopico() {
    const tituloTopico = document.getElementById("titulo-topico").value;
    const mensagemTopico = document.getElementById("mensagem-topico").value;

    const listaTopicos = document.getElementById("lista-topicos");
    const novoTopico = document.createElement("li");
    novoTopico.innerHTML = `<strong>${tituloTopico}</strong>: ${mensagemTopico}`;
    listaTopicos.appendChild(novoTopico);

    // Limpar formulário
    document.getElementById("form-topico").reset();
}
