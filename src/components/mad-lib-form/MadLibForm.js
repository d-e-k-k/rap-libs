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


	
	function handleSubmit(event) {
		event.preventDefault();
		const key = process.env.REACT_APP_RHYME_API_KEY;
		for(const property in keyWords) {
			const url = `https://wordsapiv1.p.rapidapi.com/words/${keyWords[property]}/rhymes`;
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
					setRhymingWords([...rhymingWords, resJson.rhymes.all[0]])
					console.log(rhymingWords);
				
				})
				.catch((err) => {
					console.log(err);
				});
		}
		
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
