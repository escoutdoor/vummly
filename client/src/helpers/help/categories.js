const categories = [
	{
		idPage: 'thermometer',
		title: 'Smart Thermometer',
		parts: [
			{ title: 'Getting Help', links: [{ title: 'Contact us', l: 'articles/getting-help/contact-us' }] },
			{
				title: 'Cooking the Perfect Prime Rib or Rib Roast',
				links: [
					{
						title: 'How long does a roast need to rest?',
						l: 'articles/cooking-the-perfect-prime-rib-or-rib-roast/roast-need-to-rest',
					},
				],
			},
			{
				title: 'Cooking a Turkey',
				links: [
					{ title: 'How to cook the perfect turkey.', l: 'articles/coocking-a-turkey/perfect-turkey-guide' },
					{ title: 'For Best Results', l: 'articles/coocking-a-turkey/best-results' },
				],
			},
			{
				title: 'Troubleshooting',
				links: [
					{ title: 'Thermometer not found', l: 'articles/troubleshooting/thermometer-not-found' },
					{ title: 'Inaccurate results', l: 'articles/troubleshooting/inaccurate-results' },
					{
						title: "Smart Thermometer won't charge in dock",
						l: 'articles/troubleshooting/thermometer-will-not-charge-in-dock',
					},
					{
						title: 'Smart Thermometer disconnected during cooking',
						l: 'articles/troubleshooting/disconnected-during-cooking',
					},
					{ title: 'How do I reset the Smart Thermometer?', l: 'articles/troubleshooting/reset-thermometer' },
					{
						title: 'Where can I get further assistance?',
						l: 'articles/troubleshooting/where-can-i-get-further-assistance',
					},
				],
			},
			{
				title: 'Connecting, Pairing, and Docking',
				links: [
					{
						title: 'How do I connectarticles/pair the Smart Thermometer to my phone?',
						l: 'articles/connecting-pairing/connect-thermometer-to-phone',
					},
					{
						title: 'What is the docking station for?',
						l: 'articles/connecting-pairing/what-is-docking-station-for',
					},
					{
						title: 'Where should I place the dock when cookingarticles/not cooking?',
						l: 'articles/connecting-pairing/place-dock-coocking-not-coocking',
					},
					{
						title: 'How do I install batteries and charge my Smart Thermometer?',
						l: 'articles/connecting-pairing/install-and-charge-thermometer',
					},
					{
						title: 'How do I turn the Smart Thermometer onarticles/off?',
						l: 'articles/connecting-pairing/turnon-turnoff-thermometer',
					},
					{
						title: 'What is the thingarticles/tool on the bottom of the dock?',
						l: 'articles/connecting-pairing/bottom-dock-tool',
					},
				],
			},
			{
				title: 'Cooking With Smart Thermometer',
				links: [
					{ title: 'Quick start guide', l: 'articles/coocking-with-thermometer/quick-start-guide' },
					{
						title: 'Where should I place the dock when cooking?',
						l: 'articles/coocking-with-thermometer/place-dock-when-coocking',
					},
					{
						title: 'Can I use it for anything other than meat?',
						l: 'articles/coocking-with-thermometer/anything-other-than-meat',
					},
					{
						title: 'Cooking with metallic foil',
						l: 'articles/coocking-with-thermometer/coocking-with-metallic-foil',
					},
					{ title: 'Can I air fry?', l: 'articles/coocking-with-thermometer/can-i-air-fry' },
					{ title: 'Can I deep fry?', l: 'articles/coocking-with-thermometer/can-i-deep-fry' },
				],
			},
			{
				title: 'Care Instructions',
				links: [
					{
						title: 'Is the Smart Thermometer waterproof?',
						l: 'articles/care-instructions/thermometer-water-proof',
					},
					{
						title: 'Is the Smart Thermometer dishwasher safe?',
						l: 'articles/care-instructions/thermometer-dishwasher-safe',
					},
					{
						title: 'How do I clean my Smart Thermometer?',
						l: 'articles/care-instructions/how-to-clean-thermometer',
					},
				],
			},
			{
				title: 'Yummly App',
				links: [
					{ title: 'Do I need to create an account?', l: 'articles/yummly-app/do-i-need-to-create-an-acc' },
					{ title: 'Is the Yummly® app free?', l: 'articles/yummly-app/is-yummly-app-free' },
					{
						title: 'Where can I download the Yummly app?',
						l: 'articles/yummly-app/where-i-can-download-yummly-app',
					},
					{
						title: 'Do I need to use the Yummly app with the Smart Thermometer?',
						l: 'articles/yummly-app/do-i-need-to-use-yummly-app-with-thermometer',
					},
					{ title: 'Updating your iOS device', l: 'articles/yummly-app/updating-your-iOS-device' },
					{ title: 'Updating your Android device', l: 'articles/yummly-app/updating-your-Android-device' },
				],
			},
			{
				title: 'Multiple Thermometers',
				links: [
					{
						title: 'How to add multiple thermometers',
						l: 'articles/multiple-thermometers/how-to-add-multiple-thermometers',
					},
					{
						title: 'Navigating while multiple thermometers are cooking.',
						l: 'articles/multiple-thermometers/navigationg-while-multiple-thermometers-are-coocking',
					},
					{
						title: 'How to edit thermometer names while cooking',
						l: 'articles/multiple-thermometers/how-to-edit-thermometer-names-while-coocking',
					},
					{
						title: 'Does it matter which docks I put my thermometers back into when my food is ready?',
						l: 'articles/multiple-thermometers/does-it-matter-which-docks-I-put-my-thermometers-back-into-when-my-food-is-ready',
					},
					{
						title: 'How do I reconnect one of my thermometers to its dock during a cook session?',
						l: 'articles/multiple-thermometers/reconnect-one-of-my-thermometers-to-its-dock-during-cook-session',
					},
					{
						title: 'Can I connect more than one Yummly Smart Thermometer at a time?',
						l: 'articles/multiple-thermometers/reconnect-more-than-one-yummly-start-thermometer-at-a-time',
					},
				],
			},
			{
				title: 'Ambient Temperature Sensor',
				links: [
					{
						title: 'How does the ambient temperature sensor work?',
						l: 'articles/sensor/how-does-temperature-sensor-work',
					},
				],
			},
			{
				title: 'Warranty, Returns and Shipping',
				links: [
					{
						title: 'What is your return policy?',
						l: 'articles/warranty-returns-and-shipping/what-is-return-policy',
					},
					{
						title: 'Is shipping free/how long does it take?',
						l: 'articles/warranty-returns-and-shipping/is-shipping-free',
					},
					{
						title: 'Do you ship internationally?',
						l: 'articles/warranty-returns-and-shipping/do-you-ship-internationally',
					},
					{
						title: 'What is the warranty policy?',
						l: 'articles/warranty-returns-and-shipping/what-is-warranty-policy',
					},
					{ title: 'How do I track my order?', l: 'articles/warranty-returns-and-shipping/track-my-order' },
					{
						title: 'I want to return my Smart Thermometer',
						l: 'articles/warranty-returns-and-shipping/return-thermometer',
					},
				],
			},
			{
				title: 'Technical Specifications',
				links: [
					{ title: 'Technical specifications', l: 'articles/tech-specifications/tech-specifications' },
					{
						title: 'How long do batteries last?',
						l: 'articles/tech-specifications/how-long-do-batteries-last',
					},
					{
						title: 'What type of batteries are required?',
						l: 'articles/tech-specifications/what-type-of-batteries-are-required',
					},
					{ title: 'Where can I find the user manual?', l: 'articles/tech-specifications/find-user-manual' },
					{
						title: 'What comes in the box with the Smart Thermometer?',
						l: 'articles/tech-specifications/what-comes-with-thermometer',
					},
					{
						title: 'Requirements for using the Smart Thermometer',
						l: 'articles/tech-specifications/requirements-for-using-thermometer',
					},
				],
			},
		],
	},
	{
		idPage: 'sub',
		title: 'Yummly Paid Subscription',
		parts: [
			{
				title: 'Getting Started',
				links: [
					{
						title: "What's included in my Yummly subscription?",
						l: 'articles/getting-started/including-sub',
					},
					{
						title: 'Am I automatically enrolled in the paid subscription?',
						l: 'articles/getting-started/auto-enrolled-in-paid-sub',
					},
					{
						title: 'Does my subscription include a Yummly® Smart Thermometer?',
						l: 'articles/getting-started/sub-include-thermomter',
					},
					{
						title: 'Do I need a subscription to use my Yummly® Smart Thermometer?',
						l: 'articles/getting-started/do-i-need-a-sub-to-use-thermometer',
					},
					{
						title: 'Why is subscription not available in my region?',
						l: "articles/getting-started/why-sub-isn't-available-in-my-region",
					},
					{
						title: "What's so special about Yummly's subscriber-only recipes?",
						l: 'articles/getting-started/only-for-subs-recipes',
					},
				],
			},
			{
				title: 'Subscription and Payments',
				links: [
					{
						title: "I'm a subscriber and don't want to renew my subscription. What do I do?",
						l: 'articles/subs-and-payments/do-not-want-to-renew-sub',
					},
					{ title: 'How much does a Yummly subscription cost?', l: 'articles/subs-and-payments/sub-cost' },
					{
						title: 'Will I be charged if I cancel before the free trial is over?',
						l: 'articles/subs-and-payments/free-trial-sub',
					},
					{
						title: 'If I cancel before the free trial is over, can I still access content?',
						l: 'articles/subs-and-payments/if-i-cancel-before-the-free-trial-sub',
					},
					{
						title: 'Does my subscription automatically renew?',
						l: 'articles/subs-and-payments/does-my-sub-renew-auto',
					},
					{
						title: 'How do I update my payment method through the web?',
						l: 'articles/subs-and-payments/update-payment-through-the-web',
					},
				],
			},
			{
				title: 'Yummly Pro Recipes',
				links: [
					{
						title: 'What are Yummly Pro recipes?',
						l: 'articles/yummly-pro-recipes/what-are-yummly-pro-recipes',
					},
					{
						title: 'How do Yummly Pro videos work?',
						l: 'articles/yummly-pro-recipes/how-do-yummly-pro-videos-work',
					},
					{
						title: 'Do Yummly Pro recipes work on my device?',
						l: 'articles/yummly-pro-recipes/do-yummly-pro-recipes-work-on-my-device',
					},
					{
						title: 'Do Yummly Pro recipes work with my Whirlpool connected oven?',
						l: 'articles/yummly-pro-recipes/work-with-whirlpool',
					},
				],
			},
			{
				title: 'Nift Gift Card',
				links: [
					{ title: 'Does my Nift gift card expire?', l: 'articles/nift-gift-card/nift-card-expire' },
					{
						title: 'What is Nift doing with my information?',
						l: 'articles/nift-gift-card/nift-doing-with-my-info',
					},
					{
						title: 'What do I do if my selected gift is worth less or more than $30?',
						l: 'articles/nift-gift-card/what-do-i-do-if-selected-gift-worthless-more-30$',
					},
					{ title: 'Why do I see limited gift options?', l: 'articles/nift-gift-card/gift-limited-options' },
					{ title: 'How do I use my Nift gift?', l: 'articles/nift-gift-card/how-do-i-use-nift-gift' },
					{ title: 'What is a Nift gift card?', l: 'articles/nift-gift-card/what-is-nift-gift-card' },
				],
			},
		],
	},
	{
		idPage: 'website-help-topics',
		title: 'Website Help Topics',
		parts: [
			{
				title: 'Getting Started',
				links: [
					{ title: 'What is Yummly?', l: 'articles/getting-started-web-help-topics/what-is-yummly' },
					{ title: 'How to use Yummly', l: 'articles/getting-started-web-help-topics/how-to-use-yummly' },
					{
						title: 'Adding recipes to Yummly from other sites',
						l: 'articles/getting-started-web-help-topics/adding-recipes-to-yummly-from-other-sites',
					},
					{ title: 'Discovering recipes', l: 'articles/getting-started-web-help-topics/discovering-recipes' },
					{ title: 'Website Recipe search', l: 'articles/getting-started-web-help-topics/web-search-recipe' },
					{ title: 'Recipe box', l: 'articles/getting-started-web-help-topics/recipe-box' },
				],
			},
			{
				title: 'Fix a Common Problem',
				links: [
					{ title: 'Account & password problems', l: 'articles/fix-a-common-problem/acc-and-pass-problems' },
					{ title: 'Recipe problems', l: 'articles/fix-a-common-problem/recipe-problems' },
					{ title: 'Collection problems', l: 'articles/fix-a-common-problem/collection-problems' },
					{
						title: 'Recipe recommendation issues',
						l: 'articles/fix-a-common-problem/recipe-recommendation-issues',
					},
					{
						title: 'Recipe search result problems',
						l: 'articles/fix-a-common-problem/recipe-search-result-problem',
					},
				],
			},
			{
				title: 'Organizing Recipes',
				links: [
					{ title: 'Recipe box', l: 'articles/organizing-recipes/recipe-box-organazing' },
					{ title: 'Collections', l: 'articles/organizing-recipes/collections' },
					{
						title: 'How can I add items to my Shopping List on the website?',
						l: 'articles/organizing-recipes/shopping-list-add',
					},
					{
						title: 'How do I make changes to my Meal Plan on the website?',
						l: 'articles/organizing-recipes/meal-plan-changes',
					},
					{
						title: 'How do I add recipes to my Meal Plan on the website?',
						l: 'articles/organizing-recipes/meal-plan-adding',
					},
				],
			},
			{
				title: 'Your Account',
				links: [
					{ title: 'Logging in to the website', l: 'articles/your-acc/loggining-in-to-the-website' },
					{ title: 'Your profile', l: 'articles/your-acc/your-profile' },
					{ title: 'Taste preferences', l: 'articles/your-acc/taste-preferences' },
					{ title: 'Website Account settings', l: 'articles/your-acc/web-acc-settings' },
				],
			},
			{
				title: 'Account Deactivation',
				links: [
					{ title: 'Unsubscribe from emails', l: 'articles/acc-deactivation/unsub-emails' },
					{ title: 'Delete account', l: 'articles/acc-deactivation/delete-acc' },
					{
						title: 'Change the email address on your account',
						l: 'articles/acc-deactivation/change-the-email',
					},
				],
			},
		],
	},
	{
		idPage: 'ios-app',
		title: 'Yummly iOS App',
		parts: [
			{
				title: 'Getting Started',
				links: [
					{ title: 'Recipe pages', l: 'articles/ios-getting-started/recipe-pages' },
					{ title: 'iOS Recipe search', l: 'articles/ios-getting-started/ios-recipe-search' },
					{ title: 'Recipe box', l: 'articles/ios-getting-started/ios-recipe-box' },
					{ title: 'Recipe recommendations', l: 'articles/ios-getting-started/ios-recipe-recommendations' },
					{ title: 'Account settings', l: 'articles/ios-getting-started/ios-acc-settings' },
					{ title: 'Ingredient Recognition', l: 'articles/ios-getting-started/ios-ing-recognition' },
				],
			},
			{
				title: 'Explore Help Topics',
				links: [
					{
						title: 'iOS app Basic troubleshooting',
						l: 'articles/ios-explore-help-topics/ios-and-basic-troubleshooting',
					},
					{ title: 'Home Feed', l: 'articles/ios-explore-help-topics/ios-home-feed' },
					{ title: 'Sign-in issues', l: 'articles/ios-explore-help-topics/ios-sign-in-issue' },
					{
						title: 'Adding new recipes to the Yummly app from a website',
						l: 'articles/ios-explore-help-topics/ios-adding-new-recipes-from-website',
					},
					{
						title: 'My saved recipes are missing',
						l: 'articles/ios-explore-help-topics/ios-saved-recipes-missing',
					},
				],
			},
			{
				title: 'Meal Planner',
				links: [
					{
						title: 'How do I use the Yummly Meal Planner?',
						l: 'articles/ios-meal-planner/ios-use-meal-planner',
					},
					{
						title: 'Where can I find the Meal Planner?',
						l: 'articles/ios-meal-planner/ios-find-meal-planner',
					},
					{
						title: 'Where do my Meal Plan recommendations come from?',
						l: 'articles/ios-meal-planner/ios-meal-recomm-from',
					},
					{
						title: 'How do I find out more about a recipe in my Meal Plan recommendations?',
						l: 'articles/ios-meal-planner/ios-find-out-more-rec-recomm',
					},
					{
						title: 'Do you have any meal planning tips for me?',
						l: 'articles/ios-meal-planner/ios-tips-meal-planning',
					},
				],
			},
			{
				title: 'Shopping List',
				links: [
					{ title: 'Shopping List Overview', l: 'articles/ios-shopping-list/ios-shopping-list-overview' },
					{
						title: 'Can I buy ingredients through Yummly?',
						l: 'articles/ios-shopping-list/ios-buy-ingr-yummly',
					},
					{
						title: 'Can I access my Shopping List on different devices?',
						l: 'articles/ios-shopping-list/ios-diff-devices-shopping-list',
					},
					{
						title: 'How do I move ingredients to a different shopping aisle?',
						l: 'articles/ios-shopping-list/ios-move-ingr-to-a-diff-shopping-list',
					},
				],
			},
		],
	},
	{
		idPage: 'android-app',
		title: 'Yummly Android App',
		parts: [
			{
				title: 'Getting Started',
				links: [
					{ title: 'Android app overview', l: 'articles/android-getting-started/andriod-app-overview' },
					{ title: 'Getting the Android app', l: 'articles/android-getting-started/android-getting-app' },
					{ title: 'Recipe pages', l: 'articles/android-getting-started/android-recipe-pages' },
					{ title: 'Android Recipe search', l: 'articles/android-getting-started/android-recipe-search' },
					{ title: 'Recipe box', l: 'articles/android-getting-started/android-recipe-box' },
					{ title: 'Recipe recommendations', l: 'articles/android-getting-started/android-recommendations' },
				],
			},
			{
				title: 'Explore Help Topics',
				links: [
					{
						title: 'Android app Basic troubleshooting',
						l: 'articles/android-explore-help-topics/android-and-basic-troubleshooting',
					},
					{ title: 'Home Feed', l: 'articles/android-explore-help-topics/android-home-feed' },
					{ title: 'Sign-in issues', l: 'articles/android-explore-help-topics/android-sign-in-issue' },
					{
						title: 'Recipe search results',
						l: 'articles/android-explore-help-topics/android-recipe-search-results-issues',
					},
					{
						title: 'My saved recipes are missing',
						l: 'articles/android-explore-help-topics/android-saved-recipes-missing',
					},
					{ title: 'Printing recipes', l: 'articles/android-explore-help-topics/android-printing-recipes' },
				],
			},
			{
				title: 'Virtual Pantry',
				links: [
					{ title: 'What is Virtual Pantry?', l: 'articles/android-virtual-pantry/android-virtual-pantry' },
					{
						title: 'How does Virtual Pantry save me money?',
						l: 'articles/android-virtual-pantry/android-how-does-vr-pantry-money',
					},
					{
						title: 'How does Yummly know when my ingredients are Running Low or Expiring?',
						l: 'articles/android-virtual-pantry/android-yummly-running-low-or-expiring',
					},
					{
						title: 'Can I access my Virtual Pantry from other devices?',
						l: 'articles/android-virtual-pantry/android-acces-from-other-devices',
					},
					{
						title: 'How do the Shopping List and Virtual Pantry work together?',
						l: 'articles/android-virtual-pantry/android-shopping-list-and-vr-pantry',
					},
				],
			},
		],
	},
	{
		idPage: 'publisher-help-topics',
		title: 'Publisher Help Topics',
		parts: [
			{
				title: 'Yummly for Publishers',
				links: [
					{ title: 'How Yummly works', l: 'articles/yummly-for-publishers/how-yummly-works' },
					{ title: 'Get discovered even faster', l: 'articles/yummly-for-publishers/get-discovered' },
					{
						title: 'Best practices/guidelines',
						l: 'articles/yummly-for-publishers/best-practices-guidelines',
					},
					{
						title: 'How to add the Yum button to your site',
						l: 'articles/yummly-for-publishers/yumm-butt-ur-site',
					},
					{
						title: 'Adding the Yum button via plugins',
						l: 'articles/yummly-for-publishers/plugins-yumm-butt',
					},
					{
						title: 'Add the Yum button via image hover',
						l: 'articles/yummly-for-publishers/yumm-butt-via-img-hover',
					},
				],
			},
		],
	},
]

export { categories }
