const AANTAL_HORIZONTAAL = 4;
const AANTAL_VERTICAAL = 3;
const AANTAL_KAARTEN = 6;

const afbeeldingen = [
    "kaart1.png",
    "kaart2.png",
    "kaart3.png",
    "kaart4.png",
    "kaart5.png",
    "kaart6.png"
];

let kaarten = [...afbeeldingen, ...afbeeldingen];
let omgedraaid = [];
let isBusy = false;

const game = document.getElementById("game");

kaarten.sort(() => Math.random() - 0.5);

kaarten.forEach(naam => {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = "images/achterkant.png";
    img.dataset.kaart = naam;

    card.appendChild(img);
    game.appendChild(card);

    card.addEventListener("click", () => draaiKaart(card, img));
});

function draaiKaart(card, img) {
    if (isBusy || omgedraaid.includes(card)) return;

    img.src = "images/" + img.dataset.kaart;
    omgedraaid.push(card);

    if (omgedraaid.length === 2) {
        controleer();
    }
}

function controleer() {
    isBusy = true;

    const [kaart1, kaart2] = omgedraaid;
    const img1 = kaart1.querySelector("img");
    const img2 = kaart2.querySelector("img");

    if (img1.dataset.kaart === img2.dataset.kaart) {
        setTimeout(() => {
            kaart1.style.visibility = "hidden";
            kaart2.style.visibility = "hidden";
            reset();
        }, 800);
    } else {
        setTimeout(() => {
            img1.src = "images/achterkant.png";
            img2.src = "images/achterkant.png";
            reset();
        }, 800);
    }
}

function reset() {
    omgedraaid = [];
    isBusy = false;

    if (document.querySelectorAll(".card:not([style*='hidden'])").length === 0) {
        alert("Proficiat, je hebt gewonnen!");
    }
}