import React, { useState } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import Header from '../header/Header';
import MadLibResults from '../MadLibResults';
import Form from '../form.js/Form';
import InputListData from '../../data/inputList.json';

const App = () => {
	const [parent, setParent] = useState([]);
	const [words, setWords] = useState([]);
	const [rapDisplayed, setRapDisplayed] = useState(false);

	return (
		<div>
			<header>
				<Header />
			</header>
			<main>
				<Form
					parent={parent}
					setParent={setParent}
					words={words}
					setWords={setWords}
					InputListData={InputListData}
					setRapDisplayed={setRapDisplayed}
					rapDisplayed={rapDisplayed}
				/>
				<MadLibResults
					parent={parent}
					InputListData={InputListData}
					rapDisplayed={rapDisplayed}
				/>
			</main>
		</div>
	);
};

export default App;

// will contain a header
// will contain a welcome screen
// move to form screen after welcome
// after from submited load results screen
// keywords state will be created in app and passed down to children
