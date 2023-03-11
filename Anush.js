const userInput = document.querySelector(".user__input");

const calc = document.querySelector(".calculate");

const words = document.querySelector("#words");
const letters = document.querySelector("#letters");
const spaces = document.querySelector("#spaces");
const sentences = document.querySelector("#sentences");

const wrapperColor = document.querySelector('.wrapper');

function countWords() {
	words.innerText = userInput.value.split(" ").length;
}

function countLetters() {
	let lettersArr = userInput.value.split("");
	let counter = 0;
	for (let elem of lettersArr) {
		if (elem === " ") {
			continue;
		} else {
			counter++;
		}
	}
	letters.innerText = counter;
	console.log(letters.innerText);
}

function countSpaces() {
	let spacesArr = userInput.value.split("");
	let counter = 0;
	for (let elem of spacesArr) {
		if (elem === " ") {
			counter++;
		} else {
			continue;
		}
	}
	spaces.innerText = counter;
}

function countSentences() {
	let sentenceArr = userInput.value.split("");
	let counter = 0;
	for (let elem of sentenceArr) {
		if (elem === "." || elem === "!" || elem === "?") {
			counter++;
		} else {
			continue;
		}
	}
	sentences.innerText = counter;
}

function setBg() {
	const randomColor = Math.floor(Math.random()*16777215).toString(16);
	wrapperColor.style.backgroundColor = `#${randomColor}`;
  }

calc.addEventListener("click", () => {
	countWords();
	countLetters();
	countSpaces();
	countSentences();
	setBg();
});
