import React from 'react';

const containerStyles = {
	height: 'calc(100vh - 155px)'
}
const textStyles ={
	color: 'white'
}
export default function NotFound() {
	return (
		<div style={containerStyles} className='return-prev-page-container'>
			<h1 style={textStyles}><strong>404</strong>- Page not found</h1>
		</div>
	)
}