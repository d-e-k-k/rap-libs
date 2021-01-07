import React, { useState } from 'react';
import InputAndLabel from '../input-and-label/InputAndLabel';

const Form = ({
	parent,
	setParent,
	words,
	setWords,
	InputListData,
	setRapSubmitted,
	setRapDisplayed,
	errorStatus,
	setErrorStatus,
}) => {
	function handleSubmit(event) {
		event.preventDefault();
		setRapSubmitted(true);

		for (const property in words) {
			const url = `https://rhymebrain.com/talk?function=getRhymes&word=${words[property]}`;

			fetch(url)
				.then((res) => res.json())
				.then((resJson) => {
					setParent((prevWords) => [
						...prevWords,
						{
							userInput: `${words[property]}`,
							rhymingWord: [
								resJson[0].word,
								resJson[1].word,
								resJson[2].word,
								resJson[3].word,
								resJson[4].word,
							],
						},
					]);
				})
				.catch((err) => {
					setErrorStatus(true);
				});
		}
	}

	function handleReset(event) {
		setParent([]);
		setWords([]);
		setRapSubmitted(false);
		setRapDisplayed(false);
	}


	return (
		<div className='form-container'>
			{errorStatus ? <h2>You have a problem Chief</h2> : null}
			<form onSubmit={handleSubmit}>
				<h1>Rap-Libs</h1>
				<InputAndLabel
					InputListData={InputListData}
					words={words}
					setWords={setWords}
				/>
				<div className="btn-container">
					<button type='submit'>Submit</button>
					<button type='reset' onClick={handleReset}>
						Reset
					</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
