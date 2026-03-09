document.getElementById("toonButton").addEventListener("click", toonMetSpaties);

function toonMetSpaties() {

    let tekst = document.getElementById("tekstInput").value;
    let resultaat = "";

    for (let i = 0; i < tekst.length; i++) {

        resultaat = resultaat + tekst[i];

        if (i < tekst.length - 1) {
            resultaat = resultaat + " ";
        }

    }

    console.log(resultaat);
}