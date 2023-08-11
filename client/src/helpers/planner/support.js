const supportHeader = [
	{
		id: 1,
		image: 'menu',
		title: 'Create Your Menu',
		text: "Pick the recipes you'll cook in the next week — as many or few as you like. We'll supply personalized recommendations to keep you inspired.",
	},
	{
		id: 2,
		image: 'groceries',
		title: 'Get Your Groceries',
		text: 'Add ingredients to your Shopping List with a click, then take it on the go or get groceries delivered through Vummly.',
	},
	{
		id: 3,
		image: 'cook',
		title: 'Cook, Review, Repeat!',
		text: 'Get cooking, then review that recipe for even better recommendations. All done? Clear your Meal Plan and start your next culinary adventure!',
	},
]

const tips = [
	{
		id: 1,
		title: 'What is Meal Planner?',
		text: [
			{
				id: 1,
				textline:
					'The Vummly Meal Planner is a convenient way for you to select, track, and shop for your weekly meals, available on web and in the app with a paid Vummly subscription. Choose a custom menu for the week and save it in the Meal Planner so you can easily access the recipes you need for the week ahead.',
			},
			{
				id: 2,
				textline:
					'Meal Planner is powered by Vummly to provide personalized recipe recommendations based on your dietary needs and preferences, and is integrated with Shopping List to help you easily get what you need to start cooking.',
			},
			{
				id: 3,
				textline: 'To add recipes to your plan:',
			},
		],
		points: [
			{
				id: 1,
				point: 'Open the Vummly Meal Planner to view your personalized recommendation feed; click the  button on any recommended recipe to add it to your Meal Plan, OR',
			},
			{
				id: 2,
				point: 'Open any recipe on Vummly, and find the icon under the ingredients list. Click!',
			},
		],
	},
	{
		id: 2,
		title: 'What is Shopping List?',
		text: [
			{
				id: 1,
				textline:
					'Shopping List is a "ready when you are" master list to keep all your shopping needs organized. With multi-device functionality, you can start your list on the computer and add to it on the fly with your mobile device.',
			},
			{
				id: 2,
				textline:
					"It's flexible, too: Add ingredients with a click for recipes on Vummly (we'll show you how many servings of that recipe you've added), manually add items for your pantry (we'll populate suggestions to keep typing to a minimum) — even add everyday items, like paper towels or toothpaste. Your list can be sorted by recipe or category views, to help you plan out meals or fly through the grocery store aisles.",
			},
		],
	},
	{
		id: 3,
		title: 'Where do my Meal Plan recommendations come from?',
		text: [
			{
				id: 1,
				textline: `Vummly digs into our huge database of recipes to provide recommendations using a custom meal-planning algorithm that returns recipes just for you. For best results, make sure you've updated your taste preferences so we can give you more of what you like (and avoid those stinky brussels sprouts, if you want). Remember, every time you rate a recipe, your recommendations get even better! Be sure to rate and review meals in your Meal Planner by clicking "Made It!" after you're done.`,
			},
		],
	},
	{
		id: 4,
		title: 'How do I email or print my Meal Plan or my Shopping List?',
		text: [
			{
				id: 1,
				textline:
					'Click the icon at the top of your Meal Plan or Shopping List to open the menu for additional options, including the ability to print your plan or print or email your shopping list.',
			},
		],
	},
	{
		id: 5,
		title: 'Can I buy ingredients through Vummly?',
		text: [{ id: 1, textline: 'Yes! Click "Buy Ingredients" in your Shopping List to place an online grocery order and have ingredients delivered from your local store.' }],
	},
	{
		id: 6,
		title: 'Can I access my meal plan from the mobile app?',
		text: [
			{ id: 1, textline: 'Yes! Meal Planner is available in the Vummly® app with a paid subscription to Vummly.' },
			{ id: 2, textline: 'Download the app for iOS or Android, and sign up for a free trial to see everything a Vummly subscription has to offer!' },
		],
	},
	{
		id: 7,
		title: 'How can I make the Vummly Meal Planner better?',
		text: [{ id: 1, textline: 'Want to help shape the future of the Vummly Meal Planner? Please write an email on the support page' }],
	},
	{
		id: 8,
		title: 'How much does a subscription cost?',
		text: [
			{
				id: 1,
				textline:
					'Standard pricing for a Vummly subscription is $4.99/month. If you’re taking advantage of a free trial period offer, then your Vummly subscription will be free during that period. After the trial period ends, your Vummly subscription will auto-renew at $4.99/month unless you cancel. You can cancel any time (for any reason) — but you’ll need to do so at least 24 hours before the end of your trial or renewal date to avoid charges.',
			},
		],
	},
	{
		id: 9,
		title: 'Does my subscription automatically renew?',
		text: [
			{
				id: 1,
				textline:
					"Yes, subscriptions automatically renew each month (the cycle is based on your sign-up date) until you cancel. You'll get an email receipt for each billing cycle to notify you of your monthly renewal. Cancel at least 24 hours before the end of your monthly cycle to end your subscription and avoid charges for an additional month.",
			},
			{ id: 2, textline: 'For additional subscription details, including cancellation instructions, visit our support page.' },
		],
	},
]

export { supportHeader, tips }
