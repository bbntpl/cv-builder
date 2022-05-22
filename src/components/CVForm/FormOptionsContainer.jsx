import React, { useState } from 'react';
import useTimedNotifier from '../../hooks/useTimedNotifier';
import EmittedEventNotification from '../EmittedEventNotification';
export default function FormOptionsContainer(props) {
	const { handleFormSubmit, handleFormReset, CVInfo } = props;
	const [isNotificationTriggered, toggleNotifier] = useTimedNotifier();
	const [notifyMsgHolder, setNotifyMsgHolder] = useState();

	const handleFormSubmitThenNotify = (e) => {
		handleFormSubmit(e, CVInfo);
		setNotifyMsgHolder('User data updated ✅');
		toggleNotifier(true);
	}
	const handleFormResetThenNotify = (e) => {
		handleFormReset(e);
		setNotifyMsgHolder('User data deleted ✅');
		toggleNotifier(true);
	}
	return (
		<div className='cv-form__options'>
			<button
				type='submit'
				className='cv-form__submit'
				onClick={handleFormSubmitThenNotify}
			>
				Save
			</button>
			<button
				type='reset'
				className='cv-form__reset'
				onClick={handleFormResetThenNotify}
			>
				Clear All
			</button>
			{
				isNotificationTriggered &&
				<EmittedEventNotification
					message={notifyMsgHolder}
					toggleNotifier={toggleNotifier}
				/>
			}
		</div>
	)
}