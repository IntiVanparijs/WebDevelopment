const setup = () => {
    document.querySelectorAll("li").forEach(e =>{
        e.classList = "listitem";
    });
    const body = document.querySelector("body");
    const img = document.createElement("img");
    img.setAttribute("src", "images/link symbool.jpg");
    img.setAttribute("alt","Mijn portret!");
    body.appendChild(img);
}

window.addEventListener("load", setup);