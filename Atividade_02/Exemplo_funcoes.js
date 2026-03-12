// 1. Function Expression - Valor Base
const caulcularValorBase = function(horas, precoHora) {
    return horas * precoHora;
}
// 2. Arrow Function = Adicionar Taxa Fixa
const adicionarTaxa = (valor) => valor + 2.00;
// 3. Function Declartion = Exibir Recibo
function emitirRecibo(TotalFinal) {
    console.log("---ESTACIONAMENTO---")
    console.log("Total a pagar: R$" + TotalFinal.toFixed(2))
}
//4. Execução
let valorBruto = caulcularValorBase(3,10);
let valorComTaxa = adicionarTaxa(valorBruto);
emitirRecibo(valorComTaxa);