let student = {
    voornaam : "Inti",
    familienaam : "Vanparijs",
    geboorteDatum : new Date("1993-12-31"),
    adres : { // een object
        straat : "Kerkstraat 13",
        postcode : "8500",
        gemeente : "Kortrijk"
    },
    isIngeschreven : true,
    namenVanExen :
        ["Sofie", "Berta", "Philip", "Alberto"], // een array
    aantalAutos : 2
}
console.log(JSON.stringify(student));