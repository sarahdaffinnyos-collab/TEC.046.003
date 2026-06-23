let produto = {
    nome,
    categoria,
    quantidade,
    preço
}
//Lista de Produtos
let produtos = [];
//Capturar o formulário
const formulario = 
        document.getElementById("formaproduto");
        //Event Linister
        formulario 

        //Capitura dos dados do formulario
        let nome= document.getElementById("nome").value
        let categoria= 
        document.getElementById("categoria").value
        let quantidade= 
        document.getElementById("quantidade").value
        let preço= document.getElementById("preço").value
        //Criação do objeto
        let produto =  {
            nome,
            categoria,
            quantidade,
            preço
        }
        //Adicionar o produto na lista
        produtos.push(produto);
        //Renderizar dados na tabela
        const tabela =
    document.getElementById("tabelaProdutos")
    produtos.forEach(
        function(produto, indice) {
        tabela.innerHTML +=`
        <tr>
            <tr>${produto.nome}</tr>
            <tr>${produto.categoria}</tr>
            <tr>${produto.quantidade}</tr>
            <tr>${produto.preço}</tr>
            <tr><a href="#">Excluir</a></tr>
        </tr>
        `
        }
    )