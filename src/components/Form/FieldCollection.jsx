import React from 'react';
import '../../styles/cv-form-style.css';
import FieldsetDeleteBtn from './FieldsetDeleteBtn';
import IteratedFields from './IteratedFields';

// the container for the set of iterated fields(input & label)
function FieldsCollectionContainer(props) {
	const {
		fieldsetIndex = 0,
		fieldsetType,
		handlerFuncs,
		CVInfo,
	} = props;

	const { deleteObjHandler } = handlerFuncs;

	const fieldsetInfo = {
		fieldsetIndex,
		fieldsetType
	};
	return (
		<div
			className='cv-form__input-collections'
			key={`${fieldsetType}${fieldsetIndex}`}
		>
			{
				fieldsetType !== 'basicInfo' &&
				<FieldsetDeleteBtn
					deleteObjHandler={deleteObjHandler}
					fieldsetInfo={fieldsetInfo}
				/>
			}
			<IteratedFields
				handlerFuncs={handlerFuncs}
				CVInfo={CVInfo}
				fieldsetInfo={fieldsetInfo}
			/>
		</div >
	)
}

export default FieldsCollectionContainer;