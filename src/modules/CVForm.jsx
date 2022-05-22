import React, { useState } from 'react';

//imported components
import BasicInfo from '../components/CVFieldsets/BasicInfo';
import Edu from '../components/CVFieldsets/Edu';
import WorkExp from '../components/CVFieldsets/Work';
import SkillCategory from '../components/CVFieldsets/SkillCategory';
import FormOptionsContainer from '../components/CVForm/FormOptionsContainer';

import '../styles/cv-form-style.css';
import { uniqueID } from '../util/reusable-funcs';

function CVForm(props) {
	const { handleFormSubmit, handleResetData, userData } = props;
	const [CVInfo, setCVInfo] = useState(userData);
	
	// handle change on inputs - base property of the CV info
	const handleChange = (e, { propKey }) => {
		let updatedValue = {};
		updatedValue = { [propKey]: e.target.value };
		setCVInfo(CVInfo => ({
			...CVInfo,
			...updatedValue
		}));
	}

	// it empties the data(CVInfo)
	const handleFormReset = (e) => {
		e.preventDefault();
		handleResetData(setCVInfo);
	}

	const updateSubItemsInArr = (params) => {
		const {
			fieldsetType,
			propKey,
			fieldsetIndex,
			subFieldsetType,
			subFieldsetIndex,
			value
		} = params;
		const itemsArr = CVInfo[fieldsetType];
		const copiedItemsArr = [...itemsArr];

		// add property with the value as an array if the property is not yet defined
		if (!Object.prototype.hasOwnProperty.call(copiedItemsArr[fieldsetIndex], subFieldsetType)) {
			copiedItemsArr[fieldsetIndex][subFieldsetType] = [];
		}
		const copiedSubItemsArr = copiedItemsArr[fieldsetIndex][subFieldsetType];
		copiedSubItemsArr[subFieldsetIndex][propKey] = value;

		setCVInfo(CVInfo => ({
			...CVInfo,
			[fieldsetType]: copiedItemsArr
		}));
	}

	const updateItemsInArr = (params) => {
		const {
			value,
			fieldsetType,
			propKey,
			fieldsetIndex,
		} = params;
		const selectedArr = CVInfo[fieldsetType];
		const newCopyOfSelectedArr = [...selectedArr];
		newCopyOfSelectedArr[fieldsetIndex][propKey] = value;
		setCVInfo(CVInfo => ({
			...CVInfo,
			[fieldsetType]: newCopyOfSelectedArr
		}));
	}

	// update the value after change from the inputs within an array
	const handleChangeInArray = (e, params) => {
		const {
			fieldsetType,
			propKey,
			fieldsetIndex,
			subFieldsetType,
			subFieldsetIndex
		} = params;
		const { value } = e.target;
		if (subFieldsetType && typeof subFieldsetIndex !== 'undefined') {
			updateSubItemsInArr({ ...params, value });
		} else {
			updateItemsInArr({ value, fieldsetType, propKey, fieldsetIndex })
		}
	}
	// update the value after change from the input 
	// that can be featured as a list
	const handleListChange = (e, params) => {
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

	// delete an object from array within an array
	const deleteSubItem = (params) => {
		const {
			fieldsetType,
			fieldsetIndex,
			subFieldsetType,
			subFieldsetIndex,
		} = params;
		const itemsArr = CVInfo[fieldsetType];
		const copiedItemsArr = [...itemsArr];
		const copiedSubItemsArr = copiedItemsArr[fieldsetIndex][subFieldsetType];
		const reducedArr = copiedSubItemsArr.filter((_, itemIndex) => {
			return itemIndex !== subFieldsetIndex
		});
		copiedItemsArr[fieldsetIndex][subFieldsetType] = reducedArr;
		setCVInfo(CVInfo => ({
			...CVInfo,
			[fieldsetType]: copiedItemsArr
		}));
	}

	// delete an object from array
	const deleteItem = ({ fieldsetType, fieldsetIndex }) => {
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

	// update data after deleting a specific object from
	// the target array property
	const deleteObjHandler = (e, params) => {
		e.preventDefault();
		const {
			fieldsetType,
			fieldsetIndex,
			subFieldsetType,
			subFieldsetIndex
		} = params;
		if (subFieldsetType && typeof subFieldsetIndex !== 'undefined') {
			deleteSubItem(params);
		} else {
			deleteItem({ fieldsetType, fieldsetIndex });
		}
	}

	// add an object in an array under a base property array
	const addSubItem = (params) => {
		const {
			emptyObj,
			fieldsetType,
			fieldsetIndex,
			subFieldsetType
		} = params;
		const selectedArr = CVInfo[fieldsetType];
		const copiedArr = [...selectedArr];

		// add property with the value as an array if the property is not yet defined
		if (!Object.prototype.hasOwnProperty.call(copiedArr[fieldsetIndex], subFieldsetType)) {
			copiedArr[fieldsetIndex][subFieldsetType] = [];
		}
		const copiedArrOfSubItems = copiedArr[fieldsetIndex][subFieldsetType].concat(emptyObj);
		copiedArr[fieldsetIndex][subFieldsetType] = copiedArrOfSubItems;
		setCVInfo(CVInfo => ({
			...CVInfo,
			[fieldsetType]: copiedArr
		}));
	}

	// add an object in a base property array
	const addItem = ({ fieldsetType, emptyObj }) => {
		const selectedArr = CVInfo[fieldsetType].concat(emptyObj);
		setCVInfo(CVInfo => ({
			...CVInfo,
			[fieldsetType]: selectedArr
		}));
	}

	//update the data by adding an object in a base property array
	const addObjHandler = ({ fieldsetType, fieldsetIndex, subFieldsetType }) => {
		const emptyObj = {
			id: uniqueID()
		};
		if (subFieldsetType) {
			addSubItem({ fieldsetType, emptyObj, fieldsetIndex, subFieldsetType });
		} else {
			addItem({ fieldsetType, emptyObj });
		}
	}

	const handlerFuncs = {
		handleChange,
		handleChangeInArray,
		handleListChange,
		addObjHandler,
		deleteObjHandler
	};

	return (
		<div className="cv-form primary-el-with-shadow">

			<form
				className="cv-form__inner"
				id='cv-form__inner'
				onSubmit={e => handleFormSubmit(e, CVInfo)}
			>
				<legend className={'cv-form-reminder'}>
					{'Remember to hit the \'Save\' button to update your information'}
				</legend>
				<BasicInfo
					CVInfo={CVInfo}
					handlerFuncs={handlerFuncs}
				/>
				<Edu
					CVInfoEdu={CVInfo.eduHistory}
					handlerFuncs={handlerFuncs}
				/>
				<WorkExp
					CVInfoWork={CVInfo.workExperience}
					handlerFuncs={handlerFuncs}
				/>
				<SkillCategory
					CVInfoSkillCat={CVInfo.skillCategories}
					handlerFuncs={handlerFuncs}
				/>
				<FormOptionsContainer
					CVInfo={CVInfo}
					handleFormSubmit={handleFormSubmit}
					handleFormReset={handleFormReset}
				/>
			</form>
		</div>
	)
}
export default CVForm;