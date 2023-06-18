

const articles = [
    {
        "idPage": "contact-us",
        "title": "Contact us",
        "way": [{ "wayname": "Smart Thermometer", "link": "thermometer"}], 
        "data": [{ "text": [{ "textline": "Have any issues, questions, or feedback about anything in Vummly?"}]}, { "text": [{"textline": "Please Email us and one of our Support Team members will get right back to you."}]}, { "text": [{ "textline": "Our email : ", "mail": "support@vummly.com"}]}]
    },
    {
        "idPage": 'roast-need-to-rest',
        "title": 'How long does a roast need to rest?',
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{ "text":[{ "textline": 'For the juiciest meat and most even cooking, let big roasts rest a full 30 minutes. But aim for at least 20 minutes for any size roast.'}]}]
    },

    {
        "idPage": 'perfect-turkey-guide',
        "title": 'How to cook the perfect turkey',
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{ "text": [{ "textline": 'To impress everyone at your Thanksgiving table, make sure all parts of your crispy, juicy turkey are evenly cooked by following these easy tips:'}]}, { "points": [{ "point": 'Thaw it to at least 45°F before roasting.', "bold": 'Unfreeze your turkey.'}, { "point": 'Position the pan so your thermometer is near the oven door.', "bold": 'Stay connected to your dock.'}, { "point": 'Roast your whole turkey to 175°F.', "bold": 'Set the right temperature.'},]}] 
    },

    {
        "idPage": 'best-results',
        "title": 'For Best Results',
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{ "text": [{ "textline": 'In order to get accurate results:'}]}, { "points": [{ "point": 'Use a cut of meat that is at least 3/4 inch thick'}, { "point": 'Fully insert the thermometer so there is no metal showing (just the black ceramic top).'}, { "point": 'Avoid any large fat pockets or air pockets in the meat.'},{ "point": 'The temperature sensor is closer to the middle of the thermometer and not at its tip, so make sure the center of the thermometer is not too close to the surface of the meat'}]}]
    },

    {
        "idPage": 'thermometer-not-found',
        "title": 'Thermometer not found',
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{ "text": [{ "textline": "Let's try a couple of troubleshooting steps that fix most issues."}]}, { "points": [{ "point": 'Try a fresh set of batteries in the dock. Remove the Thermometer from the dock (the dock lights should come on) and place it back in (this will start the charging process). Let the Thermometer charge for 60 minutes.'}, { "point": 'When charging the Thermometer in the Dock make sure that the top of the thermometer and the charging prong on the dock are clean, and make strong contact with each other. You may want to try slightly bending the charging prong on the Dock to ensure contact.'}, { "point": "Make sure that Bluetooth on your device is turned on, and that Vummly is able to access Bluetooth in your phone's Settings."}, { "point": "Let's reset the Thermometer and connection:"}, { "point": 'In the Vummly app, go to "My Connected Kitchen" > tap the "..." menu icon > tap "Disconnect Thermometer"'}, { "image": [{ "img": '/not-found.jpg'}] }, { "point": 'On your phone go to Bluetooth settings and forget/delete "Vummly T1" if possible. If not listed, proceed to the next step.'}, { "point": 'Remove the thermometer from the dock. Hold the button on top of the dock for 5 seconds until the lights on the dock turn off.  Replace the thermometer in the dock.'}, { "point": 'Turn off your phone and restart'}, { "point": 'Try to reconnect the Smart Thermometer to the Vummly app by following the prompts in the app (Thermometer must be out of the Dock to pair)'}]}, { "text": [{ "textline": 'If you are still unable to connect, please email us at', "mail":'support@vummly.com'}] }]
    },

    {
        "idPage": 'inaccurate-results',
        "title": 'Inaccurate results',
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{ "text": [{ "textline": 'There is no "way" to calibrate the Vummly Smart Thermometer.'},{ "textline": 'If the internal temperature readings are incorrect or inaccurate, make sure you:'}]}, { "points": [{ "point": 'Fully insert the thermometer so there is no metal showing (just the black ceramic top).'},{ "point": 'Use a cut of meat that is at least 3/4 inch thick'}, { "point": 'Avoid any large fat pockets or air pockets in the meat.'},{ "point": 'The temperature sensor is closer to the middle of the thermometer and not at its tip, so make sure the center of the thermometer is not too close to the surface of the meat.'}]}, { "text": [{ "textline": 'You can also do a quick test to check the calibration of your thermometer. Add some water and ice to a cup (no more than 2.5" worth). Let it cool for a few minutes. In the Vummly app, after you press the Set Up Cook button, select the “manual” mode setup, the first option (see screenshots). Place the stainless steel portion of the thermometer into the ice water. Do not submerge the thermometer (keep the black ceramic top dry). The app should show the temperature drop to 32-36 degrees.'}]}]
    },

    {
        "idPage": "thermometer-will-not-charge-in-dock",
        "title": "Smart Thermometer won't charge in dock",
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{ "text": [{ "textline": "Sorry to hear you're having issues charging your Vummly Smart Thermometer."}, { "textline": "Let's try a couple of troubleshooting steps that fix most issues."}]}, { "points": [{ "point": 'Try a fresh set of batteries in the dock. Remove the Thermometer from the dock (the dock lights should come on) and place it back in (this will start the charging process). Let the Thermometer charge for 60 minutes.'}, { "textline": 'When charging the Thermometer in the Dock make sure that the top of the thermometer and the charging prong on the dock are clean, and make strong contact with each other. You may want to try slightly bending the charging prong on the Dock to ensure contact.'}]}, { "text": [{ "textline": 'If you are seeing a "Thermometer Not Found" screen and not a "Charge Thermometer" screen, this could be a different issue.  Please review all our troubleshooting steps here:', "link": "https://github.com/escoutdoor"}, { "textline": "If you are seeing a 'Thermometer Not Found' screen and not a 'Charge Thermometer' screen, this could be a different issue.  Please review all our troubleshooting steps here:"}, { "image": [{ "img": 'will-not-charge-dock.jpeg'}]}, { "textline":"If you're still having issues, please email support and we'll make sure we get back to you asap."}]}]
    },

    {
        "idPage": 'disconnected-during-cooking',
        "title": "Smart Thermometer disconnected during cooking",
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{ "text": [{ "textline": 'The Vummly app should automatically attempt to reconnect. Bring your mobile device closer to the docking station. Keep the docking station as close to the Smart Thermometer as possible, avoiding direct heat. If the disconnection is sustained, check that the docking station and thermometer are charged. If you are in the process of cooking, attempt to reset the connection.'}]}, { "points": [{ "point": 'On your mobile device go to the Bluetooth settings and forget/delete Smart Thermometer if possible'}, { "point": 'Press and hold the button at the top of the dock for 3 seconds (the lights will turn off and back on again)'}, { "point": 'The green light will come on and the blue light will pulse slowly until the device reconnects'}]}]
    },
    
    {
        "idPage": 'reset-thermometer',
        "title": "How do I reset the Smart Thermometer?",
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{ "text": [{ "textline": "iOS and Android :"}]}, { "points": [{ "bold": 'Remove', "point": 'thermometer from its dock (ensure there are batteries in the dock with power)'}, { "point": 'In the Vummly app, go to "My Connected Kitchen" > tap the "..." menu icon > tap "Disconnect Thermometer"'}, { "point": 'On your iPhone go to the Bluetooth settings and forget/delete "Vummly T1"'}, { "point": 'Hold button on top of dock for 5 seconds (the lights will turn off and back on again)'},{ "point": 'Turn off your phone and restart'}, { "point": 'Reconnect the Smart Thermometer to the Vummly app'}]}]
    },

    {
        "idPage": 'where-can-i-get-further-assistance',
        "title": "Where can I get further assistance?",
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{ "text": [{ "textline": "For additional help please email:", "link": 'https://github.com/escoutdoor'}, { "textline": "We'll get back to you promptly and make sure we get your issue resolved"}]}]
    },

    {
        "idPage": 'connect-thermometer-to-phone',
        "title": "How do I connect/pair the Smart Thermometer to my phone?",
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{ "text": [{ "textline": 'Watch our YouTube video here:', "link": 'https://www.youtube.com/watch?v=n-Ireb5Mmlg.'}, { "textline": "If you are still having issues connecting, please check out our troubleshooting FAQs:", "link": ' https://help.vummly.com/hc/en-us/sections/360007361411-Troubleshooting'}]}, { "points": [{ "point": 'Within in the Vummly app, go to the My Connected Kitchen tab and tap the Add Thermometer button. ',},{ "image": [{ "img": 'connect-to-phone.jpg'}]}, { "point": "On the Add appliance screen, tap “Add” on the Smart Thermometer card, then click Let's Go!",}, { "image": [{ "img":'connect-to-phone2.jpg'}]}, { "point": 'On the connect thermometer screen, tap “Connect”.',}, { "image": [{"img": 'connect-to-phone3.PNG'}]}, { "point": "Turn on the thermometer by removing it from the dock.",}, { "image": [{ "img":'connect-to-phone4.PNG'}]}, { "point": "The blue light on the dock will blink while connecting, then turn solid once connected. Press setup cook to get started",}, { "image": [{ "img": 'connect-to-phone5.jpg'}]}]}]
    },

    {
        "idPage": 'what-is-docking-station-for',
        "title": "What is the docking station for?",
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{ "text": [{ "textline": 'The docking station has two purposes:'}]}, { "points": [{ "bold": 'Charging', "point": '– the docking station recharges Smart Thermometer when it’s placed in its cradle.'}, { "bold": 'Connecting', "point": '– Smart Thermometer connects to the docking station, then the docking station connects to your mobile device/Vummly app. The docking station should remain very close to Smart Thermometer to stay connected, but you can use your phone up to 150ft from the docking station.'}]}]
    },

    {
        "idPage": 'place-dock-coocking-not-coocking',
        "title": "Where should I place the dock when cooking/not cooking?",
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{ "text": [{ "textline": 'While cooking/in use, the dock should remain a close but safe distance from Smart Thermometer (up to 5ft). As it’s magnetic, you may find it easy to attach to a surface on or near your oven. Do not place the dock directly in contact with a hot surface. When not is use the dock and thermometer can be placed on a fridge door (magnetic) or in a drawer. Keep away from unnecessary moisture.'}]}]
    },

    {
        "idPage": 'install-and-charge-thermometer',
        "title": "How do I install batteries and charge my Smart Thermometer?",
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{ "text": [{ "textline": 'Remove the batteries from the dock by pushing the tab at the bottom of the dock in the direction of the arrow and lift straight up. Replace with two AAA batteries in the correct direction (+/-) and close the lid.'}, { "textline": 'Watch this video for further instruction:', "link": 'https://youtu.be/2j69P7q-SkA'}, { "textline": 'To charge the thermometer simply place it securely in its dock (it will click in). No lights are on when charging in the dock.'}, { "textline": 'One hour of charging will get you up to 25 hours of use time and a 30 minute charge will yield about 15 hours of use. Ensure the batteries in the dock have power.'}]}]
    },

    {
        "idPage": 'turnon-turnoff-thermometer',
        "title": "How do I turn the Smart Thermometer on/off?",
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{ "text": [{ "textline": 'To turn the thermometer on, remove the thermometer from the dock. The green light will turn on. '}, { "textline": 'To turn the thermometer off, place the thermometer into the dock. It will click in and the lights will turn off.'}]}]
    },

    {
        "idPage": 'bottom-dock-tool',
        "title": "What is the thing/tool on the bottom of the dock?",
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{ "text": [{ "textline": 'The device on the underside of the dock is a thermometer removal tool (extractor) that can be used to remove the thermometer from meat, if needed.'}]}]
    },

    {
        "idPage": 'phone-tablet-place-when-coocking',
        "title": "Where should I place my device when cooking to ensure the app and thermometer stay connected?",
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{ "text": [{ "textline": 'The device on the underside of the dock is a thermometer removal tool (extractor) that can be used to remove the thermometer from meat, if needed.'}]}]
    },

    {
        "idPage": 'check-charge-status',
        "title": "How do I check the charge status?",
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{ "text": [{ "textline": 'Open the Vummly app > tap My Connected Kitchen icon >'}, { "textline": 'Open the Vummly app > tap My Connected Kitchen icon >'}, { "textline": 'On the Smart Thermometer card tap the “...” icon in the upper right corner of the Smart Thermometer tab.'}, { "textline": 'There are no lights on the dock when the thermometer is charging.'}, { "image": [{ "img": 'not-found.jpg'}]}]}]
    },

    {
        "idPage": 'led-lights-meaning',
        "title": "What do the LED lights mean?",
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{ "text": [{ "textline": 'Searching mode (searching for phone or thermometer): green on, blue blinking'}, { "textline": 'Connected (Phone + Dock + Probe): green off, blue on'},{ "textline": 'Replace batteries: green pulsing continuously, blue pulsing on and off'}]}]
    },

    {
        "idPage": 'quick-start-guide',
        "title": "Quick start guide",
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{  "points": [{ "point": 'Insert the included batteries (2 AAA) into the dock by pushing the tab at the bottom of the dock in the direction of the arrow and lifting. Ensure the batteries are inserted correctly (+/-).'}, { "point": 'Place the thermometer securely in the dock and allow it to charge for 30 mins before first use (no lights will come on when charging).'}, { "point": "While the thermometer is charging, download the free Vummly app from the Apple App Store or Google Play Store. If you already have Vummly, ensure that's it's updated to the newest version.", }, { "point": 'Once the app has downloaded: open Vummly > tap on the connected appliance icon in the bottom right corner > tap "Add Appliance" > tap "Add" > follow the on-screen instructions.'}]}]
    },

    {
        "idPage": 'place-dock-when-coocking',
        "title": "Where should I place the dock when cooking?",
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{ "text": [{ "textline": 'The docking station should remain very close to Smart Thermometer to stay connected (5ft or less), but you can use your phone up to 150ft from the docking station. Never place the docking station on a hot surface.'}]}]
    },

    {
        "idPage": 'anything-other-than-meat',
        "title": "Can I use it for anything other than meat?",
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{ "text": [{ "textline": 'No, at this time Smart Thermometer is designed for use with common and suitable cuts of meat only.'}]}]
    },

    {
        "idPage": 'coocking-with-metallic-foil',
        "title": "Cooking with metallic foil",
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{ "text": [{ "textline": 'If your recipe calls for wrapping or covering meat in tinfoil, Smart Thermometer must be pierced through the foil itself and into the meat. To maintain a connection, the black tip of the thermometer must be clear of any metallic foil obstruction.'}]}]
    },

    {
        "idPage": 'can-i-air-fry',
        "title": "Can I air fry?",
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{ "text": [{ "textline": 'Yes! Vummly Smart Thermometer is great for air frying, handling temperatures of up to 570f and internal meat temperatures up to 200f. Be sure to keep the dock next to your air fryer for continuous temperature monitoring while you cook.'}]}]
    },

    {
        "idPage": 'can-i-deep-fry',
        "title": "Can I deep fry?",
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{ "text": [{ "textline": 'No. Never submerge or expose the thermometer to excessive liquid, humidity, pressure, or use in the microwave.'}]}]
    },

    {
        "idPage": 'can-i-sous-vide',
        "title": "Can I sous vide?",
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{ "text": [{ "textline": 'No. Never submerge or expose the thermometer to excessive liquid, humidity, pressure, or use in the microwave.'}]}]
    },

    {
        "idPage": 'thermometer-on-bbq-grill',
        "title": "Can I use the Smart Thermometer on my BBQ grill?",
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{ "text": [{ "textline": 'Yes! Vummly Smart Thermometer is great for grilling, handling grill temperatures of up to 572f and internal meat temperatures up to 200f. Be sure to keep the dock next to your grill for continuous temperature monitoring while you cook.'}],}]
    },

    {
        "idPage": 'thermometer-water-proof',
        "title": "Is the Smart Thermometer waterproof?",
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{ "text": [{ "textline": 'The thermometer is not waterproof, though it is splash resistant. Never submerge the thermometer in any liquid. The dock should also not be exposed to liquids.'}],}]
    },

    {
        "idPage": 'thermometer-dishwasher-safe',
        "title": "Is the Smart Thermometer dishwasher safe?",
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{ "text": [{ "textline": 'The thermometer is not dishwasher safe. Never submerge the thermometer in water.'}]}]
    },

    {
        "idPage": 'how-to-clean-thermometer',
        "title": "How do I clean my Smart Thermometer?",
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{ "text": [{ "textline": 'To clean the thermometer, use a soft, damp, soapy cloth and wipe clean. Dry with another soft cloth immediately. Do not use cleaning products containing alcohol, ammonium, benzene, or abrasives–all of which can damage the device. Do not submerge or soak in liquid.'}]}]
    },

    {
        "idPage": 'do-i-need-to-create-an-acc',
        "title": "Do I need to create an account?",
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{ "text": [{ "textline": 'No, an account is not required for using Smart Thermometer.'}]}]
    },

    {
        "idPage": 'is-vummly-app-free',
        "title": "Is the Yummly® app free?",
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{ "text": [{ "textline": 'The Vummly app is free to download, and you can use the thermometer controls in the app without a paid subscription.'}, { "textline": 'Vummly also has millions of recipes that you can search and save into your account for free.  You can use the Vummly bookmarklet to add recipes from around the internet to your saved recipes for free.'}, { "textline": 'You can log into this same free account on multiple devices and our website.'}, { "textline": 'Vummly does offer a subscription service that allows you access to exclusive recipes and features.'}, { "textline": 'You can learn more about the subscription service here:', "link": 'https://github.com/OrynHydro'}]}]
    },

    {
        "idPage": 'where-i-can-download-vummly-app',
        "title": "Where can I download the Vummly app?",
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{ "text": [{ "textline": 'You can download Vummly for free here:'}, { "textline": "Apple App Store: ", "link": 'https://github.com/OrynHydro'}, { "textline": "Google Play Store: ", "link": 'https://github.com/OrynHydro'}]}]
    },

    {
        "idPage": 'do-i-need-to-use-vummly-app-with-thermometer',
        "title": "Do I need to use the Vummly app with the Smart Thermometer?",
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{ "text": [{ "textline": 'Yes, the Smart Thermometer requires and works with the Vummly app to display temperature, calculate cooking times, and get you the desired results. You can download Vummly for free here:'}, { "textline": "Apple App Store: ", "link": 'https://github.com/OrynHydro'}, { "textline": "Google Play Store: ", "link": 'https://github.com/OrynHydro'}]}]
    },


    {
        "idPage": 'updating-your-iOS-device',
        "title": "Updating your iOS device",
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{ "text": [{ "textline": 'Smart Thermometer works with the Vummly app which requires iOS 13 or newer. To update your iOS device, follow these instructions:'}]}, { "points": [{  "point": 'Plug your device into power and connect to the Internet with Wi-Fi.'}, {  "point": 'Go to Settings > General, then tap Software Update.'}, {  "point": 'Tap Download and Install. If a message asks to temporarily remove apps because the software needs more space for the update, tap Continue or Cancel. Later, iOS or iPadOS will reinstall apps that it removed. If you tap Cancel, learn what to do next.'}, {  "point": 'To update now, tap Install. Or you can tap Later and choose Install Tonight or Remind Me Later. If you tap Install Tonight, just plug your device into power before you go to sleep. Your device will update automatically overnight.'}, {  "point": "If asked, enter your passcode. If you don't know your passcode, learn what to do."}],}]
    },

    {
        "idPage": 'updating-your-Android-device',
        "title": "Updating your Android device",
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{ "text": [{ "textline": 'Smart Thermometer works with the Vummly app which requires Android 7.0 or newer. To update your Android device, follow these instructions:'}]}, { "points": [{  "point": "Open your phone's Settings app."}, {  "point": 'Near the bottom, tap System and then Advanced and then System update.'}, {  "point": "You'll see your update status. Follow any steps on the screen."}]}]
    },

    {
        "idPage": 'how-to-add-multiple-thermometers',
        "title": "How to add multiple thermometers",
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{ "points": [{ "point": "Open the Vummly app and go to your Connected Kitchen (the oven icon in the lower right-hand corner of your screen)"}, {  "point": 'At the bottom of this screen, tap Add Appliance'}, { "image": [{ "img": 'How to add multiple thermometers.jpg'}]}, { "point": 'Add one thermometer at a time. After one thermometer is added, you can add another appliance. You can connect up to four thermometers.'}, { "point": 'Connect one thermometer at a time.'}]}]
    },

    {
        "idPage": 'navigationg-while-multiple-thermometers-are-coocking',
        "title": "Navigating while multiple thermometers are cooking.",
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{ "points": [{  "point": "Set up each cook session separately. Once you’ve selected the Meat and Doneness for one, it will take you to the cooking screen. Tap the back arrow in the upper left-hand corner to get back to your Connected Kitchen."}, {  "image": [{ "img": 'navwhilecoocking1.png'}]}, { "point": 'Setup the cooks for the other thermometers.'}, { "point": 'Return to the Connected Kitchen to navigate between the different cooks, or monitor all of them simultaneously.  '}, { "image": [{ "img": 'navwhilecoocking2.png'},]} ]}]
    },

    {
        "idPage": 'how-to-edit-thermometer-names-while-coocking',
        "title": "How to edit thermometer names while cooking",
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{ "points": [{  "point": "Once you’ve connected your thermometers and set up your cook sessions, you can name your thermometers so you could tell them apart."},{ "point": 'In your Connected Kitchen, find the tiles for each thermometer you want to name. Tap the three dots in the upper right-hand corner for that thermometer. Select Edit Name.'}, {"image": [{ "img": 'how-to-edit-thermometers 1.png'}, { "img": 'how-to-edit-thermometers 2.png'}]}]}]
    },

    {
        "idPage": 'does-it-matter-which-docks-I-put-my-thermometers-back-into-when-my-food-is-ready',
        "title": "Does it matter which docks I put my thermometers back into when my food is ready?",
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{ "text": [{ "textline": 'No, it doesn’t matter which dock you place a thermometer back into. Once a cook session has ended, take the thermometer out of the meat. Let your thermometers cool down after all that hard work and keep them out of docks until all cook sessions are over. Give your thermometers a wash before redocking. '}]}]
    },

    {
        "idPage": 'reconnect-one-of-my-thermometers-to-its-dock-during-cook-session',
        "title": "How do I reconnect one of my thermometers to its dock during a cook session?",
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{ "text": [{ "textline": 'When you’re cooking with one thermometer and place another in the dock connected to the cooking thermometer, it will interrupt the connection between the cooking thermometer and its dock. To reconnect the dock to the cooking thermometer, take the non-cooking thermometer out of the dock and press the Reset button for 5 seconds. Keep all non-cooking thermometers out of docks until the cook session is complete.'}]}]
    },

    {
        "idPage": 'reconnect-more-than-one-vummly-start-thermometer-at-a-time',
        "title": "Can I connect more than one Vummly Smart Thermometer at a time?",
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{ "text": [{ "textline": 'Set up one thermometer at a time, up to four thermometers. Take one out of its dock and connect while keeping those you haven’t set up yet in their docks. You do get to multitask once you’re cooking with two or more thermometers, though.'}]}]
    },
    
    {
        "idPage": 'how-does-temperature-sensor-work',
        "title": "How does the ambient temperature sensor work?",
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{ "points": [{ "point": 'The sensor needs to be exposed to temperatures over 100 degrees Fahrenheit to calculate an ambient temperature'}, { "point": 'Ambient temperature readings can take some time to calculate, in which case "..." will be displayed. The lower the temp, the longer it can take.'}, { "point": 'Your readings may also differ from the reading on your oven or grill, as those readings are either an average of the appliance or a specific location within the appliance. The Smart Thermometer shows you the temperature directly around your meat'}, { image : [{ "img": 'sensor.jpeg'}]}]}]
    },

    {
        "idPage": 'what-is-return-policy',
        "title": "What is your return policy?",
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{  "text": [{ "textline": 'Yummly®️ Smart Thermometer Returns', "fontweight": 700}, { "textline": 'Returns within 60 calendar days', "fontstyle": 'italic'}, { "textline": 'You may return items in new condition purchased on Vummly.com within 30 days from shipment for a full refund of your product purchase price or a replacement product. Return shipping is free.'}, { "textline": 'Please email us to initiate a return and obtain a prepaid shipping label which you may use to send the item back to us in new condition. Free return shipping is only available for U.S. consumers who directly contact us.'},{ "textline": 'Once we validate the returned items have arrived, your return will be processed. Accounts will be credited within 7-10 business days once items are received and processed.'}, { "textline": 'Due to the impact of COVID-19, there may be a delay in the processing of your return.', "fontweight": 700}, { "textline": 'Returns after 30 Calendar Days', "fontstyle": 'italic'}, { "textline": 'If the 30 day return window has passed, please refer to our 1-Year Limited Warranty to pointermine whether your product qualifies for a replacement or repair. '}, { "textline": 'Not happy for any reason?', "fontstyle": 'italic'}, { "textline": 'Please email us',  "mail": 'support@vummly.com'}]}]
    },

    {
        "idPage": 'is-shipping-free',
        "title": "Is shipping free/how long does it take?",
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{ "text": [{ "textline": 'The Smart Thermometer ships for free within the US with standard shipping. Once your order has shipped you will receive an email with a delivery estimate. We do not ship internationally.'}]}]
    },

    {
        "idPage": 'do-you-ship-internationally',
        "title": "Do you ship internationally?",
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{ "text": [{ "textline": 'Sorry, at this time the Smart Thermometer does not ship outside of the US.'}]}]
    },

    {
        "idPage": 'what-is-warranty-policy',
        "title": "What is the warranty policy?",
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{ "text": [{ "textline": 'The Smart Thermometer is covered by a 1-year limited warranty against defects in materials or workmanship that existed when this product was purchased. Details on the warranty can be found here.'}]}]
    },

    {
        "idPage": 'track-my-order',
        "title": "How do I track my order?",
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{ "text": [{ "textline": "When you purchase the Smart Thermometer you will receive an order confirmation email. You will then receive a shipment email with tracking information once the package has shipped. If you don't get either of these emails, please reach out to us at", "mail": 'support@vummly.com.'}] }]
    },

    {
        "idPage": 'return-thermometer',
        "title": "I want to return my Smart Thermometer",
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{ "text": [{ "textline": "The Vummly Smart Thermometer can be returned up to 30 days from purchase when bought on Vummly.com. If purchased elsewhere, please refer to the retailers return policy."}, { "textline": 'To start a return with Vummly, contact us: ',  "mail": 'support@vummly.com.'}]}]
    },

    {
        "idPage": 'what-model-do-i-have',
        "title": "I want to return my Smart Thermometer",
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{ "text": [{ "textline": "You can find the model number of your Smart Thermometer on the product label located on the bottom of the docking station, behind the thermometer extractor."}]}]
    },

    {
        "idPage": 'find-serial-number-thermometer',
        "title": "Where can I find the serial number of my thermometer?",
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data":[{ "text": [{ "textline": "You can find the serial number on the product label located on the bottom of the docking station, behind the thermometer extractor."}] }]
    },

    {
        "idPage": 'tech-specifications',
        "title": "Technical specifications",
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{ "text": [{ "textline":'Smart Thermometer'}], "points": [{ "bold": 'Dimensions', "point": '4¼" L × ¼" W × ¼" H'}, { "bold": 'Cooking temperature range'}, { "bold": 'Rechargeable internal battery', "point": 'with up to 25 continuous hours of cooking', }, { "bold": 'Water-resistant probe thermometer', "point": 'IPX4 rated (resistant to water splashes from any direction)'}, { "bold": 'Materials', "point": 'Stainless steel and ceramic'}, { "bold": 'Bluetooth wireless', "point": 'connected'}]}, { "text": [{ "textline": 'Dock'}], "points": [{ "bold": 'Dimensions', "point": '6¼" L × 1½" W × 1¼" H'}, { "bold":'Range', "point": 'Connects to smart devices up to 150 ft away'}, { "bold": 'Batteries', "point": '2 AAA batteries (included)'}, { "bold": 'Magnetic base', "point": 'for convenient storage'}, { "bold": 'Removable clear plastic lid'}]}, { "text": [{ "textline": 'Vummly App'}], "points": [{ "bold": 'iPhone and iPad', "point": 'iOS 13 or newer'}, { "bold":'Android phone and tablet', "point": '6 or newer'}, { "bold": 'Temperature readings', "point": '°F or °C'}, { "bold": 'Assisted cooking programs', "point": 'with preset temperatures for different types of meats, including beef, lamb, pork, fish, and poultry.'}, { "bold": 'Integrated timers, notifications, and alerts'}]}, { "text":[{ "textline": 'In the Box'}], "points": [{ "point": 'Bluetooth meat thermometer, Dock, Extractor, Lid, 2 AAA Batteries'}]}, { "text": [{ "textline": 'Warranty'}], "points": [{ "point": '1-year limited warranty.'}]}]
    },

    {
        "idPage": 'how-long-do-batteries-last',
        "title": "How long do batteries last?",
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{ "text": [{ "textline": "Smart Thermometer has an integrated battery that lasts over 25 hours when fully charged (a full charge takes about 60 minutes). The accompanying dock requires 2 AAA batteries (included) which will last about one year with normal use."}]}]
    },

    {
        "idPage": 'what-type-of-batteries-are-required',
        "title": "What type of batteries are required?",
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{ "text": [{ "textline": "Smart Thermometer has an integrated battery that lasts over 25 hours when fully charged (a full charge takes about 60 minutes). The accompanying dock requires 2 AAA batteries (included) which will last about one year with normal use."}] }]
    },

    {
        "idPage": 'find-user-manual',
        "title": "Where can I find the user manual?",
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{ "text": [{ "textline": "The user manual is available for download below."}, { "link": 'https://github.com/escoutdoor'}]}]
    },

    {
        "idPage": 'what-comes-with-thermometer',
        "title": "What comes in the box with the Smart Thermometer?",
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{ "text": [{ "textline": "Included in the box are: Smart Thermometer, docking station, extractor, 2 AAA batteries, and manual."}]}]
    },

    {
        "idPage": 'requirements-for-using-thermometer',
        "title": "Requirements for using the Smart Thermometer",
        "way": [{ "wayname": 'Smart Thermometer', "link": "thermometer"}],
        "data": [{ "text": [{ "textline": "iOS", "fontweight": 700}, { "textline": 'The Vummly Smart Thermometer requires the Vummly app on iOS 13 or newer.'},{ "textline": 'Vummly for iOS is a free download', "link": 'https://github.com/OrynHydro'}, { "textline": "Android", "fontweight": 700}, { "textline": 'The Vummly Smart Thermometer requires the Vummly app on Android 6.0 or newer.'},{ "textline": 'Vummly for Android is a free download', "link": 'https://github.com/OrynHydro'}]}]
    },

    {
        "idPage": 'including-sub',
        "title": "What's included in my Vummly subscription?",
        "way": [{ "wayname": 'Vummly Paid Subscription', "link": 'sub'}],
        "data": [{ "text": [{ "textline": "We're glad you asked! With a paid subscription to Vummly, you'll have full access to all of our cutting-edge features designed to help you cook smarter. "}]}]
    },

    {
        "idPage": 'auto-enrolled-in-paid-sub',
        "title": "Am I automatically enrolled in the paid subscription?",
        "way": [{ "wayname": 'Vummly Paid Subscription', "link": 'sub'}],
        "data": [{ "text": [{ "textline": "No, you can only be subscribed if you provide payment information and agree to the Terms of Service and Privacy Policy."}, { "textline": "However, signing up for a free trial offer constitutes an agreement to subscribe to Vummly. After the trial period ends, your Vummly subscription will auto-renew at your selected price unless you cancel. You can cancel any time for any reason — but do so 24 hours before the end of your trial or renewal date to avoid charges."}, { "textline": "Once subscribed, your subscription automatically renews each billing cycle (based on your sign-up date) until you cancel. Cancel at least 24 hours before the end of your billing cycle to end your subscription and avoid charges for an additional cycle."}]}]
    },

    {
        "idPage": 'sub-include-thermomter',
        "title": "Does my subscription include a Yummly® Smart Thermometer?",
        "way": [{ "wayname": 'Vummly Paid Subscription', "link": 'sub'}],
        "data": [{ "text": [{ "textline": "No. The Vummly Smart Thermometer is available for purchase separately, and requires no subscription to use."}, ]}]
    },

    {
        "idPage": 'do-i-need-a-sub-to-use-thermometer',
        "title": "Do I need a subscription to use my Yummly® Smart Thermometer?",
        "way": [{ "wayname": 'Vummly Paid Subscription', "link": 'sub'}],
        "data": [{ "text": [{ "textline": "No. The Vummly app is free to download, and you can use the thermometer controls in the app without a paid subscription."}, ]}]
    },

    {
        "idPage": "why-sub-isn't-available-in-my-region",
        "title": "Why is subscription not available in my region?",
        "way": [{ "wayname": 'Vummly Paid Subscription', "link": 'sub'}],
        "data": [{ "text": [{ "textline": "At this point in time, Vummly's subscription features are only available in the U.S. We look forward to expanding our offerings internationally in the future."}, ]}]
    },

    {
        "idPage": "only-for-subs-recipes",
        "title": "What's so special about Vummly's subscriber-only recipes?",
        "way": [{ "wayname": 'Vummly Paid Subscription', "link": 'sub'}],
        "data": [{ "text": [{ "textline": "All of Vummly's original recipes are created by professional recipe developers and tested by our staff before publishing so you can be sure you're choosing a reliable recipe that works — and tastes great! We offer both traditional written Vummly Original Recipes as well as two forms of video recipes, so you can pick the cooking experience that's right for you. "}, { "textline": "Our unique Guided Recipe video format lets you move through recipes at your own pace. Each step is presented one at a time with written instructions and video demonstrations. Unlike a streaming video, our recipes won't move on to the next step in a recipe until you're ready. "},{ "textline": "Looking for a more immersive experience? Try one of our Pro Recipes and cook in real-time alongside a professional chef. With teachers that range from celebrity chefs to experts in a variety of culinary niches, you'll learn from the best, one step at a time. Go beyond recipes with tips and tricks to make you a better chef as you cook. "},]}]
    },

    {
        "idPage": "more-about-the-meal-planner",
        "title": "Tell me more about the Vummly Meal Planner.",
        "way": [{ "wayname": 'Vummly Paid Subscription', "link": 'sub'}],
        "data": [{ "text": [{ "textline": "The Vummly Meal Planner is a convenient way for subscribers to plan, schedule, and shop for weekly meals. Choose your own menu and save it in the Meal Planner to easily access the recipes you need for the week ahead. Once you've picked your recipes, you can schedule them to your calendar with a click (we'll even tell you when you need to start cooking), get a custom shopping list, and even order the groceries you need for pick up or delivery through our grocery-delivery partners.*"}, { "textline": 'Need ideas for your menu? The Meal Planner is powered by Vummly to provide personalized recipe recommendations based on your dietary needs and preferences. Want to use up ingredients you already have at home? Use Ingredient Recognition to scan foods and find recipes to use them up.'}, { "textline": '*Grocery ordering service available in select U.S. locations.', "fontstyle": 'italic'}]}]
    },

    {
        "idPage": "do-not-want-to-renew-sub",
        "title": "I'm a subscriber and don't want to renew my subscription. What do I do?",
        "way": [{ "wayname": 'Vummly Paid Subscription', "link": 'sub'}],
        "data": [{ "text": [{ "textline": "You can cancel your subscription to Vummly for any reason, at any time — but be sure to cancel at least 24 hours before the end of your billing cycle to end your subscription and avoid charges for the upcoming cycle. Click the method you used to subscribe from the list below to get specific cancellation instructions."}]}]
    },

    {
        "idPage": "sub-cost",
        "title": "How much does a Vummly subscription cost?",
        "way": [{ "wayname": 'Vummly Paid Subscription', "link": 'sub'}],
        "data": [{ "text": [{ "textline": "Standard non-promotional pricing for a Vummly subscription is $4.99/month. If you’re taking advantage of a free trial period offer, then your Vummly subscription will be free during that period. After the trial period ends, your Vummly subscription will auto-renew at your selected price unless you cancel. You can cancel any time (for any reason) — but you’ll need to do so at least 24 hours before the end of your trial or renewal date to avoid charges."}, { "textline": '* Subscription only available in the U.S. We look forward to expanding our offerings internationally in the future.', "fontstyle": 'italic'}]}]
    },

    {
        "idPage": "free-trial-sub",
        "title": "Will I be charged if I cancel before the free trial is over?",
        "way": [{ "wayname": 'Vummly Paid Subscription', "link": 'sub'}],
        "data": [{  "text": [{ "textline": "Nope! You won't be charged if you cancel before the trial period ends — just do so 24 hours before the end of your trial to avoid charges.  If you don't cancel, Vummly will bill you the day after your trial expires. Check your Account Settings for pointails."}]}]
    },

    {
        "idPage": "if-i-cancel-before-the-free-trial-sub",
        "title": "If I cancel before the free trial is over, can I still access content?",
        "way": [{ "wayname": 'Vummly Paid Subscription', "link": 'sub'}],
        "data": [{ "text": [{ "textline": "Once the free trial has started, you can access the content for the full duration of the trial period even if you cancel."}]}]
    },

    {
        "idPage": "does-my-sub-renew-auto",
        "title": "Does my subscription automatically renew?",
        "way": [{ "wayname": 'Vummly Paid Subscription', "link": 'sub'}],
        "data": [{ "text": [{ "textline": "Yes, Vummly paid subscriptions automatically renew each billing cycle (the cycle is based on your sign-up date) until you cancel. You'll get an email receipt for each billing cycle of your renewal."}, { "textline": "You can cancel your subscription to Vummly at any time, for any reason — but be sure to cancel at least 24 hours before the end of your billing cycle to end your subscription and avoid charges for the upcoming cycle."}]}]
    },

    {
        "idPage": "update-payment-through-the-web",
        "title": "How do I update my payment method through the web?",
        "way": [{ "wayname": 'Vummly Paid Subscription', "link": 'sub'}],
        "data": [{ "text": [{ "textline": "To update your payment method, go to your account settings page and click the Manage Subscription button."}]}]
    },

    {
        "idPage": "what-are-vummly-pro-recipes",
        "title": "What are Vummly Pro recipes?",
        "way": [{ "wayname": 'Vummly Paid Subscription', "link": 'sub'}],
        "data": [{ "text": [{ "textline": "Vummly Pro recipes are a one-of-a-kind cooking experience that's included with a paid subscription to Vummly. Pro features the world’s best culinary professionals in an immersive, intimate, step-by-step video format on Vummly that's optimized for cooking. Perfect for both new and experienced cooks, you'll get hands-on training by renowned professional chefs taken at your own pace to help you become a better cook."}]}]
    },

    {
        "idPage": "how-do-vummly-pro-videos-work",
        "title": "How do Vummly Pro videos work?",
        "way": [{ "wayname": 'Vummly Paid Subscription', "link": 'sub'}],
        "data": [{ "text": [{ "textline": "Vummly Pro recipes' unique format lets you move through recipes at your own pace. Each step is presented one at a time with video and relevant text. Pro doesn't move on to the next step in a recipe until you're ready."}]}]
    },

    {
        "idPage": "do-vummly-pro-recipes-work-on-my-device",
        "title": "Do Vummly Pro recipes work on my device?",
        "way": [{ "wayname": 'Vummly Paid Subscription', "link": 'sub'}],
        "data": [{ "text": [{ "textline": "Vummly Pro recipes work on the web for PCs, laptops, and tablets. On smartphones, Pro recipes can also be accessed through the Vummly app."}]}]
    },

    {
        "idPage": "work-with-whirlpool",
        "title": "Do Vummly Pro recipes work with my Whirlpool connected oven?",
        "way": [{ "wayname": 'Vummly Paid Subscription', "link": 'sub'}],
        "data": [{ "text": [{ "textline": "Some Vummly Pro recipes can connect to select Whirlpool brand smart ovens to set and change temperatures, settings, cook time, and more, right from your device. To use this feature, you must have a compatible appliance. Details and privacy info are available at whirlpool.com/connect and", "link": 'vummly.com'}]}]
    },

    {
        "idPage": "nift-card-expire",
        "title": "Does my Nift gift card expire?",
        "way": [{ "wayname": 'Vummly Paid Subscription', "link": 'sub'}],
        "data": [{ "text": [{ "textline": "Yes. You'll need to redeem your Nift gift card and choose your gift within 30 days of activation."}, { "textline": "Participating businesses may have separate expiration dates that apply towards redeeming your chosen gift, so be sure to check your selected offer."}]}]
    },

    {
        "idPage": "nift-doing-with-my-info",
        "title": "What is Nift doing with my information?",
        "way": [{ "wayname": 'Vummly Paid Subscription', "link": 'sub'}],
        "data": [{ "text": [{ "textline": "Nift takes privacy very seriously and doesn’t share your information with anyone. You can ask Nift to delete your personal information from the system at any time. Read more about our Privacy Policy here."}]}]
    },

    {
        "idPage": "what-do-i-do-if-selected-gift-worthless-more-30$",
        "title": "What do I do if my selected gift is worth less or more than $30?",
        "way": [{ "wayname": 'Vummly Paid Subscription', "link": 'sub'}],
        "data": [{ "text":[{ "textline": "No problem! We've got you covered either way."}]}, { "points": [{ "bold": 'Gifts under $30:', "point": 'If the gift you choose is under $30, you’ll get an additional Nift email with your balance — so, for example, you could have a $10 pizza on us and receive a $20 gift certificate toward skincare products.'}, { "bold": 'Gifts over $30:', "point": "If Nift member businesses offer gifts of a higher value, they'll cover the difference so you don’t pay more than $30 — for example, if you’re offered a $50 gift, $20 is a bonus paid for by the retailer. "}]}]
    },

    {
        "idPage": "gift-limited-options",
        "title": "Why do I see limited gift options?",
        "way": [{ "wayname": 'Vummly Paid Subscription', "link": 'sub'}],
        "data": [{ "text": [{ "textline": "The gifts available through the invitation-only Nift Network are exclusive, limited in quantity, and vary by location. Nift curates a list of up-and-coming businesses to help you discover brands you won't find at large retailers such as Amazon, Target, or Walmart."}]}]
    },

    {
        "idPage": "how-do-i-use-nift-gift",
        "title": "How do I use my Nift gift?",
        "way": [{ "wayname": 'Vummly Paid Subscription', "link": 'sub'}],
        "data": [{ "text": [{ "textline": "Redeeming your gift card is easy!"}]}, { "points": [{ "point": 'Get your Nift gift code by email'}, { "point": 'Click the link in the email to enter your code then', }, { "point": 'Follow the prompts to personalize your shopping preferences and get matched with a gift.'}, { "point": 'Not seeing anything you like? Click reset or go back to change your preferences.'}]}, { "text": [{ "textline": "Once you've picked a gift and received your gift certificate, you're ready to redeem it in store or online."}], "points": [{ "bold": 'In person:', "point": 'Present the Nift certificate on your phone at checkout, then tap Redeem. '}, { "bold": 'Online:', "point": 'Select the link to the retailer’s site in your email, and enter your unique promo code.'}]}, { "text": [{ "textline": 'Having trouble? Email Nift at', "mail": 'vanap387@gmail.com'}]}]
    },

    {
        "idPage": "what-is-nift-gift-card",
        "title": "What is a Nift gift card?",
        "way": [{ "wayname": 'Vummly Paid Subscription', "link": 'sub'}],
        "data": [{ "text": [{ "textline": "A Nift gift card is a special gift that is a great way to try new products, services and places that are part of the Nift Network. Depending on your interests and your location, you may be matched with the opportunity to to use your gift card for:"}]}, { "points": [{ "point": 'Wine'}, { "point": 'Food delivery'}, { "point": 'Clothing'}, { "point": 'Restaurants'}, { "point": 'Spas'}, { "point": 'Gyms'}, { "point": 'And more!'}]}, { "text": [{ "textline": "Vummly annual subscribers receive a $30 Nift gift card as a small “thank you” for being a valued part of the Vummly community. Your Nift gift card can't be used for Vummly products and services."}]}]
    },

    {
        "idPage": "what-is-vummly",
        "title": "What is Vummly?",
        "way": [{ "wayname": 'Website Help Topics', "link": 'website-help-topics'}],
        "data": [{ "text": [{ "textline": "Vummly is the recipe app and site that learns what you like. With over 2 million recipes and food related articles and videos, it's the ultimate kitchen tool for your computer, iPhone, iPad & Android devices. Whether it’s finding a recipe, meal planning or taking a digital grocery list to the store, Vummly makes it easier for foodies to do what they love – discover, cook, eat and share!"}, { "textline": 'See how the website works:', "link": 'vummly.com/how-it-works'}, { "textline": 'Learn more about our apps:', "link": 'vummly.com/mobile'}]}]
    },

    {
        "idPage": "how-to-use-vummly",
        "title": "How to use Vummly",
        "way": [{ "wayname": 'Website Help Topics', "link": 'website-help-topics'}],
        "data": [{  "text": [{ "textline": "Vummly is available on the web and via our mobile apps (iPhone, iPad & Android). Access the most powerful recipe search, your digital recipe box & recipe recommendations just for you."}, { "bigImage": [{ "img": 'how-to-use-yummly1.png'}, { "img": 'how-to-use-yummly2.png'}]}]},{  "text": [{ "textline": "Get started by signing up and setting up your taste profile with your unique preferences, diets, and allergies — and we’ll only serve up recipes that match your criteria."}, { "textline": "See more about how the site works:", "link": 'vummly.com/how-it-works'}]}]
    },

    {
        "idPage": "adding-recipes-to-vummly-from-other-sites",
        "title": "Adding recipes to Vummly from other sites",
        "way": [{ "wayname": 'Website Help Topics', "link": 'website-help-topics'}],
        "data": [{ "text": [{ "textline": "There are millions of recipes available on Vummly, from the most popular food blogs and tasty recipe websites around. We are the largest and most powerful recipe search website."}, { "textline": "Found a recipe that’s not available on Vummly? Add it to your recipe box instantly with the Vummly bookmarklet. Install the bookmarklet here:", "link": 'https://www.vummly.com/bookmarklet ', "bigImage": [{ "img": 'adding-recipes-to-vummly-from-other-sites.png'}]}, { "textline": "Have your own recipe blog? Get your recipes on Vummly! Add the Yum button to your site to allow your readers to save your recipes to their Vummly recipe box. Once yummed, any recipe on your blog will be added to Vummly and searchable to our over 15 million monthly website and app users! The more Yums on your recipes, the more traffic and visibility they will get."}]}]
    },

    {
        "idPage": "discovering-recipes",
        "title": "Discovering recipes",
        "way": [{ "wayname": 'Website Help Topics', "link": 'website-help-topics'}],
        "data": [{ "text": [{ "textline": "We use your Yums (our version of liking and saving recipes) and taste preferences to recommend recipes you’ll love."}, { "textline": "These recommendations appear in your “Just for You” recipe feed and come to you via email weekly. As you review your recommendations, the more you Yum, the better they get!", "bigImage": [{ "img": 'discovering-recipes.png'}]}, { "textline": "Looking for more inspiration? Browse recipes by", "link": 'https://github.com/escoutdoor'}, { "textline": "You can also search for any recipe and filter by ingredient, tastes, diets, allergies, nutrition, techniques, cuisines, time and more!"}] }]
    },

    {
        "idPage": "web-search-recipe",
        "title": "Website Recipe search",
        "way": [{ "wayname": 'Website Help Topics', "link": 'website-help-topics'}],
        "data": [{ "text": [{ "textline": "Find the perfect recipe the first time. Our unique search filters allow you to find the perfect recipes by taste, diet, allergy, nutrition, technique, cuisines, cook time, and more — so the recipes you find first are the right ones."}, { "textline": 'Type in a key search term, and once the results have loaded, click on "Filter" in the upper left-hand corner.', "bigImage": [{ "img": 'web-search-recipe1.png'}]}, { "textline":'Discover recipes to make right now using ingredients you have on hand using our helpful “with” and “without” filters.', "bigImage": [{ "img": 'web-search-recipe2.png'}]}]}]
    },

    {
        "idPage": "recipe-box",
        "title": "Recipe box",
        "way": [{ "wayname": 'Website Help Topics', "link": 'website-help-topics'}],
        "data": [{ "text": [{ "textline": "Search through over a million recipes from across the web (and world) and save your favorites to your recipe box with one easy click of the Yum button! ", "bigImage": [{ "img": 'recipe-box1.png'}]}, { "textline": 'Your recipe box will always be accessible in your account on the Vummly website and mobile apps. Once recipes are added to your recipe box, you can easily have the ingredients for selected recipes added to your shopping list in the Vummly mobile app. We call this your smart shopping list. It’s organized by section of the grocery store and will make your trip to the store a piece of cake.'}, { "textline": 'Saving/removing your Yummed recipes', "fontweight": 700}, { "textline": 'To save a recipe to your recipe box you just click the Yum button on that recipe. This will automatically add it to "All Yums," but you can also add it to a specific recipe collection by selecting an existing collection or creating a new one.'}, { "textline": 'To remove a saved Yum, you will click on the Yum button on that recipe and uncheck "Yummed." You will then refresh the page to see the changes on your account. ', "bigImage": [{ "img": 'recipe-box2.png'}]}]}]
    },

    {
        "idPage": "acc-and-pass-problems",
        "title": "Account & password problems",
        "way": [{ "wayname": 'Website Help Topics', "link": 'website-help-topics'}],
        "data": [{ "text": [{ "textline": 'Forgot your password & other password Issues', "fontweight": 700}, { "textline": 'Reset your password by pressing the ‘Forgot Password?’ link under the Email login page, then follow the confirmation link in the password reset email you receive. (Don’t forget to check your spam folder!)'}, { "bigImage": [{ "img": 'acc-and-pass-problems.png'}]}, { "textline": 'If this email is not in your spam folder, it probably means that you do not have email/password login set up on Vummly and that your account is through either Facebook or Google login. Please login using the method you originally used to create your account.'}, { "textline": 'If you would like to start logging in via email and password, just login to your account through either Google or Facebook, go to your Profile Settings, then press the ‘Add Password’ button. If you forgot which login method you used or are still having trouble signing in to your account, submit a request.'}]}, { "text": [{ "textline": 'The sign up/sign in button doesn’t work', "fontweight": 700}, { "textline": 'This sometimes means that Javascript has been disabled in your browser. Javascript is required for the buttons to work and we advise either enabling it or adding an exception for www.vummly.com if you mostly prefer to keep it disabled when browsing the web if your browser allows that.'}, { "textline": 'If you need instructions on how to enable Javascript in your browser, follow the instructions', "link": 'https://github.com/naaaasty'}]}, { "text": [{ "textline": 'The Facebook/Google/email button doesn’t work', "fontweight": 700}, { "textline": 'This sometimes means that Pop-Up blocking is enabled in your browser. Both Facebook and Google login require the use of Pop-Ups. If you mostly prefer to keep this disabled, you can add an exception for either Facebook or Google if your browser allows that.'}, { "textline": 'If you need instructions on how to enable pop-ups in your browser, select the browser you are using below:'}], "points": [{ "point": "Chrome", "link":'https://support.google.com/chrome/answer/95472?hl=en'}, { "point": "Firefox", "link": 'https://support.mozilla.org/en-US/questions/962529'}, { "point": "Internet Explorer",  "link": 'https://support.microsoft.com/ru-ru/windows'}, { "point": "Safari", "link": 'https://support.apple.com/kb/ph11946?locale=ru_RU'}]},
        { "text": [{ "textline": 'Login is successful, but it logged out right away', "fontweight": 700}, { "textline": 'This sometimes means that setting of Third Party Cookies are disabled in your browser. Both Facebook and Google login require the use of Third Party Cookies. If you mostly prefer to keep this disabled, you can add an exception for either Facebook or Google if your browser allows that.'}, { "textline": 'If you need instructions on how to enable third party cookies in your browser, select the browser you are using below:'}], "points": [{ "point": "Chrome", "link":'https://support.google.com/accounts/answer/61416?hl=en'}, { "point": "Firefox", "link": 'https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectslug=enable-and-disable-cookies-website-preferences&redirectlocale=en-US'}, { "point": "Internet Explorer",  "link": 'https://support.microsoft.com/ru-ru/windows'}, { "point": "Safari", "link": 'https://support.apple.com/kb/PH19214?locale=ru_RU'}]}, { "text": [{ "textline": 'Still having issues signing in to your account?', "fontweight": 700}, { "textline": 'Please submit a request to our support team so we can investigate the issue and assist you further. Make sure you include:'}], "points":[{ "point": 'The email address associated with your account'}, { "point": 'Your device and browser (Chrome, Firefox, etc.)'}, { "textline": 'A brief explanation of the issue you are having when signing in'}]}]
    },
    {
        "idPage": "recipe-problems",
        "title": "Recipe problems",
        "way": [{ "wayname": 'Website Help Topics', "link": 'website-help-topics'}],
        "data": [{ "text": [{ "textline": 'Link to view full directions doesn’t work', "fontweight": 700}, { "textline": 'If the “Read Full Directions” link isn’t working, restart your browser then make sure:'}], "points": [{ "point": 'You are using one of the following browsers we support: Firefox, Chrome, Safari, Microsoft Edge or Opera'}, { "point": 'Your browser is up to date'}, { "point": 'Javascript is enabled in your browser'}]}, { "text": [{ "textline": 'Yum button doesn’t work', "fontweight": 700}, { "textline": 'This sometimes means that you have Widget or Ad Block browser extensions installed. If you are having trouble saving Yummed recipes, we advise trying this with such extensions disabled.'}], "points": [{ "point": 'How to change 3rd party cookie settings', "link": 'https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectslug=enable-and-disable-cookies-website-preferences&redirectlocale=en-US#w_how-do-i-change-cookie-settings/'}, { "point": 'How to enable cookies and Javascript', "link": 'https://www.wikihow.com/Enable-Cookies-and-JavaScript'}]}, { "text": [{ "textline": 'Yum button doesn’t work', "fontweight": 700}, { "textline": "We don't display nutrition information for recipes when we feel that we don't have enough information to show it accurately. Most of our recipes do have nutrition displayed though! Try exploring different recipes from more sources and you will start seeing full nutrition."}]}, { "text": [{ "textline": 'Still having issues?', "fontweight": 700}, { "textline": 'If you have checked these and are still unable to view the directions, please contact support and include:'}], "points": [{ "point": 'The link of the recipe you are referring to'}, { "point": 'Your device and browser'}, { "point": 'A brief explanation of the issue you are having'}]}]
    },
    {
        "idPage": "collection-problems",
        "title": "Collection problems",
        "way": [{ "wayname": 'Website Help Topics', "link": 'website-help-topics'}],
        "data": [{ "text": [{ "textline": 'Yums are missing', "fontweight": 700}, { "textline": 'Don’t worry! You may have accidentally created a new account or signed in to a different one.'}, { "textline": 'If you created your account via Facebook or Google, make sure you are logged in to the correct account in your browser before logging in to Vummly.'}, { "textline": 'If you are signed in to the correct account, try:'}], "points": [{ "point": 'Logging out then logging in again to refresh your Yums'}, { "point": 'Closing your browser or using a different browser we support: Chrome, Firefox, Safari, or Internet Explorer 10 and above'}]}, { "text": [{ "textline": 'Still having issues?', "fontweight": 700}, { "textline":'If your Yums still aren’t showing up or you are having other issues, please submit a request. Make sure you include:'}], "points": [{ "point": 'The email address of your account'}, { "point": 'The device and browser you are using'}]}]
    },
    {
        "idPage": "recipe-recommendation-issues",
        "title": "Recipe recommendation issues",
        "way": [{ "wayname": 'Website Help Topics', "link": 'website-help-topics'}],
        "data": [{ "text":[{ "textline": 'Same recipes showing up on my homepage', "fontweight": 700}, { "textline": 'Yum (save) a variety of recipes to your Recipe Box and set your taste preferences to receive different recipe recommendations. The more you Yum, the better your recommendations get!'}]}, { "text":[{ "textline": 'Emails aren’t reflecting my taste preferences', "fontweight": 700}, { "textline": 'If you receive the "Popular Recipes" email, it means that we are not sending you a personalized recipe recommendations email yet. Yum (save) at least five recipes to your recipe box to start receiving your "Recipe Recommendations" emails. If you set your taste preferences, these recommendations will also be customized to your diets, allergies, and disliked ingredients.'}]}]
    },
    {
        "idPage": "recipe-search-result-problem",
        "title": "Recipe search result problems",
        "way": [{ "wayname": 'Website Help Topics', "link": 'website-help-topics'}],
        "data": [{ "text":[{ "textline": 'Incorrect recipes come up after setting filters or taste preferences', "fontweight":700}, { "textline": "We may have imported the recipe information onto our site incorrectly. If a recipe came up in your search results or recipe recommendations when it shouldn't have, please submit a request. Make sure to include:"}], "points": [{ "point": 'The recipe name and link'},{ "point": 'What you searched for and the search filters you used'}, { "point": 'Why you believe the recipe came up in your search results incorrectly'}]}, { "text": [{ "textline": 'Vummly search results don’t match my Google search', "fontweight": 700}, { "textline": "We're aware of the issue and are actively working to resolve problems that appear when arriving from search engine results into Vummly."}, { "textline": "However, if you start your search in Vummly you can search across many of the major recipe sites and food blogs. You can then filter your results by excluding ingredients within your Vummly search using our unique search filters."}, { "textline": "We'd love for you to try searching within Vummly. We are building new functionality all the time and appreciate feedback — good and bad. You can share your feedback with us by submitting a request."}]}]
    },
    {
        "idPage": "recipe-box-organazing",
        "title": "Recipe box",
        "way": [{ "wayname": 'Website Help Topics', "link": 'website-help-topics'}],
        "data": [{ "text": [{ "textline": 'Your recipe box is where you save and find all of your favorite recipes!'}, { "bigImage": [{ "img": 'recipe-box-organazing.png'}]}]}, { "text": [{ "textline": 'How to add a recipe:', "fontweight": 700}], "points": [{ "point": 'When searching or browsing for recipes, press the ‘Yum’ button on the recipe you want to save'}, { "point": 'If you want, select the Collection you want to add the recipe to'}]}, { "text": [{ "textline": 'How to remove a recipe:', "fontweight": 700}], "points": [{ "point": 'Find the recipe in your Collections or All Yums'}, { "point": 'Click the three dots in the upper right corner of the recipe picture'}, { "point": 'Remove the check box next to Yummed'}]}, { "text": [{ "textline": 'How to search for a recipe:', "fontweight": 700}], "points": [{ "point": 'Click on the ‘Search profile’ text box'}, { "point": 'Enter a keyword'}, { "point": 'Press ‘Enter’'}]}]
    },
    {
        "idPage": "collections",
        "title": "Collections",
        "way": [{ "wayname": 'Website Help Topics', "link": 'website-help-topics'}],
        "data": [{ "text": [{ "textline": 'To get to your Collections, click Saved Recipes on the left menu bar. Select the collection you want or press All Collections.'}, { "bigImage": [{ "img": 'recipe-box-organazing.png'}]}]}, { "text": [{ "textline": 'You can organize your Collections Alphabetically, by creation date or by Recently used.'}], "points": [{ "point": 'From your Collections Page above, scroll down to the  Collections header.'}, { "point": 'On the right side of the Screen there is a Sort By drop down menu'}]}, { "text": [{ "textline": 'How to Create a Collection:', "fontweight": 700}, { "textline": 'On the Collections page in your profile:'}], "points": [{ "point": 'Select ‘+ new collection’'}, { "point": 'Enter the Collection name'}, { "point": 'Press Enter'}]}, { "text": [{ "textline": 'to Edit or Delete a Collection:', "fontweight": 700}], "points": [{ "point": 'On the Collections page in your profile, click on the collection you wish to Edit or delete'}, { "point": 'Edit the Name and/or Description by clicking into the text box, making changes and hitting Enter to save changes'}, { "point": "Use the ‘Delete Collection’ option in the upper right hand corner to remove the Collection"}]}]
    },
    {
        "idPage": "shopping-list-add",
        "title": "How can I add items to my Shopping List on the website?",
        "way": [{ "wayname": 'Website Help Topics', "link": 'website-help-topics'}],
        "data": [{ "text":[{ "textline":'You can manage your Shopping List from three different places:'}], "points": [{ "bold": 'Meal Planner:', "point": "Quickly add ingredients from your menu by clicking “Add All Recipes to Shopping List” button at the top of the page. (Don't worry, you can remove anything you already have)."},{ "bold": 'Shopping List:', "point": "Click “Add Ingredients” to add any item you can think of — we’ll even give you suggestions as you type."}, { "bold": 'Recipe pages:', "point": 'Add individual items or the entire ingredient list as you browse recipes.'}]}]
    },
    {
        "idPage": "meal-plan-changes",
        "title": "How do I make changes to my Meal Plan on the website?",
        "way": [{ "wayname": 'Website Help Topics', "link": 'website-help-topics'}],
        "data": [{ "text": [{ "textline": 'You can edit your meal plan at any time.'}], "points": [{ "point": 'To remove a recipe, just click the "X" in the upper right-hand corner of the recipe card. To delete everything in your plan, select the "Clear All" button at the top of the page.'}, { "point": 'To add new recipes to the plan, either select the "Add Recipes" button to return to the Meal Planner recommendations page or use the button on any recipe page in Vummly to instantly add a recipe to your current plan.'}]}]
    },
    {
        "idPage": "meal-plan-adding",
        "title": "How do I add recipes to my Meal Plan on the website?",
        "way": [{ "wayname": 'Website Help Topics', "link": 'website-help-topics'}],
        "data": [{ "text": [{ "textline": 'You can add recipes to your Plan in two ways:'}], "points": [{ "point": 'Open the Meal Planner to access your personalized recommendation feed. Just click the button on any recommended recipes you want to add to your Plan.'}, { "point": 'Open any recipe on Vummly, and find the icon. Click!'}]}]
    },
    {
        "idPage": 'loggining-in-to-the-website',
        "title": 'Logging in to the website',
        "way": [{ "wayname": 'Website Help Topics', "link": 'website-help-topics'}],
        "data": [{ "text": [{ "textline": 'This article is about the website only. If you are looking for iOS or Android FAQs click here for:'}], "points": [{ "point": 'iOS', "link": '/support/articles/ios-sign-in-issue'}, { "point": 'Android', "link": '/support/articles/android-sign-in-issue'}]}, { "text": [{ "textline": 'Go to Vummly.com to create a free Vummly account.'}, {"bigImage": [{ "img": 'loggining-in-to-the-website.png' }]}]}, { "text": [{ "textline": "You'll need an account to use the majority of Vummly features on the website."}, { "textline": 'You can create an account or sign into your account via'}], "points": [{ "point": 'Email/password combo'}, { "point": 'Apple ID'}, { "point": 'Facebook'}, { "point": 'Google'}]}, { "text": [{ "textline":'If you are having any issues signing in, we sincerely apologize and ask you to email our support team for further assistance.'}, { "textline": 'You can do it there: ', "fontweight": 700, "mail": 'support@vummly.com'}]}]
    },
    {
        "idPage": 'your-profile',
        "title": 'Your profile',
        "way": [{ "wayname": 'Website Help Topics', "link": 'website-help-topics'}],
        "data": [{ "text": [{ "bigImage": [{ "img": 'your-profile.png'}]}, { "textline": 'Look at all of your recipes in your Recipe Box or view your recipes by your Collections. '}]}, { "text": [{ "textline": 'Share your recipe box and collections', "fontweight": 700}, { "textline": "Press the ‘Share these recipes’ link at the top of your profile and select where you want to share them."}]}, { "text": [{ "textline": 'Search for recipes', "fontweight": 700}, { "textline": 'Find recipes in your profile with the the ‘Search My Yums’ text box.'}]}, { "text": [{ "textline": 'Change your profile picture', "fontweight": 700}, { "textline": 'To change your profile picture, you will click on your photo and select which photo you would like to upload.'}, { "textline": 'You will need to select a square photo. If you use a non-square photo, we will automatically crop the image to a square, which will cut out a portion of the photo.'}]}]
    },
    {
        "idPage": 'taste-preferences',
        "title": 'Taste preferences',
        "way": [{ "wayname": 'Website Help Topics', "link": 'website-help-topics'}],
        "data": [{ "text": [{ "textline": 'Set your taste preferences to personalize your search results and get recipe recommendations based on your disliked ingredients, diets, and allergies — you can even get weekly emails with new recipe recommendations so you never get bored! Edit your taste preferences in your profile settings at any time.'}, { "textline":'Your selections will act as a filter that helps you find recipes tailored just for you. For example, if you select “diabetic-friendly” as your diet, your recommendations will focus on recipes designed to help people with elevated blood sugar eat a diet rich in plants, heart-healthy fats, and fiber; moderate carbohydrate intake; and limit sodium, saturated fat and added sugar.' }]}, { "text": [{ "textline": 'Having problems with your taste preferences? ', "fontweight": 700}, { "textline": 'If you are seeing recipes that don’t match your taste preferences, contact customer support to let us know. Please include:'}], "points": [{ "point": 'What your set taste preferences are,'}, { "textline": 'Why the recipe doesn’t match your search, and'}, { "textline": 'A link to the recipe.'}]}]
    },
    {
        "idPage": 'web-acc-settings',
        "title": 'Website Account settings',
        "way": [{ "wayname": 'Website Help Topics', "link": 'website-help-topics'}],
        "data": [{ "text": [{ "textline": 'Edit your account information', "fontweight": 700}, { "textline": 'To edit your account information and settings, click your profile photo/name on the top left corner of the homepage then click on the settings tab or go to', "link": 'https://www.vummly.com/settings '}]}, { "text": [{ "textline": 'Change email address', "fontweight": 700}, { "textline": 'If you want to change the email address on your account, go to profile settings and click in the email box and type in updated email address.'}]}, { "text": [{ "textline": 'Change/add password', "fontweight": 700}, { "textline": 'If you created your account via email, you can change your password in your profile settings by clicking in the password box and making desired changes.'}]}, { "text": [{ "textline": 'If you created your account via Facebook, Apple ID or Google, you can add a password to your account by pressing the ‘Add Password’ button.  This has to be done through the website.'}, { "bigImage":[{ "img": 'web-acc-settings.png'}]}]}]
    },
    {
        "idPage": 'unsub-emails',
        "title": 'Unsubscribe from emails',
        "way": [{ "wayname": 'Website Help Topics', "link": 'website-help-topics'}],
        "data": [{ "text": [{ "textline": `Unsubscribe from some or all Vummly emails in your account settings by checking or unchecking the types of emails. Click "Save" once you've made your selections. You can also click "Unsubscribe From All" to stop all emails.`}, { "bigImage": [{ "img": 'unsub-emails.png'}]}, { "textline": 'If you are having trouble unsubscribing from emails, we sincerely apologize and are happy to help you. Please submit a request and explain the issue you are having, and we will be in touch shortly afterward.'}]}]
    },
    {
        "idPage": 'delete-acc',
        "title": 'Delete account',
        "way": [{ "wayname": 'Website Help Topics', "link": 'website-help-topics'}],
        "data": [{ "text": [{ "textline": 'Deleting your account means your saved recipes, collections, and personalization preferences will be permanently removed from Vummly. Once you confirm, your account will be deactivated immediately.'}, { "textline": 'Note:', "fontweight": 700}, { "textline": 'This will not end a Subscription if you have one.  You need to cancel your subscription before deleting your account.'}, { "textline": "If you're having any trouble with the methods listed below, please let us know."}, { "textline": "We're happy to assist", "mail":'support@vummly.com'}]}, { "text": [{ "textline": 'Web', "fontweight": 700}, { "textline": 'Go to settings or click on your profile picture at the top of the page> click on settings tab > click on “Delete Account” at very bottom of page > confirm you want to delete your account.'}]}, { "text": [{ "textline": 'App', "fontweight": 700}, { "textline": 'Tap the person-looking icon along the bottom of the screen > tap the gear icon > tap “My Account” > scroll to the bottom and tap “Delete Account”'}]}]
    },
    {
        "idPage": 'change-the-email',
        "title": 'Change the email address on your account',
        "way": [{ "wayname": 'Website Help Topics', "link": 'website-help-topics'}],
        "data": [{ "text":[{ "textline": 'To change the email address on your account, go to your Account Settings, click in the email address box and update your email address, then click "Save" at the bottom of the screen.'}, { "bigImage": [{ "img": 'change-the-email.png'}]}]}]
    },
    {
        "idPage": 'recipe-pages',
        "title": 'Recipe pages',
        "way": [{ "wayname": 'Vummly iOS App', "link": 'ios-app'}],       
        "data": [{ "text": [{ "textline": 'Vummly boasts 2M+ recipes to choose from. A recipe page is where you find all the details about a recipe you found on our site. Here’s how it works:'}, { "textline": 'The + symbol', "fontweight": 700}, { "textline": 'See a recipe you’d like to cook now, get the ingredients for, or save for later? Tap the + symbol so you can add this dish to:'}], "points": [{ "point": 'Meal Planner', "link": '/support/articles/ios-use-meal-planner'}, { "point": 'Shopping List', "link": '/support/articles/ios-shopping-list-overview'}, { "point": 'Collections', "link": '/support/articles/ios-recipe-box'}]}, { "text": [{ "textline": 'Become a Vummly subscriber to enjoy Meal Planner, among other helpful features. '}, {"bigImage": [{ "img": 'recipe-pages1.jpeg'},{ "img": 'recipe-pages2.jpeg'}]}]}, { "text": [{ "textline": 'Ingredients', "fontweight": 700}, { "textline": 'Each recipe has a list of ingredients and the option to add some or all to your Shopping List. When viewing a recipe, add individual ingredients to your Shopping List by scrolling down or tapping Ingredients at the bottom of the screen, then the + symbol to the left of the ingredient or Add All to Shopping List at the top to add all of the ingredients at once.'}, { "textline": 'Nutrition', "fontweight": 700}, { "bigImage": [{ "img": 'recipe-pages3.jpeg'}]}, { "textline": 'Vummly displays the calorie count for all recipes with enough information. Subscribers can also see detailed nutritional values per serving, including fat, carbohydrates, protein, vitamins, minerals, and other information. Add any recipe’s nutrition facts to your Health app to track the nutrients and servings of what you eat:'}], "points": [{ "bold": 'Tap Add to Apple', "point": 'Health and this recipe’s nutrition information will automatically be added to your Health app. '}]}, { "text": [{ "textline": 'Directions', "fontweight": 700}, { "bigImage": [{ "img": 'recipe-pages4.jpeg'}]}]}, { "text": [{ "textline": 'Want to see how to make a recipe? Tap Continue on the Directions tab to open the link to the original webpage where the recipe is published. To return to Vummly, tap x or the Back arrow.'}, { "bigImage": [{ "bigImage": 'recipe-pages5.jpeg'}]}, { "textline": "Want to cook along with our unique video recipe formats? On any Pro or Guided Recipe, tap Begin. To stop the cook session before it’s complete, tap the menu in the upper right-hand corner, then Cancel Recipe at the bottom of the screen."}]}, { "text": [{ "textline": 'Recipe sharing', "fontweight": 700}, { "textline": 'Found a recipe you want to share with family or friends? Tap the upward arrow symbol to send the recipe via a channel of your choice'}, { "textline": 'Adding to a collection', "fontweight": 700}, { "textline": 'To add a saved recipe to a collection, tap the + button anywhere you see it. Choose Update Collections.'}, { "textline": 'Deleting a Saved recipe from your Collections.', "fontweight": 700}, { "textline": 'Remove a recipe from your recipe box by pressing the three dots in the upper right corner of the recipe picture.  Choose Update Collections, then remove the check mark next to All Yums.'}]}]
    },
    {
        "idPage": 'ios-recipe-search',
        "title": 'iOS Recipe search',
        "way": [{ "wayname": 'Vummly iOS App', "link": 'ios-app'}],
        "data": [{ "text": [{ "textline": 'Tap the search icon on the bottom bar, then enter any recipe, dish, diet, cuisine, or ingredient in the search field at the top of the Search screen.'}, { "textline": 'Searching with filters', "fontweight": 700}, { "textline": 'To search for recipes, tap the search icon at the bottom.'}], "points":[{ "bold": 'tap Search for Recipes', "point": 'at the top of the screen, enter your keyword, then tap search on the onscreen keyboard.'}, { "bold": 'Next, tap FILTER', "point": 'in the upper right-hand corner to refine your search by prep time, cuisine, course, nutrition content, tastes, or techniques. '}]}, { "text": [{ "bigImage": [{ "img": 'ios-recipe-search1.jpg'}, { "img": 'ios-recipe-search2.jpeg'}]}, { "textline": "Were your search results different from what you're looking for?", "fontweight": 700}, { "textline":'Subscribe to Vummly to use search filters for more accurate results!  Be sure that you do not have too many Preferences applied to your account (i.e. Vegan, Keto and Pescatarian preferences will only show recipes that fit all preferences.) If you see a recipe that does not fit your Dietary Preference or Search results, please let us know via the Report Issue button located at the bottom of every recipe page in Vummly.'}]}]
    },
    {
        "idPage": 'ios-recipe-box',
        "title": 'Recipe box',
        "way": [{ "wayname": 'Vummly iOS App', "link": 'ios-app'}],
        "data": [{ "text": [{ "textline":'Easily access all the recipes you’ve saved by selecting the profile icon from the navigation menu of the app (center icon that resembles a person). Whether you Yum a recipe on our website, our mobile apps, or using your bookmarklet, your recipes will always be available on all of your devices.'}], "points": [{ "point": 'To save a recipe from your Home Feed to a particular collection you’ve created, click the Plus Button, then select Update or Add to Collections'},{ "image": [{ "img": 'ios-recipe-box1.jpeg'}]}, { "bold": 'Add a recipe directly to your Meal Plan'},{ "image": [{ "img": 'ios-recipe-box2.jpeg'}]}, { "point": "To add a new collection to your recipe box, press the '+ New Collection' icon at the top of the recipe box."}, { "point": "Remove a recipe from your recipe box by pressing the three dots in the upper right corner of the recipe picture.  Choose Update Collections, then remove the check mark next to All Yums."}, { "point": "To Share or delete a collection, or edit a collection name, select the collection you want, tap on the 3 dots icon at the top right of the page, select 'Edit,' then enter the new collection name. "}, { "image": [{ "img": 'ios-recipe-box3.jpeg'}]}]}]
    },
    {
        "idPage": 'ios-recipe-recommendations',
        "title": 'Recipe recommendations',
        "way": [{ "wayname": 'Vummly iOS App', "link": 'ios-app'}],
        "data": [{ "text": [{ "textline": 'Browse personalized recipe recommendations based on your profile and your Yums. Recommendations are available on the home screen of each mobile app.'}, { "textline": `To start receiving recipe recommendations, make sure you "Yum" at least five recipes. You'll also receive "Just for You" recipe recommendation emails.`}, { "textline": 'Every time you open the app or save a new recipe, you will receive new recipe recommendations!'}, { "textline": 'If you have a Vummly account and set your dietary preferences, your recommended recipes will be based on these. You can add disliked Ingredients, special diets, and allergies. To set your Dietary Preferences, go to Settings > Dietary Preferences.'}]}]
    },
    {
        "idPage": 'ios-acc-settings',
        "title": 'Account settings',
        "way": [{ "wayname": 'Vummly iOS App', "link": 'ios-app'}],
        "data": [{ "text": [{ "textline": 'Settings let you change your dietary preferences, email preferences, household size, skill level, notifications, preferred measurements (Metric vs U.S.), delete your account, and more.'}, { "textline": 'To access your Settings:'}], "points": [{ "point": 'click on the Profile icon in the navigation bar at the bottom,'}, { "point": 'click Settings (top right corner– gear icon)'}, { "image": [{ "img": 'ios-acc-settings.jpeg'}]}]}]
    },
    {
        "idPage": 'ios-ing-recognition',
        "title": 'Ingredient Recognition',
        "way": [{ "wayname": 'Vummly iOS App', "link": 'ios-app'}],
        "data": [{ "text": [{ "textline": 'What is Ingredient Recognition?', "fontweight": 700}, { "textline": "Ingredient Recognition is a real-time visual recognition tool to identify select fresh ingredients and packaged goods you may have on hand. Simply scan ingredients with your phone's camera and Vummly will provide recipe recommendations based on those ingredients! Since it works in real-time, there's no need for additional photo taking on your end — just point the camera at your ingredients and we'll take care of the rest."}, { "textline": 'How do I use Ingredient Recognition?', "fontweight": 700}, { "textline": "No need to do anything before scanning — you should just have the ingredient clearly visible within camera view for Ingredient Recognition to be activated. You can use it on both fresh ingredients and packaged goods (think cans, boxes, cartons, jars, etc.). Ingredient Recognition will read text on the packaging to identify products."}]}, { "text": [{ "textline": 'Ingredient recognition works best when:', "fontweight": 700}], "points": [{ "point": 'The ingredient is close enough within camera view & in a well-lit condition.'}, { "point": 'The distinctive features of an ingredient are in view (For example, from the top or bottom pears and apples can look very similar, but from the side the difference in shape is clear.)'}]}, { "text": [{ "textline": 'Other scanning tips:', "fontweight": 700}], "points": [{ "point": 'Any important text should be visible and head-on when scanning packaged goods.'}, { "point": "If the ingredient isn't recognized right away but a teal box appears, try keeping the ingredient in the frame for a few seconds and it may either recognize it or prompt you to add manually."}, { "point": "If it's is having trouble recognizing an ingredient, try picking the ingredient up, or moving the camera to get a different view of the ingredient, especially in a way that exposes the distinctive features."}]}, { "text": [{ "textline": "If we've partially recognized something, we'll let you know what ingredient we think it is and ask you to confirm."},{ "textline": "To add ingredients manually, use the manual add button."}, { "textline":"If we've incorrectly recognized something, you can press and hold the ingredient tag to edit it — you'll be helping teach our model to recognize it correctly next time!"}]}]
    },
    {
        "idPage": 'ios-and-basic-troubleshooting',
        "title": 'iOS app Basic troubleshooting',
        "way": [{ "wayname": 'Vummly iOS App', "link": 'ios-app'}],
        "data": [{ "text": [{ "textline": 'If you are having an issue with our iPhone or iPad app, try these basic troubleshooting steps:'}], "points": [{ "point": 'Delete and re-download the app from the App Store'}, { "point": 'Restart your device'}]}, { "text": [{ "textline": 'This will work for many issues like issues signing or, or if the app is generally buggy.  If you continue to have specific issues, check out the rest of our iOS FAQs here:', "link": 'https://help.vummly.com/hc/en-us/200221770-Vummly-iOS-App'}, { "textline": 'You can always reach us directly at', "mail":'Support@vummly.com'}]}]
    },
    {
        "idPage": 'ios-home-feed',
        "title": 'Home Feed',
        "way": [{ "wayname": 'Vummly iOS App', "link": 'ios-app'}],
        "data": [{ "text": [{ "textline": 'Your home feed will show a variety of recipes. If you’re signed into your account, you’ll see recipe recommendations based on your Yums and dietary preferences. To improve our recommendations, be sure to:'}], "points": [{ "point": 'Save at least five recipes (the more you Yum, the more helpful our recommendations become)'}, { "point": 'Set up your dietary preferences'}, { "point": "Review recipes you've made so we can get to know your tastes better"}]}, { "text": [{ "textline": 'Are your recipe recommendations too similar? Yum different types of recipes to get more varied recommendations.'}, { "textline": 'Do recipe recommendations not match your dietary preferences? Check whether you’re signed in to your Vummly account and make sure your dietary preferences are set.'}]}]
    },
    {
        "idPage": 'ios-sign-in-issue',
        "title": 'Sign-in issues',
        "way": [{ "wayname": 'Vummly iOS App', "link": 'ios-app'}],
        "data": [{ "text":[{ "textline": 'Make sure you are signing in with the correct account you created your Vummly account with: Facebook, Google+, Apple ID or Email.'}, { "textline": 'If you are unable to sign in to your account try reinstalling the app then signing in again.'}, { "textline": 'Forgot your password?', "fontweight": 700}, { "textline": `You can get a reset password email sent to you from our website Vummly.com.  This cannot be done through the app at this time.  Go to Vummly.com and click Sign in. Enter your email address, and the password screen will appear with a "Forgot Password" Button at the bottom.  If you don't see the email in your inbox, double check your spam folder. Following the link provided in the email will allow you to reset your password and sign in to your account.`}, { "textline": "If you continue to have any issues, please email us and we'll get you back in to your account!"}, { "textline": 'Our "mail": ', "fontweight": 700, "mail": 'support@vummly.com'}]}]
    },
    {
        "idPage": 'ios-adding-new-recipes-from-website',
        "title": 'Adding new recipes to the Vummly app from a website',
        "way": [{ "wayname": 'Vummly iOS App', "link": 'ios-app'}],
        "data": [{ "text": [{ "textline": 'When in the Safari app on a recipe that you would like to Yum, click on the share icon that looks like a box with an arrow coming out of the top. Scroll down to Yum. If you do not see Yum as an option, scroll to down and tap on "Edit Actions". Make sure that the Yum option is turned on.'}, { "image": [{ "img": 'ios-adding-new-recipes-from-website.jpeg'}]}, { "textline": 'Once that is turned on, you should always see the Yum option in that bar and just tap on that for it to be added to your recipe box.'}, { "textline": "Don't see Yum in your list of action options? Try restarting your iOS device."}]}]
    },
    {
        "idPage": 'ios-saved-recipes-missing',
        "title": 'My saved recipes are missing',
        "way": [{ "wayname": 'Vummly iOS App', "link": 'ios-app'}],
        "data": [{ "text": [{ "textline": "Don't panic! Double check to make sure you are signed in to the correct Vummly account and restart your app. You may have accidentally created a new account."}, { "textline": 'You can sign in to your account on our website to ensure your saved recipes are still saved in your recipe box.'}, { "textline": 'If you created your Vummly account with your Facebook or Google+ account, make sure you are signed in to that account on your device before signing in to your Vummly account.'}]}]
    },
    {
        "idPage": 'ios-use-meal-planner',
        "title": 'How do I use the Vummly Meal Planner?',
        "way": [{ "wayname": 'Vummly iOS App', "link": 'ios-app'}],
        "data": [{ "text": [{ "textline": 'Meal Planner can be accessed within the Plan & Shop section, indicated in the bottom navigation bar with the tasks icon.'}, { "textline": 'Step 1: Create Your Menu', "fontweight": 700}, { "textline": 'You can add a recipe to your Meal Plan from almost anywhere in the app, like your home feed, search results, collections and inside the recipe details page:'}, { "image": [{ "img": 'ios-use-meal-planner1.jpg'}, { "img": 'ios-use-meal-planner2.jpg'}, { "img": 'ios-use-meal-planner3.jpeg'}]}, { "textline": 'Step 2: Get Your Groceries', "fontweight": 700}, { "textline": 'Add ingredients to your Shopping List with a click, then take it on the go or get groceries delivered through Vummly.*'}, { "textline": '* Service available in select U.S. locations.', "fontstyle": 'italic'}, { "textline": 'Step 3: Cook, Review, Repeat!', "fontweight": 700}, { "textline": 'Get cooking, then review that recipe for even better recommendations. All done? Clear your Meal Plan and start your next culinary adventure!'}]}]
    },
    {
        "idPage": 'ios-find-meal-planner',
        "title": 'Where can I find the Meal Planner?',
        "way": [{ "wayname": 'Vummly iOS App', "link": 'ios-app'}],
        "data": [{ "text": [{ "textline": 'Meal Planner is currently available on the Vummly website or in the Vummly app.'}, { "textline": 'For the full Meal Planner experience on the web, including personalized recommendations, select "Meal Planner" from the main Vummly.com navigation. Or, quickly access your customized Meal Plan from any page in Vummly by selecting the icon at the top of the screen.'},{ "textline": 'Within the Vummly app, the Meal Planner can be found within the Plan & Shop section, indicated in the bottom navigation bar with the navigation icon.'}]}]
    },
    {
        "idPage": 'ios-meal-recomm-from',
        "title": 'Where do my Meal Plan recommendations come from?',
        "way": [{ "wayname": 'Vummly iOS App', "link": 'ios-app'}],
        "data": [{ "text": [{ "textline": "Vummly digs into our huge database of recipes to provide recommendations using a custom meal-planning algorithm that returns recipes just for you. For best results, make sure you've updated your taste preferences so we can give you more of what you like (and avoid those stinky brussels sprouts, if you want)."}, { "textline": `Remember, every time you rate a recipe, your recommendations get even better! Be sure to rate and review meals in your Meal Planner by clicking "Made It!" after you're done.`}]}]
    },
    {
        "idPage": 'ios-find-out-more-rec-recomm',
        "title": 'How do I find out more about a recipe in my Meal Plan recommendations?',
        "way": [{ "wayname": 'Vummly iOS App', "link": 'ios-app'}],
        "data": [{ "text": [{ "textline": 'If you want to learn more about a recipe, just click the recipe card to view details.'}]}]
    },
    {
        "idPage": 'ios-tips-meal-planning',
        "title": 'Do you have any meal planning tips for me?',
        "way": [{ "wayname": 'Vummly iOS App', "link": 'ios-app'}],
        "data": [{ "text": [{ "textline": 'We sure do! Check out our meal planning articles for tips, tricks, and recipe ideas to help you become a meal planning pro.'}]}]
    },
    {
        "idPage": 'ios-shopping-list-overview',
        "title": 'Shopping List Overview',
        "way": [{ "wayname": 'Vummly iOS App', "link": 'ios-app'}],
        "data": [{ "text": [{ "textline": 'Your Shopping List helps you keep all your grocery shopping needs organized. You can create and access it on your computer, phone, or tablet. Now, you always have your Shopping List on you!'}, { "textline": "It's flexible, too. "}], "points": [{ "point": 'Add ingredients with one click or tap from your Meal Plan or from any recipe on Vummly'}, { "point": 'Enter items manually by clicking Add to Shopping List in the Shopping List'}, { "point": 'Sort your Shopping List by recipe to streamline meal planning or by category to make shopping faster and easier'}]}, { "text": [{ "textline": 'Share your Shopping List with your family and friends through Email or Text Message by pressing the Share button at the top of the Shopping List.'}, { "textline": "Your Shopping List will sync between your devices as long as you're signed in to the same Vummly account. If your Shopping List isn't syncing, try the following:"}], "points": [{ "point": 'Make sure you are using the most updated version of our app on your devices'}, { "point": 'Restart the app'}, { "point": 'Double check to make sure you are signed in to the same Vummly account on your devices.'}]}]
    },
    {
        "idPage": 'ios-buy-ingr-vummly',
        "title": 'Can I buy ingredients through Vummly?',
        "way": [{ "wayname": 'Vummly iOS App', "link": 'ios-app'}],
        "data": [{ "text": [{ "textline": 'Yes,'}], "points": [{ "point": 'click or tap Buy Now at the bottom of  your Shopping List'}, { "point": 'click the Buy icon on any Recipe Details Page'}]}, { "text": [{ "image": [{ "img": 'ios-buy-ingr-vummly.JPG'}]}, { "textline": 'Choose the Delivery provider and follow the prompts on the screen.'}, { "textline": 'The delivery list will populate for your Provider on the website inside the Vummly app, it will not populate the ingredients into another delivery app.'}, { "textline": 'If you have any issues with the Shopping List, please let us know at', "mail": 'Support@Vummly.com.'}]}]
    },
    {
        "idPage": 'ios-diff-devices-shopping-list',
        "title": 'Can I access my Shopping List on different devices?',
        "way": [{ "wayname": 'Vummly iOS App', "link": 'ios-app'}],
        "data": [{ "text": [{ "textline": 'Absolutely. Your Shopping List syncs automatically across all your devices, including desktops, tablets, and phones. Make sure you have the Vummly app installed on your device and are logged in to your account.'}]}]
    },
    {
        "idPage": 'ios-move-ingr-to-a-diff-shopping-list',
        "title": 'How do I move ingredients to a different shopping aisle?',
        "way": [{ "wayname": 'Vummly iOS App', "link": 'ios-app'}],
        "data": [{ "text": [{ "textline": 'Moving ingredients into different aisles from the Shopping List is easy.'}, { "textline": 'For the Web:', "fontweight": 700}, { "textline": 'Open the Shopping List by clicking on the icon in the upper right-hand corner.'}, { "image": [{ "img": 'ios-move-ingr-to-a-diff-shopping-list1.png'}]}, { "textline": 'Hover over the ingredient you want to move, and then select Change Category.'}, { "image": [{ "img": 'ios-move-ingr-to-a-diff-shopping-list2.png'}]}, { "textline": 'For iOS', "fontweight":700}, { "textline": 'Open your Shopping List and make sure you are in the "Aisles" view.  Find the ingredient you want to move and click on the item in the center of the ingredient name.  Click Edit, then Click Category.  You can also long click on an ingredient to move it around.'}, { "image": [{ "img": 'ios-move-ingr-to-a-diff-shopping-list3.PNG'}, { "img": 'ios-move-ingr-to-a-diff-shopping-list4.PNG'}]}, { "textline": 'For Android:', "fontweight":700}, { "textline": 'Open the Shopping List and find the ingredient you want to edit.  Swipe the ingredient to the left.  From the small menu, choose "Edit Ingredient" and then select Category.'}, { "image": [{ "img": 'ios-move-ingr-to-a-diff-shopping-list5.png'}, { "img": 'ios-move-ingr-to-a-diff-shopping-list6.png'}, { "img": 'ios-move-ingr-to-a-diff-shopping-list7.png'}]}]}]
    },
    {
        "idPage": 'andriod-app-overview',
        "title": 'Android app overview',
        "way": [{ "wayname": 'Vummly Android App', "link": 'android-app'}],
        "data": [{ "text": [{ "textline": 'With the Vummly Android app for your phone and tablet, you’ll have everything you love about Vummly and more right in your pocket. Get access to personalized recipe recommendations, customizable Meal Plans, and your smart Shopping List with optional grocery delivery.'}, { "textline": 'Personalized recommendations', "fontweight": 700}, { "textline": 'Vummly learns from your saved recipes, favorite cuisines, and dietary preferences, including your tastes and allergies, to suggest recipes just for you.'}, { "textline": 'Smart meal planning for busy lives', "fontweight": 700}, { "textline": 'Simplify mealtime with a mouth-watering selection of easy-to-follow recipes picked just for you, table-ready in 30 minutes or less. '}, { "textline": 'Your smart Shopping List', "fontweight": 700}, { "textline": 'Get suggestions based on your shopping history, add ingredients from any recipe with one tap, then take your Shopping List on the go or order groceries right from the app (in select U.S. locations).'}, { "textline": 'From 2M+ recipes to tasty meals in record time ', "fontweight": 700}, { "textline": 'Let us do the heavy lifting for you! Our unique filters let you narrow your search by cook time, course, cuisine, diet, allergy, nutrition, and other factors, so finding the right recipe is a snap!'}, { "textline": 'Take the guesswork out of cooking with the Vummly Smart Thermometer', "fontweight": 700}, { "textline": "With convenient app-based assistance, timers, and alerts, you can be confident in your cooking — even when you're multitasking."}, { "textline": 'Reduce food waste with ingredient recognition and Virtual Pantry', "fontweight": 700}, { "textline": "Use your phone to scan items you have on hand, save them to your Virtual Pantry to get recipe recommendations based on them, and receive alerts when you’re running low on ingredients."}, { "textline": 'Turn ordinary ingredients into extraordinary meals', "fontweight": 700}, { "textline": "Exclusive step-by-step recipes, including video tutorials designed for cooks of all levels, make cooking a breeze."}, { "textline": 'Create your digital cookbook', "fontweight": 700}, { "textline": "Saving your favorite recipes couldn’t be easier. Browse Vummly's collection of 2M+ recipes or use the Vummly bookmarklet to add recipes from anywhere on the web. "}, { "textline": 'Special features', "fontweight": 700}, { "textline": "Schedule a cook session and get a gentle nudge when it's time to make that recipe. Navigate hands-free through our step-by-step Guided Recipes with Vummly Voice Control."}, {"textline": 'Download the free Vummly app from the Google Play Store!'}]}]
    },
    {
        "idPage": 'android-getting-app',
        "title": 'Getting the Android app',
        "way": [{ "wayname": 'Vummly Android App', "link": 'android-app'}],
        "data": [{ "text": [{ "textline": 'The Vummly Android app works on Android phones and tablets. You can download the free app from the Google Play store here:'}], "points": [{ "point": 'Google Play Store', "link": 'https://github.com/escoutdoor'}]}, { "text": [{ "textline": 'The app helps you find recipes and save them in personal collections. You can also set your preferences to get personalized recipe recommendations based on your diets, allergies, and favorite cuisines. '}, { "textline": 'Use Vummly for free or take advantage of a paid subscription and get access to: '}], "points": [{ "point": 'The Vummly Meal Planner', "link": '/support/articles/ios-use-meal-planner'}, { "point": 'Recipe scheduling with calendar integration'}, { "point": 'Ingredient recognition '}, { "point": 'Detailed nutrition info'}, { "point": 'Advanced search filters'}, { "point": 'Vummly Original Recipes'}, { "point": 'Guided Recipes'}, { "point": 'Pro Recipes'}]}, { "text": [{ "textline": 'If you’re already registered on Vummly, be sure to use your existing login information to access your saved recipes and profile.'}, { "textline": 'You can create a Vummly account using your email address, Apple ID, or your Facebook or Google accounts.'}]}]
    },
    {
        "idPage": 'android-recipe-pages',
        "title": 'Recipe pages',
        "way": [{ "wayname": 'Vummly Android App', "link": 'android-app'}],
        "data": [{ "text": [{ "textline": 'Vummly boasts 2M+ recipes to choose from. A recipe page is where you find all the details about a recipe you found on our site. Here’s how it works:'}, { "textline": 'The + symbol', "fontweight": 700}, { "textline": 'See a recipe you’d like to cook now, get the ingredients for, or save for later? Tap the + symbol so you can add this dish to:'}], "points": [{ "point": 'Meal Planner', "link": '/support/articles/ios-use-meal-planner'}, { "point": 'Shopping List', "link": '/support/articles/ios-shopping-list-overview'}, { "point": 'Collections', "link": '/support/articles/android-recipe-box'}]}, { "text": [{ "textline": 'Become a Vummly subscriber to enjoy Meal Planner, among other helpful features.'}, { "image": [{ "img": 'android-recipe-pages1.jpeg'}]}, { "textline": 'Recipe Tabs', "fontweight":700}, { "image": [{ "img": 'android-recipe-pages2.jpeg'}]}, { "textline": 'Ingredients', "fontweight": 700}, { "textline": 'Each recipe has a list of ingredients and the option to add some or all to your Shopping List. When viewing a recipe, add individual ingredients to your Shopping List by scrolling down or tapping Ingredients at the bottom of the screen, then the + symbol to the left of the ingredient or Add All to Shopping List at the top to add all of the ingredients at once.'}, { "textline": 'Nutrition', "fontweight": 700}, { "image": [{ "img":'android-recipe-pages3.jpeg'}]}, { "textline": 'Vummly displays the calorie count for all recipes with enough information. Subscribers can also see detailed nutritional values per serving, including fat, carbohydrates, protein, vitamins, minerals, and other information. Add any recipe’s nutrition facts to your Health app to track the nutrients and servings of what you eat:'}], "points": [{ "bold": 'Tap Add to Apple Health', "point": 'and this recipe’s nutrition information will automatically be added to your Health app. '}]}, { "text": [{ "textline": 'Directions', "fontweight": 700}, { "image": [{ "img": 'android-recipe-pages4.jpeg'}]}, { "textline": 'Want to see how to make a recipe? Tap Continue on the Directions tab to open the link to the original webpage where the recipe is published. To return to Vummly, tap x or the Back arrow.'}, { "image": [{ "img": 'android-recipe-pages5.jpeg'}]}, { "textline": "Want to cook along with our unique video recipe formats? On any Pro or Guided Recipe, tap Begin. To stop the cook session before it’s complete, tap the menu in the upper right-hand corner, then Cancel Recipe at the bottom of the screen."}, { "textline": 'Recipe sharing', "fontweight": 700}, { "textline": 'Found a recipe you want to share with family or friends? Tap the upward arrow symbol to send the recipe via a channel of your choice.'}, { "textline": 'Adding to a collection', "fontweight": 700}, { "textline": 'To add a saved recipe to a collection, tap the + button anywhere you see it. Choose Update Collections.'}, { "textline": 'Deleting a Saved recipe from your Collections.', "fontweight": 700}, { "textline": 'Remove a recipe from your recipe box by pressing the three dots in the upper right corner of the recipe picture.  Choose Update Collections, then remove the check mark next to All Yums.'}]}]
    },
    {
        "idPage": 'android-recipe-search',
        "title": 'Android Recipe search',
        "way": [{ "wayname": 'Vummly Android App', "link": 'android-app'}],
        "data": [{ "text": [{ "textline": 'Tap the search icon on the bottom bar, then enter any recipe, dish, diet, cuisine, or ingredient in the search field at the top of the Search screen.'}, { "textline": 'Searching with filters', "fontweight": 700}, { "textline": 'To search for recipes, tap the search icon at the bottom.'}], "points": [{ "bold": 'tap Search for Recipes',  "point": 'at the top of the screen, enter your keyword, then tap search on the onscreen keyboard.'}, { "bold": 'Next, tap FILTER',  "point": 'in the upper right-hand corner to refine your search by prep time, cuisine, course, nutrition content, tastes, or techniques.'}]}, { "text": [{ "bigImage": [{ "img": 'android-recipe-search1.jpeg'}, { "img": 'android-recipe-search2.jpeg'}]}, { "textline": "Were your search results different from what you're looking for?", "fontweight": 700}, { "textline": 'Subscribe to Vummly to use search filters for more accurate results!  Be sure that you do not have too many Preferences applied to your account (i.e. Vegan, Keto and Pescatarian preferences will only show recipes that fit all preferences) If you see a recipe that does not fit your Dietary Preference or Search results, please let us know via the Report Issue button located at the bottom of every recipe page in Vummly.'}]}]
    },
    {
        "idPage": 'android-recipe-box',
        "title": 'Recipe box',
        "way": [{ "wayname": 'Vummly Android App', "link": 'android-app'}],
        "data": [{ "text": [{ "textline": 'Easily access all the recipes you’ve saved by selecting the profile icon from the navigation menu of the app (center icon that resembles a person). Whether you Yum a recipe on our website ,our mobile apps or using your bookmarklet, your recipes will always be available on all of your devices.'}, { "bigImage": [{ "img": 'android-recipe-box1.jpeg'}]}], "points": [{ "bold": 'To save a recipe', "point": "to a particular collection you’ve created, click the three dots in the upper right corner of the recipe's picture, then select Update or Add to Collections"}, { "bold": 'Add a recipe directly to your Meal Plan'}, { "image": [{ "img": 'android-recipe-box2.jpeg'}]}, { "bold": 'To add a new collection to your recipe box,', "point": "press the '+ New Collection' icon at the top of the recipe box."}, { "bold": 'Remove a recipe from your recipe box', "point": 'by pressing the three dots in the upper right corner of the recipe picture.  Choose Update Collections, then remove the check mark from the Yummed box'}, { "bold": 'To Share or delete a collection, or edit a collection name,', "point": "select the collection you want, tap on the 3 dots icon at the top right of the page, select 'Edit,' then enter the new collection name."}, { "image": [{ "img": 'android-recipe-box3.jpeg'}]}]}]
    },
    {
        "idPage": 'android-recommendations',
        "title": 'Recipe recommendations',
        "way": [{ "wayname": 'Vummly Android App', "link": 'android-app'}],
        "data": [{ "text": [{ "textline": 'Tell us about your diet needs, allergies, and favorite cuisines, and we’ll suggest recipes just for you. The more recipes you save, the better we’ll get to know your tastes and the more accurately we can cater to them. '}, { "textline": 'Browse personalized recipe recommendations based on your Yums and preferences.'}, { "textline": 'To get recipe recommendations, Yum at least five recipes. '}, { "textline": 'Every time you open the app or Yum a recipe, your recipe recommendations get updated. Just look for fresh recipes in your home feed.'}, { "textline": "If you have a Vummly account and set your dietary preferences, that will also affect your recipe recommendations. Add the ingredients you dislike, diets, and allergies, and we'll serve up recipes that match your preferences. To set or update your dietary preferences, select the profile icon on the navigation bar at the bottom, then the settings icon at the top, and tap Dietary Preferences."}]}]
    },
    {
        "idPage": 'android-and-basic-troubleshooting',
        "title": 'Android app Basic troubleshooting',
        "way": [{ "wayname": 'Vummly Android App', "link": 'android-app'}],
        "data": [{ "text": [{ "textline": 'If you’re having an issue with the Android app, try these basic troubleshooting steps:'}], "points": [{ "point": 'Make sure you’re using the latest version of our app'}, { "point": 'Delete the app and re-download it from Google Play'}, { "point": 'Restart your device'}] }]
    },
    {
        "idPage": 'android-home-feed',
        "title": 'Home Feed',
        "way": [{ "wayname": 'Vummly Android App', "link": 'android-app'}],
        "data": [{ "text": [{ "textline": 'Your home feed will show a variety of recipes labeled by category. If you’re signed into your account, you’ll see recipe recommendations based on your Yums and dietary preferences. To improve your recommendations, be sure to:'}], "points": [{ "point": 'Save at least five recipes (the more you Yum, the more helpful our recommendations become)'}, { "point": 'Set up your dietary preferences'}, { "point": "Review recipes you've made so we can get to know your tastes better"}]}, { "text": [{ "textline": 'Are your recipe recommendations too similar? Yum different types of recipes to get more varied recommendations.'}, { "textline": "Recipe recommendations don't match your dietary preferences? Check whether you’re signed into your Vummly account and make sure your dietary preferences are set."}]}]
    },
    {
        "idPage": 'android-sign-in-issue',
        "title": 'Sign-in issues',
        "way": [{ "wayname": 'Vummly Android App', "link": 'android-app'}],
        "data": [{ "text": [{ "textline": 'Make sure you are signing in with the correct account you created your Vummly account with: Facebook, Google+, or Email.'}, { "textline": 'If you are unable to sign in to your account, make sure you have the most updated version of our app and try restarting the app then signing in again.'}, { "textline": 'Forgot your password?', "fontweight": 700}, { "textline": `You can get a reset password email sent to you from our website Vummly.com.  This cannot be done through the app at this time.  Go to Vummly.com and click Sign in. Enter your email address, and the password screen will appear with a "Forgot Password" Button at the bottom.  If you don't see the email in your inbox, double check your spam folder. Following the link provided in the email will allow you to reset your password and sign in to your account.`}]}, { "text": [{ "textline": "Can't sign in with your Facebook account?", "fontweight":700},{ "textline": 'Try resetting Vummly on your Facebook and restarting the app:'}], "points": [{ "point": 'Open Facebook and sign in to your account'}, { "point": 'Go to Settings > Apps > Remove Vummly from the list'}, { "point": 'Restart the Vummly app on your device'}, { "point": 'Sign in with your Facebook account'}] }]
    },
    {
        "idPage": 'android-recipe-search-results-issues',
        "title": 'Recipe search results',
        "way": [{ "wayname": 'Vummly Android App', "link": 'android-app'}],
        "data": [{ "text": [{ "textline": "Were your search results different from what you're looking for?", "fontweight": 700}, { "textline": 'If you have a Vummly account, you can also set your Dietary Preferences which will always show you recipes based on your Disliked Ingredients, Diets, and Allergies. Make sure you do not have conflicting preferences (i.e. Vegetarian and Pescatarian.)'}, { "textline": 'If you see an error message when you click the Read Directions button, it may be a browser compatibility issue.'}, { "textline": 'Vummly works with the preferred browser on your device to open recipe directions.'},{ "textline": 'We recommend using Google Chrome as the preferred browser on your device, as it is the most compatible with the Vummly app for opening recipe directions.Go to the settings app on your phone and select Google Chrome as the preferred browser'}, { "image": [{ "img": 'android-recipe-search-results-issues.png'}]}]}]
    },
    {
        "idPage": 'android-saved-recipes-missing',
        "title": 'My saved recipes are missing',
        "way": [{ "wayname": 'Vummly Android App', "link": 'android-app'}],
        "data": [{ "text": [{ "textline": "Don't panic! Double check to make sure you are signed in to the correct Vummly account and restart your app. You may have accidentally created a new account."}, { "textline": 'You can sign in to your account on our website to ensure your saved recipes are still saved in your Recipe Box.'}, { "textline": 'If you created your Vummly account with your Facebook or Google+ account, make sure you are signed in to that account on your device before signing in to your Vummly account.'}]}]
    },
    {
        "idPage": 'android-printing-recipes',
        "title": 'Printing recipes',
        "way": [{ "wayname": 'Vummly Android App', "link": 'android-app'}],
        
        "data": [{ "text": [{ "textline": "There currently isn't an option to print recipes from our apps. We suggest emailing the recipe to yourself and printing the recipe from your email or another device. To email a recipe, press the 'Share' button on the recipe you want to share, then press the 'Mail' icon."}]}]
    },
    {
        "idPage": 'android-virtual-pantry',
        "title": 'What is Virtual Pantry?',
        "way": [{ "wayname": 'Vummly Android App', "link": 'android-app'}],
        "data": [{ "text": [{ "textline": "Your Virtual Pantry is a list of the ingredients you have on hand. With this digital inventory, you can:"}], "points": [{ "point": 'Find recipes for the ingredients you have'}, { "point": 'Get alerts when items are running low or are about to expire'}, { "point": 'Know exactly what to buy'}]}, { "text": [{ "textline": "Use the Add button to stock your Virtual Pantry. Select recommended items, type in custom ingredients, or simply scan the inside of your cupboard with your phone's camera."}]}]
    },
    {
        "idPage": 'android-how-does-vr-pantry-money',
        "title": 'How does Virtual Pantry save me money?',
        "way": [{ "wayname": 'Vummly Android App', "link": 'android-app'}],
        "data": [{ "text": [{ "textline": "Use the Pantry-Ready filter to search for recipes using items you already have in your pantry, so you can buy less and avoid wasting food. The better stocked your Virtual Pantry is, the better your search results will be."}, { "textline": `Before searching, be sure to review any items in the "Running Low" and "Expiring Items" categories in your Virtual Pantry — these ingredients won't be included in your search results until you confirm you still have them on hand. All out? Add them to your Shopping List with a click.`}]}]
    },
    {
        "idPage": 'android-vummly-running-low-or-expiring',
        "title": 'How does Vummly know when my ingredients are Running Low or Expiring?',
        "way": [{ "wayname": 'Vummly Android App', "link": 'android-app'}],
        "data": [{ "text": [{ "textline": "Vummly uses data from multiple databases to determine the average shelf-life of each unique ingredient in your Virtual Pantry. We may also use information about recipes you've told us you made recently and how frequently you add an item to your Shopping List to estimate when you have likely used everything up. Once we've determined that an ingredient is either Running Low or Expiring, we'll move them to that category and prompt you to take a look and confirm."}, { "textline": `Something look not-quite-right? You can edit the expiration date or category of any ingredient in your pantry by swiping left on the ingredient and selecting "Edit" from the menu. Note that items in the Running Low or Expiring Items categories aren't included in your Pantry-Ready recipe search results.`}]}]
    },
    {
        "idPage": 'android-acces-from-other-devices',
        "title": 'Can I access my Virtual Pantry from other devices?',
        "way": [{ "wayname": 'Vummly Android App', "link": 'android-app'}],
        "data": [{ "text": [{ "textline": "Virtual Pantry for iOS and web are currently under development. For now, enjoy your pantry experience on any Android mobile device."}]}]
    },
    {
        "idPage": 'android-shopping-list-and-vr-pantry',
        "title": 'How do the Shopping List and Virtual Pantry work together?',
        "way": [{ "wayname": 'Vummly Android App', "link": 'android-app'}],
        "data": [{ "text": [{ "textline": "Like peanut butter and chocolate, the Shopping List and Virtual Pantry work even better together."}], "points": [{ "point": "When you check off items in your Shopping List, they're automatically added to your Virtual Pantry so it stays up to date."}, { "point": 'When items in your Pantry are running low or expiring, you can add them to your Shopping List with one click or tap.'}, { "point": 'When you’re looking at recipes, the ingredients list will tell you what you already have in your Virtual Pantry, so you can quickly add just the items you need to your Shopping List.'}]}]
    },
    {
        "idPage": 'how-vummly-works',
        "title": 'How Vummly works',
        "way": [{ "wayname": 'Publisher Help Topics', "link": 'publisher-help-topics'}],
        "data": [{ "text": [{ "textline": 'Vummly puts every recipe in the world in your pocket. The most powerful recipe search, the recipe sites you love, your digital recipe box, recipe recommendations just for you, and a smart shopping list — all with you wherever you go. Vummly has the #1 iPhone, iPad, and Android apps in addition to millions of website visitors. As recipes get more Yums, they get exposed more often throughout all of our platforms and features.'}, { "textline": 'How to get your recipes on Vummly', "fontweight": 700}, { "textline": 'The best "way" to get your recipes on Vummly is to add the Yum button to your blog or website. Once the Yum button is up, make sure you or your readers Yum your recipes so we can make sure to get them all on Vummly.'}, { "textline": 'Best practices to increase exposure', "fontweight": 700}, { "textline": 'More Yums on your recipes equals more traffic. Bloggers who educate their readers, encourage use of Vummly, and promote their Vummly publisher page see more Yums and more traffic. Volume of recipes is also a factor. More recipes on Vummly will lead to more referral traffic from us.'}, { "textline": 'Publisher pages on Vummly', "fontweight": 700}, { "textline": 'Currently, there is not an option for you to access and change your publisher page. In the meantime, we will update your page for you if you'},{ "textline": 'fill out this form:', "fontweight": 700, "link": 'https://github.com/escoutdoor'}, { "textline": 'Finding your publisher page', "fontweight": 700}, { "textline": "If you've added the Yum button and started yumming your recipes, a publisher page will be automatically created for your blog on Vummly. To find this, you can go to your personal user profile on Vummly and check to see if the recipe you Yummed has processed yet. Once it has processed, it will show a link on the recipe card to your publisher page. If you need help finding this page, email", "mail": 'vanap387@gmail.com'}]}]
    },
    {
        "idPage": 'get-discovered',
        "title": 'Get discovered even faster',
        "way": [{ "wayname": 'Publisher Help Topics', "link": 'publisher-help-topics'}],
        "data": [{ "text": [{ "textline": 'Want your recipes on Vummly and the opportunity to have them featured in front of over 15 million monthly users on the site, in our #1 recipe apps, and in our emails and social media?'}, { "textline": 'FOLLOW THESE STEPS:', "fontweight": 700}], "points": [{ "bold": 'Add the Yum button to your blog.', "point": 'You can add it directly, via the Vummly recipe plugin, or via social sharing plugins like AddToAny, Shareaholic, or Simple Share buttons.'}, { "bold": 'Introduce your readers to Vummly!', "point": 'Share a post on your blog about being a publisher on Vummly and let your readers know that they can use the Yum button to save your recipes to their personal recipe box. Direct them to your Vummly publisher page so they can easily find and Yum your recipes.'}, { "bold": 'Tip:', "point": 'You want your readers to Yum your recipes because more Yums equals more eyes on your content and increased referral traffic to your site!'}, { "bold": 'Personalize your Publisher Page!', "point": "Once you've completed the above steps, you can add your social media links, a Profile picture, and a brief description of your site to Vummly by filling out this form."}]}]
    },
    {
        "idPage": 'best-practices-guidelines',
        "title": 'Best practices/guidelines',
        "way": [{ "wayname": 'Publisher Help Topics', "link": 'publisher-help-topics'}],
        "data": [{ "text": [{ "textline": 'For most recipe sites, Vummly is often one of the top referral sources. Alongside the quality and popularity of a particular site, we also consider a few other factors that may affect a user’s experience negatively. Any one or combination of these factors can result in diminished or no referral traffic.'}, { "textline": 'iFrame:', "fontweight": 700}, { "textline": 'Vummly uses iFrame to display recipe directions. This works in the same "way" as Facebook, where the source page is loaded within the page the user is on in order to provide the best experience. Whenever a recipe page is loaded it functions just at it normally would, including driving traffic numbers. If a source site blocks iFrames then directions won’t display. In turn, these recipes sources may be shown less frequently or not at all on Vummly as they create an incomplete experience for the user.'}, { "textline": 'Popups:', "fontweight": 700}, { "textline": 'Should a site have aggressive popups, like those that cover a recipe entirely, are insistent on email subscriptions or social following, or that are ads, it will generally be considered not as great of a user experience. In turn, these recipe sources may be shown less frequently and/or rank lower in results on Vummly.'}, { "textline": 'Ads:', "fontweight": 700}, { "textline": 'While advertising is a necessity on most sites, advertising that appears gratuitously throughout the body of a recipe creating excess effort on the user’s part to get to the directions is considered a poor user experience. In turn, these recipe sources may be shown less frequently and/or rank lower in results on Vummly.'}, { "textline": 'Auto-play Videos:', "fontweight": 700}, { "textline": 'Videos located within the recipe that auto-play with the audio on that have little or nothing to do with the recipe are considered bad user experience. It will be considered whether videos are meaningful or seemingly included for ad impressions. These recipe sources may be shown less frequently and/or rank lower in results on Vummly.'}, { "textline": 'Bad translations:', "fontweight": 700}, { "textline": 'Recipes that appear to be poorly translated into English and/or are difficult to understand are not considered a good user experience. These recipe sources may be shown less frequently and/or rank lower in results on Vummly.'}]}]
    },
    {
        "idPage": 'yumm-butt-ur-site',
        "title": 'How to add the Yum button to your site',
        "way": [{ "wayname": 'Publisher Help Topics', "link": 'publisher-help-topics'}],
        "data": [{ "text": [{ "textline": 'Follow the instructions below to add the Yum button:'}]}, { "text": [{ "textline": 'Blogger', "fontweight": 700}], "points": [{ "point": 'Copy the HTML code shown in the box on this page', "link": 'https://www.vummly.com/goodies/yumbutton?platform=blogger'}, { "point": 'Open your Blogger site editor tools & select ‘Template’ from the navigation options'}, { "point": "Select the ‘Edit HTML’ button from the Template page"}, { "point": 'Place your cursor anywhere inside the template HTML then select Command+F to display a Search box.'}, { "point": "Enter ‘post-header’ into the Search box and then ‘Return’"}, { "point": "Insert the Yum Button HTML code immediately after the </div> following the 'post-header-line-1' section as shown in the screenshot below. There will likely be 2 instances of this post-header code, so make sure to add the Yum button code after both instances."}, { "point": 'Select Preview to view the Yum Button is displaying properly and then Save Template.  '}]}, { "text": [{ "textline": 'Wordpress.org', "fontweight": 700}], "points": [{ "point": 'Open your Wordpress site Editor feature (in the Appearance menu) and locate your post or content php template files'}, { "point": 'Identify where you would like to position the Yum Button within your recipe page.'}, { "point": 'Copy & paste  the HTML code for Wordpress.org blogs from here into the appropriate .php file based on where you intend for the Yum Button to appear on your site.'},{ "point": 'Select Update File and view your blog to verify the Yum Button is displaying properly.'}]}, { "text": [{ "textline": 'Wordpress.org (Genesis theme):', "fontweight": 700}, { "textline": 'With the Genesis Theme, you can use the Simple Hooks Plugin to easily add the Yum button code to your site. Ellen blogs give a great tutorial on this here:', "link": 'http://ellenblogs.com/how-to-add-just-a-vummly-button-to-your-recipes/'}, { "textline": 'Wordpress.com (non-hosted):', "fontweight": 700}, { "textline": 'If you have a wordpress.com blog, you can add the Yum button within Sharedaddy via Jetpack (the default sharing option).'}], "points": [{ "point":'In your wordpress blog dashboard, go to Settings>>Sharing.'}, { "point":'Click "Add a new service" under Available Services.'}, { "point":'Fill out the form and click Create Share Button.'}, { "point":'Sharing url', "link": 'https://github.com/naaaasty'}, { "point":'Icon url', "link": 'https://github.com/naaaasty'}, { "point":'Drag the Vummly button down to Enabled Services.'}, { "point":'Click Save Changes at the bottom of the page.'}]}, { "text": [{ "textline": '*Note: The above method does not allow for an image preview when the Yum button is clicked, but the image will show up on the recipe on Vummly once processed.'}, { "textline": 'Squarespace', "fontweight": 700}], "points": [{ "point": "Grab the Yum button code after selecting the option for 'other'."}, { "point": 'Insert the code using a code block on your Squarespage blog by following steps:', "link": 'https://support.squarespace.com/hc/en-us/articles/206543167'}]}, { "text": [{ "textline": 'Adding the Yum button via share plugins/widgets:', "fontweight": 700}, { "textline": 'If you use SumoMe, Shareaholic, AddThis, Po.st, Simple Share Buttons, AddToAny, or E-MAILiT you can add the Yum button as a service.'}], "points": [{ "bold": 'SumoMe:', "point": 'Drag Vummly from the available services list across to the selected services in the plugin settings. (They offer the Yum button via image hover!)'}, { "bold": 'Shareaholic:', "point": 'Just search "Vummly" from their list of sharing services when adding a new button to the lineup', "link": 'https://www.shareaholic.com/publishers'}, { "bold": 'AddThis:', "point": 'Within the Share button settings, choose "Select your own". Search for Vummly, then drag it over to the selected services box.'}, { "bold": 'Simple Share Buttons:', "point": 'Use either their "plus" version or their free Wordpress plugin and add Vummly via their lineup of button options.'}, { "bold": 'Po.st:', "point": 'When you are in settings of the WordPress plugin scroll until you see the sharing channels available. Add the Yum button to your tool and click Save changes.'}, { "bold": 'AddToAny:', "point": 'Click "customize" and find Vummly in the additional sharing options (listed alphabetically)'}, { "bold": 'E-MAILiT:', "point": 'Select Vummly from their sharing menu.'}]}, { "text": [{ "textline": 'If you use another sharing plugin and Vummly doesn’t show up, you can contact them and ask them to add us!'}], "points": [{ "point": 'Sharethis', "mail": 'support@sharethis.com'}]}]
    },
    {
        "idPage": 'plugins-yumm-butt',
        "title": 'Adding the Yum button via plugins',
        "way": [{ "wayname": 'Publisher Help Topics', "link": 'publisher-help-topics'}],
        "data": [{ "text": [{ "textline": 'If you install the Vummly Rich Recipes wordpress plugin, a Yum button is automatically added to your formatted recipe.'}, { "textline": 'If you use SumoMe, Shareaholic, AddThis, Po.st, Simple Share Buttons, AddToAny, or E-MAILiT you can add the Yum button as a service.'}], "points": [{ "bold": 'SumoMe:', "point": 'Drag Vummly from the available services list across to the selected services in the plugin settings. (They offer the Yum button via image hover!)'}, { "bold": 'Shareaholic:', "point": 'Just search "Vummly" from their list of sharing services when adding a new button to the lineup', "link": 'https://www.shareaholic.com/publishers'}, { "bold": 'AddThis:', "point": 'Within the Share button settings, choose "Select your own". Search for Vummly, then drag it over to the selected services box.'}, { "bold": 'Simple Share Buttons:', "point": 'Use either their "plus" version or their free Wordpress plugin and add Vummly via their lineup of button options.'}, { "bold": 'Po.st:', "point": 'When you are in settings of the WordPress plugin scroll until you see the sharing channels available. Add the Yum button to your tool and click Save changes.'}, { "bold": 'AddToAny:', "point": 'Click "customize" and find Vummly in the additional sharing options (listed alphabetically)'}, { "bold": 'E-MAILiT:', "point": 'Select Vummly from their sharing menu.'}]}, { "text": [{ "textline": 'If you use another sharing plugin and Vummly doesn’t show up, you can contact them and ask them to add us!'}], "points": [{ "point": 'Sharethis', "mail": 'support@sharethis.com'}]}, { "text": [{ "textline": 'Sharedaddy on wordpress.com blogs:', "fontweight":700}, { "textline": 'If you have a wordpress.com blog, you can add the Yum button within Sharedaddy via Jetpack (the default sharing option).'}], "points": [{ "point":'In your wordpress blog dashboard, go to Settings>>Sharing.'}, { "point":'Click "Add a new service" under Available Services.'}, { "point":'Fill out the form and click Create Share Button.'}, { "point":'Sharing url', "link": 'https://github.com/naaaasty'}, { "point":'Icon url', "link": 'https://github.com/naaaasty'}, { "point":'Drag the Vummly button down to Enabled Services.'}, { "point":'Click Save Changes at the bottom of the page.'}]}, { "text": [{ "textline": '*Note: The above method does not allow for an image preview when the Yum button is clicked, but the image will show up on the recipe on Vummly once processed.'}, { "textline": 'If you have any trouble adding or using the Yum button, send a request to our support team and include the url of your site, and any other pertinent links, details, and screenshots.'}]}]
    },
    {
        "idPage": 'yumm-butt-via-img-hover',
        "title": 'Add the Yum button via image hover',
        "way": [{ "wayname": 'Publisher Help Topics', "link": 'publisher-help-topics'}],
        "data": [{ "text": [{ "textline": 'SumoMe Share offers the Yum button (and other social share buttons) in many formats, including via image hover.'}, { "textline": 'Get SumoMe here:', "link": 'http://sumome.com/app/share'}, { "bigImage": [{ "img": 'yumm-butt-via-img-hover.png'}]}, { "textline": 'Cookies above via Love and Meatballs.', "fontstyle": 'italic'}]}]
    }
]




