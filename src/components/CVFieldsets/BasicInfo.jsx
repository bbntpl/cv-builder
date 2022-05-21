import React from 'react';
import FieldsCollectionContainer from '../CVForm/FieldCollection';

export default function BasicInfo(props) {
	const { handlerFuncs, CVInfo } = props;
	return (
		<fieldset>
			<legend className='cv-form__lbl'>
				{'Basic Information'}
			</legend>
			<FieldsCollectionContainer
				handlerFuncs={handlerFuncs}
				CVInfo={CVInfo}
				fieldsetType={'basicInfo'}
			/>
		</fieldset>
	)
}