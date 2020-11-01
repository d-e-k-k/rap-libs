import React from 'react';
import Input from '../input/Input'
const Form = ({ setRhymingWords, visibleResults, setVisibleResults }) => {

    function toggleResultsVisibility(event) {
            event.preventDefault();
            visibleResults ? setVisibleResults(false) : setVisibleResults(true);
            console.log(event.target);
        }


    return (
        <div className='form-container'>
            <form onSubmit={toggleResultsVisibility}>
                <label>Part of the Body: </label>
                <Input setRhymingWords={setRhymingWords} />
                <br />
                <lable>Item of Clothing : </lable>
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