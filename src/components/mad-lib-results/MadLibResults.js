import React, {useState} from 'react';

const MadLibResults = ({keyWords, setKeyWords}) => {
    console.log(keyWords.noun);
    return (
        <div>
            <p>{`Some people call me  ${keyWords.noun}`}</p>
            <p>{'Others call me $ '}</p>
        </div>
    );
};

export default MadLibResults;
// import use state
// pass down and deconstruct use state
// results will contain a mad lib with variables interpolated for keywords and rhyming words.
// when page load it will contain mad lib text with keywords and rhymes