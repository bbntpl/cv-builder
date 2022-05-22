import React from 'react';
import {
	Document,
	Page,
	View,
	Text,
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
		yourPicture,
		fullName,
		emailAddress,
		phoneNum,
		address,
		website
	} = userData;
	return (
		<Document
			author={userData.fullName || 'unknown'}
			keywords='cv, resume'
			subject={`The CV of ${fullName}`}
			title={'CV'}
		>
			<Page size="A4" >
				<View style={styles.container}>
					<View style={styles.topMargin} fixed>
					</View>
					<View style={styles.upperSide}>
					{
							yourPicture &&
							<View style={styles.photoWrapper} >
								<Image style={styles.photo} src={yourPicture} />
							</View>
						}
						<View style={styles.basicInfoContainer}>
							<Text style={styles.fullName}>{fullName}</Text>
							<BasicInfo
								emailAddress={emailAddress}
								phoneNum={phoneNum}
								address={address}
								website={website}
							/>
						</View>
					</View>
					<View style={styles.lowerSide}>
						<View style={styles.leftCol}>
							<Education eduHistory={eduHistory} />
							<Experience workExperience={workExperience} />
						</View>
						<View style={styles.rightCol}>
							<Skills skillCategories={skillCategories} />
						</View>
					</View>
					<View style={styles.bottomMargin} fixed>
					</View>
				</View>
			</Page>
		</Document>
	)
}