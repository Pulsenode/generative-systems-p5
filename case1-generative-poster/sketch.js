let particles = [];
let nbParticules = 15; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  

  for (let a = 0; a < nbParticules; a++) {
    particles.push(new Particle());
  }
  
  strokeWeight(1);
  noFill();
}

function mouseClicked() {
  background(0); // Clear the canvas
  particles = [];
  for (let a = 0; a < nbParticules; a++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(0); 


  for (let a = 0; a < particles.length; a++) {
    let p1 = particles[a];
    
    p1.move(); 
    p1.bounce();  
    

    for (let b = 0; b < particles.length; b++) {
      let p2 = particles[b];
      

      let d = dist(p1.x, p1.y, p2.x, p2.y);

      if (d > 0 && d < 600) {

        let luminosite = map(d, 0, 600, 255, 0);
        stroke(255, luminosite); 
        

        circle(p1.x, p1.y, d);
        line(p1.x, p1.y, p2.x, p2.y);
      }
    }

    text(a, p1.x, p1.y);
    textSize(40);
    stroke(1);
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