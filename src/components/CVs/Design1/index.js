import React from 'react';
import { Document, Page, View } from '@react-pdf/renderer';
import BasicInfo from './BasicInfo';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import { styles } from './styles';

export default (props) => {
	const { userData } = props;
	const { eduHistory, workExperience, skillCategories } = userData;
	return (
		<Document
			author={userData.fullName || 'unknown'}
			keywords='cv, resume'
			subject={`The CV of ${userData.fullName}`}
			title={'CV'}
		>
			<Page size="A4">
				<view style={styles.container}>
					<View style={styles.leftColumn}>
						<BasicInfo userData={userData} />
						<Skills skillCategories={skillCategories} />
					</View>
					<View style={styles.rightColumn}>
						<Education eduHistory={eduHistory} />
						<Experience workExperience={workExperience} />
					</View>
				</view>
			</Page>
		</Document>
	)
}