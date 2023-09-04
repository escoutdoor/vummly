let list = [
	{
		id: 1,
		title: 'Smart Thermometer',
		dropdown: [
			{ label: 'Overview', link: '/thermometer/overview' },
			{ label: 'Support', link: '/support/categories/smart-thermometer' },
			{ label: 'Activate', link: '/thermometer/activate' },
		],
	},
	{
		id: 2,
		title: 'Meal Planning',
		link: '/meal-planner/ideas',
	},
	{
		id: 3,
		title: 'Recipes',
		dropdown: [
			{ label: 'My Feed', link: '/' },
			{ label: 'Browse', link: '/browse' },
		],
	},
	{
		id: 5,
		title: 'Saved Recipes',
		dropdown: [],
	},
]

export { list }

let about = [
	{ label: 'Contact Us', link: '/contact-us' },
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
