let familie = ["Jan", "Piet", "Marie", "Els", "Tom"];

console.log("Aantal elementen:", familie.length);
console.log("Eerste:", familie[0]);
console.log("Derde:", familie[2]);
console.log("Vijfde:", familie[4]);

const voegNaamToe = (arr) => {
    let naam = prompt("Geef een extra naam:");
    if (naam) {
        arr.push(naam);
    }
};

voegNaamToe(familie);
console.log("Na toevoegen:", familie);
console.log("Als string:", familie.join(", "));


window.addEventListener("load", setup);