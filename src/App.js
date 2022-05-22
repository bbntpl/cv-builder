import React, { useState } from 'react';
import {
	BrowserRouter as Router,
	useRoutes,
	useLocation
} from "react-router-dom";
import './App.css';

import CVForm from './modules/CVForm';
import CVSelection from './modules/CVSelection';
import PDFView from './modules/PDFView';
import NotFound from './modules/NotFound';

import CustomLinkContainer from './components/Links/CustomLinkContainer';
import CustomPrevPageLink from './components/Links/CustomPrevPageLink';

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
		path: '*',
		element: <NotFound />
	},
	{
		path: '/',
		element: <CVForm
			handleResetData={handleResetData}
			handleFormSubmit={handleFormSubmit}
			userData={userData}
		/>
	},
	{
		path: '/form',
		element: <CVForm
			handleResetData={handleResetData}
			handleFormSubmit={handleFormSubmit}
			userData={userData}
		/>
	},
	{
		path: '/styles',
		element: <CVSelection userData={userData} />,
	},
	{
		path: '/styles/cv/:id',
		element: <PDFView userData={userData} />
	}
]);
const pathnamesThatHasNav = [
	'/form', '/', '/styles'
]
const RenderNavByPathname = () => {
	const { pathname } = useLocation();
	if (pathnamesThatHasNav.some(e => e === pathname)) {
		return <CustomLinkContainer />
	}
	return <CustomPrevPageLink />
}

function AppWrapper() {
	const initialUserData = {
		eduHistory: [],
		workExperience: [],
		skillCategories: [],
	}
	const locallySavedData = getItemFromLocal('userData');
	const [userData, setUserData] = useState(locallySavedData || initialUserData);

	const saveUserData = (formData) => {
		setUserData({ ...formData });
		updateLocalStorage('userData', formData)
	}
	const handleFormSubmit = (e, formData) => {
		e.preventDefault();
		saveUserData(formData);
	};

	const handleResetData = (setCVInfo) => {
		//reset the user data to its initial state
		setUserData({ ...initialUserData });

		//reset the form data to its initial state
		setCVInfo({ ...initialUserData });

		// manually clears every single field from the following form
		Array.from(document.querySelectorAll('input')).forEach(input => (input.value = ''));
		deleteLocalStorage('userData');
	};

	return (
		<Router>
			<div className="App">
				<RenderNavByPathname />
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