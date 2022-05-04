import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/thumbnails/thumbnail.css';
import '../styles/cv-style-selection.css';

// imported thumbnails
import CVOneThumbnail from '../components/Thumbnails/CVOneThumbnail';
import CVTwoThumbnail from '../components/Thumbnails/CVTwoThumbnail';
import CVThreeThumbnail from '../components/Thumbnails/CVThreeThumbnail';

const CVStyles = [
	CVOneThumbnail,
	CVTwoThumbnail,
	CVThreeThumbnail
];

export default function CVStyleSelection() {
	const CVStyleLinks = CVStyles.map((Component, i) => (
		<Link key={i} to={`cv/${i+1}`}>
			<Component />
		</Link>
	));

	return (
		<div className='cv-style-selection'>
			{CVStyleLinks}
		</div>
	)
} 