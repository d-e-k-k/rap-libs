import React, { useState } from 'react';

	

const MadLibResults = ({ keyWords, rhymingWords }) => {
	
	
	return (
		<div>
			{rhymingWords.map((word) => {
				return (
					<p>
						{word.word} : {word.rhyme}
					</p>
				);
			})}
		</div>
	);
};

export default MadLibResults;

// import use state ##DONE
// pass down and deconstruct use state ##DONE
// results will contain a mad lib with variables interpolated for keywords and rhyming words.##DONE
// when page load it will contain mad lib text with keywords and rhymes ##DONE
