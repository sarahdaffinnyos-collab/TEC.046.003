// classes
class Personagem {
    constructor(nome, titulo, hp, mana, energia) {
        this.nome = nome;
        this.titulo = titulo;
        this.hp = hp;
        this.mana = mana;
        this.energia = energia;
    }
    hero_atacar(alvo, habilidade) {
        if (this.mana >= habilidade.custo
            && this.energia >= habilidade.energia) {
            alvo.hp = alvo.hp - habilidade.dano;
            // Debilitar Mana
            if (habilidade.custo > 0) {
                this.mana -= habilidade.custo;
                this.energia += 50;
            }
             // Debitar Energia
                if (habilidade.energia > 0) {
                    this.energia = 0;
                }
        } else {
            return "Sem mana ou energia.";
        }

    }
    boss_atacar(alvo) {
        console.log(alvo.hp)
        if (this.energia >= 100) {
            alvo.hp -= 15;
            this.energia = 0;
        } else {
            this.energia += 50;
        }
    }
}
class habilidade {
    constructor(id, nome, dano, custo, energia) {
        this.id = id;
        this.nome = nome;
        this.dano = dano;
        this.custo = custo;
        this.energia = energia;
    }
}

//Intantes Classes - Criar Objeto
let hero = new Personagem("Aerion Targaryen", "😝 Meninas Super-Poderosas", 100, 100, 0)
let boss = new Personagem("Henrique Capeta", "🐵 Macaco Louco", 100, 0, 50)
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
let containerBtn = document.getElementById("controles");
let listaHabilidades = [
    new habilidade(1, "⚔️ Ataque", 4, 0, 0),
    new habilidade(2, "✨ Skills", 8, 10, 0),
    new habilidade(3, "👾 Supremo", 15, 0, 100)
];
listaHabilidades.forEach(hab => {
    console.log(hab)
    let btn = document.createElement("button");//<button>
    btn.innerText = hab.nome;
    btn.classList.add("btn", "btn-outline-warning")
    containerBtn.appendChild(btn);
    btn.onclick = () => {
        hero.hero_atacar(boss, hab);
        boss.boss_atacar(hero)
        atualizarTela()
    }
});
const atualizarTela = () => {
    document.getElementById("hp-boss").value = boss.hp;
    document.getElementById("mp-hero").value = hero.mana;
    document.getElementById("en-hero").value = hero.energia;

    document.getElementById("hp-hero").value = hero.hp;
    document.getElementById("en-boss").value = boss.energia;

    if(hero.hp <=0) {
        game_over();
    }
}
async function game_over(){
    const resposta = await fetch('gameover.html');
    const htmlContent = await resposta.text();
    document.getElementById('tela').innerHTML = htmlContent;
}