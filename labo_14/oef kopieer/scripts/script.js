const kopieer = () => {
    let tekst = document.getElementById("txtInput").value;
    document.getElementById("txtOutput").innerHTML = tekst;
};

window.addEventListener("load", () => {
    document.getElementById("btnKopieer")
        .addEventListener("click", kopieer);
});
