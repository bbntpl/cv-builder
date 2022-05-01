import React from 'react';
import FieldsCollectionContainer from '../Form/FieldsCollection';

export default function Edu(props) {
	const { handleChange, CVInfoEdu } = props;
	return (
		<fieldset>
			<legend className='cv-form__lbl'>
				{'Education History'}
			</legend>
			<FieldsCollectionContainer
				handleChange={handleChange}
				CVInfo={CVInfoEdu}
				fieldsetType={'edu'}
			/>
			<button>
				<i></i>
			</button>
		</fieldset>
	)
}