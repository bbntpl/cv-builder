import React from 'react';
import CustomField from './CustomField';

import '../../styles/cv-form-style.css';
import customFieldsData from '../../data/custom-fields';

// Iteration of Custom Field element
function IterateFields(props) {
	const { handleChange, CVInfo, fieldsetType } = props;
	return customFieldsData[fieldsetType].map(field => {
		return (
			<CustomField
				key={field.lblFor}
				lblTxt={`${field.lblTxt}:`}
				lblFor={field.lblFor}
				handleChange={handleChange}
				propName={field.propName}
				inputVal={CVInfo[field.propName]}
			/>
		)
	});
}

function FieldsCollectionContainer(props) {
	const {
		fieldsetIndex = 0,
		fieldsetType,
		handleChange,
		CVInfo,
	} = props;
	return (
		<div
			className='cv-form__input-collections'
			key={`${fieldsetType}${fieldsetIndex}`}
		>
			<IterateFields
				handleChange={handleChange}
				CVInfo={CVInfo}
				fieldsetType={fieldsetType}
			/>
		</div >

	)
}

export default FieldsCollectionContainer;
