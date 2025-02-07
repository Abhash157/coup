const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const winnerText = document.getElementById("winner");

const finishLine = canvas.width - 60;

class Player {
  constructor(x, y, color) {
    this.x = x,
    this.y = y,
    this.height = 50,
    this.width = 50,
    this.color = color
  }
};

let player1 = new Player(50, 50, "red");
let player2 = new Player(50, 150, "blue");

function drawPlayers() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "green";
  ctx.fillRect(finishLine, 0, 10, canvas.height);

  ctx.fillStyle = player1.color;
  ctx.fillRect(player1.x, player1.y, player1.height, player1.width);

  ctx.fillStyle = player2.color;
  ctx.fillRect(player2.x, player2.y, player2.height, player2.width);
}

document.addEventListener("keydown", function (event) {
  if (event.key === "a" || event.key === "A") {
    player1.x += 10;
  }
  if (event.key === "l" || event.key === "L") {
    player2.x += 10;
  }

  if (player1.x >= finishLine) {
    winnerText.innerText = "Player 1 Wins!";
    document.removeEventListener("keydown", arguments.callee);
  }
  if (player2.x >= finishLine) {
    winnerText.innerText = "Player 2 Wins!";
    document.removeEventListener("keydown", arguments.callee);
  }

  drawPlayers();
});

drawPlayers();
