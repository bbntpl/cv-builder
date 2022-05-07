import React from 'react';
import {
	Document,
	Page,
	View,
} from '@react-pdf/renderer';
import BasicInfo from './BasicInfo';
import Education from './Education';
import { styles } from './styles';

export default (props) => {
	const { userData } = props;
	const { eduHistory } = userData;
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
					</View>
					<View style={styles.rightColumn}>
						<Education eduHistory={eduHistory} />
					</View>
				</view>
			</Page>
		</Document>
	)
}