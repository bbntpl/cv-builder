import React from 'react';
import CustomInput from './CustomInput';
import CustomList from './CustomList';

export default function CustomInputByType(params) {
	const {
		field,
		CVInfo,
		handlerFuncs,
		fieldsetInfo
	} = params;
	
	const {
		handleListChange,
		handleChangeInArray,
		handleChange
	} = handlerFuncs;

	// compiled properties associated with the cv form element
	const formAttrsData = {
		lblTxt: `${field.lblTxt}:`,
		lblFor: field.lblFor,
		propKey: field.propKey,
		inputVal: CVInfo[field.propKey] || ''
	};
	if (field.inputType === 'textarea') {
		return (
			<CustomList
				key={field.lblFor}
				formAttrsData={formAttrsData}
				handleListChange={handleListChange}
				fieldsetInfo={fieldsetInfo}
			/>
		)
	}
	return (
		<CustomInput
			key={field.lblFor}
			formAttrsData={formAttrsData}
			handleChangeInArray={handleChangeInArray}
			handleChange={handleChange}
			fieldsetInfo={fieldsetInfo}
		/>
	)
}