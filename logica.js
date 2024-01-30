const usernumero = document.getElementById('inumero');
const adicionarBotao = document.getElementById('adicionarBtn');
const finalizarBotao = document.getElementById('finalizarBtn');
const lista = document.getElementById('iresultado');
const resultado = document.getElementById('resultadoFinal');
let valores = [];



adicionarBotao.onclick = function() {
    const numero = Number(usernumero.value);
    if (usernumero.value.length == 0 || usernumero.value > 100) {
        window.alert('Adicione um numero entre 1 e 100!');
    } else if (valores.includes(numero)) {
        alert('Numero ja adicionado!')
    } else {
        valores.push(numero)
        let item = document.createElement('option');
        item.text = `Numero ${numero} foi adicionado`;
        lista.appendChild(item);
        resultado.innerHTML = '';
    };
    usernumero.value = '';
    usernumero.focus();
};

finalizarBotao.onclick = function() {
    if (valores.length == 0) {
        alert('Adicione um numero na lista para finalizar')
    } else {
        let total = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;
        for (let posicao in valores){
            soma += valores[posicao];
            if(valores[posicao] > maior){
                maior = valores[posicao];
            }
            if (valores[posicao] < menor){
                menor = valores[posicao]
            }
            media = soma / total;
        }
        resultado.innerHTML = ''
        resultado.innerHTML += `<p> Foi adicionado ${total} numeros <p/>`;
        resultado.innerHTML += `<p> O maior numero é ${maior} <p/>`
        resultado.innerHTML += `<p> O menor numero é ${menor}<p/>`
        resultado.innerHTML += `<p>A soma desses nuemro é ${soma} <p/>`
        resultado.innerHTML += `<p> A media desses numeros é ${media} <p/>`
        
    }
}