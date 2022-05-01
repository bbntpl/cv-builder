import React from 'react';
import {
	BrowserRouter as Router,
	useRoutes
} from "react-router-dom";
import './App.css';

import CVForm from './modules/CVForm';
import CVStyleSelection from './modules/CVStyleSelection';
import CustomLinkContainer from './components/CustomLinkContainer';

function Footer() {
	return (
		<footer className="footer">
			<a href="https://github.com/bvrbryn445/cv-builder">
				{`B.B. Antipolo ${new Date().getFullYear()}`}
			</a>
		</footer>
	)
}

const App = () => useRoutes([
	{ path: "/", element: <CVForm /> },
	{ path: "/form", element: <CVForm /> },
	{ path: "/styles", element: <CVStyleSelection /> },
]);


function AppWrapper() {
	// const [userData, setUserData] = useState({
	// 	fullName: '',
	// 	emailAddress: '',
	// 	phoneNum: '',
	// 	address: '',
	// 	website: '',
	// 	eduHistory: [],
	// 	workExperience: [],
	// 	skills: [],
	// 	extra: [],
	// });

	// const handleFormSubmit = () => {
	// 	if()
	// }

	return (
		<Router>
			<div className="App">
				<CustomLinkContainer />
				<App setS/>
				<Footer />
			</div>
		</Router>
	)
}

export default AppWrapper;