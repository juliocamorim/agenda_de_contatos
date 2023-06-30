const form = document.getElementById ('form-agenda');
const numeroTelefone = [];

    let linhas = ``;

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNome = document.getElementById('nome');
    const inputNumeroContato = document.getElementById('numero-contato');

    if (numeroTelefone.includes(inputNumeroContato.value)) {
        alert(`Este número de telefone ${inputNumeroContato.value} já foi cadastrado`)
    } else {
    numeroTelefone.push(inputNumeroContato.value);
    
    let linha = `<tr>`;
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += `</tr>`;

    linhas += linha;
    
    }

    inputNome.value = ``;
    inputNumeroContato.value = ``;
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}