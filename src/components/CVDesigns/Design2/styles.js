
import { Font, StyleSheet } from '@react-pdf/renderer';
import OpenSans300 from '../../../assets/fonts/OpenSans-Light.ttf';
import OpenSans400 from '../../../assets/fonts/OpenSans-Regular.ttf';
import OpenSans400i from '../../../assets/fonts/OpenSans-Italic.ttf';
import OpenSans600 from '../../../assets/fonts/OpenSans-SemiBold.ttf';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		fontFamily: 'Open Sans',
		padding: '12px 8px'
	},
	upperSide: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		border: '5px solid #7190ff',
		borderRadius: '8px',
		height: '130px',
		color: '#141414',

	},
	lowerSide: {
		display: 'flex',
		flexDirection: 'row',
		width: 575
	},
	leftCol: {
		flex: '3 0 45%',
		padding: '0 8px'
	},
	rightCol: {
		flex: '2 0 45%',
		padding: '0 8px'
	},
	// user avatar
	imgPreviewWrapper: {
		display: 'flex',
		justifyContent: 'center',
		alignContent: 'center',
		width: '130px',
		backgroundColor: '#7190ff',
		padding: '10px 5px',
		margin: '-3px 0 0 -3px',
		border: '5px solid #7190ff',
	},
	imgPreview: {
		maxWidth: '110px',
		maxHeight: '110px',
		backgroundColor: 'transparent'
	},
	// basic info component styles
	basicInfoContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		width: '465',
	},
	fullName: {
		fontSize: 24,
		padding: '7px 5px'
	},
	personalInfoWrapper: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		fontSize: 12,
		padding: '0 4px',
		height: 'auto',
		backgroundColor: '#b9c7f7'
	},
	iconizedBasicInfo: {
		display: 'inline-flex',
		flexDirection: 'row',
		alignItems: 'center',
		padding: '5px 0'
	},
	basicInfoIcon: {
		width: 12,
		height: 12,
		marginRight: '3px'
	},
	basicInfoTxt: {
		fontSize: 11,
		marginRight: '8px'
	},
	headerText: {
		fontSize: 21,
		padding: '12px 0 2px 0',
		textAlign: 'left',
		textTransform: 'uppercase',
		fontWeight: 600
	},

	// education/experience component styles
	eduHistory: {
		padding: '8px 0 5px 0',
	},
	primaryTitle: {
		fontSize: 15,
		fontWeight: 600,
	},
	secondaryTitle: {
		fontSize: 12,
		fontWeight: 400,
	},
	dates: {
		fontSize: 10,
		color: '#808288',
		fontWeight: 400,
		fontStyle: 'italic',
	},
	// list component styles
	item: {
		flexDirection: 'row',
		marginBottom: 5,
	},
	bulletPoint: {
		width: 10,
		fontSize: 10,
	},
	itemContent: {
		flex: 1,
		fontSize: 10,
	},
	//skills
	skillCategoriesContainer: {
		display: 'flex',
		flexDirection: 'column',
	},
	skillCategory: {
		fontSize: 19,
		margin: '20px 0 5px 0'
	},
	skillSet: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		margin: '4px 0'
	},
	skill: {
		fontSize: 13,
		fontWeight: 'light',
		textTransform: 'uppercase',
	},
	skillOrbsContainer: {
		display: 'flex',
		width: '130px',
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	skillOrb: {
		width: '15px',
		backgroundColor: '#303030',
		height: '15px',
		margin: '5px',
		borderRadius: '5px',
		padding: '0 5px 5px 0',
		transform: 'rotate(45deg)'
	}
});
Font.register({
	family: 'Open Sans',
	fonts: [
		{ src: OpenSans300, fontWeight: 300 },
		{ src: OpenSans400, fontWeight: 400 },
		{ src: OpenSans400i, fontStyle: 'italic', fontWeight: 400 },
		{ src: OpenSans600, fontWeight: 600 },
	]
});