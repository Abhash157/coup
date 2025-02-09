const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const winnerText = document.getElementById("winner");
const gravity = 0.5;
//Add spritesheet

const finishLine = canvas.width - 60;

class Player {
  constructor(x, y, color) {
    (this.x = x),
      (this.y = y),
      (this.height = 50),
      (this.width = 50),
      (this.color = color),
      (this.velocityY = 0);
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.height, this.width);
  }

  update() {
    this.y += this.velocityY;
    if (this.y < canvas.height - this.height - this.velocityY)
      this.velocityY += gravity;
    else this.velocityY = 0;
  }
}

let player1 = new Player(50, 150, "red");
let player2 = new Player(450, 150, "blue");

function drawPlayers() {
  requestAnimationFrame(drawPlayers);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "green";
  ctx.fillRect(finishLine, 0, 10, canvas.height);

  player1.draw();
  player2.draw();
  player1.update();
  player2.update();
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
