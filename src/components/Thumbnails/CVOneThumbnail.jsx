import React from 'react';

import SkeletonParagraph from '../SkeletonParagraph';

import '../../styles/thumbnails/cv-one-style.css';

import UserWithTie from '../../assets/icons/account-tie.svg'
import FormatListTextIcon from '../../assets/icons/format-list-text.svg';

export default function CVOneThumbnail() {
	return (
		<div className={'thumbnail-main cv1 secondary-el-with-shadow '}>
			<div className={'left-col'}>
				<div className={'photo-case'}>
					<img src={UserWithTie} />
				</div>
				<div className={'basic-info'}>
					<p>Basic Info</p>
					<SkeletonParagraph
						rowNum={8}
						endRowLength={4}
						color={'aliceblue'}
						heightPx={2}
					/>
					<br></br>
					<p>Skills</p>
					<img src={FormatListTextIcon} />
					<img src={FormatListTextIcon} />
					<img src={FormatListTextIcon} />

				</div>
			</div>
			<div className={'right-col'}>
				Education
				<br></br>
				<SkeletonParagraph
					rowNum={10}
					endRowLength={2}
					color={'gray'}
					heightPx={2}
				/>
				<br></br>
				Work History
				<br></br>
				<SkeletonParagraph
					rowNum={10}
					endRowLength={3}
					color={'gray'}
					heightPx={2}
				/>
			</div>
		</div>
	)
}