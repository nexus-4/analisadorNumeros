const usernumero = document.getElementById('inumero');
const adicionarBotao = document.getElementById('adicionarBtn');
const finalizarBotao = document.getElementById('finalizarBtn');
const resultado = document.getElementById('iresultado');

const finalRes = document.getElementById('resultadoFinal');



adicionarBotao.onclick = function() {
    const numero = Number(usernumero.value);
    if (usernumero.value.length == 0) {
        window.alert('Adicione um numero!');
    } else {
        let item = document.createElement('option');
        item.text = `${numero} adicionado`;
        resultado.appendChild(item);
    };
};

finalizarBotao.onclick = function() {
    const numero = Number(usernumero.value);
    if (usernumero.value.length == 0) {
        alert('Adicione um numero para finalizar')
    } else {
        finalRes.innerHTML = `Foi adicionado ${numero.length} numeros`

    }
}