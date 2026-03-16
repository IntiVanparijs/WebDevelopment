const valideerBtn = document.getElementById("valideerBtn");

const isGetal = (tekst) => {
    return !isNaN(tekst);
};

valideerBtn.addEventListener("click", () => {

    let allesOk = true;

    controleerVoornaam();
    controleerFamilienaam();
    controleerGeboortedatum();
    controleerEmail();
    controleerKinderen();

    if (allesOk) {
        alert("proficiat!");
    }

    // ===== hulpfuncties =====

    function zetFout(input, boodschap) {
        input.classList.add("fout");
        input.nextElementSibling.textContent = boodschap;
        allesOk = false;
    }

    function zetOk(input) {
        input.classList.remove("fout");
        input.nextElementSibling.textContent = "";
    }

    function controleerVoornaam() {
        const input = document.getElementById("voornaam");
        const waarde = input.value.trim();

        if (waarde.length > 30) {
            zetFout(input, "max. 30 karakters");
        } else {
            zetOk(input);
        }
    }

    function controleerFamilienaam() {
        const input = document.getElementById("familienaam");
        const waarde = input.value.trim();

        if (waarde === "") {
            zetFout(input, "verplicht veld");
        } else if (waarde.length > 50) {
            zetFout(input, "max 50 karakters");
        } else {
            zetOk(input);
        }
    }

    function controleerGeboortedatum() {
        const input = document.getElementById("geboortedatum");
        const waarde = input.value.trim();

        if (waarde === "") {
            zetFout(input, "verplicht veld");
            return;
        }

        if (waarde.length !== 10 ||
            waarde[4] !== "-" ||
            waarde[7] !== "-") {
            zetFout(input, "formaat is niet jjjj-mm-dd");
            return;
        }

        const jaar = waarde.slice(0, 4);
        const maand = waarde.slice(5, 7);
        const dag = waarde.slice(8, 10);

        if (!isGetal(jaar) || !isGetal(maand) || !isGetal(dag)) {
            zetFout(input, "formaat is niet jjjj-mm-dd");
        } else {
            zetOk(input);
        }
    }

    function controleerEmail() {
        const input = document.getElementById("email");
        const waarde = input.value.trim();

        if (waarde === "") {
            zetFout(input, "verplicht veld");
            return;
        }

        const delen = waarde.split("@");

        if (delen.length !== 2 || delen[0] === "" || delen[1] === "") {
            zetFout(input, "geen geldig email adres");
        } else {
            zetOk(input);
        }
    }

    function controleerKinderen() {
        const input = document.getElementById("kinderen");
        const waarde = input.value.trim();

        if (!isGetal(waarde)) {
            zetFout(input, "is geen positief getal");
        } else if (waarde < 0) {
            zetFout(input, "is geen positief getal");
        } else if (waarde >= 99) {
            zetFout(input, "is te vruchtbaar");
        } else {
            zetOk(input);
        }
    }

});