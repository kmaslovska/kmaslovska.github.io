let colorPicker;

let button;

let art;

let brushMenuX = 50;
let brushMenuY = 50;

let pencilMenuX = 50;
let pencilMenuY = 90;

let pencilBool = false;
let brushBool = false;

let pencilX = 850;
let pencilY = 750;

let brushX = 950;
let brushY = 750;

let videoX = 0;

let rateText;

function preload(){
  art = loadImage('images/art.png');
  pencil = loadImage('images/pencil.png');
  brush = loadImage('images/brush.png');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  colorPicker = createColorPicker('#ed225d');
  colorPicker.position(1050, 750);
  capture = createCapture(VIDEO);
  capture.size(540, 750);
  imageMode(CORNER);
  capture.hide();

  rateText = createP('');
  rateText.position(1150,720);
  rateText.hide();

  button = createButton('let Leonardo da Vinci rate my masterpiece');
  button.position(1150,760);
  button.mousePressed(randomNumber);

}
function draw(){
//  background(255);
  image(capture,650,0, 800, 700);
  image(art,0,0,750,1100);
  push();
    imageMode(CENTER);
      image(pencil, pencilX, pencilY, 60, 60);
        pop();
        //  print(pencilBool);

  push();
    imageMode(CENTER);
      image(brush, brushX,brushY,60,60);
        pop();
        //  print(brushBool);


}

function randomNumber(){
  button.hide();
  rateText.show();

  let val = int(random(1, 5));
  rateText.html("da Vinci says your drawing is a " + val);
  print(val);
}

function mousePressed(){
  if(dist(mouseX, mouseY, pencilX, pencilY) < 30){
    pencilBool = true;
    brushBool = false;
  }

  if(dist(mouseX, mouseY, brushX, brushY) < 30){
    pencilBool = false;
    brushBool = true;
  }
}


function mouseDragged(){


  if(pencilBool == true){
    pencilTool();
  }

  if(brushBool == true){
    brushTool();
  }
}

function pencilTool(){
  strokeWeight(1);
  stroke(colorPicker.color());
  line(mouseX, mouseY, pmouseX, pmouseY);
}

function brushTool(){
  strokeWeight(13);
  stroke(colorPicker.color());
  line(mouseX, mouseY, pmouseX, pmouseY);
}

function keyPressed(){
  background(255);
}
