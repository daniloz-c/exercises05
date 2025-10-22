function calc(){
    event.preventDefault();
    let veiculo = document.querySelector('#veiculo').value;
    let preco = Number(document.querySelector('#preco').value)

    //calculo
    let entrada = preco/2;
    let parcela = entrada/12;

    let msgPromocao = document.querySelector('#msgPromocao');
    let msgEntrada = document.querySelector('#msgEntrada')
    let msgParcela = document.querySelector('#msgParcela')

    msgPromocao.innerText = `Promoção: ${veiculo}.`
    msgEntrada.innerHTML = `<b>Entrada<b> de R$`
    msgParcela.innerText = `+12 de R$ ${parcela.toFixed(2)}`
}

const botao = document.querySelector('#btnPromocao')
botao.addEventListener('click', function(){
    calc();
})