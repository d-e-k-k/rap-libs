import React from 'react';
import StillB from '../songs/StillB.mp3'

const MadLibResults = ({ parent, InputListData, rapDisplayed }) => {

	return (
		<div className='results'>
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
					<p>Don't stay mute</p>
					<p>Get on git</p>
					<p>And contribute</p>
					<p>To the ./root</p>
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

// Copywrite for non-comercial uses music from: "Still Blazin" - Rap Freestyle Type Beat | Underground Boom Bap Type Beat | Anabolic Beatz | https://www.youtube.com/watch?v=KPWcnd5J60s&list=UUsdTY8O8fMWJ_m4nNpy9JZg&index=1

export default MadLibResults;
