// CONSTANTS
const startingOctave = 2;
	// Elements

// VARIABLES

// FUNCTIONS
function generatePianos () {
	const pianoElts = document.querySelectorAll('.piano');
	const pianoIndex = Object.keys(pianoElts);
	for (let h = 0; h < pianoElts.length; h++) {
		let i;

		for(i=0; i<7; i++) {
			const newWhiteKey = document.createElement('div');
			const newWhiteNote = document.createElement('span');

			newWhiteKey.classList.add('white');
			newWhiteKey.style.gridColumn = `${1+(3*i)} / ${4+(3*i)}`;
			newWhiteNote.classList.add('note-name');
			newWhiteNote.textContent = `${String.fromCharCode(65+((i+2)%7))}${startingOctave+h}`;
			
			newWhiteKey.append(newWhiteNote);
			pianoElts[pianoIndex[h]].append(newWhiteKey);

			// No black notes after E and B
			if (i!=2 && i!=6) {
				const newBlackKey = document.createElement('div');
				const newBlackNote = document.createElement('span');

				newBlackKey.classList.add('black');
				newBlackKey.style.gridColumn = `${3+(3*i)} / ${5+(3*i)}`;
				newBlackNote.classList.add('note-name');
				newBlackNote.textContent = `${String.fromCharCode(65+((i+2)%7))}#${startingOctave+h}`
				
				newBlackKey.append(newBlackNote);
				pianoElts[pianoIndex[h]].append(newBlackKey);
			}
		}
	}
}

// EVENT LISTENERS

// MAIN
generatePianos();
