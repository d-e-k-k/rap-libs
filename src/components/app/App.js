import React, { useState } from 'react';
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
				<Input setValues={setRhymingWords} />
				<Input setValues={setRhymingWords} />
				<Input setValues={setRhymingWords} />
				<div>
					{rhymingWords.map((word) => {
						return (
							<p>
								{word.word} : {word.rhyme}
							</p>
						);
					})}
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
