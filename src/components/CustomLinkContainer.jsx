import React from 'react';
import '../styles/switch-link-style.css';
import CustomLink from './CustomLink';

function CustomLinkContainer() {
	return (
		<nav className='cv-link__container'>
			<CustomLink
				to={'/'}
				linkText={'Your Info'}
				isActive={false}
			/>
			<CustomLink
				to={'/styles'}
				linkText={'Style Selection'}
				isActive={true}
			/>
		</nav>
	)
}

export default CustomLinkContainer;