// CONSTANTS
const startingOctave = 3;
const endingOctave = 4;
const audioCtx = new AudioContext();
const noteNameArr = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const referenceNote = {
	name: "A",
	oct: "4",
	freq: "440"
}
	// Elements

// VARIABLES
let oscillator = null;

// FUNCTIONS
function calcFreq (note = "A4") {
	if (note == `${referenceNote.name}${referenceNote.oct}`) {
		return 440;
	}

	let steps = 1;
	let destNote = {
		name: note.slice(0,-1),
		oct: note.slice(-1)
	}
	let octDiff = destNote.oct - referenceNote.oct;
	steps = 12*octDiff;
	steps += noteNameArr.indexOf(destNote.name) - noteNameArr.indexOf(referenceNote.name);
	console.log(steps);

	let rsltFreq = Math.pow(2, steps/12)*440;
	return rsltFreq.toFixed(2);
}

function playNote (evt) {
	// console.log(evt.target.textContent);

	let freq = calcFreq(evt.target.textContent);

	oscillator = audioCtx.createOscillator();
	oscillator.type = "sine";
	oscillator.frequency.value = `${freq}`;
	oscillator.connect(audioCtx.destination);
	oscillator.start();
	oscillator.stop(audioCtx.currentTime + 0.1);
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
