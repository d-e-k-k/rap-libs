import React, { useState } from 'react';
import Header from '../header/Header';
import MadLibForm from '../mad-lib-form/MadLibForm';
import MadLibResults from '../mad-lib-results/MadLibResults';
import Test from '../../test/Test';

const App = () => {
    const [keyWords, setKeyWords] = useState([]);
    const [rhymingWords, setRhymingWords] = useState([]);
    const[inputOne, setInputOne] = useState();
    const[inputTwo, setInputTwo] = useState();

	return (
		<div>
			<header>
				<Header />
			</header>
			<main>
				<MadLibForm
					keyWords={keyWords}
					setKeyWords={setKeyWords}
					rhymingWords={rhymingWords}
                    setRhymingWords={setRhymingWords}
                    inputOne={inputOne}
                    setInputOne={setInputOne}
                    inputTwo={inputTwo}
                    setInputTwo={setInputTwo}
				/>
				<MadLibResults
					keyWords={keyWords}
					setKeyWords={setKeyWords}
					rhymingWords={rhymingWords}
					setRhymingWords={setRhymingWords}
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
