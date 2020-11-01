import React, {useState} from 'react';
import Input from '../input/Input'
const Form = ({ setRhymingWords, visibleResults, setVisibleResults }) => {

    const[ inputId, setInputId] = useState();
    function toggleResultsVisibility(event) {
            event.preventDefault();
            visibleResults ? setVisibleResults(false) : setVisibleResults(true);
            console.log(event.target);
        }

        // inputData.map(input => {
            //<label> input.label </label>
            // <Input SetRhymingWords={setRhymingWords}
            // inputId={inputId}/>
        // })

    return (
        <div className='form-container'>
            <form onSubmit={toggleResultsVisibility}>
                <label>Part of the Body: </label>
                <Input setRhymingWords={setRhymingWords} />
                <br />
                <label>Item of Clothing : </label>
                <Input setRhymingWords={setRhymingWords} />
                <br />
                <label>Animal: </label>
                <Input setRhymingWords={setRhymingWords} />
                <br />
                <label>Trash Word: </label>
                <Input setRhymingWords={setRhymingWords} />
                <br />
                <button type='submit'>Show Rap-Lib</button>
            </form>
        </div>
		);
};

export default Form;