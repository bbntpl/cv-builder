import React, { useState } from 'react';
import {
	BrowserRouter as Router,
	useRoutes
} from "react-router-dom";
import './App.css';

import CVForm from './modules/CVForm';
import CVStyleSelection from './modules/CVStyleSelection';
import CustomLinkContainer from './components/CustomLinkContainer';
import {
	updateLocalStorage,
	getItemFromLocal,
	deleteLocalStorage
} from './util/local-storage';

function Footer() {
	return (
		<footer className="footer">
			<a href="https://github.com/bvrbryn445/cv-builder">
				{`B.B. Antipolo ${new Date().getFullYear()}`}
			</a>
		</footer>
	)
}

const App = ({ handleResetData, handleFormSubmit, userData }) => useRoutes([
	{
		path: "/",
		element: <CVForm
			handleResetData={handleResetData}
			handleFormSubmit={handleFormSubmit}
			userData={userData}
		/>
	},
	{ path: "/form", element: <CVForm /> },
	{ path: "/styles", element: <CVStyleSelection /> },
]);

function AppWrapper() {
	const initialUserData = {
		eduHistory: [],
		workExperience: [],
		skills: [],
		extra: [],
	}
	const locallySavedData = getItemFromLocal('userData');
	const [userData, setUserData] = useState(locallySavedData || initialUserData);

	const handleFormSubmit = (e, formData) => {
		e.preventDefault();
		setUserData({ ...formData });
		updateLocalStorage('userData', formData)
	};
	const handleResetData = (setCVInfo) => {
		//reset the user data to its initial state
		setUserData({...initialUserData});

		//reset the form data to its initial state
		setCVInfo({...initialUserData});

		// manually clears every single field from the following form
		Array.from(document.querySelectorAll('input')).forEach(input => (input.value = ''));
		deleteLocalStorage('userData');
	};
	return (
		<Router>
			<div className="App">
				<CustomLinkContainer />
				<App
					handleResetData={handleResetData}
					handleFormSubmit={handleFormSubmit}
					userData={userData}
				/>
				<Footer />
			</div>
		</Router>
	)
}

export default AppWrapper;