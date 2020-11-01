import React from 'react';
import InputListData from "../../data/inputList.json"

const Input = ({ setRhymingWords }) => {
	function handleBlur(event) {
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
						setRhymingWords((prevInput) => [...prevInput, {
							word: event.target.value,
							rhyme: resJson[0].word,
						}]);
					}else{
						setRhymingWords((prevInput) => [
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
	return (
		<>
			{InputListData.map(item => {
				return (
					<li key={item.key}>
						<label htmlFor={item.id}>{item.label}: </label>
						<input id={item.id} type='text' onBlur={handleBlur} required />
					</li>
				);
				}
				)}
		</>
	)

};

export default Input;
