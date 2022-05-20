import React from 'react';
import { useNavigate } from 'react-router-dom';
import ReturnPrevPageArrowIcon from '../assets/icons/keyboard-return.svg';
import '../styles/custom-prev-page-link.css';

export default function CustomPrevPageLink() {
	const navigate = useNavigate();
	return (
		<div className='return-prev-page-container'>
			<a onClick={() => navigate('/styles')}>
				<img src={ReturnPrevPageArrowIcon} />
				Back to the previous page
			</a>
		</div>
	)
}