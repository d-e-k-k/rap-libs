import React from 'react';
import InputAndLabel from '../input-and-label/InputAndLabel';

import MadLibResults from '../MadLibResults';

const Form = ({ parent, setParent, words, setWords, InputListData }) => {

	function handleSubmit(event) {
		event.preventDefault();

		for (const property in words) {
			const url = `https://rhymebrain.com/talk?function=getRhymes&word=${words[property]}`;

			fetch(url)
				.then((res) => res.json())
				.then((resJson) => {
					setParent((prevWord) => [
						...prevWord,
						{
							userInput: `${words[property]}`,
							rhymingWord: resJson[0].word,
						},
					]);
				});
		}
	}

	return (
		<div className='form-container'>
			<form onSubmit={handleSubmit}>
                <InputAndLabel InputListData={InputListData} words={words} setWords={setWords}/>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default Form;
