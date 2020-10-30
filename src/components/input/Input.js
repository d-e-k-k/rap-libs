import React from 'react';

const Input = ({ setValues }) => {
	function handleBlur(event) {
		const key = process.env.REACT_APP_RHYME_API_KEY;
			const url = `https://wordsapiv1.p.rapidapi.com/words/${event.target.value}/rhymes`;
			fetch(url, {
				method: 'GET',
				headers: {
					'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
					'x-rapidapi-key': key,
				},
			})
				.then((res) => res.json())
				.then((resJson) => {
                    setValues((prevInput) => [...prevInput, {
                        word: event.target.value,
                        rhyme: resJson.rhymes.all[0],
                    }]);
				})
				.catch((err) => {
					console.log(err);
				});
	}
	return <input type='text' onBlur={handleBlur} required/>;
};

export default Input;
