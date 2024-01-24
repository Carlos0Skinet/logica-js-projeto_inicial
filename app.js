// Variaveis
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * 100 + 1);
let chute;
let tentativas = 1;
// Fim variaveis

//Console.log
console.log(numeroSecreto);

alert('Jogo Do Número Secreto');

// Enquanto errar o jogo continua
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // Condição do número colocodado com o escolhido
    if (numeroSecreto == chute) {
        break;
    } else {
        if(numeroSecreto < chute) {
            alert(`O número ${chute} é maior que o Número Secreto`)
        } else {
        alert(`O número ${chute} é menor que o Número Secreto`)
        }
        tentativas++
    }
}

//Vezes e vez

let palavraTentativa = tentativas > 1 ? 'vezes' : 'vez'
alert(`Acertou! O número era: ${numeroSecreto} e tentou ${tentativas} ${palavraTentativa}`);

// if(tentativas > 1){
//     alert(`Acertou! O número era: ${numeroSecreto} e tentou ${tentativas} vezes`);
// } else {
//     alert(`Acertou! O número era: ${numeroSecreto} e tentou ${tentativas} vez`);
// }
