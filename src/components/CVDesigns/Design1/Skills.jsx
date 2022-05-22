import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { styles } from './styles';

const modifySkillLvlByRange = (skillLvl) => {
	return skillLvl >= 1 && skillLvl <= 100 ? skillLvl : 20;
}
const RoundDivCollection = ({ skillLevel }) => (
	Array.from({ length: 5 }, (_, i) => {
		const modifiedSkillLvl = modifySkillLvlByRange(Number(skillLevel));
		return (
			<SkillLevelIndicator
				key={i}
				skillLevel={modifiedSkillLvl}
			/>
		)
	})
)

const SkillLevelIndicator = ({ skillLevel }) => (
	<View style={styles.barWrapper} wrap={false}>
		<View style={[styles.bar, { width: `${skillLevel}%` }]}></View>
	</View>
)

function Skillset({ skill, skillLevel }) {
	return (
		<View style={styles.skillSet} wrap={false} >
			<Text style={styles.skill}>{skill}</Text>
			<RoundDivCollection skillLevel={skillLevel} />
		</View>
	)
}

function SkillList({ skills }) {
	return skills.map((skillset, i) => (
		<Skillset key={i} {...skillset} />
	))
}

function SkillCategories({ skillCategories }) {
	return skillCategories.map((skillCatObj, i) => {
		const { skillsCategory, skills } = skillCatObj;
		return (
			<React.Fragment key={i}>
				<Text style={styles.skillCategory}>{skillsCategory}</Text>
				<SkillList skills={skills} />
			</React.Fragment>
		)
	})
}

export default function Skills({ skillCategories }) {
	return (
		<View style={styles.skillCategoriesContainer}>
			<SkillCategories skillCategories={skillCategories} />
		</View>
	)
} 