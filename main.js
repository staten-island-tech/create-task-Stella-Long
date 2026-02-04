let userGuess = "";
let flipHistory = [];
let wins = 0;
let losses = 0;

function setGuess(guess) {
    userGuess = guess;
    document.getElementById("yourGuess").innerHTML = "Your guess: " + guess;
}

function updateStats() {
    document.getElementById("total").innerHTML = wins + losses;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
}

function flipCoin() {
    if (userGuess === "") {
        alert("Choose Heads or Tails first!");
        return;
    }

    let result = Math.random() < 0.5 ? "Heads" : "Tails";
    flipHistory.push(result);

    document.getElementById("flipResult").innerHTML = "Coin landed on: " + result;

    if (result === userGuess) {
        document.getElementById("Outcome").innerHTML = "You guessed correctly!";
        wins++;
    } else {
        document.getElementById("Outcome").innerHTML = "You guessed incorrectly!";
        losses++;
    }

    updateStats();

    if (losses >= 10) {
        document.getElementById("Outcome").innerHTML = "Game Over! You reached 10 losses.";
        document.getElementById("flipBtn").disabled = true;
        document.getElementById("headsBtn").disabled = true;
        document.getElementById("tailsBtn").disabled = true;
    }
}

