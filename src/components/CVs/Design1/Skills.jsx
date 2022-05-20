import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { styles } from './styles';

const modifySkillLvlByRange = (skillLevel) => {
	return skillLevel >= 1 && skillLevel <= 5 ? skillLevel : 1;
}
const RoundDivCollection = ({ skillLevel }) => (
	Array.from({ length: 5 }, (x, i) => {
		const modifiedSkillLvl = modifySkillLvlByRange(skillLevel);
		if (i <= modifiedSkillLvl) {
			x = <RoundDiv style={styles.roundDiv} />
		}
	})
)

const RoundDiv = (style) => (
	<View style={style}></View>
)

function Skillset({ skill, skillLevel }) {
	return (
		<View style={styles.skill}>
			<Text>{skill}</Text>
			<RoundDivCollection skillLevel={skillLevel} />
		</View>
	)
}

export default function Skills({ skillCategories }) {
	return skillCategories.map((skillSet, i) => {
		const { skillCategory, skills } = skillSet;
		return (
			<View key={i}>
				<Text>{skillCategory}</Text>
				<Skillset {...skills} />
			</View>
		)
	})
}