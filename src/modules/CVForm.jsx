import React, { useState } from 'react';
import BasicInfo from '../components/CVFormFieldsets/BasicInfo';
import Edu from '../components/CVFormFieldsets/Edu';
import WorkExp from '../components/CVFormFieldsets/Work';
import '../styles/cv-form-style.css';

function FormOptionsContainer() {
	return (
		<div>
			<button type="submit">Save</button>
			<button>Clear all</button>
		</div>
	)
}

function CVForm(handleFormSubmit) {
	const [CVInfo, setCVInfo] = useState({
		eduHistory: [{
			courseName: '',
			schoolName: '',
			startDate: '',
			endDate: ''
		}],
		workExperience: [{
			jobTitle: '',
			companyName: '',
			startDate: '',
			endDate: ''
		}],
		skills: [],
		extra: [],
	});
	console.log(CVInfo);
	
	const handleChange = (e, propName) => {
		let updatedValue = {};
		updatedValue = { [propName]: e.target.value };
		setCVInfo(CVInfo => ({
			...CVInfo,
			...updatedValue
		}));
	}

	return (
		<div className="cv-form primary-el-with-shadow">
			<div className="cv-form__inner">
				<BasicInfo handleChange={handleChange} CVInfo={CVInfo} />
				<Edu
					handleChange={handleChange}
					CVInfoEdu={CVInfo.eduHistory}
				/>
				<WorkExp
					handleChange={handleChange}
					CVInfoWork={CVInfo.workExperience}
				/>
				<FormOptionsContainer handleFormSubmit={handleFormSubmit} />
			</div>
		</div>
	)
}
export default CVForm;