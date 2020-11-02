import React, { useState } from 'react';
import InputAndLabel from '../input-and-label/InputAndLabel';

const Form = ({
	parent,
	setParent,
	words,
	setWords,
	InputListData,
	rapDisplayed,
	setRapDisplayed,
}) => {
	function handleSubmit(event) {
		event.preventDefault();
		setRapDisplayed(true);

		for (const property in words) {
			const url = `https://rhymebrain.com/talk?function=getRhymes&word=${words[property]}`;

			fetch(url)
				.then((res) => res.json())
				.then((resJson) => {
					setParent((prevWords) => [
						...prevWords,
						{
							userInput: `${words[property]}`,
							rhymingWord: resJson[0].word,
						},
					]);
				});
		}
	}

	function handleReset(event) {
		setParent([]);
		setWords([]);
		setRapDisplayed(false);
	}

	return (
		<div className='form-container'>
			<form onSubmit={handleSubmit}>
				<InputAndLabel
					InputListData={InputListData}
					words={words}
					setWords={setWords}
				/>
				<button type='submit'>Submit</button>
				<button type='reset' onClick={handleReset}>
					Reset
				</button>
                {rapDisplayed ? 
                    <button type='button'>Show Rap!</button>
                    : null
                }
			</form>
		</div>
	);
};

export default Form;
