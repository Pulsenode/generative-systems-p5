function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  noFill();
  stroke(255, 120);
  strokeWeight(1);
}

function draw() {
  background(10, 15, 40);

  translate(width / 2, height / 2);


for (let r = 30; r < 400; r += 5) {
  beginShape();

  for (let a = 0; a < 360; a += 2) {

    let xoff = cos(a) + r * 0.01;
    let yoff = sin(a) + r * 0.01;

    let n = noise(xoff, yoff, frameCount * 0.01);

    let noiseDetail = noise(xoff * 3, yoff * 3, frameCount * 0.02);
    let radius = r + map(n, 0, 1, -20, 60) + map(noiseDetail, 0, 1, -30, 10);

    let x = radius * cos(a);
    let y = radius * sin(a);

    vertex(x, y);
  }

  endShape(CLOSE);
}


  push();
  resetMatrix();
  imageMode(CENTER);
  image(img, width / 6, height / 2, 550, 1050);
  pop();


  push();
  resetMatrix();
  fill(255);
  textAlign(CENTER);
  textSize(24);
  text(currentWord, width / 2, height - 50);
  pop();
}

