import React, { useState } from 'react';
import FieldsetCollection from '../Form/FieldsetCollection';
import PlusThickIcon from '../../assets/icons/plus-thick.svg';

export default function WorkExp(props) {
	const {
		handleChangeInArray,
		CVInfoWork,
		addObjHandler,
		deleteObjHandler
	} = props;
	const CVInfoWorkLength = CVInfoWork.length;
	const [totalFieldset, setTotalFieldset] = useState(CVInfoWorkLength);

	const incrementTotalFieldset = () => {
		setTotalFieldset(totalFieldset + 1);
		addObjHandler('workExperience');
	}

	const addFieldsetIfPrevFieldsAreAllEmpty = (e) => {
		e.preventDefault();
		if (!CVInfoWorkLength) {
			incrementTotalFieldset();
		} else {
			const ifPrevFieldsAreEmpty = Object.keys(CVInfoWork[CVInfoWorkLength - 1]).length === 1;
			if (ifPrevFieldsAreEmpty) return;
			incrementTotalFieldset();
		}
	}

	return (
		<fieldset>
			<legend className='cv-form__lbl'>
				{'Work History'}
			</legend>
			<FieldsetCollection
				updateFieldChanged={handleChangeInArray}
				arrayOfFields={CVInfoWork}
				totalFieldset={totalFieldset}
				fieldsetType={'workExperience'}
				deleteObjHandler={deleteObjHandler}
			/>
			<button
				className='cv-form__add-fieldset'
				onClick={addFieldsetIfPrevFieldsAreAllEmpty}
			>
				<img src={PlusThickIcon} />
				Add work
			</button>
		</fieldset>
	)
}