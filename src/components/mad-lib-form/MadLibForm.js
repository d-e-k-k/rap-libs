import React, {useState} from 'react';

const MadLibForm = ({keyWords, setKeyWords}) => {
    
    function handleSubmit(event){
        event.preventDefault();
        console.log('working');
        getRhymingWord();
    }
    
    function handleChange(event){
			setKeyWords({ ...keyWords, [event.target.id]: event.target.value });
        };
        console.log(keyWords);
    
    function getRhymingWord(){
        // this will have a nested fetch
        // will load url, key, and keyWords when submit is clicked
        const url = `https://wordsapiv1.p.rapidapi.com/words/${keyWords.noun}/rhymes`
        const key = process.env.REACT_APP_RHYME_API_KEY;
        console.log(url);
        
    fetch('https://wordsapiv1.p.rapidapi.com/words/cat/rhymes', {
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
				'x-rapidapi-key': '89a6db89b7mshb1ba6a2857cfcbfp10415bjsn695920ba4946',
			},
		})
            .then(res => res.json()
            .then(resJson => {
                console.log(resJson);
            }))
			.catch((err) => {
				console.log(err);
			});
    }
   
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
// useState will be imported ##DONE
// state will be loaded and deconructed ##DONE
// gerneral form sturcture will be created ##DONE
// starting with one input and one submit button ##DONE
// state will be updated when form is on change ##DONE
// getryhing word function will fire when submitted event happends
//getryhming word will contain a fetch 
// fetch url will be base with spot for variables: keyWords and key
//key will be from local storage
