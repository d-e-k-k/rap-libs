import React, {useState} from 'react';
import InputListData from "../../data/inputList.json"

/*

on submit i need event.target.value to fetch for each item.
which means all of the state has to be updated to this point
I need an on change to update the state
*/

const Input = ({ setRhymingWords }) => {
	// const [tempWord, setTempWord] = useState([]);

	// function handleChange(event){
	// 	setTempWord({ ...tempWord, [event.target.id]: event.target.value });
	// }


	function handleBlur(event) {
		// console.log('blur');
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
