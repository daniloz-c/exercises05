function calc(event) {
    event.preventDefault();

    let medicamento = document.querySelector('#medicamento').value.trim();
    let preco = Number(document.querySelector('#preco').value);

    // Validação simples
    if (!medicamento || isNaN(preco) || preco <= 0) {
        alert('Preencha corretamente o nome e o preço do medicamento.');
        return;
    }

    // Cálculo da promoção:
    // Duas unidades com desconto dos centavos (ou seja, arredondado para baixo)
    let total = preco * 2;
    let promocao = Math.floor(total); // elimina os centavos

    // Exibição da mensagem no mesmo padrão do código anterior
    let msgPromocao = document.querySelector('#msgPromocao');
    msgPromocao.innerText = `Promoção de ${medicamento}: leve 2 por R$ ${promocao.toFixed(2)}`;
}

const botao = document.querySelector('#btnCalcular');
botao.addEventListener('click', calc);