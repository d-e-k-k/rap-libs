import React, { useState } from 'react';

const MadLibForm = ({
	keyWords,
	setKeyWords,
	rhymingWords,
	setRhymingWords,
}) => {
	// console.log(rhymingWords);
	function handleSubmit(event) {
		event.preventDefault();
		// console.log('working');
		getRhymingWord();
	}

	function handleChange(event) {
		setKeyWords({ ...keyWords, [event.target.id]: event.target.value });
	}

	function getRhymingWord() {
		// this will have a nested fetch
		// will load url, key, and keyWords when submit is clicked
		const key = process.env.REACT_APP_RHYME_API_KEY;
		const arrayOfKeyWords = Object.entries(keyWords);
		// console.log(arrayOfKeyWords);
		for (let i = 0; i < arrayOfKeyWords.length; i++) {
            let url = `https://wordsapiv1.p.rapidapi.com/words/${arrayOfKeyWords[i][1]}/rhymes`;
            console.log(url);
            
			// console.log(arrayOfKeyWords[i][1]);
		}

		// fetch(url, {
		// 		method: 'GET',
		// 		headers: {
		// 			'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
		// 			'x-rapidapi-key': key,
		// 		},
		// 	})
		//         .then(res => res.json()
		//         .then(resJson => {
		//             setRhymingWords(resJson.rhymes.all[0]);

		//         }))
		// 		.catch((err) => {
		// 			console.log(err);
		// 		});
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					onChange={handleChange}
					id='nounOne'
					placeholder='Noun'
					required
				/>
				<input
					onChange={handleChange}
					id='VerbOne'
					placeholder='Ing Ending Verb'
					required
				/>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default MadLibForm;
// useState will be imported ##DONE
// state will be loaded and deconructed ##DONE
// gerneral form sturcture will be created ##DONE
// starting with one input and one submit button ##DONE
// state will be updated when form is on change ##DONE
// getryhing word function will fire when submitted event happends ##DONE
//getryhming word will contain a fetch ##DONE
// fetch url will be base with spot for variables: keyWords and key##DONE
//key will be from local storage##DONE
