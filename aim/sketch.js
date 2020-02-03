var r, b, t;
function setup() {
    // put setup code here

    createCanvas(windowWidth, windowHeight);

    r = color(255,255,153);
    b = color(255,153,204);
    t = color(153,204, 255);

    stroke(225,0,127);
    strokeWeight(2);
}

const SHIFT = 80;

function getShift(height) {
    return (SHIFT + (height - 300) * 22 / 85);
}

function drawSegment(baseX, baseY, height, width) {
  let shift = getShift(height) ;

  beginShape();
  vertex(baseX,baseY);
  vertex(baseX+shift,baseY-height);
  vertex(baseX+shift+width,baseY-height);
  vertex(baseX+width,baseY);
  vertex(baseX,baseY);
  endShape();
}

function draw() {
  var t = map(mouseX,0,width,0,1.0);
 var c = lerpColor(r,b,t);
 background(c);

 // strokeWeight(2);

// A stick
fill(229,204,255);
beginShape();
vertex(50+getShift(300/7),650);
vertex(50+getShift(300),600);
vertex(50+60*3,600);
vertex(50+60+getShift(300),650);
vertex(50+getShift(300/7),650);
endShape();
fill(255);
// A back
fill(153,190,255);
beginShape();
vertex(50+getShift(300),400);
vertex(110+getShift(300),400);
vertex(185+60,730);
vertex(185,730);
vertex(50+getShift(300),400);
endShape();
fill(229,204,255);

// A
drawSegment(50, 700, 300, 60);
fill(229,204,255);
// I
drawSegment(185,730, 300, 60);
// I2
drawSegment(273,400,45, 60);

let shLeft = 30
fill(153,190,255);
beginShape();
vertex(290-shLeft+getShift(385),400);
vertex(290-shLeft+60+getShift(385),387);
vertex(425-shLeft+60,730);
vertex(425-shLeft,730);
vertex(290-shLeft+getShift(385),400);
endShape();
fill(153,190,255);

// M1
fill(229,204,255);
drawSegment(290-shLeft,770,385,60);



fill(153,190,255);
beginShape();
vertex(425-shLeft+getShift(300),430);
vertex(425-shLeft+60+getShift(300),430);
vertex(560-shLeft+60,700);
vertex(560-shLeft,700);
vertex(425-shLeft+getShift(300),430);
endShape();
fill(229,204,255);
// M2
drawSegment(425-shLeft,730,300,60);
// M3
drawSegment(560-shLeft,700,55,60);




}
