import React from 'react';

export default function CustomInput(props) {
	const {
		formAttrsData,
		handleChange,
		handleChangeInArray,
		fieldsetInfo
	} = props;
	const {
		fieldsetIndex,
		fieldsetType,
		subFieldsetType
	} = fieldsetInfo;
	const {
		lblTxt,
		lblFor,
		propKey,
		inputVal
	} = formAttrsData;
	const emitEventHandlerBasePropKey = (e) => {
		if (fieldsetType !== 'basicInfo') {
			return handleChangeInArray(e, handleChangeInArrayArgs);
		}
		return handleChange(e, { propKey });
	};
	const handleChangeInArrayArgs = {
		fieldsetType,
		propKey,
		fieldsetIndex,
		subFieldsetType
	};
	return (
		<div className="cv-form__c-field">
			<label htmlFor={lblFor}>{lblTxt}</label>
			<input
				name={lblFor}
				value={inputVal}
				onChange={(e) => emitEventHandlerBasePropKey(e)}
			/>
		</div>
	)
}