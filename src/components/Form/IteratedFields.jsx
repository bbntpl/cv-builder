import React from 'react';
import CUSTOM_FIELDS_DATA from '../../data/custom-fields';

// components
import CustomInputByType from './CustomInputByType';
import SubFieldsetCollection from './SubFieldsetCollection';

// A component that iterates the custom field element
export default function IteratedFields(props) {
	const {
		handlerFuncs,
		CVInfo,
		fieldsetInfo
	} = props;
	const { fieldsetType } = fieldsetInfo;
	return CUSTOM_FIELDS_DATA[fieldsetType].map((fieldsDataObj, customFieldIndex) => {
		const hasSubFieldsProp = Object.prototype.hasOwnProperty.call(fieldsDataObj, 'subFields');
		if (hasSubFieldsProp) {
			const subFieldsetKey = Object.keys(fieldsDataObj['subFields'])[0];
			return (
				<React.Fragment>
					<CustomInputByType
						key={fieldsDataObj.lblFor}
						field={fieldsDataObj}
						handlerFuncs={handlerFuncs}
						CVInfo={CVInfo}
						fieldsetInfo={fieldsetInfo}
					/>
					<SubFieldsetCollection
						key={fieldsDataObj.lblFor}
						handlerFuncs={handlerFuncs}
						arrayOfFields={fieldsDataObj['subFields'][subFieldsetKey]}
						fieldsetType={fieldsetType}
						subFieldsetType={subFieldsetKey}
						customFieldIndex={customFieldIndex}
					/>
				</React.Fragment>
			)
		}
		return (
			<CustomInputByType
				key={fieldsDataObj.lblFor}
				field={fieldsDataObj}
				handlerFuncs={handlerFuncs}
				CVInfo={CVInfo}
				fieldsetInfo={fieldsetInfo}
			/>
		)
	});
}