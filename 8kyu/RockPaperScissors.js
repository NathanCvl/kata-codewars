const rps = (p1, p2) => {
    if (p1 === p2) return "Draw!";
    if (p1 === "rock") return p2 === "scissors" ? "Player 1 won!" : "Player 2 won!";
    if (p1 === "paper") return p2 === "rock" ? "Player 1 won!" : "Player 2 won!";
    if (p1 === "scissors") return p2 === "paper" ? "Player 1 won!" : "Player 2 won!";
}