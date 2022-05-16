import React, { useState } from 'react';
import FieldsetCollection from '../Form/FieldsetCollection';
import PlusThickIcon from '../../assets/icons/plus-thick.svg';

export default function Skills(props) {
	const {
		handleChangeInArray,
		handleList,
		CVInfoSkills,
		addObjHandler,
		deleteObjHandler
	} = props;
	const CVInfoWorkLength = CVInfoSkills.length;
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
			const ifPrevFieldsAreEmpty = Object.keys(CVInfoSkills[CVInfoWorkLength - 1]).length === 1;
			if (ifPrevFieldsAreEmpty) return;
			incrementTotalFieldset();
		}
	}

	return (
		<fieldset>
			<legend className='cv-form__lbl'>
				{'Skills Category'}
			</legend>
			<FieldsetCollection
				updateFieldChanged={handleChangeInArray}
				updateListChanged={handleList}
				arrayOfFields={CVInfoSkills}
				totalFieldset={totalFieldset}
				fieldsetType={'workExperience'}
				deleteObjHandler={deleteObjHandler}
			/>
			<button
				className='cv-form__add-fieldset'
				onClick={addFieldsetIfPrevFieldsAreAllEmpty}
			>
				<img src={PlusThickIcon} />
				Add Skill Category
			</button>
		</fieldset>
	)
}