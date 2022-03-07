const paths = [];
let currentPath = [];
let isTouchStarted = false;

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  background(250);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function draw() {
	noFill();
	if(mouseIsPressed || isTouchStarted){
		const point = {
			x: mouseX,
			y: mouseY,
			color: 0,
			weight: 3
		};
		currentPath.push(point);
	}
	
	paths.forEach(path => {
		beginShape();
		path.forEach(point => {
			stroke(point.color);
			strokeWeight(point.weight);
			vertex(point.x, point.y);
		});
		endShape();
	});
}

function mousePressed() {
	currentPath = [];
	paths.push(currentPath);
}

function touchStarted() {
	isTouchStarted = true
	console.log("Touch Started")
	mousePressed()
  }

  function touchEnded() {
	isTouchStarted = false
	console.log("Touch ended")
  }