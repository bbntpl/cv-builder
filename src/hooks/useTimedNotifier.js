import { useCallback, useEffect, useState } from 'react';

// custom timer IIFE
const Timer = (() => {
	let isTimerRunning = false;
	let _timeout = null;
	const setTimeout = (passedTimeout) => {
		_timeout = passedTimeout;
	};
	const clearTimeout = () => setTimeout(_timeout);
	const disableTimer = () => {
		clearTimeout();
		isTimerRunning = false;
	};
	return {
		isTimerRunning,
		setTimeout,
		clearTimeout,
		disableTimer,
	};
})();

export default function useTimedNotifier(initialState = false, milliseconds = 4000) {
	const [state, setState] = useState(initialState);

	// Define and memorize toggler function in case we pass down the component,
	// This function change the boolean value to it's opposite value
	const toggle = useCallback((specificToggle) => setState(state => specificToggle || !state), []);

	useEffect(() => {
		if (Timer.isTimerRunning) {
			Timer.disableTimer();
		}
		if(state) {
			Timer.isTimerRunning = true;
			const notifierTimer = setTimeout(() => {
				setState(state => !state);
			}, milliseconds);
			Timer.setTimeout(notifierTimer)
			return Timer.disableTimer();
		}
	}, [state])
	return [state, toggle];
}