import React, {useState} from 'react';
import Input from '../input/Input'
import InputListData from "../../data/inputList.json"
const Form = ({ setRhymingWords, visibleResults, setVisibleResults }) => {

    const[ inputId, setInputId] = useState();

    function toggleResultsVisibility(event) {
            event.preventDefault();
            visibleResults ? setVisibleResults(false) : setVisibleResults(true);
            console.log(event.target);
            console.log(InputListData);
        }

        // inputData.map(input => {
            //<label> input.label </label>
            // <Input SetRhymingWords={setRhymingWords}
            // inputId={inputId}/>
        // })

    return (
			<div className='form-container'>
				<form onSubmit={toggleResultsVisibility}>
					<ul className='flex-container-ul'>
						<Input setRhymingWords={setRhymingWords} />
					<button type='submit'>Show Rap-Lib</button>
					</ul>
				</form>
			</div>
		);
};

export default Form;