

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function countdown() {
    document.querySelector("#fight").textContent = "3...";
    await sleep(1000);
    document.querySelector("#fight").textContent = "2...";
    await sleep(1000);
    document.querySelector("#fight").textContent = "1...";
    await sleep(1000);
    document.querySelector("#fight").textContent = "FIGHT!";
    roll();
}

document.querySelector("#fight").addEventListener("click", countdown);
function roll() {
    var roll1 = Math.floor(Math.random() * 3);

    var roll2 = Math.floor(Math.random() * 3);

    if (roll1 === roll2) {
        document.querySelector("#winner").textContent = "It's a draw!";
    } else if (roll1 === (roll2 + 1) % 3) {
        document.querySelector("#winner").textContent = "Player 1 wins!";
    } else {
        document.querySelector("#winner").textContent = "Player 2 wins!";
    }

    if (roll1 === 0) {
        document.querySelector(".player1").setAttribute("src", "./images/rock-left-g.png");
    } else if (roll1 === 1) {
        document.querySelector(".player1").setAttribute("src", "./images/paper-left-g.png");
    } else {
        document.querySelector(".player1").setAttribute("src", "./images/scissors-left-g.png");
    }

    if (roll2 === 0) {
        document.querySelector(".player2").setAttribute("src", "./images/rock-right-g.png");
    } else if (roll2 === 1) {
        document.querySelector(".player2").setAttribute("src", "./images/paper-right-g.png");
    } else {
        document.querySelector(".player2").setAttribute("src", "./images/scissors-right-g.png");
    }
}
