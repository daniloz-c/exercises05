function calc(){
    event.preventDefault();
    let titulo = document.querySelector('#titulo').value;
    let duracao = Number(document.querySelector('#duracao').value);

    //calculo
    let horas = Math.floor(duracao/60);
    let minutos = duracao % 60;

    let msgTitulo = document.querySelector('#msgTitulo');
    let msgDuracao = document.querySelector('#msgDuracao')

    msgTitulo.innerText = `Título: ${titulo}`;
    msgDuracao.innerText = `Duração : ${horas} hora(s) e ${minutos} minuto(s)`;
}

//Vincula o botao
const botao = document.querySelector('#botao');
botao.addEventListener('click', function(){
    calc();
})