import React from 'react';
import FieldsCollectionContainer
	from '../Form/FieldsCollection';

function FieldsCollection(props) {
	const { fieldsCollectionIndex } = props;
	return (<FieldsCollectionContainer
		handleChange={handleChange}
		CVInfo={CVInfoWork[fieldsCollectionIndex]}
		fieldsetType={'work'}
	/>)
}
export default function WorkExp(props) {
	const { handleChange, CVInfoWork } = props;
	const iterateFieldsCollection = CVInfoWork.forEach(el => el) | [];
	const addFieldsCollection = () => {

	}
	return (
		<fieldset>
			<legend className='cv-form__lbl'>
				{'Work History'}
			</legend>
			{
				iterateFieldsCollection
			}

		</fieldset>
	)
}