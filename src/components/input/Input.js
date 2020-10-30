import React from 'react';

const Input = ({ setValues }) => {
	function handleBlur(event) {
		const key = process.env.REACT_APP_RHYME_API_KEY;
			let inputValueLowerCase = event.target.value.toLowerCase();
			const url = `https://rhymebrain.com/talk?function=getRhymes&word=${inputValueLowerCase}`;
			if(!event.target.value){
				alert('please fill in input')
				return
			}
			fetch(url)
				.then((res) => res.json())
				.then((resJson) => {
					if(resJson[0]){
						setValues((prevInput) => [...prevInput, {
							word: event.target.value,
							rhyme: resJson[0].word,
						}]);
					}else{
						setValues((prevInput) => [
							...prevInput,
							{
								word: 'Chinchilla',
								rhyme: 'Vanilla',
							},
						]);
					}
				})
				.catch((err) => {
					console.log(err);
				});
	}
	return <input type='text' onBlur={handleBlur} required/>;
};

export default Input;
