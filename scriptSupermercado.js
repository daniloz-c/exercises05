function calc(event) {
    event.preventDefault();

    let produto = document.querySelector('#produto').value.trim();
    let preco = Number(document.querySelector('#preco').value);

    // Validação
    if (!produto || isNaN(preco) || preco <= 0) {
        alert('Preencha corretamente o nome e o preço do produto.');
        return;
    }

    // Cálculo da promoção:
    // Na compra de 3 unidades, uma sai com 50% de desconto
    let total = (2 * preco) + (preco / 2);
    let valorMedio = total / 3;

    // Exibição das mensagens (mesmo estilo do seu código original)
    let msgProduto = document.querySelector('#msgProduto');
    let msgPromocao = document.querySelector('#msgPromocao');

    msgProduto.innerText = `Promoção de ${produto}`;
    msgPromocao.innerText = `Leve 3 por R$ ${total.toFixed(2)} (cada unidade sai por R$ ${valorMedio.toFixed(2)})`;
}

const botao = document.querySelector('#btnCalcular');
botao.addEventListener('click', calc);