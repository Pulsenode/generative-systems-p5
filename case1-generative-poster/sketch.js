let n = 9, i, s;
let a = [ n * 4 ], d;


function setup() {
  createCanvas(1000, 1000);

  stroke(-1);
  noFill();
  for(i = 0; i < n * 2; i++) {
    a[ i ] = random(800);
    a[ i + n * 2 ] = 1 - random(2);
  }
}
function draw(){
  clear();
    for(i = 0; i < n; i++) {
      for(s = 0; s < n; s++) {
        d=dist(a[i], a[i+n], a[s], a[s+n]);
        stroke(5e4 / d);
        circle(a[i], a[i+n], d);
        line(a[i], a[i+n], a[s], a[s+n]);
      }

      a[i] += a[i + n * 2];
      if(a[i] > 10000 || a[i] < 0) a[i + n * 2] *= -1;
      a[i+n] += a[i+n*3];
      if(a[i+n] > 1000 || a[i + n] < 0) a[i + n * 3] *= -1;
  }
}
