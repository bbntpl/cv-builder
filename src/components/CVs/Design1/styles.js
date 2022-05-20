
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
		padding: '30px 30px 30px 15px',
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
		fontSize: '18px',
		textTransform: 'uppercase',
		padding: '20px 0 6px 0'
	},
	basicInfo: {
		fontSize: 11,
		lineHeight: 1.2,
		paddingBottom: '4px'
	},

	// education component styles
	eduHistory: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'flex-between',
		padding: '20px 0 5px  0',
	},
	schoolName: {
		fontSize: 15,
		fontWeight: 700
	},
	courseName: {
		fontSize: 14,
		color: '#020202',
		fontStyle: 'italic'
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