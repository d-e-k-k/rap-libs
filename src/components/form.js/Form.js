import React, {useState} from 'react';
import Input from '../input/Input'
import InputListData from "../../data/inputList.json"


const Form = ({ setRhymingWords, visibleResults, setVisibleResults }) => {
    const [parent, setParent] = useState([]);
    const [words, setWords] = useState([]);
    
    function handleChange(event) {
        setWords({ ...words, [event.target.id]: event.target.value });
    }

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

        // inputData.map(input => {
            //<label> input.label </label>
            // <Input SetRhymingWords={setRhymingWords}
            // inputId={inputId}/>
        // })

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                {InputListData.map(item => {
				return (
					<li key={item.key}>
						<label htmlFor={item.id}>{item.label}: </label>
						<input id={item.id} type='text' onChange={handleChange} required />
					</li>
				);
				}
				)}
                {/* <label htmlFor='animal'>Animal: </label>
                <input onChange={handleChange} type='text' id='animal' required />
                <label htmlFor='item-of-clothing'>Item of Clothing</label>
                <input
                    onChange={handleChange}
                    type='text'
                    id='item-of-clothing'
                    required
                /> */}
                <button type='submit'>Submit</button>
            </form>
				{/* <form onSubmit={toggleResultsVisibility}>
					<ul className='flex-container-ul'>
						<Input setRhymingWords={setRhymingWords} words={words} setWords={setWords} />
					<button type='submit'>Show Rap-Lib</button>
					</ul>
				</form> */}
			</div>
		);
};

export default Form;