import React from 'react';
import '../../styles/switch-link-style.css';
import CustomLink from './CustomLink';

export default function CustomLinkContainer() {
	return (
		<nav className='cv-link__container'>
			<CustomLink
				to={'/cv-builder'}
				linkText={'Your Info'}
				isActive={false}
			/>
			<CustomLink
				to={'/cv-builder/styles'}
				linkText={'Style Selection'}
				isActive={true}
			/>
		</nav>
	)
}