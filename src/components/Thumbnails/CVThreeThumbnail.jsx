import React from 'react';

import SkeletonParagraph from '../SkeletonParagraph';

import '../../styles/thumbnails/cv-three-style.css';

import UserWithTie from '../../assets/icons/account-tie.svg'

export default function CVThreeThumbnail() {
	return (
		<div className={'thumbnail-main cv3 secondary-el-with-shadow '}>
			<div className={'top-section'}>
				<img src={UserWithTie} />
				<p>Full Name</p>
			</div>
			<br></br>
			Basic Info
			<SkeletonParagraph rowNum={2} endRowLength={1} color={'#c0c0c0'} />
			<br></br>
			Experience
			<SkeletonParagraph rowNum={4} endRowLength={5} color={'#c0c0c0'} />
			<br></br>
			Education
			<SkeletonParagraph rowNum={4} endRowLength={4} color={'#c0c0c0'} />
			<br></br>
			Skills
			<SkeletonParagraph rowNum={3} endRowLength={3} color={'#c0c0c0'} />
			<br></br>
			Others
			<SkeletonParagraph rowNum={2} endRowLength={2} color={'#c0c0c0'} />
		</div>
	)
}