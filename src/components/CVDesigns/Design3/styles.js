import { Font, StyleSheet } from '@react-pdf/renderer';
import OpenSans300 from '../../../assets/fonts/OpenSans-Light.ttf';
import OpenSans400 from '../../../assets/fonts/OpenSans-Regular.ttf';
import OpenSans400i from '../../../assets/fonts/OpenSans-Italic.ttf';
import OpenSans600 from '../../../assets/fonts/OpenSans-SemiBold.ttf';

const primaryFontColor = '#142f46';
const secondaryFontColor = '#29567c';
// const tertiaryFontColor = '#808288';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		fontFamily: 'Open Sans',
		padding: ' 0 16px 0 16px'
	},
	upperSection: {
		display: 'flex',
		flexDirection: 'row',
		minHeight: '130px'
	},
	headerText: {
		fontSize: 20,
		padding: '12px 0 2px 0',
		textAlign: 'left',
		fontWeight: 600,
		color: primaryFontColor,
		borderBottom: `1px solid ${secondaryFontColor}`
	},
	topMargin: {
		height: '20px',
		width: '100%'
	},
	bottomMargin: {
		position: 'fixed',
		bottom: 0,
		left: 0,
		right: 0,
		width: '100%',
		height: '20px',
	},

	// user photo
	// user photo
	photoWrapper: {
		display: 'flex',
		justifyContent: 'center',
		width: '130px',
		height: '130px',
	},
	photo: {
		width: '100%',
		objectFit: 'cover',
		objectPosition: 'center',
		flex: 1,
		backgroundColor: 'transparent'
	},

	// basic info component styles
	basicInfoContainer: {
		flex: 3,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		width: '465',
	},
	fullName: {
		fontSize: 24,
		color: primaryFontColor,
		fontWeight: 600
	},
	personalInfoWrapper: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		fontSize: 12,
		height: 'auto',
	},
	iconizedBasicInfo: {
		flex: '1 0 40%',
		display: 'inline-flex',
		flexDirection: 'row',
		alignItems: 'center',
		padding: '5px 5px 5px 0'
	},
	basicInfoIcon: {
		width: 18,
		height: 18,
		marginRight: '3px',
	},
	basicInfoTxt: {
		fontSize: 12,
		marginRight: '8px',
		color: primaryFontColor,
	},


	// education/experience component styles
	catSection: {
		display: 'flex',
		flexDirection: 'row',
		padding: '8px 0 5px 0',
		justifyContent: 'space-between'
	},
	datesContainer: {
		flex: '1 0',
	},
	dates: {
		fontSize: 12,
		color: primaryFontColor,
		fontWeight: 600,
	},
	catSubjectsSection: {
		flex: '3 0',
		margin: '0 10px',
	},
	primaryTitle: {
		fontSize: 15,
		fontWeight: 600,
		color: primaryFontColor
	},
	secondaryTitle: {
		fontSize: 12,
		fontWeight: 400,
		fontStyle: 'italic',
		color: secondaryFontColor
	},
	expContentSection: {
		display: 'flex',
		flex: '3 0',
		margin: '0 10px',
	},
	expSubjectsSection: {
		marginBottom: '6px'
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
		color: secondaryFontColor
	},

	//skills
	skillCategoriesContainer: {
		display: 'flex',
		flexDirection: 'column',
	},
	skillCategory: {
		fontSize: 17,
		margin: '20px 0 5px 0',
		color: primaryFontColor
	},
	skillSet: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		margin: '4px 0'
	},
	skill: {
		fontSize: 13,
		fontWeight: 'light',
		color: secondaryFontColor,
		marginLeft: '30px'
	},
	skillOrbsContainer: {
		display: 'flex',
		width: '130px',
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	skillOrb: {
		width: '15px',
		backgroundColor: primaryFontColor,
		height: '15px',
		margin: '5px',
		borderRadius: '2px',
		padding: '0 5px 5px 0',
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