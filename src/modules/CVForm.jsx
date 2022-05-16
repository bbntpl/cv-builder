import React, { useState } from 'react';

//imported components
import BasicInfo from '../components/CVFormFieldsets/BasicInfo';
import Edu from '../components/CVFormFieldsets/Edu';
import WorkExp from '../components/CVFormFieldsets/Work';
import Skills from '../components/CVFormFieldsets/Skills';

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

	// handle change on inputs - base property of the overall object
	const handleChange = (e, params) => {
		const { propKey } = params;
		let updatedValue = {};
		updatedValue = { [propKey]: e.target.value };
		setCVInfo(CVInfo => ({
			...CVInfo,
			...updatedValue
		}));
	}

	// reset the data
	const handleFormReset = (e) => {
		e.preventDefault();
		handleResetData(setCVInfo);
	}

	// handle change of inputs that are iterable 
	// base property that is an array
	const handleChangeInArray = (e, params) => {
		const { fieldsetType, propKey, fieldsetIndex } = params;
		const { value } = e.target;
		const selectedArr = CVInfo[fieldsetType];
		const newCopyOfSelectedArr = [...selectedArr];
		newCopyOfSelectedArr[fieldsetIndex][propKey] = value;
		setCVInfo(CVInfo => ({
			...CVInfo,
			[fieldsetType]: newCopyOfSelectedArr
		}));
	}

	// handle inputs that allows the output to display
	// a list feature
	const handleList = (e, params) => {
		const { fieldsetType, propKey, fieldsetIndex } = params;
		const { value } = e.target;
		const selectedArr = CVInfo[fieldsetType];
		const newCopyOfSelectedArr = [...selectedArr];
		const list = value.includes('|') ? value.split('|') : [value];
		newCopyOfSelectedArr[fieldsetIndex][propKey] = list;
		setCVInfo(CVInfo => ({
			...CVInfo,
			[fieldsetType]: newCopyOfSelectedArr
		}));
	}
	
	//delete object from array by index
	const deleteObjHandler = (e, params) => {
		e.preventDefault();
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

	//add object from array by index
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
					handleList={handleList}
					CVInfoWork={CVInfo.workExperience}
					addObjHandler={addObjHandler}
					deleteObjHandler={deleteObjHandler}
				/>
				<Skills
					handleChangeInArray={handleChangeInArray}
					handleList={handleList}
					CVInfoSkills={CVInfo.skills}
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