import React, { useState, useEffect } from 'react';

const MadLibForm = ({
	rhymingWords,
	setRhymingWords,
	inputOne,
	setInputOne,
	inputTwo,
	setInputTwo,
}) => {
	const handleChangeInputOne = (event) => {
		setInputOne(event.target.value);
	};

	const handleChangeInputTwo = (event) => {
		setInputTwo(event.target.value);
	};

	function handleSubmit(event) {
		event.preventDefault();
		const key = process.env.REACT_APP_RHYME_API_KEY;
		fetch(`https://wordsapiv1.p.rapidapi.com/words/${inputOne}/rhymes`)
		.then()
		
		
	}

	

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					onChange={handleChangeInputOne}
					id='input-one'
					placeholder='Noun'
					required
				/>
				<input
					onChange={handleChangeInputTwo}
					id='input-two'
					placeholder='Ing Eding Verb'
					required
				/>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default MadLibForm;
