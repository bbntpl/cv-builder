import React from 'react';
import '../../styles/cv-form-style.css';
import DeleteIcon from '../../assets/icons/delete.svg';

// Delete button are displayed at top-right of the fieldset
// triggering the event it contains will delete the
// fieldset itself including the associated data
function FieldsetDeleteBtn(props) {
	const { deleteObjHandler, fieldsetInfo } = props;
	return (
		<button
			onClick={(e) => deleteObjHandler(e, fieldsetInfo)}
			className="cv-form__rmv-fieldset">
			<img src={DeleteIcon}></img>
		</button>
	)
}

export default FieldsetDeleteBtn;