let particles = [];
let nbParticules = 15;
let maxDist;
let baseColor;
let bgColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let a = 0; a < nbParticules; a++) {
    particles.push(new Particle());

  }
  
  strokeWeight(1.5);
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = baseColor;
  noFill();

  maxDist = random(200, 600);
  baseColor = color(random(255), random(255), random(255));
  bgColor = color(random(10, 40));
}

function mouseClicked() {
  particles = [];

  nbParticules = int(random(10, 50));

  maxDist = random(200, 600);
  baseColor = color(random(255), random(255), random(255));
  bgColor = color(random(10, 40));

  for (let a = 0; a < nbParticules; a++) {
    particles.push(new Particle());

  }
}

function draw() {
  background(bgColor, 40); 


  for (let a = 0; a < particles.length; a++) {
    let p1 = particles[a];
    
    p1.move(); 
    p1.bounce();  
    

    for (let b = 0; b < particles.length; b++) {
      let p2 = particles[b];
      

      let d = dist(p1.x, p1.y, p2.x, p2.y);

      if (d > 0 && d < maxDist) {

        let luminosite = map(d, 0, maxDist, 255, 0);
        stroke(red(baseColor), green(baseColor), blue(baseColor), luminosite);
        

        circle(p1.x, p1.y, d);
        line(p1.x, p1.y, p2.x, p2.y);
      }
    }

    textSize(60);
    textAlign(CENTER);
    text("GENERATIVE ART", width / 2, height - 60);
  }
}


class Particle {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.vx = random(-1.5, 1.5); 
    this.vy = random(-1.5, 1.5); 
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
  }

  bounce() {
    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0 || this.y > height) this.vy *= -1;
  }
}