import React from 'react';

import CustomInput from './CustomInput';
import CustomList from './CustomList';
import CUSTOM_FIELDS_DATA from '../../data/custom-fields';

// Iteration of Custom Field element
function IteratedFields(props) {
	const {
		updateFieldChanged,
		updateListChanged,
		CVInfo,
		fieldsetType,
		fieldsetIndex
	} = props;
	return CUSTOM_FIELDS_DATA[fieldsetType].map(field => {
		if (field.inputType === 'textarea') {
			return (
				<CustomList
					key={field.lblFor}
					lblTxt={`${field.lblTxt}:`}
					lblFor={field.lblFor}
					updateListChanged={updateListChanged}
					propKey={field.propKey}
					inputVal={CVInfo[field.propKey]}
					fieldsetIndex={fieldsetIndex}
					fieldsetType={fieldsetType}
				/>
			)
		}
		return (
			<CustomInput
				key={field.lblFor}
				lblTxt={`${field.lblTxt}:`}
				lblFor={field.lblFor}
				updateFieldChanged={updateFieldChanged}
				propKey={field.propKey}
				inputVal={CVInfo[field.propKey]}
				fieldsetIndex={fieldsetIndex}
				fieldsetType={fieldsetType}
			/>
		)
	});
}

export default IteratedFields;