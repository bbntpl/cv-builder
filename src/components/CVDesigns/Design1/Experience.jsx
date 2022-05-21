import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { styles } from './styles';
import List, { Item } from './List';

function IteratedWorkExp(props) {
	const { workExperience } = props;
	return workExperience.map((exp) => {
		return (
			<View key={exp.id}>
				<View style={styles.eduHistory}>
					<View style={styles.eduHistoryNames}>
						<Text style={styles.schoolName}>{exp.companyName}</Text>
						<Text style={styles.courseName}>{exp.jobTitle}</Text>
					</View>
					<View style={styles.eduHistoryDates}>
						<Text>{exp.startDate} - {exp.endDate}</Text>
					</View>
				</View>
				<View>
					<List>
						{
							exp.descriptions.map((desc, i) => (
								<Item key={i}>
									{desc}
								</Item>
							))
						}
					</List>
				</View>
			</View>
		)
	})
}

export default function Experience(props) {
	const { workExperience } = props;
	return (
		<View>
			<Text style={styles.headerText}>Work Experience</Text>
			<IteratedWorkExp workExperience={workExperience} />
		</View>
	)
}