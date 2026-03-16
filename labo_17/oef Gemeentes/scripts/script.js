const startBtn = document.getElementById("startBtn");
const gemeentenLijst = document.getElementById("gemeentenLijst");

startBtn.addEventListener("click", () => {
    let gemeenten = [];
    let invoer;

    while (true) {
        invoer = prompt("Geef een gemeente in (typ 'stop' om te stoppen)");

        // Stop bij annuleren
        if (invoer === null) {
            break;
        }

        invoer = invoer.trim();

        // Stop bij 'stop'
        if (invoer.toLowerCase() === "stop") {
            break;
        }

        // Lege invoer negeren
        if (invoer !== "") {
            gemeenten.push(invoer);
        }
    }

    // Alfabetisch sorteren
    gemeenten.sort((a, b) => a.localeCompare(b));

    // Select leegmaken
    gemeentenLijst.innerHTML = "";

    // Gemeenten toevoegen aan select
    for (let gemeente of gemeenten) {
        let option = document.createElement("option");
        option.text = gemeente;
        gemeentenLijst.add(option);
    }
});