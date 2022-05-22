import React from 'react';
import {
	Document,
	Page,
	View,
	Image
} from '@react-pdf/renderer';
import BasicInfo from './BasicInfo';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import { styles } from './styles';

export default (props) => {
	const { userData } = props;
	const {
		eduHistory,
		workExperience,
		skillCategories,
		yourPicture
	} = userData;
	return (
		<Document
			author={userData.fullName || 'unknown'}
			keywords='cv, resume'
			subject={`The CV of ${userData.fullName}`}
			title={'CV'}
		>
			<Page size="A4" >
				<View style={styles.container}>
					<View style={styles.topMargin} fixed>
					</View>
					<View style={styles.upperSection}>
						<BasicInfo userData={userData} />
						{
							yourPicture &&
							<View style={styles.photoWrapper} >
								<Image style={styles.photo} src={yourPicture} />
							</View>
						}
					</View>
					<Education eduHistory={eduHistory} />
					<Experience workExperience={workExperience} />
					<Skills skillCategories={skillCategories} />
					<View style={styles.bottomMargin} fixed>
					</View>
				</View>
			</Page>
		</Document>
	)
}