import React from 'react';
import FieldCollection from './FieldCollection';

// Fieldset iteration of the specified cv info classification
// Each fieldset contains collection of fields using the CUSTOM_FIELDS_DATA file
export default function FieldsetCollection(props) {
	const {
		handlerFuncs,
		arrayOfFields,
		totalFieldset,
		fieldsetType
	} = props;
	const fieldsetElements = [];
	for (let i = 0; i < totalFieldset; i += 1) {
		if (arrayOfFields.length - 1 >= i) {
			fieldsetElements.push(
				<FieldCollection
					key={`${fieldsetType}${i}`}
					handlerFuncs={handlerFuncs}
					CVInfo={arrayOfFields[i]}
					fieldsetType={fieldsetType}
					fieldsetIndex={i}
				/>
			)
		} else {
			break;
		}
	}
	return fieldsetElements;
}