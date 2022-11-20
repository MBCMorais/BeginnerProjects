const circle = document.getElementsByClassName('circle');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const btn = document.getElementById('submit');
const title = document.getElementById('title');
let len = circle.length;

const on = function () {
	for (let i = 0; i < len; i++) {
		circle[i].removeAttribute('style');
		circle[i].style.animationPlayState = 'running';
		circle[i].style.WebkitAnimationPlayState = 'running';
	}
};

const off = function () {
	title.style.animation = 'none';

	for (let i = 0; i < len; i++) {
		circle[i].style.animation = 'none';
		circle[i].style.background = '#563260';
	}
};

function convertSpeed() {
	let speed = document.getElementById('quantity').value;
	for (let i = 0; i < len; i++) {
		circle[i].style.animationDuration = speed + 's';
	}
}

const bulb1 = document.getElementById('LightBulb1');
const bulb2 = document.getElementById('LightBulb2');
const bulb3 = document.getElementById('LightBulb3');
const bulb4 = document.getElementById('LightBulb4');
console.log(bulb1);

function convertColor() {
	let speed = document.getElementById('quantity').value;
	for (let i = 0; i < len; i++) {
		circle[i].style.animationDuration = speed + 's';
	}
}

play.addEventListener('click', on);
stop.addEventListener('click', off);
