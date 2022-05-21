import React from 'react';
import PropTypes from 'prop-types';
import {
	useMatch,
	useResolvedPath,
	Link
} from 'react-router-dom';

export default function CustomLink(props) {
	const { to, linkText } = props;
	const resolved = useResolvedPath(to);
	const match = useMatch({ path: resolved.pathname, end: true });
	const modifierCondition = match ? 'active' : 'inactive';
	return (
		<div className={`cv-link__button--${modifierCondition}`}>
			<Link to={to}>
				<span>
					{linkText}
				</span>
			</Link>
		</div>
	)
}

CustomLink.propTypes = {
	to: PropTypes.string,
	linkText: PropTypes.string
};