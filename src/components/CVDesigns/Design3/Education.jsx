import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { styles } from './styles';

function IteratedEduHistory(props) {
	const { eduHistory } = props;
	return eduHistory.map((edu) => {
		return (
			<View key={edu.id} style={styles.catSection}>
				<View style={styles.datesContainer}>
					<Text style={styles.dates}>{edu.startDate} - {edu.endDate}</Text>
				</View>
				<View style={styles.catSubjectsSection}>
					<Text style={styles.primaryTitle}>{edu.schoolName}</Text>
					<Text style={styles.secondaryTitle}>{edu.courseName}</Text>
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