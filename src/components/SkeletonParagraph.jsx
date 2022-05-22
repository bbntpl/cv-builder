import React, { useState, useEffect } from 'react';
import '../styles/skeleton-paragraph.css'

// This element represents an element that produces a line
// during the iteration process
function BoneWord(props) {
	const { height, color } = props;
	const boneWordStyle = {
		width: '20%',
		height: `${height}px`,
		backgroundColor: color
	}
	return <div style={boneWordStyle} />
}

// This is a sub-component for the thumbnail
// represented as a paragraph-esque element.
export default function SkeletonParagraph(props) {
	// these are the default properties if the 
	// component did not receive a property values
	const {
		rowNum = 6,
		endRowLength = 2,
		color = 'gray',
		heightPx = '2'
	} = props;
	const [skeletonLines, setSkeletonLines] = useState([]);

	// iterate the bone words to build the skeleton paragraph
	useEffect(() => {
		const boneBasket = [];
		for (let rowLineIndex = 0; rowLineIndex < rowNum; rowLineIndex++) {
			for (let boneWordIndex = 0; boneWordIndex < 5; boneWordIndex++) {
				if (rowLineIndex === rowNum - 1 && boneWordIndex >= endRowLength) {
					if(boneWordIndex === 0) {
						boneBasket[rowLineIndex] = [];
						boneBasket[rowLineIndex].push('');
					} else {
						boneBasket[rowLineIndex].push('');
					}
				} else {
					if (boneWordIndex === 0) {
						boneBasket.push([]);
						boneBasket[rowLineIndex].push(
							<BoneWord
								key={`${rowLineIndex}.${boneWordIndex}`}
								height={heightPx}
								color={color}
							/>
						);
					} else {
						boneBasket[rowLineIndex].push(
							<BoneWord
								key={`${rowLineIndex}.${boneWordIndex}`}
								height={heightPx}
								color={color}
							/>
						);
					}
				}
			}
		}
		setSkeletonLines([...boneBasket]);
	}, []);
	return (
		<div className={'skeleton-paragraph'}>
			{skeletonLines}
		</div>
	)
}