var myImg;

function preload() {
  myImg = loadImage("img/nasa.jpg")
}

function backgroundImage(img) {
  var x = 0;
  var y = 0;
  var w = width;
  var h = height;
  
  var offsetX = 0.5;
  var offsetY = 0.5;
  
  var iw = img.width,
      ih = img.height,
      r = Math.min(w/iw, h/ih),
      nw = iw*r,
      nh = ih*r,
      cx, cy, cw, ch, ar = 1;
      
  if (nw<w) ar = w/nw;
  if (Math.abs(ar - 1) < 1e-14 && nh<h) ar = h/nh;
  nw *= ar;
  nh *= ar;
  
  
  cw = iw / (nw/w);
  ch = ih / (nh/h);
  
  cx = (iw-cw) * offsetX;
  cy = (ih-ch) * offsetY;
  
  
  if (cx < 0) cx = 0;
  if (cy < 0) cy = 0;
  if (cw > iw) cw = iw;
  if (ch > ih) ch = ih;
  
  
  image(img, cx, cy, cw, ch, x, y, w, h);
  
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
}


function draw() {
  
  myImg.filter("gray");
  myImg.filter("invert");
  backgroundImage(myImg);
  
  
  translate(0, -1*(height/8));
  textFont('Anton');
  fill(255,215,0);
  textSize(height/8);
  textAlign(CENTER);
  text(hour(),width/2,height/3);
  text(minute(),width/2,height/3*2);
  text(second(),width/2,height);
  
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
}