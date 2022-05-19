import React, { useState } from 'react';
import FieldsetCollection from '../Form/FieldsetCollection';
import PlusThickIcon from '../../assets/icons/plus-thick.svg';

export default function Edu(props) {
	const { handlerFuncs, CVInfoEdu } = props;
	const { addObjHandler } = handlerFuncs;
	const CVInfoEduLength = CVInfoEdu.length;
	const [totalFieldset, setTotalFieldset] = useState(CVInfoEduLength);

	const incrementTotalFieldset = () => {
		setTotalFieldset(totalFieldset + 1);
		addObjHandler({fieldsetType: 'eduHistory'});
	}

	// prevent adding a new fieldset if the fields 
	// from the previous fieldset are all empty
	// otherwise, add a new fieldset
	const addFieldsetIfPrevFieldsAreAllEmpty = (e) => {
		e.preventDefault();
		if (!CVInfoEduLength) {
			incrementTotalFieldset();
		} else {
			const ifPrevFieldsAreEmpty =
				Object.keys(CVInfoEdu[CVInfoEduLength - 1]).length === 1;
			if (ifPrevFieldsAreEmpty) return;
			incrementTotalFieldset();
		}
	}
	return (
		<fieldset>
			<legend className='cv-form__lbl'>
				{'Education History'}
			</legend>
			<FieldsetCollection
				arrayOfFields={CVInfoEdu}
				totalFieldset={totalFieldset}
				fieldsetType={'eduHistory'}
				handlerFuncs={handlerFuncs}
			/>
			<button
				className='cv-form__add-fieldset'
				onClick={addFieldsetIfPrevFieldsAreAllEmpty}
			>
				<img src={PlusThickIcon} />
				Add education
			</button>
		</fieldset>
	)
}