import React, { useState } from 'react';
import PlusThickIcon from '../../assets/icons/plus-thick.svg';
import SubFieldCollection from './SubFieldCollection';

// Component that iterates the SubFieldCollection
function SubFieldsetElements(params) {
	const {
		handlerFuncs,
		arrayOfFields,
		totalSubFieldset,
		fieldsetType,
		fieldsetIndex,
		subFieldsetType,
		customFieldIndex
	} = params;
	const subFieldsetElements = [];
	for (let subFieldsetIndex = 0; subFieldsetIndex < totalSubFieldset; subFieldsetIndex += 1) {
		if (arrayOfFields.length - 1 >= subFieldsetIndex) {
			subFieldsetElements.push(
				<SubFieldCollection
					key={`${fieldsetType}${fieldsetIndex}${subFieldsetIndex}${subFieldsetType}`}
					handlerFuncs={handlerFuncs}
					CVInfo={arrayOfFields[subFieldsetIndex]}
					fieldsetIndex={fieldsetIndex}
					fieldsetType={fieldsetType}
					subFieldsetIndex={subFieldsetIndex}
					subFieldsetType={subFieldsetType}
					customFieldIndex={customFieldIndex}
				/>
			)
		} else {
			break;
		}
	}
	return subFieldsetElements;
}

// Fieldset iteration of the specified cv info classification
// Each sub fieldset contains collection of fields using the CUSTOM_FIELDS_DATA file
export default function SubFieldsetCollection(props) {
	const {
		handlerFuncs,
		arrayOfFields,
		fieldsetType,
		fieldsetIndex,
		subFieldsetType,
		customFieldIndex
	} = props;
	const arrayOfFieldsLength = arrayOfFields.length;
	const [totalSubFieldset, setTotalSubFieldset] = useState(arrayOfFieldsLength);
	const incrementTotalSubFieldset = () => {
		setTotalSubFieldset(totalSubFieldset + 1);
		handlerFuncs.addObjHandler({
			fieldsetType,
			fieldsetIndex,
			subFieldsetType
		});
	}

	const addFieldsetIfPrevFieldsAreAllEmpty = (e) => {
		e.preventDefault();
		if (!arrayOfFieldsLength) {
			incrementTotalSubFieldset();
		} else {
			const ifPrevFieldsAreEmpty
				= Object.keys(arrayOfFields[arrayOfFieldsLength - 1]).length === 1;
			if (ifPrevFieldsAreEmpty) return;
			incrementTotalSubFieldset();
		}
	}

	return (
		<div className='cv-form__subfields'>
			<SubFieldsetElements
				handlerFuncs={handlerFuncs}
				arrayOfFields={arrayOfFields}
				totalSubFieldset={totalSubFieldset}
				fieldsetType={fieldsetType}
				fieldsetIndex={fieldsetIndex}
				subFieldsetType={subFieldsetType}
				customFieldIndex={customFieldIndex}
			/>
			<button
				className='cv-form__add-fieldset'
				onClick={addFieldsetIfPrevFieldsAreAllEmpty}
			>
				<img src={PlusThickIcon} />
				{`Add ${subFieldsetType}`}
			</button>
		</div>
	);
}