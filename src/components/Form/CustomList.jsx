import React from 'react';

export default function CustomList(props) {
	const {
		lblTxt,
		lblFor,
		inputVal = '',
		updateListChanged,
		propKey,
		fieldsetIndex,
		fieldsetType
	} = props;
	const updateListChangedArgs = {
		fieldsetType,
		propKey,
		fieldsetIndex
	};
	const compiledListItems = (listItems) => {
		if(listItems.length <= 1) {
			return listItems[0] || '';
		} else {
			return listItems.reduce((string, item, index, arr) => {
				//add char '|' if the array item is not the last
				if(arr.length - 1 === index) {
					string += `${item}|`
				} else {
					string += item
				}
			}, '');
		}
	}
	return (
		<div className="cv-form__t-field">
			<label htmlFor={lblFor}>{lblTxt}</label>
			<textarea
				name={lblFor}
				placeholder={`To create a list, add '|' in-between list items`}
				resize={'none'}
				value={compiledListItems(inputVal)}
				onChange={(e) => updateListChanged(e, updateListChangedArgs)}
			/>
		</div>
	)
}