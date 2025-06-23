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
