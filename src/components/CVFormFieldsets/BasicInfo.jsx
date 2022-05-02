import React from 'react';
import FieldsCollectionContainer from '../Form/FieldsCollectionContainer';

export default function BasicInfo(props) {
	const { handleChange, CVInfo } = props;
	return (
		<fieldset>
			<legend className='cv-form__lbl'>
				{'Basic Information'}
			</legend>
			<FieldsCollectionContainer
				updateFieldChanged={handleChange}
				CVInfo={CVInfo}
				fieldsetType={'basicInfo'}
			/>
		</fieldset>
	)
}