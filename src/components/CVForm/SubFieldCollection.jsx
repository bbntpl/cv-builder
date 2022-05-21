import React from 'react';
import '../../styles/cv-form-style.css';
import FieldsetDeleteBtn from './FieldsetDeleteBtn';
import IteratedSubFields from './IteratedSubFields';

// the container for the set of iterated fields(input & label)
export default function SubFieldCollection(props) {
	const {
		fieldsetIndex,
		fieldsetType,
		subFieldsetIndex = 0,
		subFieldsetType,
		handlerFuncs,
		CVInfo,
		customFieldIndex
	} = props;

	const { deleteObjHandler } = handlerFuncs;

	const fieldsetInfo = {
		customFieldIndex,
		fieldsetIndex,
		fieldsetType,
		subFieldsetIndex,
		subFieldsetType,
	};
	return (
		<div
			className='cv-form__input-collections'
		>
			<FieldsetDeleteBtn
				deleteObjHandler={deleteObjHandler}
				fieldsetInfo={fieldsetInfo}
			/>
			<IteratedSubFields
				handlerFuncs={handlerFuncs}
				CVInfo={CVInfo}
				fieldsetInfo={fieldsetInfo}
			/>
		</div >
	)
}