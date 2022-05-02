import React from 'react';
import FieldsCollectionContainer from './FieldsCollectionContainer';

// Fieldset iteration of the specified cv info classification
// Each fieldset contains collection of fields using the CUSTOM_FIELDS_DATA
function FieldsetCollection(props) {
	const {
		updateFieldChanged,
		deleteObjHandler,
		arrayOfFields,
		totalFieldset,
		fieldsetType
	} = props;
	const fieldsetElements = [];
	for (let i = 0; i < totalFieldset; i += 1) {
		if (arrayOfFields.length - 1 >= i) {
			fieldsetElements.push(
				<FieldsCollectionContainer
					key={`${fieldsetType}${i}`}
					updateFieldChanged={updateFieldChanged}
					CVInfo={arrayOfFields[i]}
					fieldsetType={fieldsetType}
					fieldsetIndex={i}
					deleteObjHandler={deleteObjHandler}
				/>
			)
		} else {
			break;
		}
	}
	return fieldsetElements;
}

export default FieldsetCollection;