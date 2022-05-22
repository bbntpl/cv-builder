import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import '../styles/cv-pdf.css';

import CVDesign1 from '../components/CVDesigns/Design1';
import CVDesign2 from '../components/CVDesigns/Design2';
import CVDesign3 from '../components/CVDesigns/Design3';

const cvDesigns = [
	CVDesign1,
	CVDesign2,
	CVDesign3,
];

const RenderCVById = ({ userData, id }) => (
	cvDesigns.map((Component, index) => {
		if (index + 1 == id) {
			return (
				<Component
					key={index}
					userData={userData}
				/>
			)
		}
	})
)

const RenderPDFViewer = (props) => (
	<PDFViewer
		width={'595px'}
		height={'842px'}
		showToolbar={false}
	>
		<RenderCVById {...props} />
	</PDFViewer>
)

const RenderPDFDownloadLink = ({ userData, id }) => (
	<PDFDownloadLink
		document={<RenderCVById userData={userData} id={id} />}
		fileName={`yourCV_${id}.pdf`}>
		{
			({ loading }) => (loading
				? 'Loading document...'
				: 'Download')
		}
	</PDFDownloadLink >
)

const PDFViewerContainer = (props) => {
	const { userData, id } = props;
	const navigate = useNavigate();
	return (
		<div className='pdf-viewer-container'>
			<span className='pdf-options'>
				<RenderPDFDownloadLink userData={userData} id={id} />
				<a onClick={() => navigate('/cv-builder/')}>Edit CV Data</a>
			</span>
			<RenderPDFViewer {...props} />
		</div>
	)
}

export default function PDFView(props) {
	const { userData } = props;
	const { id } = useParams();
	return <PDFViewerContainer userData={userData} id={id} />
}