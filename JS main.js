const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhaSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;
function diminuiTamanho(){

   if (tamanhoSenha = tamanhoSenha > 1){
    tamanhaSenha --;}
{
numeroSenha.textContent = tamanhaSenha;}


    numeroSenha.textContent = tamanhoSenha;
}
const campoSenha = document.querySelector('#campo-senha');
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

campoSenha.value = letrasMaiusculas;

function geraSenha() {

    let senhas='';

for(let i=0; i<tamanhoSenha; i++)
    
let numeroAletorio = Math.random()*letrasMaiusculas.length;
    numeroAleatorio = Math.floor(numeroAleatorio);
    senha = senha + letraMaiusculas[numeroAleatorio];


}
