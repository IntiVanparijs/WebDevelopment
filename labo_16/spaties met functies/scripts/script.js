// Functie die een string omzet naar karakters met spaties
const maakMetSpaties = (inputText) => {
    let result = "";

    for (let i = 0; i < inputText.length; i++) {
        result += inputText[i];

        if (i < inputText.length - 1) {
            result += " ";
        }
    }

    return result;
};

// Event handler voor de button
document.getElementById("toonButton").addEventListener("click", () => {
    let tekst = document.getElementById("tekstInput").value;

    let metSpaties = maakMetSpaties(tekst);

    console.log(metSpaties);
});