import React from 'react';

import SkeletonParagraph from '../SkeletonParagraph';

import '../../styles/thumbnails/cv-two-style.css';

import UserWithTie from '../../assets/icons/account-tie.svg'
import FormatListTextIcon from '../../assets/icons/format-list-text.svg';
import TextLongIcon from '../../assets/icons/text-long.svg';

export default function CVTwoThumbnail() {
	return (
		<div className={'thumbnail-main cv2 secondary-el-with-shadow '}>
			<div className={'basic-info'}>
				<div className={'photo-case'}>
					<img src={UserWithTie} />
				</div>
				<SkeletonParagraph
					rowNum={2}
					endRowLength={1}
					color={'black'}
				/>
				<img src={TextLongIcon} />
			</div>
			<div className={'main-info'}>
				<div className={'left-col'}>
					Education
					<br></br>
					<SkeletonParagraph />
					<SkeletonParagraph />
					<br></br>
					Experience
					<br></br>
					<SkeletonParagraph />
					<SkeletonParagraph />
				</div>
				<div className={'right-col'}>
					Skill
					<br></br>
					<img src={FormatListTextIcon} />
					<br></br>
					<img src={FormatListTextIcon} />
					<br></br>
					<img src={FormatListTextIcon} />
					<br></br>
					Others
					<SkeletonParagraph />
					<SkeletonParagraph />
				</div>
			</div>
		</div>
	)
}