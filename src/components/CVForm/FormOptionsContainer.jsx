import React from 'react';
export default function FormOptionsContainer(props) {
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