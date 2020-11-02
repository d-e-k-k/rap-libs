
import React, { useState } from 'react';
import InputAndLabel from '../input-and-label/InputAndLabel';

const Form = ({
	parent,
	setParent,
	words,
	setWords,
	InputListData,
    rapSubmitted,
    setRapSubmitted,
    rapDisplayed,
    setRapDisplayed
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
							rhymingWord: resJson[0].word,
                        },
					]);
				});
		}
	}

	function handleReset(event) {
		setParent([]);
		setWords([]);
        setRapSubmitted(false);
        setRapDisplayed(false);
    }

    function showRap(){
        setRapDisplayed(true);
    }
    


	return (
		<div className='form-container'>
			<form onSubmit={handleSubmit}>
                <h1>Rap-Libs</h1>
				<InputAndLabel
					InputListData={InputListData}
					words={words}
					setWords={setWords}
				/>
				<button type='submit'>Submit</button>
				<button type='reset' onClick={handleReset}>
					Reset
				</button>
                {rapSubmitted ? 
                    <button type='button' onClick={showRap}>Show Rap!</button>
                    : null
                }
			</form>
		</div>
	);
};

export default Form;
