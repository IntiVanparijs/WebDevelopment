const initialize = () =>{
    let btnSave = document.getElementById("btnSave");
    let sliders = document.getElementsByClassName("slider");

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }

    // HERSTEL SLIDERS UIT LOCAL STORAGE
    let red = localStorage.getItem("colorpicker-red");
    let green = localStorage.getItem("colorpicker-green");
    let blue = localStorage.getItem("colorpicker-blue");

    if (red !== null) document.getElementById("sldRed").value = red;
    if (green !== null) document.getElementById("sldGreen").value = green;
    if (blue !== null) document.getElementById("sldBlue").value = blue;

    update();

    btnSave.addEventListener("click", saveSwatch);

    // HERSTEL OPGESLAGEN SWATCHES
    restoreSwatches();
};

const saveSwatch = () =>{
    // voeg een nieuwe swatch component toe
    let swatchComponents = document.getElementById("swatchComponents");
    let swatch = buildSwatchComponent();
    swatchComponents.appendChild(swatch);
    storeSwatches();
};

const configureSwatch = (swatch) =>{
    let red = document.getElementById("sldRed").value;
    swatch.setAttribute("data-red", red);

    let green = document.getElementById("sldGreen").value;
    swatch.setAttribute("data-green", green);

    let blue = document.getElementById("sldBlue").value;
    swatch.setAttribute("data-blue", blue);

    swatch.style.background = "rgb(" + red + "," + green + "," + blue + ")";
};

const buildSwatchComponent = () =>{
    // maak de twee element nodes
    let swatch = document.createElement("div");
    let btnDelete = document.createElement("input");

    // stel de swatch in
    swatch.className = "swatch";
    configureSwatch(swatch);
    swatch.addEventListener("click", setColorPickerFromSwatch);

    // stel de delete knop in
    btnDelete.setAttribute("type", "button");
    btnDelete.setAttribute("value", "X");
    btnDelete.addEventListener("click", deleteSwatch);

    // voeg de swatch en button toe aan de swatchcomponent
    swatch.appendChild(btnDelete);
    return swatch;
};

const setColorPickerFromSwatch = (event) =>{
    let swatch = event.target;
	
    let red = swatch.getAttribute("data-red");
    document.getElementById("sldRed").value = red;
    
	let green = swatch.getAttribute("data-green");
    document.getElementById("sldGreen").value = green;
    
	let blue = swatch.getAttribute("data-blue");
    document.getElementById("sldBlue").value = blue;
	
    // helaas triggeren de .value wijzigingen niet automatisch
    // een change event ds moeten we handmatig update oproepen
    update();
};

const deleteSwatch = (event) =>{
    let swatchComponents = document.getElementById("swatchComponents");
    let button = event.target;
    let swatch = button.parentNode;
    swatchComponents.removeChild(swatch);
    // BUGFIX zorg ervoor dat dit event niet naar de ancestors opborrelt
    event.stopPropagation();
    storeSwatches();
};

/* de code hieronder is ongewijzigd t.o.v. de colorpicker oplossing */

const update = () =>{
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;

    document.getElementById("lblRed").innerHTML = red;
    document.getElementById("lblGreen").innerHTML = green;
    document.getElementById("lblBlue").innerHTML = blue;

    let swatch = document.getElementById("swatch");
    swatch.style.background = `rgb(${red},${green},${blue})`;

    // OPSLAAN IN LOCAL STORAGE
    localStorage.setItem("colorpicker-red", red);
    localStorage.setItem("colorpicker-green", green);
    localStorage.setItem("colorpicker-blue", blue);
};

const storeSwatches = () =>{
    let swatches = [];
    let swatchDivs = document.querySelectorAll("#swatchComponents .swatch");

    swatchDivs.forEach(swatch => {
        swatches.push({
            red: swatch.getAttribute("data-red"),
            green: swatch.getAttribute("data-green"),
            blue: swatch.getAttribute("data-blue")
        });
    });

    localStorage.setItem("colorpicker-swatches", JSON.stringify(swatches));
};

const restoreSwatches = () =>{
    let data = localStorage.getItem("colorpicker-swatches");
    if (!data) return;

    let swatches = JSON.parse(data);
    let swatchComponents = document.getElementById("swatchComponents");

    swatches.forEach(color => {
        let swatch = document.createElement("div");
        let btnDelete = document.createElement("input");

        swatch.className = "swatch";
        swatch.setAttribute("data-red", color.red);
        swatch.setAttribute("data-green", color.green);
        swatch.setAttribute("data-blue", color.blue);
        swatch.style.background = `rgb(${color.red},${color.green},${color.blue})`;

        swatch.addEventListener("click", setColorPickerFromSwatch);

        btnDelete.type = "button";
        btnDelete.value = "X";
        btnDelete.addEventListener("click", deleteSwatch);

        swatch.appendChild(btnDelete);
        swatchComponents.appendChild(swatch);
    });
};

window.addEventListener("load", initialize);