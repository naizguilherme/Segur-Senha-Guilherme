const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12; 
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho

function diminuiTamanho(){
    if(tamanhoSenha > 1){
        tamanhoSenha = tamanhoSenha - 1;
        numeroSenha.textContent = tamanhoSenha;
    }
    numeroSenha.textContent = tamanhoSenha;
}

function aumentaTamanho(){
    if(tamanhoSenha < 20){
    tamanhoSenha = tamanhoSenha + 1;}
    numeroSenha.textContent = tamanhoSenha;

}

const campoSenha = document.querySelector('#campo=senha');

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' ;
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz' ;
const numeros = '123456789' ;
const simbolos = '!@%*?' ;


geraSenha();

function geraSenha() {
    let senha = '';
    for (let i = 0; i < tamanhoSenha; i++) 
       let numeroAleatorio = math.random() * letrasMaiusculas.length
       nu b  
}



