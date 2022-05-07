
import { Font, StyleSheet } from '@react-pdf/renderer';

const OpenSans300 = 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap';
const OpenSans400 = 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400&display=swap';
const OpenSans400i = 'https://fonts.googleapis.com/css2?family=Open+Sans:ital@1&display=swap';
const OpenSans600 = 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap';
const OpenSans700 = 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		fontFamily: 'Open Sans'
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
		padding: '30px 15px',
	},
	fullName: {
		borderTop: '3px solid aliceblue',
		fontSize: '18px',
		textTransform: 'uppercase',
		paddingTop: '20px'
	},
	basicInfo: {
		fontSize: '11px',
		lineHeight: 1.5
	},
	headerText: {
		fontSize: '26px',
		padding: '18px 0',
		textAlign: 'left',
		textTransform: 'uppercase',
	},
	eduHistory: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'flex-between',
		padding: '0 0 20px  0',
	},
	schoolName: {
		fontSize: '15px',
		fontWeight: 700
	},
	courseName: {
		fontSize: '14px',
		color: '#020202',
		fontStyle: 'italic'
	},
	eduHistoryNames: {
		flex: 1,
		paddingRight: '30px'
	},
	eduHistoryDates: {
		fontSize: '12px',
		color: 'maroon',
		flex: 1,
	}
});
Font.register({
	family: 'Open Sans',
	fonts: [
		{ src: OpenSans300, fontWeight: 300 },
		{ src: OpenSans400, fontWeight: 400 },
		{ src: OpenSans400i, fontStyle: 'italic', fontWeight: 400 },
		{ src: OpenSans600, fontWeight: 600 },
		{ src: OpenSans700, fontWeight: 700 },
	]
});