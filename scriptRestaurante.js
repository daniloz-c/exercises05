function calcValor(event) {
    event.preventDefault();

    let precoKg = Number(document.querySelector('#precoKg').value);
    let consumo = Number(document.querySelector('#consumo').value);

    // Validação simples
    if (isNaN(precoKg) || precoKg <= 0 || isNaN(consumo) || consumo <= 0) {
        alert("Preencha corretamente o preço e o consumo.");
        return;
    }

    // Conversão de gramas para kg
    let consumoKg = consumo / 1000;

    // Cálculo do valor a pagar
    let valorPagar = precoKg * consumoKg;

    // Exibição da mensagem
    let msgResultado = document.querySelector('#msgResultado');
    msgResultado.innerText = `Valor a pagar: R$ ${valorPagar.toFixed(2)}`;
}

const botao = document.querySelector('#btnCalcular');
botao.addEventListener('click', calcValor);