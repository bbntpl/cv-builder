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
					<Text style={styles.primaryTitle}>{exp.companyName}</Text>
					<Text style={styles.secondaryTitle}>{exp.jobTitle}</Text>
					<Text style={styles.dates}>{exp.startDate} - {exp.endDate}</Text>
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
			</View >
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