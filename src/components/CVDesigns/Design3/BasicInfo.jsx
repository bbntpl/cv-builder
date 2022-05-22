import React from 'react';
import { View, Text, Image } from '@react-pdf/renderer';

import { styles } from './styles';

import EmailIcon from '../../../assets/icons/email.png';
import HomeIcon from '../../../assets/icons/home.png';
import PhonelIcon from '../../../assets/icons/phone.png';
import WebIcon from '../../../assets/icons/web.png';

export default function BasicInfo(props) {
	const {
		fullName,
		emailAddress,
		phoneNum,
		address,
		website
	} = props.userData;

	function IconizedInfo({ src, txt }) {
		return (
			<View style={styles.iconizedBasicInfo}>
				<Image src={src} style={styles.basicInfoIcon} />
				<Text style={styles.basicInfoTxt}>{txt}</Text>
			</View>
		)
	}

	return (
		<View style={styles.basicInfoContainer}>
			<Text style={styles.fullName}>{fullName}</Text>
			<View style={styles.personalInfoWrapper}>
				<IconizedInfo src={EmailIcon} txt={emailAddress} />
				<IconizedInfo src={PhonelIcon} txt={phoneNum} />
				<IconizedInfo src={HomeIcon} txt={address} />
				<IconizedInfo src={WebIcon} txt={website} />
			</View>
		</View>
	)
}