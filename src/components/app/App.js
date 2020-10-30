import React, { useState } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import Header from '../header/Header';
import MadLibResults from '../mad-lib-results/MadLibResults';
import Input from '../input/Input'

const App = () => {

	const [rhymingWords, setRhymingWords] = useState([]);

	return (
		<div>
			<header>
				<Header />
			</header>
			<main>
				<div>
				<Input setValues={setRhymingWords} />
				<Input setValues={setRhymingWords} />
				<MadLibResults rhymingWords={rhymingWords}/>
				</div>

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
