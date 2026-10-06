const numeros = document.getElementById('numeros');
// Pega os números digitados no input
const botoesDaOperacao = document.querySelectorAll('.caixas button:not(#botaoIgual)');
// Pega qual caixa o usuário clicou primeiro
const botaoIgual = document.getElementById('botaoIgual')


let valorUm = null; // Deixa essa variável vazia onde vai ficar armazenado o primeiro valor
let operacaoSendoRealizada = null;
// Já aqui fica salvo o botão que o usuário clicou

botoesDaOperacao.forEach(botao => {
    botao.addEventListener('click', (e) =>{
        // Para quando o botão for clicado

        const valorDeAgora = parseFloat(numeros.value);
        // Pega o valor que foi obtido e transforma em tipo float (com virgula) (útil para divisão)

        if(isNaN(valorDeAgora)) return;
        // Se o usuário não digitar nada, não retorna nada

        if(valorUm === null){
            valorUm = valorDeAgora;
            // Armazena um valor dentro do tipo "Null", declarando o float que fizemos ali em cima para a variável let que antes era null

            operacaoSendoRealizada = e.target.textContent;
            // Acha qual botão foi pressionado, e qual variável que ele possui (+, -, x, *)

            numeros.value = '';
            // Define valor vazio para os numeros novamente

        }
    });
});
botaoIgual.addEventListener('click', () =>{
    const valorDeAgora = parseFloat(numeros.value);

    if(valorUm === null || operacaoSendoRealizada === null || isNaN(valorDeAgora)) return;

    const valorDois = valorDeAgora;
    const resultado = calculadora(valorUm, valorDois, operacaoSendoRealizada);

    numeros.value = resultado;

    valorUm = null;
    operacaoSendoRealizada = null;
})


// Funcão básica das operações de cada número
function calculadora(numero1, numero2, operacao){
    switch (operacao){
        case '+':
            return numero1 + numero2;
        case '-':
            return numero1 - numero2;
        case 'x':
            return numero1 * numero2;
        case '/':
            return numero1 / numero2;
        }
}