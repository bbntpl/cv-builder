import React, { useState } from 'react';
import useTimedNotifier from '../../hooks/useTimedNotifier';
import EmittedEventNotification from '../EmittedEventNotification';
export default function FormOptionsContainer(props) {
	const { handleFormSubmit, handleFormReset, CVInfo } = props;
	const [isNotificationTriggered, toggleNotifier] = useTimedNotifier();
	const [notifyMsgHolder, setNotifyMsgHolder] = useState();

	const handleFormSubmitThenNotify = (e) => {
		if (isNotificationTriggered) return;
		handleFormSubmit(e, CVInfo);
		setNotifyMsgHolder('User data updated ✅');
		toggleNotifier();
	}
	const handleFormResetThenNotify = (e) => {
		if (isNotificationTriggered) return;
		handleFormReset(e);
		setNotifyMsgHolder('User data deleted ✅');
		toggleNotifier();
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