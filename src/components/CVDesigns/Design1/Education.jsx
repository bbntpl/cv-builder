import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { styles } from './styles';

function IteratedEduHistory(props) {
	const { eduHistory } = props;
	return eduHistory.map((edu) => {
		return (
			<View key={edu.id} style={styles.eduHistory}>
				<View style={styles.eduHistoryNames}>
					<Text style={styles.schoolName}>{edu.schoolName}</Text>
					<Text style={styles.courseName}>{edu.courseName}</Text>
				</View>
				<View style={styles.eduHistoryDates}>
					<Text>{edu.startDate} - {edu.endDate}</Text>
				</View>
			</View>
		)
	})
}

export default function Education(props) {
	const { eduHistory } = props;
	return (
		<View>
			<Text style={styles.headerText}>Education</Text>
			<IteratedEduHistory eduHistory={eduHistory} />
		</View>
	)
}