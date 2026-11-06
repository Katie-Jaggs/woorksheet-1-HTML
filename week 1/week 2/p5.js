


function setup() {
  createCanvas(400, 300);
  background(200);
  noLoop();
}

function drawShape(rectangleWidth,rectangleHeight) {
 let xPos = random(0, width);
 let yPos = random(0, height);
	rect(xPos,yPos,rectangleWidth,rectangleHeight);
}

funtion draw() {
  nofill();
  drawShape(rectWidth,rectHeight);
}
