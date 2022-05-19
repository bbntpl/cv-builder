import React, { useState } from 'react';
import { uniqueID } from '../../util/reusable-funcs';
import PlusThickIcon from '../../assets/icons/plus-thick.svg';
import SubFieldCollection from './SubFieldCollection';

// Component that iterates the SubFieldsCollectionContainer
function SubFieldsetElements(params) {
	const {
		handlerFuncs,
		arrayOfFields,
		totalSubFieldset,
		fieldsetType,
		subFieldsetType,
		customFieldIndex
	} = params;
	const subFieldsetElements = [];
	for (let i = 0; i < totalSubFieldset; i += 1) {
		if (arrayOfFields.length - 1 >= i) {
			subFieldsetElements.push(
				<SubFieldCollection
					key={uniqueID()}
					handlerFuncs={handlerFuncs}
					CVInfo={arrayOfFields[i]}
					fieldsetIndex={i}
					fieldsetType={fieldsetType}
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
		subFieldsetType,
		customFieldIndex
	} = props;
	const arrayOfFieldsLength = arrayOfFields.length;
	const [totalSubFieldset, setTotalSubFieldset] = useState(arrayOfFieldsLength);
	const incrementTotalSubFieldset = () => {
		setTotalSubFieldset(totalSubFieldset + 1);
		handlerFuncs.addObjHandler('workExperience');
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
				subFieldsetType={subFieldsetType}
				customFieldIndex={customFieldIndex}
			/>
			<button
				className='cv-form__add-fieldset'
				onClick={addFieldsetIfPrevFieldsAreAllEmpty}
			>
				<img src={PlusThickIcon} />
				{`Add ${arrayOfFields[0].lblTxt}`}
			</button>
		</div>
	);
}