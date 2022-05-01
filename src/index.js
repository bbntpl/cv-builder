import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppWrapper from './App';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
	<React.StrictMode>
		<AppWrapper />
	</React.StrictMode>,
);