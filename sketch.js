var imgs = [];
var imageWidth;
var imageHeight;
var imageToUse = 0;

function preload() {
  imgs[0] = loadImage( "hand1.JPG" );
  imgs[1] = loadImage( "hand2.JPG" );
  imgs[2] = loadImage( "hand3.JPG" );
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //   Adjust frame rate
  frameRate(12);
  //   Adjust Image Size
  imageWidth = imgs[0].width / 5;
  imageHeight = imgs[0].height / 7;
  
  
  imageMode(CENTER);
}

function draw() {
  //   Change Background Color
  background(255,255,255,10);
  tint(300, 199, 270); //tint
  
  image(imgs[imageToUse], mouseX, mouseY,imageWidth, imageHeight);
  imageToUse = (imageToUse+1) % imgs.length;
}