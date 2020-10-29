import React, {useState} from 'react';

const MadLibResults = ({keyWords, setKeyWords, rhymingWords, setRhymingWords}) => {
    // console.log(keyWords.noun);
    // console.log(rhymingWords);
    // console.log(rhymingWords);
    return (
			<div>
				<p>{`Input Noun:  ${keyWords[0]}`}</p>
				<p>{`Rhyming Word: ${rhymingWords[0]}`}</p>
				<p>{`Input Verb: ${keyWords[1]}`}</p>
				<p>{`Rhyming Word: ${rhymingWords[1]}`}</p>
			</div>
		);
};

export default MadLibResults;

// import use state ##DONE
// pass down and deconstruct use state ##DONE
// results will contain a mad lib with variables interpolated for keywords and rhyming words.##DONE
// when page load it will contain mad lib text with keywords and rhymes ##DONE