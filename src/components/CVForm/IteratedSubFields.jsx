import React from 'react';
import CustomInput from '../CVInputs/CustomInput';
import CUSTOM_FIELDS_DATA from '../../data/custom-fields';

// Iteration of Custom Field element
export default function IteratedSubFields(props) {
	const {
		handlerFuncs,
		CVInfo,
		fieldsetInfo
	} = props;

	const {
		handleChangeInArray,
		handleChange
	} = handlerFuncs;

	const {
		fieldsetType,
		subFieldsetType,
		customFieldIndex
	} = fieldsetInfo;
	const customFieldObject = CUSTOM_FIELDS_DATA[fieldsetType][customFieldIndex];
	const subFieldObjects = customFieldObject['subFields'][subFieldsetType];
	return subFieldObjects.map((subFieldsDataObj, i) => {
		// compiled properties associated with the cv form element
		const formAttrsData = {
			lblTxt: `${subFieldsDataObj.lblTxt}:`,
			lblFor: subFieldsDataObj.lblFor,
			propKey: subFieldsDataObj.propKey,
			inputVal: CVInfo[subFieldsDataObj.propKey] || ''
		};
		return (
			<CustomInput
				key={`${subFieldsDataObj.lblFor}${i}`}
				formAttrsData={formAttrsData}
				handleChangeInArray={handleChangeInArray}
				handleChange={handleChange}
				fieldsetInfo={fieldsetInfo}
			/>
		)
	});
}