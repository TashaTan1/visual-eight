/***************************************************************************************
*    Title: Chameleon - P5JS Daily
*    Author: Miro Leon Bucher
*    Date: n.d.
*    Code version: 1.0
*    Availability: https://codepen.io/miroleon/pen/LYgENVZ
*
***************************************************************************************/

//variables
let eight;
let t;
let x;
let y;
let easing;
let xoff;
let pos;
let timer = 5;
let button;

function preload() {
  // LOAD SOUND
  eight = loadSound("EIGHT.mp3");
}

function setup() {
  initializeFields();
  background(17, 21, 28);
  createCanvas(windowWidth, windowHeight);
  pixelDensity(displayDensity());
  eight.play();
  eight.loop();
}

function draw() {
  background(17, 21, 28);
  strokeWeight(2);
//animation fro visual
  let map3 = map(pos, 1, 100, 0.5, 1.5, true);
  let disin1 = map(sin(t), 0, 100, 0.1, 75, true);

  let diameter1 = (width / 7 + height / 6) * disin1;
  let diameter2 = width / 4 + height / 3;
  let diameter3 = width / 4.8 + height / 3.8;

  stroke("red");
  strokeWeight(2);
  noFill();

  let pointCount = 100;
  for (let i = 0; i < radians(360); i += radians(360 / pointCount)) {
    let cx1 = (diameter1 / 2) * Math.cos(i - t * sin(2)) + width / 2;
    let cy1 = (diameter1 / 2) * Math.sin(i - t * sin(2)) + height / 2;

    let cx2 = (diameter3 / 2) * Math.cos(i - t * sin(2)) + width / 2;
    let cy2 = (diameter3 / 2) * Math.sin(i - t * sin(2)) + height / 2;

    let cx3 = (diameter2 / 2) * Math.cos(i - t * sin(2)) + width / 2;
    let cy3 = (diameter2 / 2) * Math.sin(i - t * sin(2)) + height / 2;

    let targetX = mouseX;
    let dx = targetX - x;
    x += dx * easing;

    let targetY = mouseY;
    let dy = targetY - y;
    y += dy * easing;

    let map1 = map(x, 0, width, 0.5, 1.5, true);
    let map2 = map(y, 0, height, 0.5, 1.5, true);

    strokeWeight(1);
    stroke(261, 261, 261);
    noFill();
    beginShape();
    vertex(cx1, cy1);
    bezierVertex(cx2, cy2, cx2 * map1, cy2 * map2, cx3, cy3);
    endShape();
  }
  t += 0.0025;

  if (frameCount % 60 == 0 && timer > 0) {
   
    timer--;
  }
  //  console.log(timer);
  if (timer == 0) {
    button = createButton("Carry on Listening");
    button.position(200, height/2);
    button.mousePressed(function goToAnotherPage() {
      window.location.href =
        "https://editor.p5js.org/natashatan/sketches/aQSdgJcCR";
    });
    button = createButton("Let's Breath");
    button.position(425, height/2);
    button.mousePressed(function goToAnotherPage() {
      window.location.href =
        "https://tashatan1.github.io/let-s-breath/";
    });
  }
}

function mouseWheel(event) {
  print(event.delta);
  pos += event.delta * 0.1;
}
//animation for visual
function initializeFields() {
  t = 0;
  x = 0;
  y = 0;
  easing = 0.001;
  xoff = 0.0;
  pos = 0;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
