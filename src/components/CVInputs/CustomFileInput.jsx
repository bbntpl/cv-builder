import React, { useState } from 'react';
const imgPreviewStyle = {
	display: 'flex',
	alignSelf: 'center',
	maxWidth: '220px',
	maxHeight: '220px',
	margin: '10px 0 0 0',
	border: '1px solid gray',
}
export default function CustomFileInput({ formAttrsData, handleChange }) {
	const {
		lblTxt,
		lblFor,
		propKey,
		inputVal,
		inputType
	} = formAttrsData;
	const [photoURL, setPhotoURL] = useState(inputVal);
	//display buffered raw image data
	function showFilePreview(e) {
		let files = e.target.files;
		if (!files || !files.length) return;
		createImage(files[0]);
	}

	//convert sent image to a raw data
	function createImage(file) {
		let reader = new FileReader();
		reader.addEventListener('load', () => {
			setPhotoURL(reader.result);
			photoURL !== null ? setPhotoURL(reader.result) : null;

			//created mock event object to pass the ideal value
			const e = {
				target: {
					value: photoURL !== null ? reader.result : null
				}
			};
			handleChange(e, { propKey });
		});

		reader.readAsDataURL(file);
	}

	return (
		<div className="cv-form__c-field">
			<div className="cv-form__c-field">
				<label htmlFor={lblFor}>{lblTxt}</label>
				<input
					name={lblFor}
					type={inputType}
					onChange={showFilePreview}
				/>
			</div>
			<img
				src={photoURL}
				style={imgPreviewStyle}
			/>
		</div>
	)
}