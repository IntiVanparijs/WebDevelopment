const toonSubstring = () => {
    let tekst = document.getElementById("txtTekst").value;
    let start = parseInt(document.getElementById("txtStart").value);
    let einde = parseInt(document.getElementById("txtEinde").value);

    let resultaat = tekst.substring(start, einde);
    document.getElementById("txtOutput").innerHTML = resultaat;
};

window.addEventListener("load", () => {
    document.getElementById("btnToon")
        .addEventListener("click", toonSubstring);
});
