import React from 'react';
import FieldsCollectionContainer from '../Form/FieldsCollection';

export default function BasicInfo(props) {
	const { handleChange, CVInfo } = props;
	return (
		<fieldset>
			<legend className='cv-form__lbl'>
				{'Basic Information'}
			</legend>
			<FieldsCollectionContainer
				handleChange={handleChange}
				CVInfo={CVInfo}
				fieldsetType={'basicInfo'}
			/>
		</fieldset>
	)
}