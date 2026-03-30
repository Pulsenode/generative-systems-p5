const SYMBOLS = ["🍒", "🍋", "🔔", "⭐", "💎", "❤️"];
const REEL_COUNT = 3;
const REEL_SPACING = 120;

let reels = [0, 0, 0];
let state = "idle";
let spinTime = 0;
let spinSpeed = 5;

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
}

function draw() {
  background(20);
  
  drawTitle();
  drawReels();
  drawUI();
  
  if (state === "spinning") {
    updateSpin();
  }
}


function drawTitle() {
  fill(255);
  textSize(30);
  text("SLOT MACHINE", width / 2, 50);
}

function drawReels() {
  for (let i = 0; i < REEL_COUNT; i++) {
    let x = width / 2 - (REEL_SPACING * (REEL_COUNT - 1)) / 2 + i * REEL_SPACING;
    let y = height / 2;


    if (dist(mouseX, mouseY, x, y) < 50) {
      stroke(255, 100);
      noFill();
      rect(x, y, 90, 90, 10);
      noStroke();
    }

    fill(255);
    textSize(50);
    text(SYMBOLS[reels[i]], x, y);
  }
}

function drawUI() {
  let btnX = width / 2;
  let btnY = height - 100;
  let isHovering = (mouseX > btnX - 75 && mouseX < btnX + 75 && mouseY > btnY - 25 && mouseY < btnY + 25);


  fill(isHovering ? 255 : 200);
  rect(btnX, btnY, 150, 50, 10);
  
  fill(0);
  textSize(20);
  text("SPIN", btnX, btnY);
  drawMessages();
}

function drawMessages() {
  textSize(25);
  if (state === "idle") {
    fill(150);
    text("Click SPIN to play", width / 2, height - 40);
  } else if (state === "result") {
    let isWin = (reels[0] === reels[1] && reels[1] === reels[2]);
    fill(isWin ? color(255, 215, 0) : color(255, 80, 80));
    text(isWin ? "YOU WIN 🎉" : "TRY AGAIN", width / 2, height - 40);
  }
}

function mousePressed() {
  let btnX = width / 2;
  let btnY = height - 100;
  let clickedBtn = (mouseX > btnX - 75 && mouseX < btnX + 75 && mouseY > btnY - 25 && mouseY < btnY + 25);

  if (clickedBtn && state !== "spinning") {
    startSpin();
  }
}

function startSpin() {
  state = "spinning";
  spinTime = 0;
  spinSpeed = 5;
}

function updateSpin() {
  spinTime++;

  if (frameCount % spinSpeed === 0) {
    for (let i = 0; i < REEL_COUNT; i++) {
      reels[i] = floor(random(SYMBOLS.length));
    }
  }


  if (spinTime > 60) spinSpeed = 10;
  if (spinTime > 100) spinSpeed = 20;

  if (spinTime > 140) {
    state = "result";
  }
}