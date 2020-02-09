
function setup() {
  createCanvas(520, 520);
  background(255, 182, 193);
}

function keyPressed() {
  background(255, 182, 193) //doesn't work ??
}

function draw() {
  for(let i=5; i<width; i+=10) {
    if(i%0===10){
      stroke(225);
      line(i,180, i, height/2);
    }
    else {
      stroke(170)
      line(i, 10, i, 210);
    }
  }




  strokeWeight(5);
  stroke(225);

  if(mouseX<250) {
    fill(198, 134, 66);
  }


  for (var x=0; x<=width; x=x+50) {
    fill(102, 0, 204);
    ellipse(x,55,25,25);
  }


  for (var x=0; x<=width; x=x+50) {
    fill(102, 0, 204);
    ellipse(x,475,25,25);
  }





  //ellipse
  noStroke();
  fill(75,0,130);
  ellipse(mouseX,mouseY,50,50,25,25);





  //Hair

  noStroke();
  fill(139, 69, 19);
  arc(260, 280, 300, 380, QUARTER_PI + HALF_PI, QUARTER_PI, OPEN);



  //Face
  noStroke();
  fill(247, 221, 212);
  ellipse(260, 255, 200, 260);




  //Bang
  noStroke();
  fill(139, 69, 19);
  arc(300, 150, 150, 100, 0, PI + QUARTER_PI, CHORD);
  arc(180, 120, 140, 148, 0, 0.75 * Math.PI);

  //eyebrows
  stroke(21, 25, 25);
  strokeWeight(5);
  noFill();
  arc(210, 228, 45, 10, PI, TWO_PI, OPEN);
  arc(310, 228, 45, 10, PI, TWO_PI, OPEN);

  //eyes
  strokeWeight(2);
  fill(225);
  ellipse(210, 250, 45, 20);
  ellipse(310, 250, 45, 20);

  //eyeballs
  noStroke();
  fill('#8b4513');
  fill('#8b4513');
  ellipse(210, 250, 20, 20);
  ellipse(310, 250, 20, 20);

  //Mouth
  fill(227, 93, 106);
  arc(260, 325, 49, 35, 0, PI);





}
