/* quando clicarmos na aba temos que mostrar o conteudo da aba que foi
clicada pelo usuario e esconder o conteudo da aba anterior
1º pegar os elementos que representam as abas no html

2º identificar o clique no elemento aba

3º ao clicar, desmarcar a aba selecionada

4º marcar a aba clicada como selecionada

5º esconder o conteudo anterior

6º mostar o conteudo da aba selecionada 
*/

//1º pegar os elementos que representam as abas no html
const abas = document.querySelectorAll(".aba");

//2º identificar o clique no elemento aba
abas.forEach(aba => {
    aba.addEventListener("click", function() {
        //se a aba ja possuir a classe selecionado passe para o passo seguinte   
        if(aba.classList.contains("selecionado")){
            return;
        }

        selecionarAba(aba);
        mostrarInformacoesDaAba(aba); 
    })
})

function selecionarAba(aba){
 //3º ao clicar, desmarcar a aba selecionada
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");
//4º marcar a aba clicada como selecionada
    aba.classList.add("selecionado");
}

function mostrarInformacoesDaAba(aba){
//5º esconder o conteudo anterior
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado"); 
 
//6º mostar o conteudo da aba selecionada 
    const idElementoInformacoesAba = `informacao-${aba.id}`;
 
    const informacaoASerMostrada = document.getElementById(idElementoInformacoesAba)
    informacaoASerMostrada.classList.add("selecionado");
}