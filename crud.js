import { collection, addDoc, getDocs, onSnapshot, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
import {db} from "./firebase.js"
export function somar (n1,n2){
    return n1 + n2

}

export function subtrair (n1,n2){
    return n1 - n2

}

export function multiplicar (n1,n2){
    return n1 * n2

}

export function dividir (n1,n2){
    return n1 / n2

}
export function pegarcalculofuncao(){
    return collection(db, "calculos")
}
export async function salvarcalculos(n1,n2,sinal,resultado) {
    await addDoc(pegarcalculofuncao(), {n1:n1,n2:n2,sinal:sinal,resultado:resultado}
)
    
}
export async function buscarcalculo() {
   const consulta = await getDocs(pegarcalculofuncao());
   const ul = document.getElementById("resultadoanteriores")    
ul.innerHTML = "";
consulta.forEach((documento) => {
    const dados = documento.data();
    const linha = document.createElement("li")
    linha.innerText = `${dados.n1}${dados.sinal}${dados.n2} + ${dados.resultado}`
    ul.appendChild(linha)

    
});    
};


export function calcular() {
    onSnapshot(pegarcalculofuncao(),(consulta) => {
        const ul = document.getElementById("resultadoanteriores");
        ul.innerHTML = "";
        consulta.forEach((documento) => {
            const dados = documento.data();
            const linha = document.createElement("li");
            linha.innerText = `${dados.n1} ${dados.sinal} ${dados.n2} = ${dados.resultado} `;
            const botao = document.createElement("button");
            botao.innerText = "Excluir";
            botao.addEventListener("click",async function() {
                await excluirbotao(documento.id);
            });
            linha.appendChild(botao);
            ul.appendChild(linha);
        });
    });
}

export async function excluirbotao(id) {
    await deleteDoc(doc(db,"calculos",id));
}