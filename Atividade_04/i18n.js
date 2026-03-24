// 1. Lista de Termos (Português)
cont termosPT = 
["Bem-vindo", "Carrinho", "Sair"]

// 2. Lista de Termos (Inglês)
const termosEN = new MAp ([
    ["Bem- Vindo", "Welcome"],
    ["Carrinho", "Cart"],
    ["Sair", "Logout"]
]);       

// 3. Lista de Termos (Espamhol)
const termosEs = new MAp ([
    ["Bem- Vindo", "Bienvenido"],
    ["Carrinho", "Carrito"],
    ["Sair", "Salir"]
]);       
// 4. Escolher o idioma 
const idioma_selecionado = termosEN; 
// 5. Gerrar termos traduzidos
const traducao = 
termoPT.map(termo => idioma_selecionado.get(termo));
// 6. Imprimir dados 
console.log(traducao)