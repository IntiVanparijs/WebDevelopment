let global = {
    IMAGE_COUNT: 5,
    IMAGE_SIZE: 48,
    IMAGE_PATH_PREFIX: "images/",
    IMAGE_PATH_SUFFIX: ".png",
    MOVE_DELAY: 1000,
    score: 0,
    timeoutId: null
};

const playField = document.getElementById("playField");
const target = document.getElementById("target");
const scoreSpan = document.getElementById("score");
const startBtn = document.getElementById("startBtn");

function randomPosition() {
    const maxX = playField.clientWidth - global.IMAGE_SIZE;
    const maxY = playField.clientHeight - global.IMAGE_SIZE;

    target.style.left = Math.floor(Math.random() * maxX) + "px";
    target.style.top = Math.floor(Math.random() * maxY) + "px";
}

function randomImage() {
    const index = Math.floor(Math.random() * global.IMAGE_COUNT);
    target.src = global.IMAGE_PATH_PREFIX + index + global.IMAGE_PATH_SUFFIX;
    target.dataset.index = index;
}

function moveTarget() {
    randomPosition();
    randomImage();

    global.timeoutId = setTimeout(moveTarget, global.MOVE_DELAY);
}

target.addEventListener("click", function () {
    if (target.dataset.index === "4") {
        alert("BOEM! Spel gedaan.");
        clearTimeout(global.timeoutId);
        return;
    }

    global.score++;
    scoreSpan.textContent = global.score;

    randomPosition();
    randomImage();
});

startBtn.addEventListener("click", function () {
    global.score = 0;
    scoreSpan.textContent = global.score;
    moveTarget();
});