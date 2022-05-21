import React, { useState } from 'react';
import FieldsetCollection from '../CVForm/FieldsetCollection';
import PlusThickIcon from '../../assets/icons/plus-thick.svg';

export default function SkillCategory(props) {
	const { CVInfoSkillCat, handlerFuncs } = props;
	const { addObjHandler } = handlerFuncs;
	const CVInfoSkillCatLen = CVInfoSkillCat.length;
	const [totalFieldset, setTotalFieldset] = useState(CVInfoSkillCatLen);
	const incrementTotalFieldset = () => {
		setTotalFieldset(totalFieldset + 1);
		addObjHandler({ fieldsetType: 'skillCategories' });
	}

	const addFieldsetIfPrevFieldsAreAllEmpty = (e) => {
		e.preventDefault();
		if (!CVInfoSkillCatLen) {
			incrementTotalFieldset();
		} else {
			const ifPrevFieldsAreEmpty
				= Object.keys(CVInfoSkillCat[CVInfoSkillCatLen - 1]).length === 1;
			if (ifPrevFieldsAreEmpty) return;
			incrementTotalFieldset();
		}
	}

	return (
		<fieldset>
			<legend className='cv-form__lbl'>
				{'Skill Categories'}
			</legend>
			<FieldsetCollection
				handlerFuncs={handlerFuncs}
				arrayOfFields={CVInfoSkillCat}
				totalFieldset={totalFieldset}
				fieldsetType={'skillCategories'}
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