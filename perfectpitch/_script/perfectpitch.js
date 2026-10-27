// CONSTANTS
const startingOctave = 2;
const audioCtx = new AudioContext();
const noteFrequency = {
	"C2": 65.41,
	"C#2": 69.30,
};
	// Elements

// VARIABLES
let oscillator = null;

// FUNCTIONS
function playNote (evt) {
	console.log(evt.target.textContent);
}

function generatePiano (pianoContainer, octave) {
	for(let i=0; i<7; i++) {
		const newWhiteKey = document.createElement('div');
		const newWhiteNote = document.createElement('span');

		newWhiteKey.classList.add('white');
		newWhiteKey.style.gridColumn = `${1+(3*i)} / ${4+(3*i)}`;
		newWhiteNote.classList.add('note-name');
		
		newWhiteNote.textContent = `${String.fromCharCode(65+((i+2)%7))}${octave}`; // for Example "C3"
		
		newWhiteKey.addEventListener('click', playNote,);

		newWhiteKey.append(newWhiteNote);
		pianoContainer.append(newWhiteKey);

		// No black notes after E and B
		if (i!=2 && i!=6) {
			const newBlackKey = document.createElement('div');
			const newBlackNote = document.createElement('span');

			newBlackKey.classList.add('black');
			newBlackKey.style.gridColumn = `${3+(3*i)} / ${5+(3*i)}`;
			newBlackNote.classList.add('note-name');
			newBlackNote.textContent = `${String.fromCharCode(65+((i+2)%7))}#${octave}`;

			newBlackKey.addEventListener('click', playNote);
			
			newBlackKey.append(newBlackNote);
			pianoContainer.append(newBlackKey);
		}
	}
}

function generatePianos () {
	const pianoElts = document.querySelectorAll('.piano');

	for(let i=0; i<pianoElts.length; i++) {
		// console.log(pianoElts[`${i}`])
		generatePiano(pianoElts[`${i}`], startingOctave + i);
	}

	
}

// EVENT LISTENERS

// MAIN
generatePianos();
