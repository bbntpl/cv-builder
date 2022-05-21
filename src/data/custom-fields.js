// the collection of values that'll be passed
// as a property to the custom field element
const CUSTOM_FIELDS_DATA = {
	basicInfo: [
		{
			lblTxt: 'Full Name',
			lblFor: 'fname',
			propKey: 'fullName',
		},
		{
			lblTxt: 'Email Address',
			lblFor: 'eaddress',
			propKey: 'emailAddress',
		},
		{
			lblTxt: 'Phone/Tel Number',
			lblFor: 'pnumber',
			propKey: 'phoneNum',
		},
		{
			lblTxt: 'Address',
			lblFor: 'address',
			propKey: 'address',
		},
		{
			lblTxt: 'Website',
			lblFor: 'website',
			propKey: 'website',
		},
		{
			lblTxt: 'Your Picture',
			lblFor: 'yourpicture',
			propKey: 'yourPicture',
			inputType: 'file'
		}
	],
	eduHistory: [
		{
			lblTxt: 'Course Name',
			lblFor: 'coursename',
			propKey: 'courseName',
		},
		{
			lblTxt: 'School Name',
			lblFor: 'schoolname',
			propKey: 'schoolName',
		},
		{
			lblTxt: 'Start Date',
			lblFor: 'startdate',
			propKey: 'startDate',
		},
		{
			lblTxt: 'End Date',
			lblFor: 'enddate',
			propKey: 'endDate',
		},
	],
	workExperience: [
		{
			lblTxt: 'Job Title',
			lblFor: 'jobtitle',
			propKey: 'jobTitle',
		},
		{
			lblTxt: 'Company Name',
			lblFor: 'companyname',
			propKey: 'companyName',
		},
		{
			lblTxt: 'Start Date',
			lblFor: 'startdate',
			propKey: 'startDate',
		},
		{
			lblTxt: 'End Date',
			lblFor: 'enddate',
			propKey: 'endDate',
		},
		{
			lblTxt: 'Descriptions',
			lblFor: 'descriptions',
			propKey: 'descriptions',
			inputType: 'textarea'
		}
	],
	skillCategories: [
		{
			lblTxt: 'Skills Category',
			lblFor: 'skillscategory',
			propKey: 'skillsCategory',
			subFields: {
				skills: [{
					lblTxt: 'Skill',
					lblFor: 'skill',
					propKey: 'skill'
				},
				{
					lblTxt: 'Skill Level(1-100)',
					lblFor: 'skilllevel',
					propKey: 'skillLevel'
				}]
			}
		},
	]
};

export default CUSTOM_FIELDS_DATA;