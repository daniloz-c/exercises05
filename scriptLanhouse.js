function calc(event) {
    event.preventDefault();

    let preco15 = Number(document.querySelector('#preco15').value);
    let tempo = Number(document.querySelector('#tempo').value);

    // Validação
    if (isNaN(preco15) || preco15 <= 0 || isNaN(tempo) || tempo <= 0) {
        alert('Preencha corretamente o valor e o tempo de uso.');
        return;
    }

    // Cálculo do número de blocos de 15 minutos
    let blocos = Math.ceil(tempo / 15); // arredonda para cima as frações de 15 min
    let total = blocos * preco15;

    // Exibição
    let msgResultado = document.querySelector('#msgResultado');
    msgResultado.innerText = `Valor a pagar: R$ ${total.toFixed(2)}`;
}

const botao = document.querySelector('#btnCalcular');
botao.addEventListener('click', calc);