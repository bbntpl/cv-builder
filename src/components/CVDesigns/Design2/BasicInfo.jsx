import React from 'react';
import { View, Text, Image } from '@react-pdf/renderer';

import { styles } from './styles';

import EmailIcon from '../../../assets/icons/email.png';
import HomeIcon from '../../../assets/icons/home.png';
import PhonelIcon from '../../../assets/icons/phone.png';
import WebIcon from '../../../assets/icons/web.png';

function IconizedInfo({src, txt}) {
	return(
		<View style={styles.iconizedBasicInfo}>
			<Image src={src} style={styles.basicInfoIcon}/>
			<Text style={styles.basicInfoTxt}>{txt}</Text>
		</View>
	)
}
export default function BasicInfo(props) {
	const {
		emailAddress,
		phoneNum,
		address,
		website
	} = props;
	return (
		<View style={styles.personalInfoWrapper}>
			<IconizedInfo src={EmailIcon} txt={emailAddress}/>
			<IconizedInfo src={PhonelIcon} txt={phoneNum}/>
			<IconizedInfo src={HomeIcon} txt={address}/>
			<IconizedInfo src={WebIcon} txt={website}/>
		</View>
	)
}