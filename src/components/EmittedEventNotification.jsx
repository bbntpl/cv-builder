import React from 'react';

const styles = {
	borderRadius: '17px',
	position: 'fixed',
	right: '4%',
	bottom: '6%',
	color: 'aliceblue',
	backgroundColor: '#3d4c7e',
	padding: '5px 12px',
	fontSize: '16px',
	cursor: 'pointer',
	transition: 'opacity 1s',
}

export default function EmittedEventNotification({ message, toggleNotifier }) {
	return (
		<div onClick={toggleNotifier} style={styles}>{message}</div>
	)
}