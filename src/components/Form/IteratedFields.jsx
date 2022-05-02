import React from 'react';

import CustomField from './CustomField';
import CUSTOM_FIELDS_DATA from '../../data/custom-fields';

// Iteration of Custom Field element
function IteratedFields(props) {
	const {
		updateFieldChanged,
		CVInfo,
		fieldsetType,
		fieldsetIndex
	} = props;
	return CUSTOM_FIELDS_DATA[fieldsetType].map(field => {
		return (
			<CustomField
				key={field.lblFor}
				lblTxt={`${field.lblTxt}:`}
				lblFor={field.lblFor}
				handleChange={updateFieldChanged}
				propKey={field.propKey}
				inputVal={CVInfo[field.propKey]}
				fieldsetIndex={fieldsetIndex}
				fieldsetType={fieldsetType}
			/>
		)
	});
}

export default IteratedFields;