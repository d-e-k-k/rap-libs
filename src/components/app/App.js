import React, { useState } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import Header from '../header/Header';
import MadLibResults from '../MadLibResults';
import Input from '../input/Input';
import Form from '../form.js/Form';

const App = () => {
	const [rhymingWords, setRhymingWords] = useState([]);
	const [visibleResults, setVisibleResults] = useState(true);


	return (
		<div>
			<header>
				<Header />
			</header>
			<main>
				<Form
					setRhymingWords={setRhymingWords}
					visibleResults={visibleResults}
					setVisibleResults={setVisibleResults}
				/>
				{visibleResults ? <MadLibResults rhymingWords={rhymingWords} /> : null}
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
