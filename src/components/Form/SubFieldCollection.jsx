import React from 'react';
import '../../styles/cv-form-style.css';
import { uniqueID } from '../../util/reusable-funcs';
import FieldsetDeleteBtn from './FieldsetDeleteBtn';
import IteratedSubFields from './IteratedSubFields';

// the container for the set of iterated fields(input & label)
export default function SubFieldsCollectionContainer(props) {
	const {
		fieldsetIndex = 0,
		fieldsetType,
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
		subFieldsetType,
	};
	return (
		<div
			className='cv-form__input-collections'
			key={uniqueID()}
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