import React from 'react';
import CustomField from '../Form/CustomField';

export default function Skill(props) {
	const { legendName } = props;
	return (
		<fieldset>
			<legend className='cv-form__lbl'>
				{legendName}
			</legend>
			<div className="cv-form__input-collections">
				<CustomField
					lblTxt={'Full Name:'}
					lblFor={'fname'}
				/>
				<CustomField
					lblTxt={'Email Address:'}
					lblFor={'eaddress'}
				/>
				<CustomField
					lblTxt={'Phone/Tel Number:'}
					lblFor={'pnumber'}
				/>
				<CustomField
					lblTxt={'Address:'}
					lblFor={'address'}
				/>
				<CustomField
					lblTxt={'Website:'}
					lblFor={'website'}
				/>
			</div>
		</fieldset>
	)
}