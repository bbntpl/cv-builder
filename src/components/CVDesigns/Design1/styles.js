
import { Font, StyleSheet } from '@react-pdf/renderer';
import OpenSans300 from '../../../assets/fonts/OpenSans-Light.ttf';
import OpenSans400 from '../../../assets/fonts/OpenSans-Regular.ttf';
import OpenSans400i from '../../../assets/fonts/OpenSans-Italic.ttf';
import OpenSans600 from '../../../assets/fonts/OpenSans-SemiBold.ttf';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		fontFamily: 'Open Sans',
	},
	leftColumn: {
		flexDirection: 'column',
		width: 170,
		padding: '30px 10px',
		backgroundColor: 'maroon',
		color: 'aliceblue',
	},
	rightColumn: {
		width: 425,
		padding: '20px 30px 30px 15px',
	},
	headerText: {
		fontSize: 26,
		padding: '18px 0 0 0',
		textAlign: 'left',
		textTransform: 'uppercase',
	},
	// basic info component styles
	fullName: {
		borderTop: '3px solid aliceblue',
		fontSize: 20,
		textTransform: 'uppercase',
		padding: '20px 0 6px 0'
	},
	basicInfo: {
		fontSize: 12,
		lineHeight: 1.2,
		paddingBottom: '4px'
	},

	// education component styles
	eduHistory: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'flex-between',
		padding: '14px 0 5px  0',
	},
	schoolName: {
		fontSize: 16,
	},
	courseName: {
		fontSize: 14,
		color: '#020202',
		fontStyle: 'italic',
	},
	eduHistoryNames: {
		flex: 3,
	},
	eduHistoryDates: {
		fontSize: 12,
		color: 'maroon',
		flex: 2,
		textAlign: 'right'
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
		fontSize: 22,
		margin: '20px 0 5px 0'
	},
	skillSet: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		margin: '4px 0'
	},
	skill: {
		fontSize: 15,
		fontWeight: 'light',
		textTransform: 'uppercase',
	},
	barWrapper: {
		width: '100%',
		height: '2px'
	},
	bar: {
		position: 'absolute',
		height: '100%',
		backgroundColor: 'aliceblue'
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