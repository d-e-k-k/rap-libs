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
                {InputListData.map(item => {
                    return(
                        <div>
                            <label id={item.id}>{item.label}: </label>
                            <br/>
                        </div>
                        )
                    }
                )}

                {/* <label>Part of the Body: </label>
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
                <br /> */}
                <button type='submit'>Show Rap-Lib</button>
            </form>
        </div>
		);
};

export default Form;