import React from 'react';
import '../../styles/cv-form-style.css';
import FieldsetDeleteBtn from './FieldsetDeleteBtn';
import IteratedFields from './IteratedFields';

// the container for the set of iterated fields(input & label)
function FieldsCollectionContainer(props) {
	const {
		fieldsetIndex = 0,
		fieldsetType,
		deleteObjHandler,
		updateFieldChanged,
		updateListChanged,
		CVInfo,
	} = props;
	return (
		<div
			className='cv-form__input-collections'
			key={`${fieldsetType}${fieldsetIndex}`}
		>
			{
				fieldsetType !== 'basicInfo' &&
				<FieldsetDeleteBtn
					deleteObjHandler={deleteObjHandler}
					fieldsetIndex={fieldsetIndex}
					fieldsetType={fieldsetType}
				/>
			}

			<IteratedFields
				updateFieldChanged={updateFieldChanged}
				updateListChanged={updateListChanged}
				CVInfo={CVInfo}
				fieldsetIndex={fieldsetIndex}
				fieldsetType={fieldsetType}
			/>
		</div >
	)
}

export default FieldsCollectionContainer;