import React from 'react';

const MadLibForm = ({keyWords, setKeyWords}) => {
    function handleSubmit(event){
        event.preventDefault();
        // on handle submit i need to get the rhyming words for each input and store them in a respective fashion 
        // create a return array or object
    }
    
    const handleChange = (event) => {
        setKeyWords({ ...keyWords, [event.target.id]: event.target.value });
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* <input onChange={handleChange} id='name' placeholder='Your Name' required></input> */}
            <input onChange={handleChange} id='noun1' placeholder='Noun' required></input>
            {/* <input onChange={handleChange} id='verb1' placeholder='Verb ending in "ing"' required></input> */}
            <button type='submit'>Submit</button>
        </form>
        );
};

export default MadLibForm;