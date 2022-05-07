import React from 'react';
import { useParams } from 'react-router-dom';
import { PDFViewer } from '@react-pdf/renderer';

import CVDesign1 from '../components/CVs/Design1';
import CVDesign2 from '../components/CVs/Design2';
import CVDesign3 from '../components/CVs/Design3';

const style = {
	display: 'flex',
	flexDirection: 'column',
	height: 'max-content',
	gap: '20px'
}

const cvDesigns = [
	CVDesign1,
	CVDesign2,
	CVDesign3,
];

// render a CV using the passed parameter - id
function RenderCVById(props) {
	const { userData, id } = props;
	return cvDesigns.map((Component, index) => {
		if (index + 1 == id) {
			return <Component
				key={index}
				userData={userData}
			/>
		}
	});
}

export default function CVPDF(props) {
	const { userData } = props;
	const { id } = useParams();
	return (
		<div style={style}>
			<PDFViewer
				width={'595px'}
				height={'842px'}
				showToolbar={false}
			>
				<RenderCVById
					userData={userData}
					id={id}
				/>
			</PDFViewer>
			<span>
				<button>
					Download PDF
				</button>
				<button>
					Print
				</button>
			</span>
		</div>
	)
}