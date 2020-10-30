import React from 'react';

const Input = ({ setValues }) => {
	function handleBlur(event) {
		const key = process.env.REACT_APP_RHYME_API_KEY;
			const url = `https://rhymebrain.com/talk?function=getRhymes&word=${event.target.value}`;
			fetch(url)
				.then((res) => res.json())
				.then((resJson) => {
					setValues((prevInput) => [...prevInput, {
					    word: event.target.value,
					    rhyme: resJson[0].word,
					}]);
				})
				.catch((err) => {
					console.log(err);
				});
	}
	return <input type='text' onBlur={handleBlur} required/>;
};

export default Input;
