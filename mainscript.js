import { somar, subtrair, multiplicar,dividir, salvarcalculos, buscarcalculo, pegarcalculofuncao, calcular, excluirbotao } from "./crud.js";

const inp1 = document.getElementById("n1")
const inp2 = document.getElementById("n2")
const soma = document.getElementById("soma")
const divisao = document.getElementById("divisao")
const multiplicacao = document.getElementById("multiplicacao")
const subtracao = document.getElementById("subtracao")
var h1 = document.getElementById("resultados")

function executarcalculo(funcao,operacao){
    const n1 = Number(inp1.value);
    const n2 = Number(inp2.value)
    const resultado =  funcao (n1,n2);
    h1.innerText = resultado;
    salvarcalculos(n1,n2,operacao,resultado).catch(console.error)

}

soma.addEventListener("click", function(){
    executarcalculo(somar, "+")
})
subtracao.addEventListener("click", function(){
    executarcalculo(subtrair, "-")
})
multiplicacao.addEventListener("click", function(){
    executarcalculo(multiplicar, "*")
})
divisao.addEventListener("click", function(){
    executarcalculo(dividir, "/")
})
calcular()
