import React, {useState} from 'react';

const MadLibForm = ({keyWords, setKeyWords}) => {
    
    function handleSubmit(event){
        event.preventDefault();
        console.log('working');
    }
    
    function handleChange(event){
			setKeyWords({ ...keyWords, [event.target.id]: event.target.value });
        };
        console.log(keyWords);

   
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} id='noun'placeholder='Noun' required/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default MadLibForm;
// useState will be imported
// state will be loaded and deconructed
// gerneral form sturcture will be created
// starting with one input and one submit button
// state will be updated when form is submitted
// getryhing word function will fire when submitted event happends
//getryhming word will contain a fetch 
// fetch url will be base with spot for variables: keyWords and key
//key will be from local storage
