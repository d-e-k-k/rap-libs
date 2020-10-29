import React, { useState } from 'react';

const MadLibForm = ({
	keyWords,
	setKeyWords,
	rhymingWords,
	setRhymingWords,
}) => {
	const handleChange = (event) => {
		setKeyWords({ ...keyWords, [event.target.id]: event.target.value });
	};

	function convertKeyWordsToArrayOfValues() {
		let tempKeyWordValueHolder = [];
		for (const property in keyWords) {
			// console.log(keyWords[property]);
			tempKeyWordValueHolder = [...tempKeyWordValueHolder, keyWords[property]];
			setKeyWords(tempKeyWordValueHolder);
		}
	}
	function handleSubmit(event) {
		event.preventDefault();
		convertKeyWordsToArrayOfValues();
		let tempRhymingWordsHolder = [];
		const key = process.env.REACT_APP_RHYME_API_KEY;
		for (let i = 0; i < keyWords.length; i++) {
			const url = `https://wordsapiv1.p.rapidapi.com/words/${keyWords[i]}/rhymes`;
			fetch(url, {
				method: 'GET',
				headers: {
					'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
					'x-rapidapi-key': key,
				},
			})
				.then((res) => res.json())
				.then((resJson) => {
					console.log(resJson);
					tempRhymingWordsHolder.unshift(resJson.rhymes.all[0]);
				})
				.catch((err) => {
					console.log(err);
				});
		}
		setRhymingWords(tempRhymingWordsHolder);
	}

	return (
		<form onSubmit={handleSubmit}>
			<input onChange={handleChange} placeholder='input-one' id='input-one' />
			<input onChange={handleChange} placeholder='input-two' id='input-two' />
			<button type='submit'>Submit</button>
		</form>
	);
};

export default MadLibForm;
