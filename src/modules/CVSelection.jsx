import React from 'react';
import { useNavigate } from 'react-router-dom';

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

export default function CVSelection() {
	const navigate = useNavigate();
	const CVStyleLinks = CVStyles.map((Component, i) => (
		<a key={i} onClick={() => navigate(`cv/${i+1}`)}>
			<Component />
		</a>
	));
	return (
		<div className='cv-style-selection'>
			{CVStyleLinks}
		</div>
	)
} 