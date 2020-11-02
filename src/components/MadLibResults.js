import React, { useEffect } from 'react';
import StillB from '../songs/StillB.mp3'

const MadLibResults = ({ parent, InputListData, rapDisplayed }) => {

	return (
		<div className="results">
			{rapDisplayed ? (
				<div>
					<audio controls>
						<source src={StillB} type='audio/mpeg' />
					</audio>
					<p>React is a pain, </p>
					<p>In the {parent[0].userInput}</p>
					<p>It made my week long,</p>
					<p>And my brain {parent[0].rhymingWord}</p>
					<br />
					<p>Change your state,</p>
					<p>Like I change my {parent[1].userInput}</p>
					<p>Change my name,</p>
					<p>Call me "{parent[1].rhymingWord}"</p>
					<br />
					<p>Full of hooks,</p>
					<p>Like a takle box</p>
					<p>Full of lingo,</p>
					<p>Where-ya docs?</p>
					<br />
					<p>Rap game {parent[2].userInput}</p>
					<p>Code game {parent[2].rhymingWord}</p>
					<p>useState {parent[3].userInput}</p>
					<p>useEffect {parent[3].rhymingWord}</p>
					<br />
					<p>No new props</p>
					<p>Just hand-me-downs</p>
					<p>Try context</p>
					<p>And surely fown</p>
					<br />
					<p>
						Song Credits: "Still Blazin" - Rap Freestyle Type Beat | Underground
						Boom Bap Type Beat | Anabolic Beatz
					</p>
				</div>
			) : null}
		</div>
	);
};

// "Still Blazin" - Rap Freestyle Type Beat | Underground Boom Bap Type Beat | Anabolic Beatz

export default MadLibResults;
// import React, { useState } from 'react';

	

// const MadLibResults = ({ parent }) => {
	
// 	return ()
// // 		<div>
// // 			{/* {parent.length > 3 ? (
// // 				<div>
// // 					<p>React is a pain, </p> */}
// // 					{/* <p>In the {}</p> */}
// // 					{/* <p>It made my week long,</p>
// // 					<p>And my brain {}</p>
// // 					<p>Full of hooks,</p>
// // 					<p>Like a takle box</p>
// // 					<p>Change your state,</p>
// // 					<p>Like I change my {parent[1].userInput}</p>
// // 					<p>Change my name,</p>
// // 					<p>Call me "{parent[0].rhymingWord}"</p>
// // 					<p>Rap game {parent[2].userInput}</p>
// // 					<p>Code game {parent[2].rhymingWord}</p>
// // 					<p>You ain't {parent[3].word}</p>
// // 					<p>Not a language</p>
// // 					<p>Not a framework</p>
// // 					<p>Not a {parent[3].rhyme}</p> */}
// // 				{/* </div>
// // 			) : (
// // 				<p>Rap not created yet</p>
// // 			)} */}
// // 		</div>
// // 	);
// // };
	
// };
// export default MadLibResults;

// // import use state ##DONE
// // pass down and deconstruct use state ##DONE
// // results will contain a mad lib with variables interpolated for keywords and rhyming words.##DONE
// // when page load it will contain mad lib text with keywords and rhymes ##DONE
