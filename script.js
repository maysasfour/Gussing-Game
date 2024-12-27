let y;
let guesses;
let player;
const leaderboard = [];

function showCustomPrompt() {
    document.getElementById("customPrompt").style.display = "block";
}

function hideCustomPrompt() {
    document.getElementById("customPrompt").style.display = "none";
}

function initializeGame() {
    y = Math.floor(Math.random() * 100 + 1);
    guesses = 0;
    document.getElementById("feedback").textContent = "Game initialized! Start guessing.";
    document.getElementById("guess").value = "";
    document.getElementById("submit").disabled = false;
}

document.getElementById("submitPlayerName").addEventListener("click", function() {
    submitPlayerName();
});

document.getElementById("playerName").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        submitPlayerName();
    }
});

function submitPlayerName() {
    player = document.getElementById("playerName").value.trim();
    if (!player) player = "Anonymous"; 
    hideCustomPrompt();
    initializeGame();
}

function checkGuess(event) {
    event.preventDefault();

    const guessInput = document.getElementById("guess");
    const feedback = document.getElementById("feedback");
    const x = parseInt(guessInput.value);

    if (isNaN(x) || x < 1 || x > 100) {
        feedback.textContent = "Please enter a valid number between 1 and 100.";
        feedback.className = "";
        return;
    }

    guesses++;

    if (x === y) {
        feedback.textContent = `CONGRATULATIONS!!! 🎉🎉 YOU GUESSED IT RIGHT IN ${guesses} attempts.`;
        feedback.className = "success";
        alert(`Congratulations, ${player}! You guessed the number in ${guesses} attempts.`);
        updateLeaderboard(player, guesses);
        document.getElementById("submit").disabled = true;

        setTimeout(() => {
            initializeGame();
            showCustomPrompt(); 
        }, 2000); 
    } else if (x > y) {
        feedback.textContent = "TOO HIGH! 🥲 TRY A SMALLER NUMBER";
        feedback.className = "high";
    } else {
        feedback.textContent = "TOO LOW! 🥲 TRY A GREATER NUMBER";
        feedback.className = "low";
    }
}

document.getElementById("submit").addEventListener("click", checkGuess);

function updateLeaderboard(name, attempts) {
    leaderboard.push({ name, attempts });
    leaderboard.sort((a, b) => a.attempts - b.attempts);
    if (leaderboard.length > 3) leaderboard.pop();

    displayLeaderboard();
}

function displayLeaderboard() {
    const tbody = document.getElementById("leaderboard");
    tbody.innerHTML = "";
    leaderboard.forEach((entry, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${index + 1}</td><td>${entry.name}</td><td>${entry.attempts}</td>`;
        tbody.appendChild(row);
    });
}

document.getElementById("reset").addEventListener("click", function() {
    initializeGame();
    showCustomPrompt(); 
});

showCustomPrompt();