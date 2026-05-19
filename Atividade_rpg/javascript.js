class Personagem{
    constructor(nome, titulo, hp, mana, energia){
        this.nome = nome;
        this.titulo = titulo;
        this.hp = hp;
        this.mana = mana;
        this.energia = energia;
    }
}
class habilidade{
    constructor(id, nome, dano, custo, energia){
        this.id = id;
        this.nome = nome;
        this.dano = dano;
        this.custo = custo;
        this.energia = energia;
    }
}

//Intantes Classes - Criar Objeto
let hero = new Personagem("Aerion Targaryen", "😝 meninas super-poderosas",100,100,0)
let boss = new Personagem("Henrique Capeta", "🐵 Macaco Louco",100,0,50)
// Prencher os Status
document
.getElementById("nome-hero")
.textContent = hero.nome;
document
.getElementById("titulo-hero")
.textContent = hero.titulo;
document
.getElementById("nome-boss")
.textContent = boss.nome;
document
.getElementById("titulo-boss")
.textContent = boss.titulo;
// Criar habilidades
let listaHabilidades = [
    new habilidade(1,)
    new habilidade(2,)
    new habilidade(3,)
]