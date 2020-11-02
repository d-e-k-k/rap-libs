import React from 'react';

const InputAndLabel = ({ InputListData, words, setWords }) => {
	function handleChange(event) {
		setWords({ ...words, [event.target.id]: event.target.value });
	}

	return (
		<>
			{InputListData.map((item) => {
				return (
					<li key={item.key}>
						<label htmlFor={item.id}>{item.label}: </label>
						<input id={item.id} type='text' onChange={handleChange} required />
					</li>
				);
			})}
		</>
	);
};

export default InputAndLabel;
