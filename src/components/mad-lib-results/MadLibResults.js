import React, {useState} from 'react';

const MadLibResults = ({keyWords, setKeyWords, rhymingWords, setRhymingWords}) => {
    // console.log(keyWords.noun);
    // console.log(rhymingWords);
    console.log(rhymingWords);
    return (
        <div>
            <p>{`Input:  ${keyWords.noun}`}</p>
            <p>{`Rhyming Word: ${rhymingWords}`}</p>
        </div>
    );
};

export default MadLibResults;
// import use state
// pass down and deconstruct use state
// results will contain a mad lib with variables interpolated for keywords and rhyming words.
// when page load it will contain mad lib text with keywords and rhymes