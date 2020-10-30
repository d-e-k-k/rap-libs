import React, { useState } from 'react';

	

const MadLibResults = ({ rhymingWords }) => {
	console.log(rhymingWords);
	
	return (
		<div>
			{/* {rhymingWords.map((word) => {
				return (
					<p>
						{word.word} : {word.rhyme}
					</p>
				);
			})} */}
			{rhymingWords.length > 2 ? (
				<div>
					<p>React is a pain, </p>
					<p>In the {rhymingWords[0].word}</p>
					<p>It made my week long,</p>
					<p>And my brain {rhymingWords[0].rhyme}</p>
					<p>Full of hooks,</p>
					<p>Like a takle box</p>
					<p>Update state,</p>
					<p>like I update my {rhymingWords[1].word}</p>
					<p>Change my name,</p>
					<p>Call me "{rhymingWords[1].rhyme}"</p>
					<p>Rap game {rhymingWords[2].word}</p>
					<p>Life game {rhymingWords[2].rhyme}</p>
				</div>
			) : (
				<p>Rap not created yet</p>
			)}
		</div>
	);
};

export default MadLibResults;

// import use state ##DONE
// pass down and deconstruct use state ##DONE
// results will contain a mad lib with variables interpolated for keywords and rhyming words.##DONE
// when page load it will contain mad lib text with keywords and rhymes ##DONE
