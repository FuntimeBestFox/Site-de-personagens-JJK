
const personagens = [
    "Satoru Gojo",
    "Yuji Itadori",
    "Megumi Fushiguro",
    "Nobara Kugisaki",
    "Ryomen Sukuna"
];

const lista = document.getElementById("lista-personagens");

personagens.forEach(personagem => {
    const card = document.createElement("div");

    card.innerHTML = `
        <h3>${personagem}</h3>
        <p>Conheça a história deste personagem!</p>
    `;

    card.style.padding = "25px";
    card.style.margin = "15px";
    card.style.background = "#1b1b1b";
    card.style.border = "1px solid #8b0000";
    card.style.borderRadius = "10px";

    lista.appendChild(card);
});

function explorar() {
    document.getElementById("personagens")
        .scrollIntoView({ behavior: "smooth" });
}
