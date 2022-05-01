import React from 'react';

export default function CustomField(props) {
	const {
		inputType = 'text',
		lblTxt,
		lblFor,
		inputVal = '',
		handleChange,
		propName
	} = props;
	return (
		<div className="cv-form__c-field">
			<label htmlFor={lblFor}>{lblTxt}</label>
			<input
				type={inputType}
				id={lblFor}
				name={lblFor}
				value={inputVal}
				onChange={(e) => handleChange(e, propName)}
			/>
		</div>
	)
}