

// ==========================================
// JUJUTSU KAISEN - BANCO DE PERSONAGENS
// ==========================================

const personagens = [
    {
        nome: "Satoru Gojo",
        categoria: "Feiticeiro Jujutsu",
        descricao: "Considerado o feiticeiro mais forte da era moderna.",
        imagem: "https://placehold.co/500x650/151020/ffffff?text=Satoru+Gojo",
        poder: "Ilimitado e Seis Olhos"
    },

    {
        nome: "Yuji Itadori",
        categoria: "Estudante Jujutsu",
        descricao: "Um jovem com força física extraordinária que se torna receptáculo de Sukuna.",
        imagem: "https://placehold.co/500x650/301010/ffffff?text=Yuji+Itadori",
        poder: "Energia Amaldiçoada"
    },

    {
        nome: "Megumi Fushiguro",
        categoria: "Feiticeiro Jujutsu",
        descricao: "Um feiticeiro habilidoso que utiliza sombras para invocar shikigamis.",
        imagem: "https://placehold.co/500x650/101525/ffffff?text=Megumi+Fushiguro",
        poder: "Técnica das Dez Sombras"
    },

    {
        nome: "Nobara Kugisaki",
        categoria: "Feiticeira Jujutsu",
        descricao: "Uma feiticeira determinada que utiliza martelo e pregos em combate.",
        imagem: "https://placehold.co/500x650/30151a/ffffff?text=Nobara+Kugisaki",
        poder: "Técnica da Ressonância"
    },

    {
        nome: "Ryomen Sukuna",
        categoria: "Rei das Maldições",
        descricao: "Uma entidade extremamente poderosa e temida no mundo jujutsu.",
        imagem: "https://placehold.co/500x650/300808/ffffff?text=Ryomen+Sukuna",
        poder: "Técnica de Cortes"
    }
];


// ==========================================
// ELEMENTOS DO HTML
// ==========================================

const lista = document.getElementById("lista-personagens");


// ==========================================
// CRIAR CARDS
// ==========================================

function carregarPersonagens() {

    if (!lista) return;

    lista.innerHTML = "";

    personagens.forEach((personagem, index) => {

        const card = document.createElement("article");

        card.classList.add("personagem-card");

        card.innerHTML = `
            <img
                src="${personagem.imagem}"
                alt="Imagem de ${personagem.nome}"
                class="personagem-img"
                loading="lazy"
            >

            <div class="personagem-info">

                <span class="personagem-categoria">
                    ${personagem.categoria}
                </span>

                <h3>${personagem.nome}</h3>

                <p>${personagem.descricao}</p>

                <button
                    class="btn-detalhes"
                    type="button"
                    data-index="${index}"
                >
                    VER DETALHES
                </button>

            </div>
        `;

        lista.appendChild(card);
    });

}


// ==========================================
// VER DETALHES DO PERSONAGEM
// ==========================================

lista?.addEventListener("click", (event) => {

    const botao = event.target.closest(".btn-detalhes");

    if (!botao) return;

    const index = Number(botao.dataset.index);
    const personagem = personagens[index];

    if (!personagem) return;

    alert(`
PERSONAGEM: ${personagem.nome}

CATEGORIA: ${personagem.categoria}

HISTÓRIA:
${personagem.descricao}

TÉCNICA:
${personagem.poder}
    `);

});


// ==========================================
// BOTÃO EXPLORAR
// ==========================================

function explorar() {

    const secao = document.getElementById("personagens");

    secao?.scrollIntoView({
        behavior: "smooth"
    });

}


// ==========================================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ==========================================

const observador = new IntersectionObserver((entradas) => {

    entradas.forEach(entrada => {

        if (entrada.isIntersecting) {

            entrada.target.classList.add("mostrar");

            observador.unobserve(entrada.target);

        }

    });

}, {
    threshold: 0.15
});


// ==========================================
// INICIALIZAÇÃO
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    carregarPersonagens();

    document.querySelectorAll(".personagem-card").forEach(card => {
        observador.observe(card);
    });

});
