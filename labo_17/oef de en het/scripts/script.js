let zin = "Gisteren zat de jongen op de stoep en at de helft van de appel";
let resultaat = "";
let i = 0;

while (i < zin.length) {
    // Controle: staat hier het woord "de"?
    if (
        zin[i] === "d" &&
        zin[i + 1] === "e" &&
        (i === 0 || zin[i - 1] === " ") &&
        (i + 2 === zin.length || zin[i + 2] === " ")
    ) {
        resultaat += "het";
        i += 2; // we slaan "de" over
    } else {
        resultaat += zin[i];
        i++;
    }
}
console.log(resultaat);