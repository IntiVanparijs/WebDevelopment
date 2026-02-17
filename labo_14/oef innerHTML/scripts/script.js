const wijzigTekst = () => {
    let pElement = document.getElementById("txtOutput");
    pElement.innerHTML = "Welkom!";
};

window.addEventListener("load", () => {
    document.getElementById("btnWijzig")
        .addEventListener("click", wijzigTekst);
});
