import React from 'react';

export default function CustomInput(props) {
	const {
		lblTxt,
		lblFor,
		inputVal = '',
		updateFieldChanged,
		propKey,
		fieldsetIndex,
		fieldsetType
	} = props;
	const updateFieldChangedArgs = {
		fieldsetType,
		propKey,
		fieldsetIndex
	};
	return (
		<div className="cv-form__c-field">
			<label htmlFor={lblFor}>{lblTxt}</label>
			<input
				name={lblFor}
				value={inputVal}
				onChange={(e) => updateFieldChanged(e, 	updateFieldChangedArgs)}
			/>
		</div>
	)
}