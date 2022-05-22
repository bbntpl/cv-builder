import { useCallback, useEffect, useState } from 'react';

export default function useTimedNotifier(initialState = false, milliseconds = 4000) {
	const [state, setState] = useState(initialState);

	// Define and memorize toggler function in case we pass down the component,
	// This function change the boolean value to it's opposite value
	const toggle = useCallback(() => setState(state => !state), []);
	useEffect(() => {
		if (!state) return;
		const timer = setTimeout(() => {
			setState(state => !state);
		}, milliseconds);
		return () => clearTimeout(timer);
	}, [state])
	console.log(`Notifier is ${state ? 'toggled' : 'untoggled'} `);
	return [state, toggle];
}