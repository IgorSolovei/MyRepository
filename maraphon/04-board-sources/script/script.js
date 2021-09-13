const board = document.querySelector('#board');
const colors = ['#DC143C', '#FF1493', '#ADFF2F', '#00FF7F', '#20B2AA', '#00FFFF', '#4B0082', '#FF0000',]
const SQUARE_NUMBER = 594;

for (let i = 0; i < SQUARE_NUMBER; i++) {
	const square = document.createElement('div')
	square.classList.add('square')

	square.addEventListener('mouseover', setColor)
	square.addEventListener('mouseleave', removeColor)

	board.append(square)
}

function setColor(event) {
	const element = event.target
	element.style.background = getRandomColor()
	element.style.boxShadow = `0 0 2px ${getRandomColor()}, 0 0 10px ${getRandomColor()}`
}

function removeColor(event) {
	const element = event.target
	element.style.backgroundColor = '#1d1d1d'
	element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {

	return colors[Math.floor(Math.random() * colors.length)]
}