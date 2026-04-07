const setup = () => {
    const birthDay = new Date("2007-03-19");
    let difference = new Date() - birthDay;
    let differenceInDays = difference / 1000 / 60 / 60 / 24;
    let string = `${Math.floor(differenceInDays)} dagen (${Math.floor(differenceInDays / 365)} jaar)`;
    console.log(string);
    document.querySelector("p").textContent = string;
}

window.addEventListener("load", setup);