export {articles}

const section = [
    {
        own: 'getting-help',
        list : [{ "name": 'Contact us', "link": 'contact-us'}],
    },
    {
        own: 'cooking-the-perfect-prime-rib-or-rib-roast',
        list : [{ "name": 'How long does a roast need to rest?', "link": 'roast-need-to-rest'}],
    },
    {
        own: 'coocking-a-turkey',
        list : [{ "name": 'How to cook the perfect turkey', "link": 'perfect-turkey-guide'}, { "name": 'For Best Results', "link": 'best-results'}],
    },
    {
        own: 'troubleshooting',
        list : [{ "name": 'Thermometer not found', "link": 'thermometer-not-found'}, { "name": 'Inaccurate results', "link": 'inaccurate-results'}, { "name": "Smart Thermometer won't charge in dock", "link": 'thermometer-will-not-charge-in-dock'}, { "name": 'Smart Thermometer disconnected during cooking', "link": 'disconnected-during-cooking'}, { "name": 'How do I reset the Smart Thermometer?', "link": 'reset-thermometer'}, { "name": 'Where can I get further assistance?', "link": 'where-can-i-get-further-assistance'}],
    },
    {
        own : 'connecting-pairing',
        list : [{ "name": 'How do I connect/pair the Smart Thermometer to my phone?', "link": 'connect-thermometer-to-phone'}, { "name": 'What is the docking station for?', "link": 'what-is-docking-station-for'}, { "name": "Where should I place the dock when cooking/not cooking?", "link": 'place-dock-coocking-not-coocking'}, { "name": 'How do I install batteries and charge my Smart Thermometer?', "link": 'install-and-charge-thermometer'}, { "name": 'How do I turn the Smart Thermometer on/off?', "link": 'turnon-turnoff-thermometer'}, { "name": 'What is the thing/tool on the bottom of the dock?', "link": 'bottom-dock-tool'}, { "name": 'Where should I place my phone/tablet when cooking to ensure the app and thermometer stay connected?', "link": 'phone-tablet-place-when-coocking'}, { "name": 'How do I check the charge status?', "link": 'check-charge-status'}, { "name": 'What do the LED lights mean?', "link": 'led-lights-meaning'}],
    },
    {
        own: 'coocking-with-thermometer',
        list : [{ "name": 'Quick start guide', "link": 'quick-start-guide'}, { "name": 'Where should I place the dock when cooking?', "link": 'place-dock-when-coocking'}, { "name": "Can I use it for anything other than meat?", "link": 'anything-other-than-meat'}, { "name": 'Cooking with metallic foil', "link": 'coocking-with-metallic-foil'}, { "name": 'Can I air fry?', "link": 'can-i-air-fry'}, { "name": 'Can I deep fry?', "link": 'can-i-deep-fry'}, { "name": 'Can I sous vide?', "link": 'can-i-sous-vide'}, { "name": 'Can I use the Smart Thermometer on my BBQ grill?', "link": 'thermometer-on-bbq-grill'}],
    },
    {
        own: 'care-instructions',
        list : [{ "name": 'Is the Smart Thermometer waterproof?', "link": 'thermometer-water-proof'}, { "name": 'Is the Smart Thermometer dishwasher safe?', "link": 'thermometer-dishwasher-safe'}, { "name": "How do I clean my Smart Thermometer?", "link": 'how-to-clean-thermometer'}],
    },
    {
        own: 'vummly-app',
        list : [{ "name": 'Do I need to create an account?', "link": 'do-i-need-to-create-an-acc'}, { "name": 'Is the Yummly® app free?', "link": 'is-vummly-app-free'}, { "name": "Where can I download the Vummly app?", "link": 'where-i-can-download-vummly-app'}, { "name": 'Do I need to use the Vummly app with the Smart Thermometer?', "link": 'do-i-need-to-use-vummly-app-with-thermometer'}, { "name": 'Updating your iOS device', "link": 'updating-your-iOS-device'}, { "name": "Updating your Android device", "link": 'updating-your-Android-device'}],
    },
    {
        own: 'multiple-thermometers',
        list : [{ "name": 'How to add multiple thermometers', "link": 'how-to-add-multiple-thermometers'}, { "name": 'Navigating while multiple thermometers are cooking.', "link": 'navigationg-while-multiple-thermometers-are-coocking'}, { "name": "How to edit thermometer names while cooking", "link": 'how-to-edit-thermometer-names-while-coocking'}, { "name": 'Does it matter which docks I put my thermometers back into when my food is ready?', "link": 'does-it-matter-which-docks-I-put-my-thermometers-back-into-when-my-food-is-ready'}, { "name": 'How do I reconnect one of my thermometers to its dock during a cook session?', "link": 'reconnect-one-of-my-thermometers-to-its-dock-during-cook-session'}, { "name": "Can I connect more than one Vummly Smart Thermometer at a time?", "link": 'reconnect-more-than-one-vummly-start-thermometer-at-a-time'}],
    },
    {
        own: 'sensor',
        list : [{ "name": 'How does the ambient temperature sensor work?', "link": 'how-does-temperature-sensor-work'}]
    },
    {
        own: 'warranty-returns-and-shipping',
        list : [{ "name": 'What is your return policy?', "link": 'what-is-return-policy'}, { "name": 'Is shipping free/how long does it take?', "link": 'is-shipping-free'}, { "name": 'Do you ship internationally?', "link": 'do-you-ship-internationally'}, { "name": 'What is the warranty policy?', "link": 'what-is-warranty-policy'}, { "name": 'How do I track my order?', "link": 'track-my-order'}, { "name": 'I want to return my Smart Thermometer', "link": 'return-thermometer'}, { "name": 'What model do I have?', "link": 'what-model-do-i-have'}, { "name": 'Where can I find the serial number of my thermometer?', "link": 'find-serial-number-thermometer'}]
    },
    {
        own: 'tech-specifications',
        list : [{ "name": 'Technical specifications', "link": 'tech-specifications'}, { "name": 'How long do batteries last?', "link": 'how-long-do-batteries-last'}, { "name": 'What type of batteries are required?', "link": 'what-type-of-batteries-are-required'}, { "name": 'Where can I find the user manual?', "link": 'find-user-manual'}, { "name": 'What comes in the box with the Smart Thermometer?', "link": 'what-comes-with-thermometer'}, { "name": 'Requirements for using the Smart Thermometer', "link": 'requirements-for-using-thermometer'}]
    },
    {
        own: 'getting-started',
        list: [{ "name": "What's included in my Vummly subscription?", "link": 'including-sub'}, { "name": 'Am I automatically enrolled in the paid subscription?', "link": 'auto-enrolled-in-paid-sub'}, { "name": 'Does my subscription include a Yummly® Smart Thermometer?', "link": 'sub-include-thermomter'}, { "name": 'Do I need a subscription to use my Yummly® Smart Thermometer?', "link": 'do-i-need-a-sub-to-use-thermometer'}, { "name": 'Why is subscription not available in my region?', "link": "why-sub-isn't-available-in-my-region"}, { "name": "What's so special about Vummly's subscriber-only recipes?", "link": 'only-for-subs-recipes'}, { "name": 'Tell me more about the Vummly Meal Planner.', "link": 'more-about-the-meal-planner'}]
    },
    {
        own: 'subs-and-payments',
        list: [{ "name": "I'm a subscriber and don't want to renew my subscription. What do I do?", "link": 'do-not-want-to-renew-sub'}, { "name": 'How much does a Vummly subscription cost?', "link": 'sub-cost'}, { "name": 'Will I be charged if I cancel before the free trial is over?', "link": 'free-trial-sub'}, { "name": 'If I cancel before the free trial is over, can I still access content?', "link": 'if-i-cancel-before-the-free-trial-sub'}, { "name": 'Does my subscription automatically renew?', "link": "does-my-sub-renew-auto"}, { "name": "How do I update my payment method through the web?", "link": 'update-payment-through-the-web'}]
    },
    {
        own: 'vummly-pro-recipes',
        list: [{ "name": "What are Vummly Pro recipes?", "link": 'what-are-vummly-pro-recipes'}, { "name": 'How do Vummly Pro videos work?', "link": 'how-do-vummly-pro-videos-work'}, { "name": 'Do Vummly Pro recipes work on my device?', "link": 'do-vummly-pro-recipes-work-on-my-device'}, { "name": 'Do Vummly Pro recipes work with my Whirlpool connected oven?', "link": 'work-with-whirlpool'}]
    },
    {
        own: 'nift-gift-card',
        list: [{ "name": "Does my Nift gift card expire?", "link": 'nift-card-expire'}, { "name": 'What is Nift doing with my information?', "link": 'nift-doing-with-my-info'}, { "name": 'What do I do if my selected gift is worth less or more than $30?', "link": 'what-do-i-do-if-selected-gift-worthless-more-30$'}, { "name": 'Why do I see limited gift options?', "link": 'gift-limited-options'}, { "name": 'How do I use my Nift gift?', "link": 'how-do-i-use-nift-gift'}, { "name": 'What is a Nift gift card?', "link": 'what-is-nift-gift-card'}]
    },
    {
        own: 'getting-started-web-help-topics',
        list : [{ "name": 'What is Vummly?', "link": 'what-is-vummly'}, { "name": 'How to use Vummly', "link": 'how-to-use-vummly'}, { "name": 'Adding recipes to Vummly from other sites', "link": 'adding-recipes-to-vummly-from-other-sites'}, { "name": 'Discovering recipes', "link": 'discovering-recipes'}, { "name": 'Website Recipe search', "link": 'web-search-recipe'}, { "name": 'Recipe box', "link": 'recipe-box'}]
    },
    {
        own: 'fix-a-common-problem',
        list : [{ "name": 'Account & password problems', "link": 'acc-and-pass-problems'}, { "name": 'Recipe problems', "link": 'recipe-problems'}, { "name": 'Collection problems', "link": 'collection-problems'}, { "name": 'Recipe recommendation issues', "link": 'recipe-recommendation-issues'}, { "name": 'Recipe search result problems', "link": 'recipe-search-result-problem'}]
    },
    {
        own: 'organizing-recipes',
        list: [{ "name": 'Recipe box', "link": 'recipe-box-organazing'}, { "name": 'Collections', "link": "collections"}, { "name": 'How can I add items to my Shopping List on the website?', "link": 'shopping-list-add'}, { "name": 'How do I make changes to my Meal Plan on the website?', "link":'meal-plan-changes'}, { "name": 'How do I add recipes to my Meal Plan on the website?', "link": 'meal-plan-adding'}],
    },
    {
        own: 'your-acc',
        list: [{ "name": 'Logging in to the website', "link": 'loggining-in-to-the-website'}, { "name": 'Your profile', "link": 'your-profile'}, { "name": 'Taste preferences', "link": 'taste-preferences'}, { "name": 'Website Account settings', "link": 'web-acc-settings'}]
    },
    {
        own: 'acc-deactivation',
        list: [{ "name": 'Unsubscribe from emails', "link": 'unsub-emails'}, { "name": 'Delete account', "link": 'delete-acc'}, { "name": 'Change the email address on your account', "link": 'change-the-email'}]
    },
    {
        own: 'ios-getting-started',
        list: [{ "name": 'Recipe pages', "link": 'recipe-pages'}, { "name": 'iOS Recipe search', "link": 'ios-recipe-search'}, { "name": 'Recipe box', "link": 'ios-recipe-box'}, { "name": 'Recipe recommendations', "link": 'ios-recipe-recommendations'}, { "name": 'Account settings', "link": 'ios-acc-settings'}, { "name": 'Ingredient Recognition', "link": 'ios-ing-recognition'}]
    },
    {
        own: 'ios-explore-help-topics',
        list: [{ "name": 'iOS app Basic troubleshooting', "link": 'ios-and-basic-troubleshooting'}, { "name": 'Home Feed', "link": 'ios-home-feed'}, { "name": 'Sign-in issues', "link": 'ios-sign-in-issue'}, { "name": 'Adding new recipes to the Vummly app from a website', "link": 'ios-adding-new-recipes-from-website'}, { "name": 'My saved recipes are missing', "link": 'ios-saved-recipes-missing'}]
    },
    {
        own: 'ios-meal-planner',
        list: [{ "name": 'How do I use the Vummly Meal Planner?', "link": 'ios-use-meal-planner'}, { "name": 'Where can I find the Meal Planner?', "link": 'ios-find-meal-planner'}, { "name": 'Where do my Meal Plan recommendations come from?', "link": 'ios-meal-recomm-from'}, { "name": 'How do I find out more about a recipe in my Meal Plan recommendations?', "link": 'ios-find-out-more-rec-recomm'}, { "name": 'Do you have any meal planning tips for me?', "link": 'ios-tips-meal-planning'}]
    },
    {
        own: 'ios-shopping-list',
        list: [{ "name": 'Shopping List Overview', "link": 'ios-shopping-list-overview'}, { "name": 'Can I buy ingredients through Vummly?', "link": 'ios-buy-ingr-vummly'}, { "name": 'Can I access my Shopping List on different devices?', "link": 'ios-diff-devices-shopping-list'}, { "name": 'How do I move ingredients to a different shopping aisle?', "link": 'ios-move-ingr-to-a-diff-shopping-list'}]
    },
    {
        own: 'android-getting-started',
        list: [{ "name": 'Android app overview', "link": 'andriod-app-overview'}, { "name": 'Getting the Android app', "link": 'android-getting-app'}, { "name": 'Recipe pages', "link": 'android-recipe-pages'}, { "name": 'Android Recipe search', "link": 'android-recipe-search'}, { "name": 'Recipe box', "link": 'android-recipe-box'}, { "name": 'Recipe recommendations', "link": 'android-recommendations'}]
    },
    {
        own: 'android-explore-help-topics',
        list: [{ "name": 'Android app Basic troubleshooting', "link": 'android-and-basic-troubleshooting'}, { "name": 'Home Feed', "link": 'android-home-feed'}, { "name": 'Sign-in issues', "link": 'android-sign-in-issue'}, { "name": 'Recipe search results', "link": 'android-recipe-search-results-issues'}, { "name": 'My saved recipes are missing', "link": 'android-saved-recipes-missing'}, { "name": 'Printing recipes', "link": 'android-printing-recipes'}]
    },
    {
        own: 'android-virtual-pantry',
        list: [{ "name": 'What is Virtual Pantry?', "link": "android-virtual-pantry"}, { "name": 'How does Virtual Pantry save me money?', "link": 'android-how-does-vr-pantry-money'}, { "name": 'How does Vummly know when my ingredients are Running Low or Expiring?', "link": 'android-vummly-running-low-or-expiring'}, { "name": 'Can I access my Virtual Pantry from other devices?', "link": 'android-acces-from-other-devices'}, { "name": 'How do the Shopping List and Virtual Pantry work together?', "link": 'android-shopping-list-and-vr-pantry'}]
    },
    {
        own: 'vummly-for-publishers',
        list: [{ "name": 'How Vummly works', "link": 'how-vummly-works'}, { "name": 'Get discovered even faster', "link": 'get-discovered'}, { "name": 'Best practices/guidelines', "link": 'best-practices-guidelines'}, { "name": 'How to add the Yum button to your site', "link": 'yumm-butt-ur-site'}, { "name": 'Adding the Yum button via plugins', "link": 'plugins-yumm-butt'}, { "name": 'Add the Yum button via image hover', "link": 'yumm-butt-via-img-hover'}]
    }
]

export {section}


const recommendations = [
    {
        recently : [{ article : "Smart Thermometer won't charge in dock", "link": 'troubleshooting/thermometer-will-not-charge-in-dock'}, {article : 'How to cook the perfect turkey.', "link": 'perfect-turkey-guide'}, { article : 'Who can I contact if I have questions or need help?', "link": 'contact-us'}, { article: 'How long does a roast need to rest?', "link": 'roast-need-to-rest'}, { article : 'Contact us', "link": 'getting-help/contact-us'}] ,

        related: [{ article : 'How to cook the perfect turkey.', "link": 'perfect-turkey-guide'},{ article : 'Quick start guide', "link": 'quick-start-guide'}, {article : 'How do I connect/pair the Smart Thermometer to my phone?', "link": 'connect-thermometer-to-phone'}, { article : 'Inaccurate results', "link": 'inaccurate-results'}, { article : 'Can I air fry?', "link": 'can-i-air-fry'}]
    }
]

export {recommendations}