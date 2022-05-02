import React, { useState } from 'react';

//imported components
import BasicInfo from '../components/CVFormFieldsets/BasicInfo';
import Edu from '../components/CVFormFieldsets/Edu';
import WorkExp from '../components/CVFormFieldsets/Work';

import '../styles/cv-form-style.css';
import { uniqueID } from '../util/reusable-funcs';

function FormOptionsContainer(props) {
	const { handleFormSubmit, handleFormReset, CVInfo } = props;
	return (
		<div className='cv-form__options'>
			<button
				type='submit'
				className='cv-form__submit'
				onClick={(e) => handleFormSubmit(e, CVInfo)}
			>
				Save
			</button>
			<button
				type='reset'
				className='cv-form__reset'
				onClick={handleFormReset}
			>
				Clear All
			</button>
		</div>
	)
}

function CVForm(props) {
	const { handleFormSubmit, handleResetData, userData } = props;
	const [CVInfo, setCVInfo] = useState(userData);
	const handleChange = (e, params) => {
		const { propKey } = params;
		let updatedValue = {};
		updatedValue = { [propKey]: e.target.value };
		setCVInfo(CVInfo => ({
			...CVInfo,
			...updatedValue
		}));
	}

	const handleFormReset = (e) => { 
		e.preventDefault();
		handleResetData(setCVInfo);
	}
	const handleChangeInArray = (e, params) => {
		const { fieldsetType, propKey, fieldsetIndex } = params;
		const { value } = e.target;
		const selectedArr = CVInfo[fieldsetType];
		const newCopyOfSelectedArr = [...selectedArr];
		newCopyOfSelectedArr[fieldsetIndex][propKey] = value;
		setCVInfo(CVInfo => ({
			...CVInfo,
			newCopyOfSelectedArr
		}));
	}

	const deleteObjHandler = (params) => {
		const { fieldsetType, fieldsetIndex } = params;
		const selectedArr = CVInfo[fieldsetType];
		const newCopyOfSelectedArr = [...selectedArr];
		const reducedArr = newCopyOfSelectedArr.filter((_, itemIndex) => {
			return itemIndex !== fieldsetIndex;
		});
		setCVInfo(CVInfo => ({
			...CVInfo,
			[fieldsetType]: reducedArr
		}));
	}

	const addObjHandler = (propName) => {
		const emptyObj = {
			id: uniqueID()
		};
		const selectedArr = CVInfo[propName].concat(emptyObj)
		setCVInfo(CVInfo => ({
			...CVInfo,
			[propName]: selectedArr
		}));
	}

	return (
		<div className="cv-form primary-el-with-shadow">
			<form className="cv-form__inner" id='cv-form__inner'>
				<BasicInfo
					handleChange={handleChange}
					CVInfo={CVInfo}
				/>
				<Edu
					handleChangeInArray={handleChangeInArray}
					CVInfoEdu={CVInfo.eduHistory}
					addObjHandler={addObjHandler}
					deleteObjHandler={deleteObjHandler}
				/>
				<WorkExp
					handleChangeInArray={handleChangeInArray}
					CVInfoWork={CVInfo.workExperience}
					addObjHandler={addObjHandler}
					deleteObjHandler={deleteObjHandler}
				/>
				<FormOptionsContainer
					handleFormSubmit={handleFormSubmit}
					handleFormReset={handleFormReset}
					CVInfo={CVInfo}
				/>
			</form>
		</div>
	)
}
export default CVForm;