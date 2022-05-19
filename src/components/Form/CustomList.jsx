import React from 'react';

export default function CustomList(props) {
	const {
		formAttrsData,
		handleListChange,
		fieldsetInfo
	} = props;
	const { fieldsetIndex, fieldsetType } = fieldsetInfo;
	const {
		lblTxt,
		lblFor,
		propKey,
		inputVal
	} = formAttrsData;

	const handleListChangeArgs = {
		fieldsetType,
		propKey,
		fieldsetIndex
	};
	const compileListItems = (listItems) => {
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
				value={compileListItems(inputVal)}
				onChange={(e) => handleListChange(e, handleListChangeArgs)}
			/>
		</div>
	)
}