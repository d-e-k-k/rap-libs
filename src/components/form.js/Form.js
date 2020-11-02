import React, { useState } from 'react';
import InputAndLabel from '../input-and-label/InputAndLabel';
import InputListData from '../../data/inputList.json';
import MadLibResults from '../MadLibResults';

const Form = ({ parent, setParent, words, setWords }) => {
	// const [parent, setParent] = useState([]);
	// const [words, setWords] = useState([]);

	// function handleChange(event) {
	// 	setWords({ ...words, [event.target.id]: event.target.value });
	// }

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

	// function toggleResultsVisibility(event) {
	//         event.preventDefault();
	//         visibleResults ? setVisibleResults(false) : setVisibleResults(true);
	//         console.log(event.target);
	//         console.log(InputListData);
	//     }


	return (
		<div className='form-container'>
			<form onSubmit={handleSubmit}>
                <InputAndLabel InputListData={InputListData} words={words} setWords={setWords}/>
				{/* {InputListData.map((item) => {
					return (
						<li key={item.key}>
							<label htmlFor={item.id}>{item.label}: </label>
							<input
								id={item.id}
								type='text'
								onChange={handleChange}
								required
							/>
						</li>
					);
				})} */}

				<button type='submit'>Submit</button>
			</form>
			<MadLibResults parent={parent} InputListData={InputListData} />
		</div>
	);
};

export default Form;
