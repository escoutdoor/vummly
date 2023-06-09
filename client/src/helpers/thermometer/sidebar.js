let list = [
	{
		id: 1,
		title: 'Smart Thermometer',
		dropdown: [
			{ label: 'Overview', link: '/thermometer/overview' },
			{ label: 'Support', link: '/support/categories/thermometer' },
			{ label: 'Activate', link: '/thermometer/activate' },
		],
	},
	{
		id: 2,
		title: 'Meal Planning',
		dropdown: [
			{ label: 'Meal Planner', link: '/meal-planner/ideas' },
			{ label: 'Meal Planner Guides', link: '/meal-planner-guides' },
		],
	},
	{
		id: 3,
		title: 'Recipes',
		dropdown: [
			{ label: 'My Feed', link: '/' },
			{ label: 'Browse', link: '/browse' },
			{ label: 'Pro Recipes', link: '/proRec' },
			{ label: 'Guided Recipes', link: '/guidedRec' },
			{ label: 'Pantry Ready', link: '/pantryReady' },
		],
	},
	{
		id: 4,
		title: 'Articles',
	},
	{
		id: 5,
		title: 'Saved Recipes',
		dropdown: [],
	},
]

export { list }

let about = [
	{ label: 'Careers', link: '/careers' },
	{ label: 'Contact Us', link: '/contactUs' },
	{ label: 'FAQs', link: '/support' },
]

export { about }

let privacy = [
	{ label: 'Privacy', link: '/privacy' },
	{ label: 'Terms and Conditions', link: '/termsNcond' },
	{ label: 'Copyright', link: '/copyright' },
	{ label: 'Interest-Based Ads', link: '/ads' },
	{ label: 'Do Not Sell My Personal Information', link: '/personalInfo' },
]

export { privacy }
