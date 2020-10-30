import React, { useState } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import Header from '../header/Header';
import MadLibResults from '../mad-lib-results/MadLibResults';
import Input from '../input/Input';

const App = () => {
	const [rhymingWords, setRhymingWords] = useState([]);
	const [visibleResults, setVisibleResults] = useState(true);

	function toggleResultsVisibility(event) {
		event.preventDefault();
		visibleResults ? setVisibleResults(false) : setVisibleResults(true);
		console.log(event.target);
	}
	return (
		<div>
			<header>
				<Header />
			</header>
			<main>
				<div className='form-container'>
					<form onSubmit={toggleResultsVisibility}>
						<label>Part of the Body: </label>
						<Input setValues={setRhymingWords} />
						<br />
						<lable>Item of Clothing : </lable>
						<Input setValues={setRhymingWords} />
						<br />
						<label>Animal: </label>
						<Input setValues={setRhymingWords} />
						<br />
						<label>Trash Word: </label>
						<Input setValues={setRhymingWords} /><br/>
						<button type='submit'>Show Rap-Lib</button>
					</form>
				</div>
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
