// Thanks to Esin, Jen, and Tabitha from General Assembly a lot of help and insight! 
import React, { useState } from 'react';
import MadLibResults from '../MadLibResults';
import Form from '../form.js/Form';
import InputListData from '../../data/inputList.json';

const App = () => {
	const [parent, setParent] = useState([]);
	const [words, setWords] = useState([]);
	const [rapSubmitted, setRapSubmitted] = useState(false);
	const [rapDisplayed, setRapDisplayed] = useState(false);

	return (
		<div>
			<main>
				<Form
					parent={parent}
					setParent={setParent}
					words={words}
					setWords={setWords}
					InputListData={InputListData}
					rapSubmitted={rapSubmitted}
					setRapSubmitted={setRapSubmitted}
					rapDisplayed={rapDisplayed}
					setRapDisplayed={setRapDisplayed}
				/>
				<MadLibResults
					parent={parent}
					InputListData={InputListData}
					rapSubmitted={rapSubmitted}
					rapDisplayed={rapDisplayed}
				/>
			</main>
		</div>
	);
};

export default App;
