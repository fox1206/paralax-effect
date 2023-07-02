let canvas = document.getElementsByClassName('rain')[0];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let e = canvas.getContext('2d');
console.log(e);

function randomNum(max, min) {
	return Math.floor(Math.random() * max) + min;
}

function RainDrops(x, y, end, speed, opacity) {

	this.x = x;
	this.y = y;
	this.end = end;
	this.speed = speed;
	this.opacity = opacity;

	this.draw = function() {
		e.beginPath();
		e.moveTo(this.x, this.y);
		e.lineTo(this.x, this.y - this.end);
		e.lineWidth = 1;
		e.strokeStyle= "rgba(255, 255, 255, " + this.opacity + ")";
		e.stroke();
	}

	this.update = function() {
		let rainEnd = window.innerHeight + 100;
		if (this.y >= rainEnd) {
			this.y = this.end - 100;
		} else {
			this.y = this.y + this.speed;
		}
		this.draw();
	}

}

let rainArray = [];

for (let i = 0; i < 140; i++) {
	let rainXLocation = Math.floor(Math.random() * window.innerWidth) + 1;
	let rainYLocation = Math.random() * -500;
	let randomRainHeight = randomNum(10, 2);
	let randomSpeed = randomNum(20, .2);
	let randomOpacity = Math.random() * .55;
	rainArray.push(new RainDrops(rainXLocation, rainYLocation, randomRainHeight, randomSpeed, randomOpacity));
}

function animateRain() {

	requestAnimationFrame(animateRain);
	e.clearRect(0,0, window.innerWidth, window.innerHeight);

	for (let i = 0; i < rainArray.length; i++) {
		rainArray[i].update();
	}

}

animateRain();
