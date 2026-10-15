const blackKeys = document.querySelectorAll('.black');
const whiteKeys = document.querySelectorAll('.white');

console.log(blackKeys, blackKeys.length)


for (let i = 0; i < blackKeys.length; i++) {
	if (i==2) {
		blackKeys[Object.keys(blackKeys)[i]].style.display = "none";
	}

	blackKeys[Object.keys(blackKeys)[i]].style.gridColumn = `${3+(3*i)} / ${5+(3*i)}`
}

for (let i = 0; i < whiteKeys.length; i++) {
	whiteKeys[Object.keys(whiteKeys)[i]].style.gridColumn = `${1+(3*i)} / ${4+(3*i)}`
}