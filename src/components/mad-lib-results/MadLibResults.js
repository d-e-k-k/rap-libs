import React, { useState } from 'react';

const MadLibResults = ({}) => {

	return (
		<div>
			
				<p>{`Input 1: ${keyWords[0]}`}</p>
				<p>{`Rhyme 1: ${rhymingWords[0]}`}</p>
				<p>{`Input 2: ${keyWords[1]}`}</p>
				<p>{`Rhyme 2: ${rhymingWords[1]}`}</p>
			
		</div>
	);
};

export default MadLibResults;

// import use state ##DONE
// pass down and deconstruct use state ##DONE
// results will contain a mad lib with variables interpolated for keywords and rhyming words.##DONE
// when page load it will contain mad lib text with keywords and rhymes ##DONE
