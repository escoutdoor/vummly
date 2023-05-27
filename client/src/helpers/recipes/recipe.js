

const recipes = [
    {
        "id": "low-carb-meatloaf",
        "title": "Low Carb Meatloaf",
        "time": 110,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "the-little-pine", "name": "The Little Pine"},
        "nutrition": [{"label": "calories", "value": 760}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Main Dishes"}, {"tag": "Meatloaf"}, {"tag": "Low Sugar"}, {"tag": "Low Carb"}],
        "servings": 4,
        "ingredients": {
            "us": [
                {"quantity": 3, "measurement": "oz.", "ingredient": "tomato paste"},
                {"quantity": 0.25, "measurement": "cup", "ingredient": "apple cider vinegar"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "erythritol", "technique": "powdered"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "onion powder"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "garlic powder"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "vegetable oil"},
                {"quantity": 1, "ingredient": "medium onion", "technique": "chopped"},
                {"quantity": 4, "ingredient": "garlic cloves", "technique": "minced"},
                {"quantity": 2, "measurement": "tsp.", "ingredient": "salt","technique": "divided"},
                {"quantity": 1.5, "measurement": "tsp.", "ingredient": "black pepper","technique": "divided"},
                {"quantity": 3, "measurement": "Tbsp.", "ingredient": "Worcestershire sauce"},
                {"quantity": 2, "measurement": "lb.", "ingredient": "ground beef"},
                {"quantity": 3, "ingredient": "eggs"},
                {"quantity": 1.25, "measurement": "cups", "ingredient": "mozzarella"}
            ], 
            
            "metric": [
                {"quantity": 85, "measurement": "grams", "ingredient": "tomato paste"},
                {"quantity": 59, "measurement": "ml", "ingredient": "apple cider vinegar"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "erythritol", "technique": "powdered"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "onion powder"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "garlic powder"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "vegetable oil"},
                {"quantity": 1, "ingredient": "medium onion", "technique": "chopped"},
                {"quantity": 4, "ingredient": "garlic cloves", "technique": "minced"},
                {"quantity": 2, "measurement": "tsp.", "ingredient": "salt","technique": "divided"},
                {"quantity": 1.5, "measurement": "tsp.", "ingredient": "black pepper","technique": "divided"},
                {"quantity": 3, "measurement": "Tbsp.", "ingredient": "Worcestershire sauce"},
                {"quantity": 0.91, "measurement": "kilograms", "ingredient": "ground beef"},
                {"quantity": 3, "ingredient": "eggs"},
                {"quantity": 140, "measurement": "grams", "ingredient": "mozzarella"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 5, "rev": "Vanek krasava", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 3, "rev": "Vanek nekrasava", "likes" : ["vlad", "vanya"]}]
    },
    {
        "id": "low-carb-no-bake-cookies",
        "title": "Low Carb No Bake Cookies",
        "time": 20,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "the-little-pine", "name": "The Little Pine"},
        "nutrition": [{"label": "calories", "value": 790}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Desserts"}, {"tag": "Quick and easy"}, {"tag": "Cookies"}, {"tag": "Quick"}, {"tag": "Easy"}],
        "servings": 4,
        "ingredients": {
            "us": [
                {"quantity": 0.5, "measurement": "cup", "ingredient": "unsalted butter"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "peanut butter", "technique": "Low Carb, swap for nut butter of choice"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "cocoa powder", "technique": "unsweetened"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "Swerve", "technique": "or Lakanto, see sweetener notes below confectioners"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "vanilla extract"},
                {"quantity": 1, "measurement": "pinch", "ingredient": "kosher salt"},
                {"quantity": 0.75, "measurement": "cup", "ingredient": "nuts", "technique": "Low Carb, My faves are walnuts, pecans, and almonds -- use whatever you have on hand!"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "coconut", "technique": "shredded + unsweetened"}
            ], 
            
            "metric": [
                {"quantity": 114, "measurement": "grams", "ingredient": "unsalted butter"},
                {"quantity": 256, "measurement": "grams", "ingredient": "peanut butter", "technique": "Low Carb, swap for nut butter of choice"},
                {"quantity": 22, "measurement": "grams", "ingredient": "cocoa powder", "technique": "unsweetened"},
                {"quantity": 120, "measurement": "grams", "ingredient": "Swerve", "technique": "or Lakanto, see sweetener notes below confectioners"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "vanilla extract"},
                {"quantity": 1, "measurement": "pinch", "ingredient": "kosher salt"},
                {"quantity": 109, "measurement": "grams", "ingredient": "nuts", "technique": "Low Carb, My faves are walnuts, pecans, and almonds -- use whatever you have on hand!"},
                {"quantity": 40, "measurement": "grams", "ingredient": "coconut", "technique": "shredded + unsweetened"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 5, "rev": "Vanek krasava", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 3, "rev": "Vanek nekrasava", "likes" : ["vlad", "vanya"]}]
    },
    {
        "id": "keto-peanut-butter-cups",
        "title": "Keto Peanut Butter Cups",
        "time": 20,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "the-little-pine", "name": "The Little Pine"},
        "nutrition": [{"label": "calories", "value": 740}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Desserts"}, {"tag": "Quick and easy"}, {"tag": "Microwaving"}, {"tag": "Quick"}, {"tag": "Easy"}, {"tag": "Boiling"}],
        "servings": 4,
        "ingredients": {
            "us": [
                {"quantity": 0.5, "measurement": "cup", "ingredient": "peanut butter", "technique": "Low Carb, just be sure your product has no sugar added"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "coconut oil"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "salt", "technique": "skip if using salted peanut butter"},
                {"quantity": 0.25, "measurement": "cup", "ingredient": "erythritol", "technique": "powdered"},
                {"quantity": 9, "measurement": "oz.", "ingredient": "chocolate", "technique": "Low Carb, *, 1 bag of Lily's chocolate chips"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "coconut oil"}
            ], 
            
            "metric": [
                {"quantity": 256, "measurement": "grams", "ingredient": "peanut butter", "technique": "Low Carb, just be sure your product has no sugar added"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "coconut oil"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "salt", "technique": "skip if using salted peanut butter"},
                {"quantity": 60, "measurement": "grams", "ingredient": "erythritol", "technique": "powdered"},
                {"quantity": 255, "measurement": "grams", "ingredient": "chocolate", "technique": "Low Carb, *, 1 bag of Lily's chocolate chips"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "coconut oil"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 5, "rev": "Vanek krasava", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 3, "rev": "Vanek nekrasava", "likes" : ["vlad", "vanya"]}]
    },
    {
        "id": "blueberry-smoothie",
        "title": "Blueberry Smoothie",
        "time": 5,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "the-little-pine", "name": "The Little Pine"},
        "nutrition": [{"label": "calories", "value": 110}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Beverages"}, {"tag": "Quick"}, {"tag": "Smoothie"}, {"tag": "Blending"}],
        "servings": 4,
        "ingredients": {
            "us": [
                {"quantity": 0.5, "measurement": "cup", "ingredient": "blueberries", "technique": "frozen or fresh"},
                {"quantity": 1, "measurement": "cup", "ingredient": "greek yogurt"},
                {"ingredient": "coconut yogurt"},
                {"quantity": 1, "measurement": "cup", "ingredient": "milk", "technique": "Low Carb, almond milk, coconut milk"},
                {"quantity": 0.25, "measurement": "cup", "ingredient": "coconut", "technique": "flaked, unsweetened"},
                {"quantity": 1, "measurement": "handful", "ingredient": "spinach", "technique": "or Greens, the sweetness from the fruit helps to mask this!, optional"}
            ], 
            
            "metric": [
                {"quantity": 85, "measurement": "grams", "ingredient": "blueberries", "technique": "frozen or fresh"},
                {"quantity": 245, "measurement": "grams", "ingredient": "greek yogurt"},
                {"ingredient": "coconut yogurt"},
                {"quantity": 237, "measurement": "ml", "ingredient": "milk", "technique": "Low Carb, almond milk, coconut milk"},
                {"quantity": 20, "measurement": "grams", "ingredient": "coconut", "technique": "flaked, unsweetened"},
                {"quantity": 1, "measurement": "handful", "ingredient": "spinach", "technique": "or Greens, the sweetness from the fruit helps to mask this!, optional"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 5, "rev": "Vanek krasava", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 4, "rev": "Vanek nekrasava", "likes" : ["vlad", "vanya"]}]
    },
    {
        "id": "tabouleh",
        "title": "Tabouleh",
        "time": 30,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "the-little-pine", "name": "The Little Pine"},
        "nutrition": [{"label": "calories", "value": 320}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Easy"}, {"tag": "Salads"}],
        "servings": 4,
        "ingredients": {
            "us": [
                {"quantity": 3, "measurement": "bunches", "ingredient": "parsley", "technique": "as fresh as you can find!"},
                {"quantity": 3, "ingredient": "vine tomatoes", "technique": "deseeded, minced"},
                {"ingredient": "coconut yogurt"},
                {"quantity": 0.25, "measurement": "lb.", "ingredient": "bulgur", "technique": "Cracked, dry, can substitute for 1 1/2 cup cooked/cooled Quinoa, or 1 1/2 cup minced cauliflower"},
                {"quantity": 0.5,"ingredient": "sweet onion", "technique": "minced"},
                {"quantity": 2, "measurement": "cloves", "ingredient": "garlic", "technique": "minced"},
                {"quantity": 0.6, "measurement": "cup", "ingredient": "lemon juice"},
                {"quantity": 0.3, "measurement": "cup", "ingredient": "olive oil"},
                {"ingredient": "salt"},
                {"ingredient": "pepper"}
            ], 
            
            "metric": [
                {"quantity": 3, "measurement": "bunches", "ingredient": "parsley", "technique": "as fresh as you can find!"},
                {"quantity": 3, "ingredient": "vine tomatoes", "technique": "deseeded, minced"},
                {"ingredient": "coconut yogurt"},
                {"quantity": 113, "measurement": "grams", "ingredient": "bulgur", "technique": "Cracked, dry, can substitute for 1 1/2 cup cooked/cooled Quinoa, or 1 1/2 cup minced cauliflower"},
                {"quantity": 0.5,"ingredient": "sweet onion", "technique": "minced"},
                {"quantity": 2, "measurement": "cloves", "ingredient": "garlic", "technique": "minced"},
                {"quantity": 158, "measurement": "ml", "ingredient": "lemon juice"},
                {"quantity": 79, "measurement": "ml", "ingredient": "olive oil"},
                {"ingredient": "salt"},
                {"ingredient": "pepper"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 5, "rev": "Vanek krasava", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 4, "rev": "Vanek nekrasava", "likes" : ["vlad", "vanya"]}]
    },
    {
        "id": "low-carb-strawberry-smoothie",
        "title": "Low Carb Strawberry Smoothie",
        "time": 10,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "the-little-pine", "name": "The Little Pine"},
        "nutrition": [{"label": "calories", "value": 220}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Beverages"}, {"tag": "Smoothie"}, {"tag": "Blending"}],
        "servings": 2,
        "ingredients": {
            "us": [
                {"quantity": 2, "measurement": "cups", "ingredient": "strawberries"},
                {"quantity": 1, "measurement": "cup", "ingredient": "greek yogurt", "technique": "I use Fage because it’s high in protein"},
                {"quantity": 1, "measurement": "cup", "ingredient": "milk", "technique": "I use almond or coconut milk"},
                {"ingredient": "sweetener", "technique": "if needed"}
            ], 
            
            "metric": [
                {"quantity": 357, "measurement": "grams", "ingredient": "strawberries"},
                {"quantity": 245, "measurement": "grams", "ingredient": "greek yogurt", "technique": "I use Fage because it’s high in protein"},
                {"quantity": 237, "measurement": "ml", "ingredient": "milk", "technique": "I use almond or coconut milk"},
                {"ingredient": "sweetener", "technique": "if needed"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 2, "rev": "Vanek krasava", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 3, "rev": "Vanek nekrasava", "likes" : ["vlad", "vanya"]}]
    },
    {
        "id": "low-carb-mexican-chicken-casserole",
        "title": "Low Carb Mexican Chicken Casserole",
        "time": 45,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "the-little-pine", "name": "The Little Pine"},
        "nutrition": [{"label": "calories", "value": 190}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Main Dishes"}, {"tag": "Mexican"}, {"tag": "Casserole"}, {"tag": "Low Sugar"}, {"tag": "Sauteeing"}, {"tag": "Low Carb"}, {"tag": "Low Calorie"}, {"tag": "Browning"}, {"tag": "Baking"}],
        "servings": 10,
        "ingredients": {
            "us": [
                {"quantity": 1, "measurement": "lb.", "ingredient": "boneless skinless chicken breast"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "olive oil"},
                {"quantity": 1, "ingredient": "red bell pepper"},
                {"quantity": 1, "ingredient": "red onion", "technique": "or White"},
                {"quantity": 2, "measurement": "tsp.", "ingredient": "salt"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "pepper"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "chili powder"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "cumin"},
                {"quantity": 2, "measurement": "tsp.", "ingredient": "dried oregano"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "sour cream"},
                {"quantity": 1, "measurement": "cup", "ingredient": "salsa", "technique": "spicy or mild depending on preference"},
                {"quantity": 0.25, "measurement": "cup", "ingredient": "heavy cream"},
                {"quantity": 1, "measurement": "cup", "ingredient": "pepper jack cheese", "technique": "shredded"},
                {"ingredient": "cilantro", "technique": "to garnish, optional"}
            ], 
            "metric": [
                {"quantity": 454, "measurement": "grams", "ingredient": "boneless skinless chicken breast"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "olive oil"},
                {"quantity": 1, "ingredient": "red bell pepper"},
                {"quantity": 1, "ingredient": "red onion", "technique": "or White"},
                {"quantity": 2, "measurement": "tsp.", "ingredient": "salt"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "pepper"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "chili powder"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "cumin"},
                {"quantity": 2, "measurement": "tsp.", "ingredient": "dried oregano"},
                {"quantity": 118, "measurement": "ml", "ingredient": "sour cream"},
                {"quantity": 256, "measurement": "grams", "ingredient": "salsa", "technique": "spicy or mild depending on preference"},
                {"quantity": 59, "measurement": "ml", "ingredient": "heavy cream"},
                {"quantity": 113, "measurement": "grams", "ingredient": "pepper jack cheese", "technique": "shredded"},
                {"ingredient": "cilantro", "technique": "to garnish, optional"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 5, "rev": "Vanek krasava", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 4, "rev": "Vanek nekrasava", "likes" : ["vlad", "vanya"]}]
    },
    {
        "id": "ground-chicken-casserole",
        "title": "Ground Chicken Casserole",
        "time": 40,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "the-little-pine", "name": "The Little Pine"},
        "nutrition": [{"label": "calories", "value": 1010}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Main Dishes"}, {"tag": "Casserole"}, {"tag": "Boiling"}, {"tag": "Low Sugar"}, {"tag": "Low Carb"}],
        "servings": 4,
        "ingredients": {
            "us": [
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "vegetable oil"},
                {"quantity": 1, "ingredient": "red onion", "technique": "diced"},
                {"quantity": 32, "measurement": "oz.", "ingredient": "cauliflower rice"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "salt"},
                {"quantity": 1.25, "measurement": "tsp.", "ingredient": "pepper"},
                {"quantity": 2, "measurement": "lb.", "ingredient": "ground chicken"},
                {"quantity": 0.25, "measurement": "cup", "ingredient": "taco seasoning", "technique": "Low Carb"},
                {"quantity": 14.5, "measurement": "oz.", "ingredient": "diced tomatoes", "technique": "with green chile peppers, drained"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "water"},
                {"quantity": 8, "measurement": "oz.", "ingredient": "cream cheese", "technique": "cubed"},
                {"quantity": 3, "measurement": "cups", "ingredient": "cheddar cheese", "technique": "shredded"}
            ], 
            "metric": [
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "vegetable oil"},
                {"quantity": 1, "ingredient": "red onion", "technique": "diced"},
                {"quantity": 0.91, "measurement": "kilograms", "ingredient": "cauliflower rice"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "salt"},
                {"quantity": 1.25, "measurement": "tsp.", "ingredient": "pepper"},
                {"quantity": 0.91, "measurement": "kilograms", "ingredient": "ground chicken"},
                {"quantity": 11, "measurement": "grams", "ingredient": "taco seasoning", "technique": "Low Carb"},
                {"quantity": 411, "measurement": "grams", "ingredient": "diced tomatoes", "technique": "with green chile peppers, drained"},
                {"quantity": 118, "measurement": "ml", "ingredient": "water"},
                {"quantity": 227, "measurement": "grams", "ingredient": "cream cheese", "technique": "cubed"},
                {"quantity": 339, "measurement": "grams", "ingredient": "cheddar cheese", "technique": "shredded"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 5, "rev": "Vanek krasava", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 2, "rev": "Vanek nekrasava", "likes" : ["vlad", "vanya"]}]
    },
    {
        "id": "mediterranean-chicken-marinade",
        "title": "Mediterranean Chicken Marinade",
        "time": 20,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "the-little-pine", "name": "The Little Pine"},
        "nutrition": [{"label": "calories", "value": 360}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Main Dishes"}, {"tag": "Quick"}, {"tag": "Marinade"}, {"tag": "Low Sugar"}, {"tag": "Grilling"}, {"tag": "Low Carb"}, {"tag": "Low Calorie"}],
        "servings": 4,
        "ingredients": {
            "us": [
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "lemon juice"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "balsamic vinegar"},
                {"quantity": 3, "measurement": "Tbsp.", "ingredient": "olive oil"},
                {"quantity": 4, "ingredient": "garlic cloves", "technique": "minced"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "oregano", "technique": "dried"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "red pepper flakes"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "onion powder"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "kosher salt"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "pepper"},
                {"quantity": 2, "measurement": "lb.", "ingredient": "chicken breast boneless", "technique": "+ skinless"}
            ], 
            "metric": [
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "lemon juice"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "balsamic vinegar"},
                {"quantity": 3, "measurement": "Tbsp.", "ingredient": "olive oil"},
                {"quantity": 4, "ingredient": "garlic cloves", "technique": "minced"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "oregano", "technique": "dried"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "red pepper flakes"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "onion powder"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "kosher salt"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "pepper"},
                {"quantity": 0.91, "measurement": "kilograms", "ingredient": "chicken breast boneless", "technique": "+ skinless"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 5, "rev": "Vanek krasava", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 2, "rev": "Vanek nekrasava", "likes" : ["vlad", "vanya"]}]
    },
    {
        "id": "crustless-spinach-quiche",
        "title": "Crustless Spinach Quiche",
        "time": 50,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "the-little-pine", "name": "The Little Pine"},
        "nutrition": [{"label": "calories", "value": 410}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Main Dishes"}, {"tag": "Quiche"}, {"tag": "Browning"}, {"tag": "Baking"}],
        "servings": 4,
        "ingredients": {
            "us": [
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "vegetable oil"},
                {"quantity": 2, "measurement": "cups", "ingredient": "onion", "technique": "chopped"},
                {"quantity": 2, "ingredient": "garlic cloves", "technique": "minced"},
                {"quantity": 10, "measurement": "oz.", "ingredient": "spinach", "technique": "fresh"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "salt"},
                {"quantity": 0.25, "ingredient": "crushed red pepper"},
                {"quantity": 6, "ingredient": "large eggs"},
                {"quantity": 0.25, "measurement": "cup", "ingredient": "heavy cream"},
                {"quantity": 1.5, "measurement": "cups", "ingredient": "shredded mozzarella"}
            ], 
            "metric": [
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "vegetable oil"},
                {"quantity": 320, "measurement": "grams", "ingredient": "onion", "technique": "chopped"},
                {"quantity": 2, "ingredient": "garlic cloves", "technique": "minced"},
                {"quantity": 283, "measurement": "grams", "ingredient": "spinach", "technique": "fresh"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "salt"},
                {"quantity": 0.25, "ingredient": "crushed red pepper"},
                {"quantity": 6, "ingredient": "large eggs"},
                {"quantity": 59, "measurement": "ml", "ingredient": "heavy cream"},
                {"quantity": 168, "measurement": "grams", "ingredient": "shredded mozzarella"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 5, "rev": "Vanek krasava", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 2, "rev": "Vanek nekrasava", "likes" : ["vlad", "vanya"]}]
    },
    {
        "id": "parmesan-crisps",
        "title": "Parmesan Crisps",
        "time": 10,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "the-little-pine", "name": "The Little Pine"},
        "nutrition": [{"label": "calories", "value": 110}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Quick And Easy"}, {"tag": "Browning"}, {"tag": "Quick"}, {"tag": "Easy"}, {"tag": "Baking"}],
        "servings": 4,
        "ingredients": {
            "us": [
                {"quantity": 1, "measurement": "cup", "ingredient": "Parmesan cheese", "technique": "shredded"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "garlic powder", "technique": "optional"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "onion powder", "technique": "optional"},
                {"quantity": 1.5, "measurement": "tsp.", "ingredient": "sesame seeds", "technique": "optional"},
                {"quantity": 1.5, "measurement": "tsp.", "ingredient": "hemp seeds", "technique": "optional"}
            ], 
            "metric": [
                {"quantity": 12, "measurement": "grams", "ingredient": "Parmesan cheese", "technique": "shredded"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "garlic powder", "technique": "optional"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "onion powder", "technique": "optional"},
                {"quantity": 1.5, "measurement": "tsp.", "ingredient": "sesame seeds", "technique": "optional"},
                {"quantity": 1.5, "measurement": "tsp.", "ingredient": "hemp seeds", "technique": "optional"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 1, "rev": "Vanek krasava", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 2, "rev": "Vanek nekrasava", "likes" : ["vlad", "vanya"]}]
    },
    {
        "id": "keto-fried-chicken",
        "title": "Keto Fried Chicken",
        "time": 40,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "the-little-pine", "name": "The Little Pine"},
        "nutrition": [{"label": "calories", "value": 290}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Main Dishes"}, {"tag": "Fried Chicken"}, {"tag": "Baking"}, {"tag": "Low Sugar"}, {"tag": "Low Carb"}, {"tag": "Low Calorie"}],
        "servings": 8,
        "ingredients": {
            "us": [
                {"quantity": 3, "measurement": "lb.", "ingredient": "chicken tenders"},
                {"quantity": 4, "measurement": "oz.", "ingredient": "pork rinds"},
                {"quantity": 2, "measurement": "tsp.", "ingredient": "thyme"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "sea salt"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "black pepper"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "oregano"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "garlic powder"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "smoked paprika"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "cayenne pepper"},
                {"quantity": 2, "ingredient": "eggs"}
            ], 
            "metric": [
                {"quantity": 1.36, "measurement": "kilograms", "ingredient": "chicken tenders"},
                {"quantity": 113, "measurement": "grams", "ingredient": "pork rinds"},
                {"quantity": 2, "measurement": "tsp.", "ingredient": "thyme"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "sea salt"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "black pepper"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "oregano"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "garlic powder"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "smoked paprika"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "cayenne pepper"},
                {"quantity": 2, "ingredient": "eggs"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 5, "rev": "Vanek krasava", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 4, "rev": "Vanek nekrasava", "likes" : ["vlad", "vanya"]}]
    },
    {
        "id": "stuffed-chicken-parmesan",
        "title": "Stuffed Chicken Parmesan",
        "time": 60,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "the-little-pine", "name": "The Little Pine"},
        "nutrition": [{"label": "calories", "value": 510}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Main Dishes"}, {"tag": "Low Carb"}, {"tag": "Baking"}],
        "servings": 4,
        "ingredients": {
            "us": [
                {"quantity": 4, "ingredient": "chicken breast"},
                {"quantity": 2, "ingredient": "eggs"},
                {"quantity": 4, "measurement": "cups", "ingredient": "pork rinds"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "Italian seasoning"},
                {"quantity": 18, "measurement": "oz.", "ingredient": "marinara"},
                {"quantity": 0.25, "measurement": "cup", "ingredient": "Parmesan", "technique": "grated"},
                {"ingredient": "basil", "technique": "fresh, sliced"}
            ], 
            "metric": [
                {"quantity": 4, "ingredient": "chicken breast"},
                {"quantity": 2, "ingredient": "eggs"},
                {"quantity": 56, "measurement": "grams", "ingredient": "pork rinds"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "Italian seasoning"},
                {"quantity": 470, "measurement": "ml", "ingredient": "marinara"},
                {"quantity": 25, "measurement": "grams", "ingredient": "Parmesan", "technique": "grated"},
                {"ingredient": "basil", "technique": "fresh, sliced"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 5, "rev": "Vanek krasava", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 4, "rev": "Vanek nekrasava", "likes" : ["vlad", "vanya"]}]
    },
    {
        "id": "cheese-log",
        "title": "Cheese Log",
        "time": 10,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "the-little-pine", "name": "The Little Pine"},
        "nutrition": [{"label": "calories", "value": 230}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Appetizers"}, {"tag": "Quick"}, {"tag": "Low Sugar"}, {"tag" : "Low Carb"}],
        "servings": 12,
        "ingredients": {
            "us": [
                {"quantity": 12, "measurement": "slices", "ingredient": "bacon", "technique": "divided"},
                {"quantity": 0.75, "measurement": "cup", "ingredient": "chives", "technique": "divided"},
                {"quantity": 8, "measurement": "oz.", "ingredient": "cream cheese", "technique": "room temp"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "garlic powder"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "salt"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "ground pepper"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "Tabasco", "technique": "add more if you’d like more heat"},
                {"quantity": 1, "measurement": "cup", "ingredient": "cheddar"}
            ], 
            "metric": [
                {"quantity": 12, "measurement": "slices", "ingredient": "bacon", "technique": "divided"},
                {"quantity": 36, "measurement": "grams", "ingredient": "chives", "technique": "divided"},
                {"quantity": 227, "measurement": "grams", "ingredient": "cream cheese", "technique": "room temp"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "garlic powder"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "salt"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "ground pepper"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "Tabasco", "technique": "add more if you’d like more heat"},
                {"quantity": 113, "measurement": "grams", "ingredient": "cheddar"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 5, "rev": "Vanek krasava", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 4, "rev": "Vanek nekrasava", "likes" : ["vlad", "vanya"]}]
    },
    {
        "id": "keto-peanut-butter-bites",
        "title": "Keto Peanut Butter Bites",
        "time": 45,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "keto-karma", "name": "Keto Karma"},
        "nutrition": [{"label": "calories", "value": 100}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Desserts"}, {"tag": "Microwaving"}, {"tag": "Low Sugar"}, {"tag": "Low Sodium"}, {"tag": "Low Carb"}, {"tag": "Low Calorie"}],
        "servings": 5,
        "ingredients": {
            "us": [
                {"quantity": 0.25, "measurement": "cup", "ingredient": "natural peanut butter", "technique": "no sugar added; only peanuts and salt"},
                {"quantity": 2.5, "measurement": "Tbsp.", "ingredient": "Swerve", "technique":"confectioners’-style sweetener"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "blanched almond flour"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "vanilla extract"},
                {"quantity": 0.25, "measurement": "cup", "ingredient": "stevia", "technique": "Lily’s Baking Chocolate Chips, sweetened"},
                {"quantity": 1.5, "measurement": "tsp.", "ingredient": "oil"}
            ], 
            "metric": [
                {"quantity": 65, "measurement": "grams", "ingredient": "natural peanut butter", "technique": "no sugar added; only peanuts and salt"},
                {"quantity": 2.5, "measurement": "Tbsp.", "ingredient": "Swerve", "technique":"confectioners’-style sweetener"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "blanched almond flour"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "vanilla extract"},
                {"quantity": 60, "measurement": "grams", "ingredient": "stevia", "technique": "Lily’s Baking Chocolate Chips, sweetened"},
                {"quantity": 1.5, "measurement": "tsp.", "ingredient": "oil"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 5, "rev": "Vanek krasava", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 3, "rev": "Vanek nekrasava", "likes" : ["vlad", "vanya"]}]
    },
    {
        "id": "keto-radish-home-fries-wo-potatoes",
        "title": "Keto Radish Home Fries (Without Potatoes!)",
        "time": 20,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "keto-karma", "name": "Keto Karma"},
        "nutrition": [{"label": "calories", "value": 90}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Side Dishes"}, {"tag": "Quick And Easy"}, {"tag": "Fries"}, {"tag": "Low Sugar"}, {"tag": "Quick"}, {"tag": "Easy"}, {"tag": "Low Carb"}, {"tag": "Low Calorie"}],
        "servings": 4,
        "ingredients": {
            "us": [
                {"quantity": 3, "measurement": "Tbsp.", "ingredient": "butter"},
                {"quantity": 2, "measurement": "bunches", "ingredient": "radishes", "technique": "approximately 24 radishes"},
                {"quantity": 0.25, "measurement": "cup", "ingredient": "yellow onion", "technique":"chopped"},
                {"quantity": 0.25, "measurement": "cup", "ingredient": "chopped green bell pepper"},
                {"quantity": 2, "measurement": "cloves", "ingredient": "garlic", "technique": "minced"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "salt"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "ground black pepper"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "paprika"}
            ], 
            "metric": [
                {"quantity": 3, "measurement": "Tbsp.", "ingredient": "butter"},
                {"quantity": 2, "measurement": "bunches", "ingredient": "radishes", "technique": "approximately 24 radishes"},
                {"quantity": 40, "measurement": "grams", "ingredient": "yellow onion", "technique":"chopped"},
                {"quantity": 37, "measurement": "grams", "ingredient": "chopped green bell pepper"},
                {"quantity": 2, "measurement": "cloves", "ingredient": "garlic", "technique": "minced"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "salt"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "ground black pepper"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "paprika"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 5, "rev": "Vanek krasava", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 3, "rev": "Vanek nekrasava", "likes" : ["vlad", "vanya"]}]
    },
    {
        "id": "chocolate-peanut-butter-smoothie",
        "title": "Chocolate Peanut Butter Smoothie",
        "time": 10,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "keto-karma", "name": "Keto Karma"},
        "nutrition": [{"label": "calories", "value": 340}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Beverages"}, {"tag": "Smoothie"}, {"tag": "Blending"}],
        "servings": 2,
        "ingredients": {
            "us": [
                {"quantity": 1.5, "measurement": "cups", "ingredient": "almond milk", "technique": "unsweetened"},
                {"quantity": 1.5, "measurement": "Tbsp.", "ingredient": "cocoa powder"},
                {"quantity": 3, "measurement": "Tbsp.", "ingredient": "creamy peanut butter", "technique": "No Sugar added"},
                {"quantity": 0.25, "measurement": "cup", "ingredient": "salted peanuts"},
                {"quantity": 3, "measurement": "Tbsp.", "ingredient": "stevia", "technique": "Whole Earth, and Monk Fruit Blend, sweeten to taste"},
                {"quantity": 1, "measurement": "cup", "ingredient": "ice"}
            ], 
            "metric": [
                {"quantity": 355, "measurement": "ml", "ingredient": "almond milk", "technique": "unsweetened"},
                {"quantity": 1.5, "measurement": "Tbsp.", "ingredient": "cocoa powder"},
                {"quantity": 3, "measurement": "Tbsp.", "ingredient": "creamy peanut butter", "technique": "No Sugar added"},
                {"quantity": 36, "measurement": "grams", "ingredient": "salted peanuts"},
                {"quantity": 3, "measurement": "Tbsp.", "ingredient": "stevia", "technique": "Whole Earth, and Monk Fruit Blend, sweeten to taste"},
                {"quantity": 237, "measurement": "grams", "ingredient": "ice"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 5, "rev": "Vanek krasava", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 3, "rev": "Vanek nekrasava", "likes" : ["vlad", "vanya"]}]
    },
    {
        "id": "keto-tiramisu-for-two",
        "title": "Keto Tiramisu for Two",
        "time": 60,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "keto-karma", "name": "Keto Karma"},
        "nutrition": [{"label": "calories", "value": 40}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Cocktails"}, {"tag": "Tiramisu"}, {"tag": "Microwaving"}],
        "servings": 2,
        "ingredients": {
            "us": [
                {"quantity": 0.25, "measurement": "cup", "ingredient": "strong brewed coffee"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "brandy", "technique": "or rum optional"}
            ], 
            "metric": [
                {"quantity": 59, "measurement": "ml", "ingredient": "strong brewed coffee"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "brandy", "technique": "or rum optional"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 5, "rev": "Vanek krasava", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 3, "rev": "Vanek nekrasava", "likes" : ["vlad", "vanya"]}]
    },
    {
        "id": "keto-peanut-butter-mousse",
        "title": "Keto Peanut Butter Mousse",
        "time": 15,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "keto-karma", "name": "Keto Karma"},
        "nutrition": [{"label": "calories", "value": 420}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Desserts"}, {"tag": "Quick And Easy"}, {"tag": "Mousse"}, {"tag": "Quick"}, {"tag": "Easy"}],
        "servings": 4,
        "ingredients": {
            "us": [
                {"quantity": 0.5, "measurement": "cup", "ingredient": "heavy cream"},
                {"quantity": 4, "measurement": "oz.", "ingredient": "cream cheese"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "peanut butter", "technique": "no sugar added"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "vanilla extract"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "Swerve", "technique": "Confectioners"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "half and half"}
            ], 
            "metric": [
                {"quantity": 118, "measurement": "ml", "ingredient": "heavy cream"},
                {"quantity": 113, "measurement": "grams", "ingredient": "cream cheese"},
                {"quantity": 256, "measurement": "grams", "ingredient": "peanut butter", "technique": "no sugar added"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "vanilla extract"},
                {"quantity": 120, "measurement": "grams", "ingredient": "Swerve", "technique": "Confectioners"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "half and half"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 5, "rev": "Vanek krasava", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 5, "rev": "Vanek nekrasava", "likes" : ["vlad", "vanya"]}]
    },
    {
        "id": "cream-cheese-pancakes",
        "title": "Cream Cheese Pancakes",
        "time": 10,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "keto-karma", "name": "Keto Karma"},
        "nutrition": [{"label": "calories", "value": 230}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Breakfast And Brunch"}, {"tag": "Quick"}, {"tag": "Pancakes"}, {"tag": "Low Sugar"}, {"tag": "Blending"}, {"tag": "Low Sodium"}, {"tag": "Low Carb"}, {"tag": "Low Calorie"}],
        "servings": 2,
        "ingredients": {
            "us": [
                {"quantity": 2, "measurement": "oz.", "ingredient": "cream cheese"},
                {"quantity": 2, "ingredient": "large eggs"},
                {"quantity": 0.3, "measurement": "tsp.", "ingredient": "baking powder"},
                {"quantity": 0.3, "measurement": "tsp.", "ingredient": "cinnamon"},
                {"quantity": 1, "measurement": "packet", "ingredient": "stevia", "technique": "0.5 tsp or 2-3 drops of liquid"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "vanilla extract", "technique": "Optional"}
            ], 
            "metric": [
                {"quantity": 57, "measurement": "grams", "ingredient": "cream cheese"},
                {"quantity": 2, "ingredient": "large eggs"},
                {"quantity": 0.3, "measurement": "tsp.", "ingredient": "baking powder"},
                {"quantity": 0.3, "measurement": "tsp.", "ingredient": "cinnamon"},
                {"quantity": 1, "measurement": "packet", "ingredient": "stevia", "technique": "0.5 tsp or 2-3 drops of liquid"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "vanilla extract", "technique": "Optional"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 5, "rev": "Vanek krasava", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 5, "rev": "Vanek nekrasava", "likes" : ["vlad", "vanya"]}]
    },
    {
        "id": "keto-chili",
        "title": "Keto Chili",
        "time": 480,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "keto-karma", "name": "Keto Karma"},
        "nutrition": [{"label": "calories", "value": 200}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Main Dishes"}, {"tag": "Easy"}, {"tag": "Chili"}, {"tag": "Low Sugar"}, {"tag": "Slow Cooking"}, {"tag": "Low Sodium"}, {"tag": "Low Carb"}, {"tag": "Low Calorie"}, {"tag": "Browning"}],
        "servings": 6,
        "ingredients": {
            "us": [
                {"quantity": 1, "measurement": "lb.", "ingredient": "ground beef"},
                {"quantity": 1, "measurement": "lb.", "ingredient": "ground sausage", "technique": "regular or hot depending on preference"},
                {"quantity": 1, "ingredient": "green bell pepper", "technique": "Medium, chopped"},
                {"quantity": 0.5, "ingredient": "yellow onion", "technique": "Medium, chopped"},
                {"quantity": 1, "measurement": "can", "ingredient": "diced tomatoes", "technique": "in Tomato Juice, 14.5 oz."},
                {"quantity": 1, "measurement": "can", "ingredient": "tomato paste"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "chili powder", "technique": "May need to use more if you choose a mild sausage"},
                {"quantity": 0.5, "measurement": "Tbsp.", "ingredient": "ground cumin"},
                {"quantity": 4, "ingredient": "garlic cloves", "technique": "minced, or 1 TBSP Garlic powder, which is .8 net carb additional per serving"},
                {"quantity": 0.3, "measurement": "cup", "ingredient": "water"}
            ], 
            "metric": [
                {"quantity": 454, "measurement": "grams", "ingredient": "ground beef"},
                {"quantity": 454, "measurement": "grams", "ingredient": "ground sausage", "technique": "regular or hot depending on preference"},
                {"quantity": 1, "ingredient": "green bell pepper", "technique": "Medium, chopped"},
                {"quantity": 0.5, "ingredient": "yellow onion", "technique": "Medium, chopped"},
                {"quantity": 1, "measurement": "can", "ingredient": "diced tomatoes", "technique": "in Tomato Juice, 14.5 oz."},
                {"quantity": 1, "measurement": "can", "ingredient": "tomato paste"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "chili powder", "technique": "May need to use more if you choose a mild sausage"},
                {"quantity": 0.5, "measurement": "Tbsp.", "ingredient": "ground cumin"},
                {"quantity": 4, "ingredient": "garlic cloves", "technique": "minced, or 1 TBSP Garlic powder, which is .8 net carb additional per serving"},
                {"quantity": 79, "measurement": "ml", "ingredient": "water"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 5, "rev": "Vanek krasava", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 4, "rev": "Vanek nekrasava", "likes" : ["vlad", "vanya"]}]
    },
    {
        "id": "keto-chocolate-peanut-butter-smoothie",
        "title": "Keto Chocolate Peanut Butter Smoothie",
        "time": 5,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "low-carb-spark", "name": "Low Carb Spark"},
        "nutrition": [{"label": "calories", "value": 160}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Beverages"}, {"tag": "Quick"}, {"tag": "Smoothie"}, {"tag": "Blending"}],
        "servings": 4,
        "ingredients": {
            "us": [
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "cocoa powder"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "creamy peanut butter"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "full fat coconut milk", "technique": "or Heavy cream"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "water", "technique": "or Unsweetened Almond Milk"},
                {"quantity": 1, "measurement": "cup", "ingredient": "crushed ice"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "sweetener"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "vanilla extract"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "xanthan gum", "technique": "optional"},
                {"ingredient": "salt", "technique": "Pinch of Mineral"}
            ], 
            "metric": [
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "cocoa powder"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "creamy peanut butter"},
                {"quantity": 118, "measurement": "ml", "ingredient": "full fat coconut milk", "technique": "or Heavy cream"},
                {"quantity": 118, "measurement": "ml", "ingredient": "water", "technique": "or Unsweetened Almond Milk"},
                {"quantity": 237, "measurement": "grams", "ingredient": "crushed ice"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "sweetener"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "vanilla extract"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "xanthan gum", "technique": "optional"},
                {"ingredient": "salt", "technique": "Pinch of Mineral"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 5, "rev": "Vanek krasava", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 5, "rev": "Vanek nekrasava", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "the-best-creamy-cucumber-salad",
        "title": "The Best Creamy Cucumber Salad",
        "time": 10,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "low-carb-spark", "name": "Low Carb Spark"},
        "nutrition": [{"label": "calories", "value": 50}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Salads"}, {"tag": "Quick And Easy"}, {"tag": "Low Sugar"}, {"tag": "Quick"}, {"tag": "Easy"}, {"tag": "Low Sodium"}, {"tag": "Low Fat"}, {"tag": "Low Carb"}, {"tag": "Low Calorie"}],
        "servings": 6,
        "ingredients": {
            "us": [
                {"quantity": 3, "measurement": "cups", "ingredient": "cucumbers", "technique": "peeled, thinly sliced"},
                {"quantity": 1, "ingredient": "red onion", "technique": "small, thinly sliced"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "sour cream"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "white vinegar"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "fresh dill", "technique": "minced"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "salt"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "garlic powder"}
            ], 
            "metric": [
                {"quantity": 312, "measurement": "grams", "ingredient": "cucumbers", "technique": "peeled, thinly sliced"},
                {"quantity": 1, "ingredient": "red onion", "technique": "small, thinly sliced"},
                {"quantity": 118, "measurement": "ml", "ingredient": "sour cream"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "white vinegar"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "fresh dill", "technique": "minced"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "salt"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "garlic powder"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 5, "rev": "Vanek krasava", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 5, "rev": "Vanek nekrasava", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "keto-smoothie-healthy-green-detox-low-carb-smoothie",
        "title": "Keto Smoothie - Healthy Green Detox Low Carb Smoothie",
        "time": 5,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "low-carb-spark", "name": "Low Carb Spark"},
        "nutrition": [{"label": "calories", "value": 400}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Beverages"}, {"tag": "Quick"}, {"tag": "Smoothie"}, {"tag": "Blending"}],
        "servings": 2,
        "ingredients": {
            "us": [
                {"quantity": 1, "measurement": "cup", "ingredient": "coconut milk", "technique": "unsweetened"},
                {"quantity": 0.5, "ingredient": "avocado", "technique": "ripe"},
                {"quantity": 1, "measurement": "cup", "ingredient": "mixed greens", "technique": "or baby spinach"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "chia seeds"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "spirulina powder"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "fresh raspberries"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "sweetener", "technique": "keto"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "vanilla extract"}
            ], 
            "metric": [
                {"quantity": 237, "measurement": "ml", "ingredient": "coconut milk", "technique": "unsweetened"},
                {"quantity": 0.5, "ingredient": "avocado", "technique": "ripe"},
                {"quantity": 36, "measurement": "grams", "ingredient": "mixed greens", "technique": "or baby spinach"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "chia seeds"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "spirulina powder"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "fresh raspberries"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "sweetener", "technique": "keto"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "vanilla extract"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 4, "rev": "Vanek krasava", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 3, "rev": "Vanek nekrasava", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "easy-keto-seeds-1g-carb-crackers-healthy-low-carb-crunchy-snack",
        "title": "Easy Keto Seeds 1g carb Crackers - Healthy Low Carb Crunchy Snack",
        "time": 120,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "low-carb-spark", "name": "Low Carb Spark"},
        "nutrition": [{"label": "calories", "value": 50}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Snacks"}, {"tag": "Boiling"}, {"tag": "Lunch"}, {"tag": "Low Sugar"}, {"tag": "Low Sodium"}, {"tag": "Low Carb"}, {"tag": "Low Calorie"}, {"tag": "Baking"}],
        "servings": 40,
        "ingredients": {
            "us": [
                {"quantity": 0.5, "measurement": "cup", "ingredient": "sunflower seeds"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "pumpkin seeds"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "sesame seeds"},
                {"quantity": 0.25, "measurement": "cup", "ingredient": "flax seeds"},
                {"quantity": 0.25, "measurement": "cup", "ingredient": "chia seeds"},
                {"quantity": 0.25, "measurement": "cup", "ingredient": "almond flour"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "coconut oil"},
                {"quantity": 1.5, "measurement": "cups", "ingredient": "boiling water"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "salt"}
            ], 
            "metric": [
                {"quantity": 70, "measurement": "grams", "ingredient": "sunflower seeds"},
                {"quantity": 65, "measurement": "grams", "ingredient": "pumpkin seeds"},
                {"quantity": 72, "measurement": "grams", "ingredient": "sesame seeds"},
                {"quantity": 35, "measurement": "grams", "ingredient": "flax seeds"},
                {"quantity": 35, "measurement": "grams", "ingredient": "chia seeds"},
                {"quantity": 24, "measurement": "grams", "ingredient": "almond flour"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "coconut oil"},
                {"quantity": 355, "measurement": "ml", "ingredient": "boiling water"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "salt"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 4, "rev": "Vanek krasava", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 3, "rev": "Vanek nekrasava", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "creamy-thick-keto-hot-chocolate-sugar-free-drink",
        "title": "Creamy & Thick Keto Hot Chocolate - Sugar-Free Drink",
        "time": 4,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "low-carb-spark", "name": "Low Carb Spark"},
        "nutrition": [{"label": "calories", "value": 180}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Beverages"}, {"tag": "Quick"}, {"tag": "Boiling"}, {"tag": "Blending"}],
        "servings": 2,
        "ingredients": {
            "us": [
                {"quantity": 2, "measurement": "cups", "ingredient": "almond milk", "technique": "warm"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "cocoa powder", "technique": "unsweetened"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "chia seeds", "technique": "powder"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "erythritol", "technique": "keto sweetener, or xylitol"},
                {"quantity": 0.25, "measurement": "cup", "ingredient": "coconut milk", "technique": "canned, or heavy whipping cream"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "cinnamon"}
            ], 
            "metric": [
                {"quantity": 473, "measurement": "ml", "ingredient": "almond milk", "technique": "warm"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "cocoa powder", "technique": "unsweetened"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "chia seeds", "technique": "powder"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "erythritol", "technique": "keto sweetener, or xylitol"},
                {"quantity": 59, "measurement": "ml", "ingredient": "coconut milk", "technique": "canned, or heavy whipping cream"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "cinnamon"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 4, "rev": "Vanek krasava", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 3, "rev": "Vanek nekrasava", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "keto-pork-chops-with-super-creamy-mushroom-sauce",
        "title": "Keto Pork Chops with Super Creamy Mushroom Sauce",
        "time": 25,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "low-carb-spark", "name": "Low Carb Spark"},
        "nutrition": [{"label": "calories", "value": 510}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Main Dishes"}, {"tag": "Easy"}, {"tag": "Low Sugar"}, {"tag": "Sauteeing"}, {"tag": "Low Carb"}, {"tag": "Browning"}, {"tag": "Boiling"}],
        "servings": 6,
        "ingredients": {
            "us": [
                {"ingredient": "pork chops"},
                {"ingredient": "olive oil", "technique": "or avocado oil"},
                {"ingredient": "unsalted butter"},
                {"ingredient": "mushrooms"},
                {"ingredient": "heavy whipping cream"},
                {"ingredient": "fresh parsley"},
                {"ingredient": "thyme", "technique": "fresh or dried"},
                {"ingredient": "garlic", "technique": "minced"},
                {"ingredient": "salt"},
                {"ingredient": "pepper"},
                {"quantity": 6, "ingredient": "pork chops", "technique": "about 1 inch thick"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "olive oil", "technique": "or avocado oil"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "unsalted butter"},
                {"quantity": 2, "measurement": "cups", "ingredient": "fresh mushrooms"},
                {"quantity": 1, "measurement": "cup", "ingredient": "heavy whipping cream"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "fresh parsley", "technique": "chopped"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "thyme", "technique": "fresh or dried"},
                {"quantity": 5, "ingredient": "garlic cloves", "technique": "minced"}
            ], 
            "metric": [
                {"ingredient": "pork chops"},
                {"ingredient": "olive oil", "technique": "or avocado oil"},
                {"ingredient": "unsalted butter"},
                {"ingredient": "mushrooms"},
                {"ingredient": "heavy whipping cream"},
                {"ingredient": "fresh parsley"},
                {"ingredient": "thyme", "technique": "fresh or dried"},
                {"ingredient": "garlic", "technique": "minced"},
                {"ingredient": "salt"},
                {"ingredient": "pepper"},
                {"quantity": 6, "ingredient": "pork chops", "technique": "about 1 inch thick"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "olive oil", "technique": "or avocado oil"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "unsalted butter"},
                {"quantity": 192, "measurement": "grams", "ingredient": "fresh mushrooms"},
                {"quantity": 237, "measurement": "ml", "ingredient": "heavy whipping cream"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "fresh parsley", "technique": "chopped"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "thyme", "technique": "fresh or dried"},
                {"quantity": 5, "ingredient": "garlic cloves", "technique": "minced"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 4, "rev": "Vanek krasava", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 3, "rev": "Vanek nekrasava", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "cream-cheese-frosting",
        "title": "Cream Cheese Frosting",
        "time": 20,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "live-well-bake-often", "name": "Live Well Bake Often"},
        "nutrition": [{"label": "calories", "value": 950}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Desserts"}, {"tag": "Quick"}, {"tag": "Frosting"}],
        "servings": 2,
        "ingredients": {
            "us": [
                {"ingredient": "cream cheese", "technique": "1, 8-ounce package brick style, softened to room temperature"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "unsalted butter", "technique": "softened to room temperature"},
                {"quantity": 2, "measurement": "cups", "ingredient": "powdered sugar"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "pure vanilla extract"}
            ], 
            "metric": [
                {"ingredient": "cream cheese", "technique": "1, 8-ounce package brick style, softened to room temperature"},
                {"quantity": 114, "measurement": "grams", "ingredient": "unsalted butter", "technique": "softened to room temperature"},
                {"quantity": 240, "measurement": "grams", "ingredient": "powdered sugar"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "pure vanilla extract"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 4, "rev": "Vanek krasava", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 3, "rev": "Vanek nekrasava", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "snowball-cookies",
        "title": "Snowball Cookies",
        "time": 30,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "live-well-bake-often", "name": "Live Well Bake Often"},
        "nutrition": [{"label": "calories", "value": 220}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Desserts"}, {"tag": "Quick"}, {"tag": "Cookies"}, {"tag": "Browning"}, {"tag": "Baking"}],
        "servings": 18,
        "ingredients": {
            "us": [
                {"quantity": 1, "measurement": "cup", "ingredient": "unsalted butter", "technique": "softened"},
                {"quantity": 1.5, "measurement": "cups", "ingredient": "powdered sugar", "technique": "divided"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "vanilla extract"},
                {"quantity": 2.25, "measurement": "cups", "ingredient": "flour", "technique": "all-purpose, spooned & leveled"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "salt"},
                {"quantity": 0.75, "measurement": "cup", "ingredient": "chopped pecans"}
            ], 
            "metric": [
                {"quantity": 227, "measurement": "grams", "ingredient": "unsalted butter", "technique": "softened"},
                {"quantity": 180, "measurement": "grams", "ingredient": "powdered sugar", "technique": "divided"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "vanilla extract"},
                {"quantity": 281, "measurement": "grams", "ingredient": "flour", "technique": "all-purpose, spooned & leveled"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "salt"},
                {"quantity": 82, "measurement": "grams", "ingredient": "chopped pecans"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 5, "rev": "Vanek krasava", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 5, "rev": "Vanek nekrasava", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "peach-crisp",
        "title": "Peach Crisp",
        "time": 60,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "live-well-bake-often", "name": "Live Well Bake Often"},
        "nutrition": [{"label": "calories", "value": 610}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Desserts"}, {"tag": "Crisp"}, {"tag": "Browning"}, {"tag": "Baking"}],
        "servings": 4,
        "ingredients": {
            "us": [
                {"quantity": 0.5, "measurement": "cup", "ingredient": "flour", "technique": "all-purpose, spooned & leveled"},
                {"quantity": 0.75, "measurement": "cup", "ingredient": "brown sugar"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "ground cinnamon"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "salt"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "unsalted butter", "technique": "cold, cubed into small pieces"},
                {"quantity": 1, "measurement": "cup", "ingredient": "old-fashioned rolled oats"},
                {"quantity": 5, "measurement": "cups", "ingredient": "sliced peaches", "technique": "*, about 6-7 medium peaches"},
                {"quantity": 0.3, "measurement": "cup", "ingredient": "granulated sugar"},
                {"quantity": 0.25, "measurement": "cup", "ingredient": "flour", "technique": "all-purpose, spooned & leveled"}
            ], 
            "metric": [
                {"quantity": 63, "measurement": "grams", "ingredient": "flour", "technique": "all-purpose, spooned & leveled"},
                {"quantity": 109, "measurement": "grams", "ingredient": "brown sugar"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "ground cinnamon"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "salt"},
                {"quantity": 114, "measurement": "grams", "ingredient": "unsalted butter", "technique": "cold, cubed into small pieces"},
                {"quantity": 81, "measurement": "grams", "ingredient": "old-fashioned rolled oats"},
                {"quantity": 0.77, "measurement": "kilograms", "ingredient": "sliced peaches", "technique": "*, about 6-7 medium peaches"},
                {"quantity": 67, "measurement": "grams", "ingredient": "granulated sugar"},
                {"quantity": 31, "measurement": "grams", "ingredient": "flour", "technique": "all-purpose, spooned & leveled"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 5, "rev": "Vanek krasava", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 5, "rev": "Vanek nekrasava", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "chocolate-mug-cake",
        "title": "Chocolate Mug Cake",
        "time": 11,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "live-well-bake-often", "name": "Live Well Bake Often"},
        "nutrition": [{"label": "calories", "value": 160}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Desserts"}, {"tag": "Quick"}, {"tag": "Cake"}, {"tag": "Microwaving"}],
        "servings": 4,
        "ingredients": {
            "us": [
                {"quantity": 0.25, "measurement": "cup", "ingredient": "all-purpose flour", "technique": "spooned & leveled"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "unsweetened cocoa powder"},
                {"quantity": 3, "measurement": "Tbsp.", "ingredient": "granulated sugar"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "baking powder"},
                {"quantity": 1, "measurement": "pinch", "ingredient": "salt"},
                {"quantity": 0.25, "measurement": "cup", "ingredient": "milk"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "canola", "technique": "vegetable, or melted coconut oil"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "pure vanilla extract"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "semi-sweet chocolate chips", "technique": "optional"}
            ], 
            "metric": [
                {"quantity": 31, "measurement": "grams", "ingredient": "all-purpose flour", "technique": "spooned & leveled"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "unsweetened cocoa powder"},
                {"quantity": 3, "measurement": "Tbsp.", "ingredient": "granulated sugar"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "baking powder"},
                {"quantity": 1, "measurement": "pinch", "ingredient": "salt"},
                {"quantity": 59, "measurement": "ml", "ingredient": "milk"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "canola", "technique": "vegetable, or melted coconut oil"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "pure vanilla extract"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "semi-sweet chocolate chips", "technique": "optional"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 4, "rev": "Vanek krasava", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 5, "rev": "Vanek nekrasava", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "sweet-potato-casserole",
        "title": "Sweet Potato Casserole",
        "time": 80,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "live-well-bake-often", "name": "Live Well Bake Often"},
        "nutrition": [{"label": "calories", "value": 370}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Side Dishes"}, {"tag": "Sweet Potato Casserole"}, {"tag": "Thanksgiving"}, {"tag": "Low Sodium"}, {"tag": "Browning"}, {"tag": "Casserole"}, {"tag": "High Fiber"}, {"tag": "Baking"}],
        "servings": 12,
        "ingredients": {
            "us": [
                {"quantity": 4, "measurement": "lb.", "ingredient": "sweet potatoes", "technique": "peeled and cubed into about 1-inch pieces"},
                {"quantity": 0.75, "measurement": "cup", "ingredient": "light brown sugar", "technique": "lightly packed*"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "whole milk"},
                {"quantity": 0.25, "measurement": "cup", "ingredient": "unsalted butter", "technique": "melted and slightly cooled"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "pure vanilla extract"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "ground cinnamon"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "salt"},
                {"quantity": 2, "ingredient": "large eggs"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "all purpose flour", "technique": "spooned & leveled"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "light brown sugar", "technique": "lightly packed"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "ground cinnamon"},
                {"quantity": 0.25, "measurement": "cup", "ingredient": "unsalted butter", "technique": "softened to room temperature"},
                {"quantity": 0.75, "measurement": "cup", "ingredient": "chopped pecans"}
            ], 
            "metric": [
                {"quantity": 1.81, "measurement": "kilograms", "ingredient": "sweet potatoes", "technique": "peeled and cubed into about 1-inch pieces"},
                {"quantity": 165, "measurement": "grams", "ingredient": "light brown sugar", "technique": "lightly packed*"},
                {"quantity": 118, "measurement": "ml", "ingredient": "whole milk"},
                {"quantity": 57, "measurement": "grams", "ingredient": "unsalted butter", "technique": "melted and slightly cooled"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "pure vanilla extract"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "ground cinnamon"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "salt"},
                {"quantity": 2, "ingredient": "large eggs"},
                {"quantity": "63", "measurement": "grams", "ingredient": "all purpose flour", "technique": "spooned & leveled"},
                {"quantity": "110", "measurement": "grams", "ingredient": "light brown sugar", "technique": "lightly packed"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "ground cinnamon"},
                {"quantity": "57", "measurement": "grams", "ingredient": "unsalted butter", "technique": "softened to room temperature"},
                {"quantity": "82", "measurement": "grams", "ingredient": "chopped pecans"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 4, "rev": "Vanek krasava", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 5, "rev": "Vanek nekrasava", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "chicken-enchilada-casserole",
        "title": "Chicken Enchilada Casserole",
        "time": 30,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "live-well-bake-often", "name": "Live Well Bake Often"},
        "nutrition": [{"label": "calories", "value": 350}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Main Dishes"}, {"tag": "Quick"}, {"tag": "Casserole"}, {"tag": "Low Sugar"}, {"tag": "Baking"}, {"tag": "Low Carb"}, {"tag": "Low Calorie"}, {"tag": "High Fiber"}],
        "servings": 6,
        "ingredients": {
            "us": [
                {"quantity": 6, "ingredient": "corn tortillas"},
                {"quantity": 2, "measurement": "cups", "ingredient": "chicken", "technique": "cooked and shredded"},
                {"quantity": 1.5, "measurement": "cups", "ingredient": "shredded cheese", "technique": "I used colby jack, any kind will work"},
                {"quantity": 15, "measurement": "oz.", "ingredient": "refried beans"},
                {"quantity": 2, "measurement": "cups", "ingredient": "enchilada sauce"}
            ], 
            "metric": [
                {"quantity": 6, "ingredient": "corn tortillas"},
                {"quantity": 448, "measurement": "grams", "ingredient": "chicken", "technique": "cooked and shredded"},
                {"quantity": 170, "measurement": "grams", "ingredient": "shredded cheese", "technique": "I used colby jack, any kind will work"},
                {"quantity": 425, "measurement": "grams", "ingredient": "refried beans"},
                {"quantity": 480, "measurement": "grams", "ingredient": "enchilada sauce"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 4, "rev": "Vanek krasava", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 3, "rev": "Vanek nekrasava", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "blueberry-lemon-bread-with-lemon-glaze",
        "title": "Blueberry Lemon Bread with Lemon Glaze",
        "time": 75,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "live-well-bake-often", "name": "Live Well Bake Often"},
        "nutrition": [{"label": "calories", "value": 280}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Breads"}, {"tag": "Glazing"}, {"tag": "Baking"}],
        "servings": 12,
        "ingredients": {
            "us": [
                {"quantity": 2, "measurement": "cups", "ingredient": "all purpose flour", "technique": "+ 1 tablespoon, divided"},
                {"quantity": 2, "measurement": "tsp.", "ingredient": "baking powder"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "salt"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "oil", "technique": "coconut, vegetable, or canola"},
                {"quantity": 2, "measurement": "tsp.", "ingredient": "vanilla extract"},
                {"quantity": 2, "ingredient": "eggs"},
                {"quantity": 1, "measurement": "cup", "ingredient": "granulated sugar"},
                {"quantity": 1, "measurement": "cup", "ingredient": "plain greek yogurt", "technique": "or sour cream"},
                {"quantity": 1, "ingredient": "lemon"},
                {"quantity": 1, "measurement": "cup", "ingredient": "blueberries"},
                {"ingredient": "lemon glaze"},
                {"quantity": 0.75, "measurement": "cup", "ingredient": "confectioners' sugar"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "fresh lemon juice"}
            ], 
            "metric": [
                {"quantity": 250, "measurement": "grams", "ingredient": "all purpose flour", "technique": "+ 1 tablespoon, divided"},
                {"quantity": 2, "measurement": "tsp.", "ingredient": "baking powder"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "salt"},
                {"quantity": 118, "measurement": "ml", "ingredient": "oil", "technique": "coconut, vegetable, or canola"},
                {"quantity": 2, "measurement": "tsp.", "ingredient": "vanilla extract"},
                {"quantity": 2, "ingredient": "eggs"},
                {"quantity": 202, "measurement": "grams", "ingredient": "granulated sugar"},
                {"quantity": 245, "measurement": "grams", "ingredient": "plain greek yogurt", "technique": "or sour cream"},
                {"quantity": 1, "ingredient": "lemon"},
                {"quantity": 170, "measurement": "grams", "ingredient": "blueberries"},
                {"ingredient": "lemon glaze"},
                {"quantity": 90, "measurement": "grams", "ingredient": "confectioners' sugar"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "fresh lemon juice"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 5, "rev": "Vanek krasava", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 1, "rev": "Vanek nekrasava", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "crockpot-turkey-chili",
        "title": "Crockpot Turkey Chili",
        "time": 360,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "live-well-bake-often", "name": "Live Well Bake Often"},
        "nutrition": [{"label": "calories", "value": 390}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Main Dishes"}, {"tag": "Chili"}, {"tag": "Slow Cooking"}, {"tag": "Low Calorie"}, {"tag": "High Fiber"}],
        "servings": 6,
        "ingredients": {
            "us": [
                {"quantity": 1.25, "measurement": "lb.", "ingredient": "lean ground turkey", "technique": "or lean ground beef"},
                {"quantity": 1, "ingredient": "white onion", "technique": "small, diced"},
                {"quantity": 1, "ingredient": "bell pepper", "technique": "chopped"},
                {"quantity": 29, "measurement": "oz.", "ingredient": "tomato sauce"},
                {"quantity": 15, "measurement": "oz.", "ingredient": "black beans", "technique": "rinsed and drained"},
                {"quantity": 15, "measurement": "oz.", "ingredient": "kidney beans", "technique": "rinsed and drained"},
                {"quantity": 14.5, "measurement": "oz.", "ingredient": "diced tomatoes"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "chili powder"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "ground cumin"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "garlic powder"},
                {"ingredient": "salt"},
                {"ingredient": "pepper"}
            ], 
            "metric": [
                {"quantity": 0.57, "measurement": "kilograms", "ingredient": "lean ground turkey", "technique": "or lean ground beef"},
                {"quantity": 1, "ingredient": "white onion", "technique": "small, diced"},
                {"quantity": 1, "ingredient": "bell pepper", "technique": "chopped"},
                {"quantity": 0.76, "measurement": "liters", "ingredient": "tomato sauce"},
                {"quantity": 425, "measurement": "grams", "ingredient": "black beans", "technique": "rinsed and drained"},
                {"quantity": 425, "measurement": "grams", "ingredient": "kidney beans", "technique": "rinsed and drained"},
                {"quantity": 411, "measurement": "grams", "ingredient": "diced tomatoes"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "chili powder"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "ground cumin"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "garlic powder"},
                {"ingredient": "salt"},
                {"ingredient": "pepper"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 5, "rev": "Vanek krasava", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 4, "rev": "Vanek nekrasava", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "creamy-cheesy-potatoes",
        "title": "CREAMY CHEESY POTATOES",
        "time": 90,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "jonna's-get-off-your-butt-and-bake", "name": "Jonna's Get Off Your Butt and Bake"},
        "nutrition": [{"label": "calories", "value": 420}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Side Dishes"}, {"tag": "Oven"}, {"tag": "Low Sugar"}, {"tag": "Frying"}, {"tag": "High Fiber"}, {"tag": "Browning"}, {"tag": "Boiling"}, {"tag": "Baking"}],
        "servings": 6,
        "ingredients": {
            "us": [
                {"quantity": 5, "ingredient": "potatoes", "technique": "large, cut into thin french fries or enough to fill a 9×13 glass baking dish"},
                {"quantity": 1, "measurement": "pt.", "ingredient": "whipping cream", "technique": "2 cups"},
                {"ingredient": "cream"},
                {"ingredient": "salt"},
                {"ingredient": "pepper"},
                {"quantity": 2, "measurement": "tsp.", "ingredient": "parsley flakes"},
                {"quantity": 2, "measurement": "cups", "ingredient": "cheddar cheese", "technique": "grated"}
            ], 
            "metric": [
                {"quantity": 5, "ingredient": "potatoes", "technique": "large, cut into thin french fries or enough to fill a 9×13 glass baking dish"},
                {"quantity": 473, "measurement": "ml", "ingredient": "whipping cream", "technique": "2 cups"},
                {"ingredient": "cream"},
                {"ingredient": "salt"},
                {"ingredient": "pepper"},
                {"quantity": 2, "measurement": "tsp.", "ingredient": "parsley flakes"},
                {"quantity": 226, "measurement": "grams", "ingredient": "cheddar cheese", "technique": "grated"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 5, "rev": "Vanek krasava", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 4, "rev": "Vanek nekrasava", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "fry-bread",
        "title": "FRY BREAD",
        "time": 70,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "jonna's-get-off-your-butt-and-bake", "name": "Jonna's Get Off Your Butt and Bake"},
        "nutrition": [{"label": "calories", "value": 1500}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Breads"}, {"tag": "Oven"}, {"tag": "Frying"}],
        "servings": 4,
        "ingredients": {
            "us": [
                {"quantity": 3, "measurement": "cups", "ingredient": "all-purpose flour"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "baking powder"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "sugar"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "dry milk powder"},
                {"quantity": 2, "measurement": "tsp.", "ingredient": "salt", "technique": "plus more for seasoning after frying"},
                {"quantity": 5, "measurement": "Tbsp.", "ingredient": "vegetable shortening", "technique": "cold"},
                {"quantity": 1.5, "measurement": "cups", "ingredient": "cold water"},
                {"quantity": 2, "measurement": "cups", "ingredient": "oil", "technique": "for frying"}
            ], 
            "metric": [
                {"quantity": 375, "measurement": "grams", "ingredient": "all-purpose flour"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "baking powder"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "sugar"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "dry milk powder"},
                {"quantity": 2, "measurement": "tsp.", "ingredient": "salt", "technique": "plus more for seasoning after frying"},
                {"quantity": 5, "measurement": "Tbsp.", "ingredient": "vegetable shortening", "technique": "cold"},
                {"quantity": 355, "measurement": "ml", "ingredient": "cold water"},
                {"quantity": 473, "measurement": "ml", "ingredient": "oil", "technique": "for frying"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 5, "rev": "Vanek krasava", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 4, "rev": "Vanek nekrasava", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "the-perfect-no-bake-cheesecake",
        "title": "The Perfect No Bake Cheesecake",
        "time": 30,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "jonna's-get-off-your-butt-and-bake", "name": "Jonna's Get Off Your Butt and Bake"},
        "nutrition": [{"label": "calories", "value": 630}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Desserts"}, {"tag": "Quick And Easy"}, {"tag": "Cheesecake"}, {"tag": "Quick"}, {"tag": "Easy"}],
        "servings": 4,
        "ingredients": {
            "us": [
                {"quantity": 8, "measurement": "oz.", "ingredient": "cream cheese", "technique": "at room temperature"},
                {"quantity": 1, "measurement": "cup", "ingredient": "powdered sugar"},
                {"quantity": 2, "measurement": "tsp.", "ingredient": "pure vanilla", "technique": "or other flavorings"},
                {"quantity": 1, "ingredient": "cool whip", "technique": "small, – 8 ounce container"},
                {"quantity": 0.25, "measurement": "cup", "ingredient": "white granulated sugar"},
                {"quantity": 0.75, "measurement": "cup", "ingredient": "graham cracker crumbs"},
                {"quantity": 0.3, "measurement": "cup", "ingredient": "butter", "technique": "melted"},
                {"quantity": 0.25, "measurement": "cup", "ingredient": "granulated sugar"}
            ], 
            "metric": [
                {"quantity": 227, "measurement": "grams", "ingredient": "cream cheese", "technique": "at room temperature"},
                {"quantity": 120, "measurement": "grams", "ingredient": "powdered sugar"},
                {"quantity": 2, "measurement": "tsp.", "ingredient": "pure vanilla", "technique": "or other flavorings"},
                {"quantity": 1, "ingredient": "cool whip", "technique": "small, – 8 ounce container"},
                {"quantity": 50, "measurement": "grams", "ingredient": "white granulated sugar"},
                {"quantity": 75, "measurement": "grams", "ingredient": "graham cracker crumbs"},
                {"quantity": 76, "measurement": "grams", "ingredient": "butter", "technique": "melted"},
                {"quantity": 50, "measurement": "grams", "ingredient": "granulated sugar"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 5, "rev": "Vanek krasava", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 4, "rev": "Vanek nekrasava", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "cherry-or-blueberry-crumb-dessert",
        "title": "CHERRY OR BLUEBERRY CRUMB DESSERT",
        "time": 55,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "jonna's-get-off-your-butt-and-bake", "name": "Jonna's Get Off Your Butt and Bake"},
        "nutrition": [{"label": "calories", "value": 750}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Desserts"}, {"tag": "Easy"}, {"tag": "Oven"}],
        "servings": 4,
        "ingredients": {
            "us": [
                {"quantity": 1, "measurement": "stick ", "ingredient": "butter"},
                {"quantity": 1, "measurement": "pkg. ", "ingredient": "white or yellow cake mix"},
                {"quantity": 2, "measurement": "cans", "ingredient": "cherry pie filling"},
                {"quantity": 1, "measurement": "cup", "ingredient": "chopped walnuts", "technique": "or pecans or almonds"}
            ], 
            "metric": [
                {"quantity": 1, "measurement": "stick ", "ingredient": "butter"},
                {"quantity": 1, "measurement": "pkg. ", "ingredient": "white or yellow cake mix"},
                {"quantity": 2, "measurement": "cans", "ingredient": "cherry pie filling"},
                {"quantity": 125, "measurement": "grams", "ingredient": "chopped walnuts", "technique": "or pecans or almonds"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 5, "rev": "Vanek krasava", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 4, "rev": "Vanek nekrasava", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "green-beans-and-brown-sugar-bacon",
        "title": "Green Beans & Brown Sugar Bacon",
        "time": 30,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "jonna's-get-off-your-butt-and-bake", "name": "Jonna's Get Off Your Butt and Bake"},
        "nutrition": [{"label": "calories", "value": 390}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Quick And Easy"}, {"tag": "Side Dishes"}],
        "servings": 4,
        "ingredients": {
            "us": [
                {"quantity": 0.25, "measurement": "lb.", "ingredient": "bacon", "technique": "about 5 slices, cut into 1/2-inch pieces *I like the maple bacon"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "worcestershire sauce"},
                {"quantity": 1.5, "measurement": "tsp.", "ingredient": "brown sugar"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "dry mustard"},
                {"quantity": 1.5, "measurement": "lb.", "ingredient": "green beans", "technique": "trimmed and rinsed"},
                {"quantity": 0.25, "measurement": "lb.", "ingredient": "bacon", "technique": "about 5 slices, cut into 1/2-inch pieces"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "worcestershire sauce"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "sugar"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "dry mustard"},
                {"quantity": 1, "measurement": "dash", "ingredient": "hot sauce", "technique": "such as Tabasco"},
                {"quantity": 1.5, "measurement": "lb.", "ingredient": "green beans", "technique": "trimmed and rinsed"},
                {"quantity": 0.3, "measurement": "cup", "ingredient": "roasted red peppers", "technique": "jarred, coarsely chopped"}
            ], 
            "metric": [
                {"quantity": 113, "measurement": "grams", "ingredient": "bacon", "technique": "about 5 slices, cut into 1/2-inch pieces *I like the maple bacon"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "worcestershire sauce"},
                {"quantity": 1.5, "measurement": "tsp.", "ingredient": "brown sugar"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "dry mustard"},
                {"quantity": 0.68, "measurement": "kilograms", "ingredient": "green beans", "technique": "trimmed and rinsed"},
                {"quantity": 113, "measurement": "grams", "ingredient": "bacon", "technique": "about 5 slices, cut into 1/2-inch pieces"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "worcestershire sauce"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "sugar"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "dry mustard"},
                {"quantity": 1, "measurement": "dash", "ingredient": "hot sauce", "technique": "such as Tabasco"},
                {"quantity": 0.68, "measurement": "kilograms", "ingredient": "green beans", "technique": "trimmed and rinsed"},
                {"quantity": 47, "measurement": "grams", "ingredient": "roasted red peppers", "technique": "jarred, coarsely chopped"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 5, "rev": "Vanek krasava", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 4, "rev": "Vanek nekrasava", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "chickpea-pesto-pasta-salad",
        "title": "Chickpea Pesto Pasta Salad",
        "time": 30,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "barilla", "name": "Barilla"},
        "nutrition": [{"label": "calories", "value": 35}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Salads"}, {"tag": "Easy"}, {"tag": "Pasta Salad"}, {"tag": "Boiling"}],
        "servings": 8,
        "ingredients": {
            "us": [
                {"quantity": 1, "measurement": "box", "ingredient": "Barilla® Farfalle"},
                {"quantity": 1, "measurement": "jar", "ingredient": "Barilla® Rustic Basil Pesto"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "canned chickpeas", "technique": "rinsed and drained"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "cherry tomatoes", "technique": "halved"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "cucumber", "technique": "sliced"},
                {"quantity": 3, "measurement": "Tbsp.", "ingredient": "feta cheese", "technique": "crumbled"},
                {"quantity": 3, "measurement": "Tbsp.", "ingredient": "red onion", "technique": "chopped"},
                {"quantity": 3, "measurement": "Tbsp.", "ingredient": "black olives", "technique": "halved"},
                {"ingredient": "salt", "technique": "to taste"},
                {"ingredient": "black pepper", "technique": "to taste"}
            ], 
            "metric": [
                {"quantity": 1, "measurement": "box", "ingredient": "Barilla® Farfalle"},
                {"quantity": 1, "measurement": "jar", "ingredient": "Barilla® Rustic Basil Pesto"},
                {"quantity": 82, "measurement": "grams", "ingredient": "canned chickpeas", "technique": "rinsed and drained"},
                {"quantity": 79, "measurement": "grams", "ingredient": "cherry tomatoes", "technique": "halved"},
                {"quantity": 52, "measurement": "grams", "ingredient": "cucumber", "technique": "sliced"},
                {"quantity": 3, "measurement": "Tbsp.", "ingredient": "feta cheese", "technique": "crumbled"},
                {"quantity": 3, "measurement": "Tbsp.", "ingredient": "red onion", "technique": "chopped"},
                {"quantity": 3, "measurement": "Tbsp.", "ingredient": "black olives", "technique": "halved"},
                {"ingredient": "salt", "technique": "to taste"},
                {"ingredient": "black pepper", "technique": "to taste"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 3, "rev": "Vanek krasava", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 2, "rev": "Vanek nekrasava", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "barilla-rustic-basil-pesto-3-cheese-dip",
        "title": "Barilla® Rustic Basil Pesto & 3 Cheese Dip",
        "time": 30,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "barilla", "name": "Barilla"},
        "nutrition": [{"label": "calories", "value": 370}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Appetizers"}, {"tag": "Easy"}, {"tag": "Dips And Spreads"}, {"tag": "Baking"}],
        "servings": 4,
        "ingredients": {
            "us": [
                {"quantity": 0.5, "measurement": "jar", "ingredient": "Barilla® Rustic Basil Pesto"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "ricotta cheese"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "provolone cheese", "technique": "diced"},
                {"quantity": 8, "measurement": "oz.", "ingredient": "cream cheese"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "extra-virgin olive oil"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "Italian parsley", "technique": "chopped"}
            ], 
            "metric": [
                {"quantity": 0.5, "measurement": "jar", "ingredient": "Barilla® Rustic Basil Pesto"},
                {"quantity": 123, "measurement": "grams", "ingredient": "ricotta cheese"},
                {"quantity": 66, "measurement": "grams", "ingredient": "provolone cheese", "technique": "diced"},
                {"quantity": 227, "measurement": "grams", "ingredient": "cream cheese"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "extra-virgin olive oil"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "Italian parsley", "technique": "chopped"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 3, "rev": "Vanek krasava", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 2, "rev": "Vanek nekrasava", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "barilla-cheddar-pesto-mac-cheese",
        "title": "Barilla® Cheddar Pesto Mac & Cheese",
        "time": 35,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "barilla", "name": "Barilla"},
        "nutrition": [{"label": "calories", "value": 470}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Browning"}, {"tag": "Boiling"}, {"tag": "Baking"}],
        "servings": 8,
        "ingredients": {
            "us": [
                {"quantity": 1, "measurement": "box", "ingredient": "Barilla® Elbows"},
                {"quantity": 1, "measurement": "jar", "ingredient": "Barilla® Rustic Basil Pesto"},
                {"quantity": 4, "measurement": "Tbsp.", "ingredient": "butter"},
                {"quantity": 4, "measurement": "cups", "ingredient": "2% milk"},
                {"quantity": 1, "ingredient": "shallot", "technique": "diced"},
                {"quantity": 4, "measurement": "Tbsp.", "ingredient": "flour"},
                {"quantity": 8, "measurement": "oz.", "ingredient": "cream cheese"},
                {"quantity": 4, "measurement": "cups", "ingredient": "shredded cheddar", "technique": "divided"},
                {"ingredient": "salt", "technique": "to taste"},
                {"ingredient": "white pepper", "technique": "to taste"}
            ], 
            "metric": [
                {"quantity": 1, "measurement": "box", "ingredient": "Barilla® Elbows"},
                {"quantity": 1, "measurement": "jar", "ingredient": "Barilla® Rustic Basil Pesto"},
                {"quantity": 4, "measurement": "Tbsp.", "ingredient": "butter"},
                {"quantity": 0.95, "measurement": "liters", "ingredient": "2% milk"},
                {"quantity": 1, "ingredient": "shallot", "technique": "diced"},
                {"quantity": 4, "measurement": "Tbsp.", "ingredient": "flour"},
                {"quantity": 227, "measurement": "grams", "ingredient": "cream cheese"},
                {"quantity": 452, "measurement": "grams", "ingredient": "shredded cheddar", "technique": "divided"},
                {"ingredient": "salt", "technique": "to taste"},
                {"ingredient": "white pepper", "technique": "to taste"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 3, "rev": "Vanek krasava", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 2, "rev": "Vanek nekrasava", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "focaccia-sandwich-with-turkey-red-pepper-barilla-creamy-pesto",
        "title": "Focaccia Sandwich with Turkey, Red Pepper & Barilla® Creamy Pesto",
        "time": 5,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "barilla", "name": "Barilla"},
        "nutrition": [{"label": "calories", "value": 370}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Lunch"}, {"tag": "Quick And Easy"}, {"tag": "Quick"}, {"tag": "Easy"}],
        "servings": 6,
        "ingredients": {
            "us": [
                {"quantity": 0.5, "measurement": "jar", "ingredient": "Barilla® Creamy Genovese Pesto"},
                {"quantity": 6, "measurement": "pieces", "ingredient": "focaccia", "technique": "small, sliced in half"},
                {"quantity": 8, "measurement": "oz.", "ingredient": "deli turkey slices"},
                {"quantity": 1, "measurement": "cup", "ingredient": "roasted red peppers", "technique": "jarred, sliced thin"},
                {"quantity": 6, "measurement": "slices", "ingredient": "Swiss cheese"},
                {"ingredient": "salt", "technique": "to taste"},
                {"ingredient": "white pepper", "technique": "to taste"}
            ], 
            "metric": [
                {"quantity": 0.5, "measurement": "jar", "ingredient": "Barilla® Creamy Genovese Pesto"},
                {"quantity": 6, "measurement": "pieces", "ingredient": "focaccia", "technique": "small, sliced in half"},
                {"quantity": 227, "measurement": "grams", "ingredient": "deli turkey slices"},
                {"quantity": 140, "measurement": "grams", "ingredient": "roasted red peppers", "technique": "jarred, sliced thin"},
                {"quantity": 6, "measurement": "slices", "ingredient": "Swiss cheese"},
                {"ingredient": "salt", "technique": "to taste"},
                {"ingredient": "white pepper", "technique": "to taste"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 5, "rev": "Vanek krasava", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 5, "rev": "Vanek nekrasava", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "barilla-creamy-pesto-lemon-chicken-recipe",
        "title": "Barilla® Creamy Pesto Lemon Chicken Recipe",
        "time": 80,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "barilla", "name": "Barilla"},
        "nutrition": [{"label": "calories", "value": 170}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Main Dishes"}, {"tag": "Easy"}, {"tag": "Marinating"}, {"tag": "Browning"}, {"tag": "Baking"}],
        "servings": 6,
        "ingredients": {
            "us": [
                {"quantity": 1, "measurement": "jar", "ingredient": "Barilla® Creamy Genovese Pesto"},
                {"quantity": 2, "measurement": "lb.", "ingredient": "chicken breast"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "lemon juice"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "salt"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "black pepper"}
            ], 
            "metric": [
                {"quantity": 1, "measurement": "jar", "ingredient": "Barilla® Creamy Genovese Pesto"},
                {"quantity": 0.91, "measurement": "kilograms", "ingredient": "chicken breast"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "lemon juice"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "salt"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "black pepper"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 5, "rev": "Vanek krasava", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 4, "rev": "Vanek nekrasava", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "berry-smoothie",
        "title": "Berry Smoothie",
        "time": 10,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "drAxe.com", "name": "DrAxe.com"},
        "nutrition": [{"label": "calories", "value": 100}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Beverages"}, {"tag": "Easy"}, {"tag": "Smoothie"}],
        "servings": 4,
        "ingredients": {
            "us": [
                {"quantity": 6, "measurement": "oz.", "ingredient": "kefir", "technique": "or goat's milk yogurt"},
                {"quantity": 1, "measurement": "cup", "ingredient": "raspberries"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "vanilla extract"},
                {"ingredient": "stevia", "technique": "to taste"}
            ], 
            "metric": [
                {"quantity": 210, "measurement": "ml", "ingredient": "kefir", "technique": "or goat's milk yogurt"},
                {"quantity": 156, "measurement": "grams", "ingredient": "raspberries"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "vanilla extract"},
                {"ingredient": "stevia", "technique": "to taste"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 4, "rev": "Vanek krasava", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 4, "rev": "Vanek nekrasava", "likes" : ["vlad"]}]
    },


    {
        "id": "gravy",
        "title": "Gravy",
        "time": 30,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "drAxe.com", "name": "DrAxe.com"},
        "nutrition": [{"label": "calories", "value": 600}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Easy"}, {"tag": "Gravy"}],
        "servings": 2,
        "ingredients": {
            "us": [                
                {"quantity": 0.5, "measurement": "cup", "ingredient": "butter"},
                {"quantity": 1, "ingredient": "onion", "technique": "chopped"},
                {"quantity": 0.25, "measurement": "cup", "ingredient": "gluten-free flour"},
                {"quantity": 2, "measurement": "cups", "ingredient": "stock", "technique": "any flavor"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "Herbes de Provence"},
                {"ingredient": "pepper"},
                {"ingredient": "sea salt"}
            ], 
            "metric": [
                {"quantity": 114, "measurement": "grams", "ingredient": "butter"},
                {"quantity": 1, "ingredient": "onion", "technique": "chopped"},
                {"quantity": 40, "measurement": "grams", "ingredient": "gluten-free flour"},
                {"quantity": 473, "measurement": "ml", "ingredient": "stock", "technique": "any flavor"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "Herbes de Provence"},
                {"ingredient": "pepper"},
                {"ingredient": "sea salt"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 4, "rev": "Vanek krasava", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 4, "rev": "Vanek nekrasava", "likes" : ["vlad"]}]
    },

    {
        "id": "pumpkin-spice-latte",
        "title": "Pumpkin Spice Latte",
        "time": 8,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "drAxe.com", "name": "DrAxe.com"},
        "nutrition": [{"label": "calories", "value": 310}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Beverages"}, {"tag": "Easy"}, {"tag": "Fall"}],
        "servings": 2,
        "ingredients": {
            "us": [                
                {"quantity": 1, "measurement": "cup", "ingredient": "coconut milk"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "pumpkin"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "maple syrup"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "pumpkin pie spice"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "vanilla extract"},
                {"quantity": 0.25, "measurement": "cup", "ingredient": "brewed coffee", "technique": "organic, or espresso"}
            ], 
            "metric": [
                {"quantity": 237, "measurement": "ml", "ingredient": "coconut milk"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "pumpkin"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "maple syrup"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "pumpkin pie spice"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "vanilla extract"},
                {"quantity": 59, "measurement": "ml", "ingredient": "brewed coffee", "technique": "organic, or espresso"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 4, "rev": "Great flavor", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 4, "rev": "Vanek nekrasava", "likes" : ["vlad"]}]
    },

    {
        "id": "baked-cauliflower",
        "title": "Baked Cauliflower",
        "time": 50,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "drAxe.com", "name": "DrAxe.com"},
        "nutrition": [{"label": "calories", "value": 250}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Side Dishes"}, {"tag": "Oven"}, {"tag": "Low Sugar"}, {"tag": "Browning"}, {"tag": "Low Sodium"}, {"tag": "High Fiber"}, {"tag": "Boiling"}, {"tag": "Baking"}],
        "servings": 4,
        "ingredients": {
            "us": [                
                {"quantity": 1, "measurement": "head", "ingredient": "cauliflower"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "cracker crumbs", "technique": "Mary's Gone, crushed"},
                {"quantity": 0.25, "measurement": "cup", "ingredient": "coconut oil", "technique": "melted"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "garlic powder"},
                {"quantity": 0.125, "measurement": "tsp.", "ingredient": "sea salt"},
                {"quantity": 1, "measurement": "pinch", "ingredient": "red pepper flakes"},
                {"quantity": 1, "measurement": "pinch", "ingredient": "oregano"}
            ], 
            "metric": [
                {"quantity": 1, "measurement": "head", "ingredient": "cauliflower"},
                {"quantity": 58, "measurement": "grams", "ingredient": "cracker crumbs", "technique": "Mary's Gone, crushed"},
                {"quantity": 59, "measurement": "ml", "ingredient": "coconut oil", "technique": "melted"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "garlic powder"},
                {"quantity": 0.125, "measurement": "tsp.", "ingredient": "sea salt"},
                {"quantity": 1, "measurement": "pinch", "ingredient": "red pepper flakes"},
                {"quantity": 1, "measurement": "pinch", "ingredient": "oregano"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 5, "rev": "I liked it", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 2, "rev": "Not a good choice", "likes" : ["vlad"]}]
    },

    {
        "id": "hummus",
        "title": "Hummus",
        "time": 5,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "drAxe.com", "name": "DrAxe.com"},
        "nutrition": [{"label": "calories", "value": 520}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Appetizers"}, {"tag": "Quick"}, {"tag": "Hummus"}, {"tag": "High Fiber"}],
        "servings": 4,
        "ingredients": {
            "us": [                
                {"quantity": 2, "measurement": "cups", "ingredient": "garbonzo beans", "technique": "drained"},
                {"quantity": 0.3, "measurement": "cup", "ingredient": "tahini"},
                {"quantity": 0.25, "measurement": "cup", "ingredient": "lemon juice"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "sea salt"},
                {"quantity": 2, "measurement": "cloves", "ingredient": "garlic", "technique": "minced"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "olive oil"},
                {"ingredient": "paprika", "technique": "to taste"}
            ], 
            "metric": [
                {"quantity": 400, "measurement": "grams", "ingredient": "garbonzo beans", "technique": "drained"},
                {"quantity": 80, "measurement": "grams", "ingredient": "tahini"},
                {"quantity": 59, "measurement": "ml", "ingredient": "lemon juice"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "sea salt"},
                {"quantity": 2, "measurement": "cloves", "ingredient": "garlic", "technique": "minced"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "olive oil"},
                {"ingredient": "paprika", "technique": "to taste"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 5, "rev": "I liked it", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 2, "rev": "Not a good choice", "likes" : ["vlad"]}]
    },


    {
        "id": "creamed-spinach",
        "title": "Creamed Spinach",
        "time": 15,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "love-and-lemons", "name": "Love and Lemons"},
        "nutrition": [{"label": "calories", "value": 240}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Side Dishes"}, {"tag": "Quick And Easy"}, {"tag": "Low Sugar"}, {"tag": "Quick"}, {"tag": "Easy"}, {"tag": "High Fiber"}],
        "servings": 4,
        "ingredients": {
            "us": [       
                {"ingredient": "extra-virgin olive oil"},         
                {"quantity": 1, "measurement": "lb.", "ingredient": "spinach"},         
                {"quantity": 1, "ingredient": "shallot", "technique": "chopped"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "sea salt", "technique": "more to taste"},
                {"quantity": 2, "ingredient": "garlic cloves", "technique": "minced"},
                {"quantity": 0.75, "measurement": "cup", "ingredient": "full fat coconut milk", "technique": "or 0.5 cup heavy cream"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "Dijon mustard"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "cornstarch"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "warm water"},
                {"quantity": 2, "measurement": "tsp.", "ingredient": "lemon juice"},
                {"ingredient": "freshly ground black pepper"}
            ], 
            "metric": [
                {"ingredient": "extra-virgin olive oil"},         
                {"quantity": 454, "measurement": "grams", "ingredient": "spinach"},         
                {"quantity": 1, "ingredient": "shallot", "technique": "chopped"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "sea salt", "technique": "more to taste"},
                {"quantity": 2, "ingredient": "garlic cloves", "technique": "minced"},
                {"quantity": 177, "measurement": "ml", "ingredient": "full fat coconut milk", "technique": "or 0.5 cup heavy cream"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "Dijon mustard"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "cornstarch"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "warm water"},
                {"quantity": 2, "measurement": "tsp.", "ingredient": "lemon juice"},
                {"ingredient": "freshly ground black pepper"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 5, "rev": "I liked it", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 3, "rev": "Not a good choice", "likes" : ["vlad"]}]
    },


    {
        "id": "healthy-banana-bread",
        "title": "Healthy Banana Bread",
        "time": 55,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "love-and-lemons", "name": "Love and Lemons"},
        "nutrition": [{"label": "calories", "value": 340}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Breads"}, {"tag": "Banana Bread"}, {"tag": "Baking"}],
        "servings": 8,
        "ingredients": {
            "us": [       
                {"quantity": 2, "ingredient": "ripe bananas", "technique": "very, mashed, 1 cup"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "coconut sugar", "technique": "or regular sugar"},
                {"quantity": 0.75, "measurement": "cup", "ingredient": "almond milk", "technique": "or any milk"},
                {"quantity": 0.3, "measurement": "cup", "ingredient": "extra virgin olive oil", "technique": "more for brushing"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "vanilla extract"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "apple cider vinegar"},
                {"quantity": 1.5, "measurement": "cups", "ingredient": "whole wheat pastry flour", "technique": "*, see note"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "almond flour"},
                {"quantity": 2, "measurement": "tsp.", "ingredient": "baking powder"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "baking soda"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "sea salt"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "cinnamon"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "nutmeg"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "chopped walnuts"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "chopped walnuts"},
                {"quantity": 1.5, "measurement": "Tbsp.", "ingredient": "rolled oats"}
            ], 
            "metric": [
                {"quantity": 2, "ingredient": "ripe bananas", "technique": "very, mashed, 1 cup"},
                {"quantity": 73, "measurement": "grams", "ingredient": "coconut sugar", "technique": "or regular sugar"},
                {"quantity": 177, "measurement": "ml", "ingredient": "almond milk", "technique": "or any milk"},
                {"quantity": 79, "measurement": "ml", "ingredient": "extra virgin olive oil", "technique": "more for brushing"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "vanilla extract"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "apple cider vinegar"},
                {"quantity": 188, "measurement": "grams", "ingredient": "whole wheat pastry flour", "technique": "*, see note"},
                {"quantity": 47, "measurement": "grams", "ingredient": "almond flour"},
                {"quantity": 2, "measurement": "tsp.", "ingredient": "baking powder"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "baking soda"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "sea salt"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "cinnamon"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "nutmeg"},
                {"quantity": 62, "measurement": "grams", "ingredient": "chopped walnuts"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "chopped walnuts"},
                {"quantity": 1.5, "measurement": "Tbsp.", "ingredient": "rolled oats"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 5, "rev": "I liked it", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 3, "rev": "Not a good choice", "likes" : ["vlad"]}]
    },


    {
        "id": "homemade-corn-tortillas",
        "title": "Homemade Corn Tortillas",
        "time": 65,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "love-and-lemons", "name": "Love and Lemons"},
        "nutrition": [{"label": "calories", "value": 60}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Breads"}],
        "servings": 16,
        "ingredients": {
            "us": [       
                {"quantity": 1.75, "measurement": "cups", "ingredient": "masa harina", "technique": "the Maseca brand seems to be the most popular"},
                {"quantity": 1, "measurement": "cup", "ingredient": "hot water"},
                {"quantity": 3, "measurement": "Tbsp.", "ingredient": "cold water", "technique": "as needed"},
                {"ingredient": "tortilla", "technique": "press, I have this one., Or go without like she did – brave girl"}
            ], 
            "metric": [
                {"quantity": 200, "measurement": "grams", "ingredient": "masa harina", "technique": "the Maseca brand seems to be the most popular"},
                {"quantity": 237, "measurement": "ml", "ingredient": "hot water"},
                {"quantity": 3, "measurement": "Tbsp.", "ingredient": "cold water", "technique": "as needed"},
                {"ingredient": "tortilla", "technique": "press, I have this one., Or go without like she did – brave girl"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 5, "rev": "I liked it", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 3, "rev": "Not a good choice", "likes" : ["vlad"]}]
    }, 


    {
        "id": "baked-sweet-potato",
        "title": "Baked Sweet Potato",
        "time": 45,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "love-and-lemons", "name": "Love and Lemons"},
        "nutrition": [{"label": "calories", "value": 290}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Side Dishes"}, {"tag": "Easy"}, {"tag": "Roasting"}],
        "servings": 4,
        "ingredients": {
            "us": [       
                {"ingredient": "sweet potatoes"},
                {"ingredient": "butter", "technique": "or vegan butter"},
                {"ingredient": "sea salt"},
                {"ingredient": "chives"},
                {"ingredient": "greek yogurt", "technique": "dollop of, or tzatziki"},
                {"quantity": 1, "measurement": "scoop", "ingredient": "guacamole"},
                {"ingredient": "cilantro lime dressing", "technique": "a drizzle of creamy avocado"},
                {"ingredient": "stuffing", "technique": "any of these, ideas!"}
            ], 
            "metric": [
                {"ingredient": "sweet potatoes"},
                {"ingredient": "butter", "technique": "or vegan butter"},
                {"ingredient": "sea salt"},
                {"ingredient": "chives"},
                {"ingredient": "greek yogurt", "technique": "dollop of, or tzatziki"},
                {"quantity": 1, "measurement": "scoop", "ingredient": "guacamole"},
                {"ingredient": "cilantro lime dressing", "technique": "a drizzle of creamy avocado"},
                {"ingredient": "stuffing", "technique": "any of these, ideas!"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 5, "rev": "I liked it", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 5, "rev": "good choice", "likes" : ["vlad"]}]
    }, 

    {
        "id": "cilantro-lime-dressing",
        "title": "Cilantro Lime Dressing",
        "time": 5,
        "recipeCollection": ["vlad", "vanya"],
        "resource": { "link": "love-and-lemons", "name": "Love and Lemons"},
        "nutrition": [{"label": "calories", "value": 340}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Salads"}, {"tag": "Quick"}, {"tag": "Low Sugar"}, {"tag": "Low Sodium"}, {"tag": "Low Carb"}, {"tag": "Low Calorie"}],
        "servings": 4,
        "ingredients": {
            "us": [       
                {"quantity": 2, "measurement": "cups", "ingredient": "fresh cilantro"},
                {"quantity": 1, "ingredient": "garlic clove"},
                {"quantity": 0.25, "measurement": "cup", "ingredient": "lime juice"},
                {"quantity": 2, "measurement": "tsp.", "ingredient": "maple syrup", "technique": "or honey"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "ground coriander"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "sea salt"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "extra virgin olive oil"},
                {"quantity": 1, "ingredient": "avocado", "technique": "or 0.5 cup plain whole milk Greek yogurt"}
            ], 
            "metric": [
                {"quantity": 32, "measurement": "grams", "ingredient": "fresh cilantro"},
                {"quantity": 1, "ingredient": "garlic clove"},
                {"quantity": 59, "measurement": "ml", "ingredient": "lime juice"},
                {"quantity": 2, "measurement": "tsp.", "ingredient": "maple syrup", "technique": "or honey"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "ground coriander"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "sea salt"},
                {"quantity": 118, "measurement": "ml", "ingredient": "extra virgin olive oil"},
                {"quantity": 1, "ingredient": "avocado", "technique": "or 0.5 cup plain whole milk Greek yogurt"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 5, "rev": "I liked it", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 5, "rev": "good choice", "likes" : ["vlad"]}]
    },

    {
        "id": "zero-calorie-salad-dressing",
        "title": "Zero Calorie Salad Dressing",
        "time": 60,
        "recipeCollection": ["vanya"],
        "resource": { "link": "CDKitchen", "name": "CDKitchen"},
        "nutrition": [{"label": "calories", "value": 5}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Salads"}],
        "servings": 4,
        "ingredients": {
            "us": [       
                {"quantity": 0.5, "measurement": "cup", "ingredient": "water"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "white vinegar"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "salt"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "dry mustard"},
                {"quantity": 0.125, "measurement": "tsp.", "ingredient": "black pepper"},
                {"quantity": 0.125, "measurement": "tsp.", "ingredient": "paprika"},
                {"ingredient": "artificial sweetener", "technique": "to taste"}
            ], 
            "metric": [
                {"quantity": 118, "measurement": "ml", "ingredient": "water"},
                {"quantity": 118, "measurement": "ml", "ingredient": "white vinegar"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "salt"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "dry mustard"},
                {"quantity": 0.125, "measurement": "tsp.", "ingredient": "black pepper"},
                {"quantity": 0.125, "measurement": "tsp.", "ingredient": "paprika"},
                {"ingredient": "artificial sweetener", "technique": "to taste"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 5, "rev": "I liked it", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 5, "rev": "good choice", "likes" : ["vlad"]}]
    }, 

    {
        "id": "white-rice",
        "title": "White Rice",
        "time": 29,
        "recipeCollection": ["vanya"],
        "resource": { "link": "CDKitchen", "name": "CDKitchen"},
        "nutrition": [{"label": "calories", "value": 280}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Side Dishes"}, {"tag": "Quick And Easy"}, {"tag": "Quick"}, {"tag": "Easy"}, {"tag": "Low Sugar"}, {"tag": "Low Sodium"}, {"tag": "Low Fat"}],
        "servings": 4,
        "ingredients": {
            "us": [       
                {"quantity": 1.5, "measurement": "cups", "ingredient": "white rice", "technique": "Jasmine or other Asian long grain rice"},
                {"quantity": 3, "measurement": "cups", "ingredient": "water"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "salt"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "vegetable oil"}
            ], 
            "metric": [
                {"quantity": 278, "measurement": "grams", "ingredient": "white rice", "technique": "Jasmine or other Asian long grain rice"},
                {"quantity": 0.71, "measurement": "liters", "ingredient": "water"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "salt"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "vegetable oil"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 5, "rev": "I liked it", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 5, "rev": "good choice", "likes" : ["vlad"]}]
    }, 

    {
        "id": "homemade-vanilla-pudding",
        "title": "Homemade Vanilla Pudding",
        "time": 60,
        "recipeCollection": ["vanya"],
        "resource": { "link": "CDKitchen", "name": "CDKitchen"},
        "nutrition": [{"label": "calories", "value": 230}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Desserts"}, {"tag": "Easy"}],
        "servings": 4,
        "ingredients": {
            "us": [       
                {"quantity": 2, "measurement": "cups", "ingredient": "milk"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "white sugar"},
                {"quantity": 3, "measurement": "Tbsp.", "ingredient": "cornstarch"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "salt"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "vanilla extract"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "butter"}
            ], 
            "metric": [
                {"quantity": 473, "measurement": "ml", "ingredient": "milk"},
                {"quantity": 101, "measurement": "grams", "ingredient": "white sugar"},
                {"quantity": 3, "measurement": "Tbsp.", "ingredient": "cornstarch"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "salt"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "vanilla extract"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "butter"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 5, "rev": "I liked it", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 5, "rev": "good choice", "likes" : ["vlad"]}]
    }, 

    {
        "id": "simple-sweet-and-sour-sauce",
        "title": "Simple Sweet And Sour Sauce",
        "time": 20,
        "recipeCollection": ["vanya"],
        "resource": { "link": "CDKitchen", "name": "CDKitchen"},
        "nutrition": [{"label": "calories", "value": 70}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Condiments And Sauces"}, {"tag": "Easy"}, {"tag": "Low Fat"}],
        "servings": 4,
        "ingredients": {
            "us": [       
                {"quantity": 0.25, "measurement": "cup", "ingredient": "sugar"},
                {"quantity": 0.25, "measurement": "cup", "ingredient": "ketchup"},
                {"quantity": 0.25, "measurement": "cup", "ingredient": "apple cider vinegar"},
                {"quantity": 0.25, "measurement": "cup", "ingredient": "water"}
            ], 
            "metric": [
                {"quantity": 50, "measurement": "grams", "ingredient": "sugar"},
                {"quantity": 59, "measurement": "ml", "ingredient": "ketchup"},
                {"quantity": 59, "measurement": "ml", "ingredient": "apple cider vinegar"},
                {"quantity": 59, "measurement": "ml", "ingredient": "water"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 4, "rev": "I liked it", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 4, "rev": "good choice", "likes" : ["vlad"]}]
    },

    {
        "id": "easy-chicken-alfredo",
        "title": "Easy Chicken Alfredo",
        "time": 15,
        "recipeCollection": ["vanya"],
        "resource": { "link": "CDKitchen", "name": "CDKitchen"},
        "nutrition": [{"label": "calories", "value": 320}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Main Dishes"}, {"tag": "Quick And Easy"}, {"tag": "Alfredo"}, {"tag": "Low Sugar"}, {"tag": "Quick"}, {"tag": "Easy"}, {"tag": "Low Calorie"}],
        "servings": 4,
        "ingredients": {
            "us": [       
                {"quantity": 6, "measurement": "oz.", "ingredient": "fettuccine pasta"},
                {"quantity": 1, "measurement": "cup", "ingredient": "broccoli florets"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "butter"},
                {"quantity": 1, "measurement": "lb.", "ingredient": "skinless boneless chicken breast halves", "technique": "cubed"},
                {"quantity": 1, "measurement": "can", "ingredient": "cream of mushroom soup", "technique": "10 ounce size"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "milk"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "Parmesan cheese", "technique": "grated"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "freshly ground black pepper"}
            ], 
            "metric": [
                {"quantity": 170, "measurement": "grams", "ingredient": "fettuccine pasta"},
                {"quantity": 91, "measurement": "grams", "ingredient": "broccoli florets"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "butter"},
                {"quantity": 454, "measurement": "grams", "ingredient": "skinless boneless chicken breast halves", "technique": "cubed"},
                {"quantity": 1, "measurement": "can", "ingredient": "cream of mushroom soup", "technique": "10 ounce size"},
                {"quantity": 118, "measurement": "ml", "ingredient": "milk"},
                {"quantity": 50, "measurement": "grams", "ingredient": "Parmesan cheese", "technique": "grated"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "freshly ground black pepper"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 4, "rev": "I liked it", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 4, "rev": "good choice", "likes" : ["vlad"]}]
    },


    {
        "id": "easiest-ever-almond-cookie",
        "title": "Easiest Ever Almond Cookie",
        "time": 24,
        "recipeCollection": ["vanya"],
        "resource": { "link": "the-sugar-free-diva", "name": "The Sugar Free Diva"},
        "nutrition": [{"label": "calories", "value": 60}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Desserts"}, {"tag": "Quick"}, {"tag": "Cookies"}, {"tag": "Baking"}],
        "servings": 24,
        "ingredients": {
            "us": [       
                {"quantity": 2, "measurement": "cups", "ingredient": "almond flour"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "baking powder"},
                {"quantity": 0.3, "measurement": "cup", "ingredient": "yacon syrup", "technique": "see post for alternatives"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "vanilla extract"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "almond extract"},
                {"quantity": 0.25, "measurement": "cup", "ingredient": "chopped almonds"}
            ], 
            "metric": [
                {"quantity": 190, "measurement": "grams", "ingredient": "almond flour"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "baking powder"},
                {"quantity": 79, "measurement": "ml", "ingredient": "yacon syrup", "technique": "see post for alternatives"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "vanilla extract"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "almond extract"},
                {"quantity": 36, "measurement": "grams", "ingredient": "chopped almonds"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 4, "rev": "I liked it", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 4, "rev": "good choice", "likes" : ["vlad"]}]
    },

    {
        "id": "sugar-free-blueberry-pie",
        "title": "Sugar Free Blueberry Pie",
        "time": 70,
        "recipeCollection": ["vanya"],
        "resource": { "link": "the-sugar-free-diva", "name": "The Sugar Free Diva"},
        "nutrition": [{"label": "calories", "value": 460}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Desserts"}, {"tag": "Easy"}, {"tag": "Pie"}, {"tag": "Baking"}],
        "servings": 4,
        "ingredients": {
            "us": [       
                {"quantity": 1, "ingredient": "pie crust"},
                {"quantity": 5, "measurement": "cups", "ingredient": "blueberries"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "splenda"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "flour"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "lemon juice"}
            ], 
            "metric": [
                {"quantity": 1, "ingredient": "pie crust"},
                {"quantity": 0.85, "measurement": "kilograms", "ingredient": "blueberries"},
                {"quantity": 12, "measurement": "grams", "ingredient": "splenda"},
                {"quantity": 63, "measurement": "grams", "ingredient": "flour"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "lemon juice"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 4, "rev": "Not quiet what I thought, but tasty. I’ll work on presentation next time I make it.", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 4, "rev": "good choice", "likes" : ["vlad"]}]
    },

    {
        "id": "super-simple-sugar-free-chocolate-icing",
        "title": "Super Simple Sugar Free Chocolate Icing",
        "time": 70,
        "recipeCollection": ["vanya"],
        "resource": { "link": "the-sugar-free-diva", "name": "The Sugar Free Diva"},
        "nutrition": [{"label": "calories", "value": 160}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Desserts"}, {"tag": "Easy"}, {"tag": "Icing"}],
        "servings": 11,
        "ingredients": {
            "us": [       
                {"quantity": 1, "measurement": "cup", "ingredient": "greek yogurt"},
                {"quantity": 1.25, "measurement": "cups", "ingredient": "sugar free chocolate chips"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "softened butter"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "vanilla extract"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "sugar", "technique": "alternative such as Splenda"}
            ], 
            "metric": [
                {"quantity": 245, "measurement": "grams", "ingredient": "greek yogurt"},
                {"quantity": 210, "measurement": "grams", "ingredient": "sugar free chocolate chips"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "softened butter"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "vanilla extract"},
                {"quantity": 100, "measurement": "grams", "ingredient": "sugar", "technique": "alternative such as Splenda"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 4, "rev": "Not quiet what I thought, but tasty. I’ll work on presentation next time I make it.", "likes" : ["vlad", "vanya"]}, {"user": "nevanek", "link": "nevanek", "stars": 4, "rev": "good choice", "likes" : ["vlad"]}]
    },

    {
        "id": "sugar-free-vanilla-ice-cream",
        "title": "Sugar Free Vanilla Ice Cream",
        "time": 20,
        "recipeCollection": ["vanya"],
        "resource": { "link": "the-sugar-free-diva", "name": "The Sugar Free Diva"},
        "nutrition": [{"label": "calories", "value": 520}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Desserts"}, {"tag": "Quick"}, {"tag": "Ice Cream"}],
        "servings": 4,
        "ingredients": {
            "us": [       
                {"quantity": 2, "measurement": "cups", "ingredient": "heavy whipping cream"},
                {"quantity": 2, "measurement": "cups", "ingredient": "milk"},
                {"quantity": 0.75, "measurement": "cup", "ingredient": "splenda"},
                {"quantity": 2, "measurement": "tsp.", "ingredient": "vanilla extract"}
            ], 
            "metric": [
                {"quantity": 473, "measurement": "ml", "ingredient": "heavy whipping cream"},
                {"quantity": 473, "measurement": "ml", "ingredient": "milk"},
                {"quantity": 18, "measurement": "grams", "ingredient": "splenda"},
                {"quantity": 2, "measurement": "tsp.", "ingredient": "vanilla extract"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 4, "rev": "Good one!", "likes" : ["vlad"]}, {"user": "nevanek", "link": "nevanek", "stars": 4, "rev": "good choice", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "how-to-make-keto-low-carb-noodles",
        "title": "How To Make Keto Low Carb Noodles",
        "time": 480,
        "recipeCollection": ["vanya"],
        "resource": { "link": "the-sugar-free-diva", "name": "The Sugar Free Diva"},
        "nutrition": [{"label": "calories", "value": 200}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Quick"}, {"tag": "Low Sugar"}, {"tag": "Low Sodium"}, {"tag": "Low Carb"}, {"tag": "Low Calorie"}],
        "servings": 4,
        "ingredients": {
            "us": [       
                {"quantity": 2, "measurement": "cups", "ingredient": "mozzarella", "technique": "Shredded, store bought"},
                {"quantity": 2, "ingredient": "egg yolks", "technique": "Gently stirred"}
            ], 
            "metric": [
                {"quantity": 224, "measurement": "grams", "ingredient": "mozzarella", "technique": "Shredded, store bought"},
                {"quantity": 2, "ingredient": "egg yolks", "technique": "Gently stirred"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "vanek", "stars": 4, "rev": "Good one!", "likes" : ["vlad"]}, {"user": "nevanek", "link": "nevanek", "stars": 4, "rev": "good choice", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "how-to-make-caramelized-onions",
        "title": "How to Make Caramelized Onions",
        "time": 50,
        "recipeCollection": ["vanya"],
        "resource": { "link": "add-a-pinch", "name": "Add a Pinch"},
        "nutrition": [{"label": "calories", "value": 70}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Side Dishes"}, {"tag": "Easy"}, {"tag": "Low Sugar"}, {"tag": "Low Carb"}, {"tag": "Low Calorie"}],
        "servings": 2,
        "ingredients": {
            "us": [       
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "butter oil"},
                {"quantity": 1, "ingredient": "onion", "technique": "sliced into rings"},
                {"ingredient": "salt", "technique": "to taste"}
            ], 
            "metric": [
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "butter oil"},
                {"quantity": 1, "ingredient": "onion", "technique": "sliced into rings"},
                {"ingredient": "salt", "technique": "to taste"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "Vladislav", "stars": 4, "rev": "Good one!", "likes" : ["vlad"]}, {"user": "nevanek", "link": "John", "stars": 4, "rev": "good choice", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "perfect-whipped-cream",
        "title": "Perfect Whipped Cream",
        "time": 2,
        "recipeCollection": ["vanya"],
        "resource": { "link": "add-a-pinch", "name": "Add a Pinch"},
        "nutrition": [{"label": "calories", "value": 60}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Desserts"}, {"tag": "Quick"}],
        "servings": 16,
        "ingredients": {
            "us": [       
                {"quantity": 1, "measurement": "cup", "ingredient": "heavy whipping cream", "technique": "cold"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "sugar", "technique": "honey, or maple syrup"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "vanilla", "technique": "or other flavorings or liquors"}
            ], 
            "metric": [
                {"quantity": 237, "measurement": "ml", "ingredient": "heavy whipping cream", "technique": "cold"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "sugar", "technique": "honey, or maple syrup"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "vanilla", "technique": "or other flavorings or liquors"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "Vladislav", "stars": 4, "rev": "Good one!", "likes" : ["vlad"]}, {"user": "nevanek", "link": "John", "stars": 4, "rev": "good choice", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "shortbread",
        "title": "Shortbread",
        "time": 70,
        "recipeCollection": ["vanya"],
        "resource": { "link": "add-a-pinch", "name": "Add a Pinch"},
        "nutrition": [{"label": "calories", "value": 390}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Desserts"}, {"tag": "Shortbread"}],
        "servings": 8,
        "ingredients": {
            "us": [       
                {"quantity": 1, "measurement": "cup", "ingredient": "salted butter", "technique": "softened"},
                {"quantity": 0.75, "measurement": "cup", "ingredient": "sugar", "technique": "confectioner's, whisked"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "salt"},
                {"quantity": 2, "measurement": "cups", "ingredient": "flour", "technique": "all-purpose"}
            ], 
            "metric": [
                {"quantity": 227, "measurement": "grams", "ingredient": "salted butter", "technique": "softened"},
                {"quantity": 150, "measurement": "grams", "ingredient": "sugar", "technique": "confectioner's, whisked"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "salt"},
                {"quantity": 250, "measurement": "grams", "ingredient": "flour", "technique": "all-purpose"}
            ]
        },
        "reviews": [{"user": "vanek", "link": "Vladislav", "stars": 4, "rev": "Good one!", "likes" : ["vlad"]}, {"user": "nevanek", "link": "John", "stars": 4, "rev": "good choice", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "perfect-queso",
        "title": "Perfect Queso",
        "time": 5,
        "recipeCollection": ["vanya"],
        "resource": { "link": "add-a-pinch", "name": "Add a Pinch"},
        "nutrition": [{"label": "calories", "value": 250}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Quick"}, {"tag": "Slow Cooking"}, {"tag": "Microwaving"}],
        "servings": 2,
        "ingredients": {
            "us": [       
                {"quantity": 0.5, "measurement": "cup", "ingredient": "jalapeno cheddar cheese", "technique": "grated"},
                {"quantity": 1, "measurement": "cup", "ingredient": "American cheese", "technique": "grated white"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "queso cheese", "technique": "grated white"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "whole milk", "technique": "or half and half"}
            ], 
            "metric": [
                {"quantity": 118, "measurement": "ml", "ingredient": "jalapeno cheddar cheese", "technique": "grated"},
                {"quantity": 140, "measurement": "grams", "ingredient": "American cheese", "technique": "grated white"},
                {"quantity": 65, "measurement": "grams", "ingredient": "queso cheese", "technique": "grated white"},
                {"quantity": 118, "measurement": "ml", "ingredient": "whole milk", "technique": "or half and half"}
            ]
        },
        "reviews": [{"user": "Vladislav", "link": "vladislav", "stars": 4, "rev": "Good one!", "likes" : ["vlad"]}, {"user": "John", "link": "john", "stars": 4, "rev": "good choice", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "apple-crisp",
        "title": "Apple Crisp",
        "time": 55,
        "recipeCollection": ["vanya"],
        "resource": { "link": "add-a-pinch", "name": "Add a Pinch"},
        "nutrition": [{"label": "calories", "value": 380}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Desserts"}, {"tag": "Crisp"}, {"tag": "Browning"}, {"tag": "Baking"}],
        "servings": 12,
        "ingredients": {
            "us": [       
                {"quantity": 10, "measurement": "cups", "ingredient": "sliced apples"},
                {"quantity": 0.25, "measurement": "cup", "ingredient": "lemon juice"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "brown sugar"},
                {"quantity": 0.25, "measurement": "cup", "ingredient": "granulated sugar"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "ground cinnamon"},
                {"ingredient": "apple", "technique": "Crisp Topping"},
                {"quantity": 8, "measurement": "Tbsp.", "ingredient": "butter", "technique": "cut into large slices"},
                {"quantity": 1.5, "measurement": "cups", "ingredient": "all purpose flour"},
                {"quantity": 1.5, "measurement": "cups", "ingredient": "brown sugar"},
                {"quantity": 2, "measurement": "cups", "ingredient": "quick cooking oats", "technique": "divided"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "cinnamon"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "nutmeg"},
                {"quantity": 0.25, "measurement": "cup", "ingredient": "canola oil", "technique": "or 3 tablespoons melted coconut oil"}
            ], 
            "metric": [
                {"quantity": 1.09, "measurement": "kilograms", "ingredient": "sliced apples"},
                {"quantity": 59, "measurement": "ml", "ingredient": "lemon juice"},
                {"quantity": 73, "measurement": "grams", "ingredient": "brown sugar"},
                {"quantity": 50, "measurement": "grams", "ingredient": "granulated sugar"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "ground cinnamon"},
                {"ingredient": "apple", "technique": "Crisp Topping"},
                {"quantity": 8, "measurement": "Tbsp.", "ingredient": "butter", "technique": "cut into large slices"},
                {"quantity": 188, "measurement": "grams", "ingredient": "all purpose flour"},
                {"quantity": 218, "measurement": "grams", "ingredient": "brown sugar"},
                {"quantity": 162, "measurement": "grams", "ingredient": "quick cooking oats", "technique": "divided"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "cinnamon"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "nutmeg"},
                {"quantity": 59, "measurement": "ml", "ingredient": "canola oil", "technique": "or 3 tablespoons melted coconut oil"}
            ]
        },
        "reviews": [{"user": "Vladislav", "link": "vladislav", "stars": 4, "rev": "Good one!", "likes" : ["vlad"]}, {"user": "John", "link": "john", "stars": 4, "rev": "good choice", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "taco-soup",
        "title": "Taco Soup",
        "time": 15,
        "recipeCollection": ["vanya"],
        "resource": { "link": "homan-at-home", "name": "Homan At Home"},
        "nutrition": [{"label": "calories", "value": 230}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Soups"}, {"tag": "Quick And Easy"}, {"tag": "Quick"}, {"tag": "Easy"}],
        "servings": 8,
        "ingredients": {
            "us": [       
                {"quantity": 1, "measurement": "can", "ingredient": "tomato sauce"},
                {"quantity": 1, "measurement": "can", "ingredient": "diced tomatoes"},
                {"quantity": 1, "measurement": "lb.", "ingredient": "ground beef", "technique": "cooked and taco-seasoned"},
                {"quantity": 1, "measurement": "can", "ingredient": "corn"},
                {"quantity": 1, "measurement": "can", "ingredient": "black beans"},
                {"quantity": 1, "measurement": "can", "ingredient": "kidney beans"},
                {"quantity": 0.25, "measurement": "cup", "ingredient": "taco seasoning"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "water"}
            ], 
            "metric": [
                {"quantity": 1, "measurement": "can", "ingredient": "tomato sauce"},
                {"quantity": 1, "measurement": "can", "ingredient": "diced tomatoes"},
                {"quantity": 454, "measurement": "grams", "ingredient": "ground beef", "technique": "cooked and taco-seasoned"},
                {"quantity": 1, "measurement": "can", "ingredient": "corn"},
                {"quantity": 1, "measurement": "can", "ingredient": "black beans"},
                {"quantity": 1, "measurement": "can", "ingredient": "kidney beans"},
                {"quantity": 11, "measurement": "grams", "ingredient": "taco seasoning"},
                {"quantity": 118, "measurement": "ml", "ingredient": "water"}
            ]
        },
        "reviews": [{"user": "Vladislav", "link": "vladislav", "stars": 4, "rev": "Good one!", "likes" : ["vlad"]}, {"user": "John", "link": "john", "stars": 4, "rev": "good choice", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "chicken-enchiladas",
        "title": "Chicken Enchiladas",
        "time": 25,
        "recipeCollection": ["vanya"],
        "resource": { "link": "homan-at-home", "name": "Homan At Home"},
        "nutrition": [{"label": "calories", "value": 570}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Main Dishes"}, {"tag": "Quick And Easy"}, {"tag": "Enchiladas"}, {"tag": "Low Sugar"}, {"tag": "Baking"}, {"tag": "Quick"}, {"tag": "Easy"}],
        "servings": 4,
        "ingredients": {
            "us": [       
                {"quantity": 6, "ingredient": "flour tortillas"},
                {"quantity": 3, "ingredient": "chicken breasts", "technique": "shredded"},
                {"quantity": 15, "measurement": "oz.", "ingredient": "enchilada sauce"},
                {"quantity": 1, "measurement": "cup", "ingredient": "cheese"}
            ], 
            "metric": [
                {"quantity": 6, "ingredient": "flour tortillas"},
                {"quantity": 3, "ingredient": "chicken breasts", "technique": "shredded"},
                {"quantity": 425, "measurement": "grams", "ingredient": "enchilada sauce"},
                {"quantity": 113, "measurement": "grams", "ingredient": "cheese"}
            ]
        },
        "reviews": [{"user": "Vladislav", "link": "vladislav", "stars": 4, "rev": "Good one!", "likes" : ["vlad"]}, {"user": "John", "link": "john", "stars": 4, "rev": "good choice", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "homemade-french-fries",
        "title": "Homemade French Fries",
        "time": 25,
        "recipeCollection": ["vanya"],
        "resource": { "link": "homan-at-home", "name": "Homan At Home"},
        "nutrition": [{"label": "calories", "value": 250}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Side Dishes"}, {"tag": "Quick And Easy"}, {"tag": "Fries"}, {"tag": "Oven"}, {"tag": "Low Sugar"}, {"tag": "Baking"}, {"tag": "Quick"}, {"tag": "Easy"}, {"tag": "Low Sodium"}, {"tag": "Low Fat"}, {"tag": "High Fiber"}],
        "servings": 8,
        "ingredients": {
            "us": [       
                {"quantity": 6, "ingredient": "large potatoes"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "olive oil"},
                {"quantity": 2, "measurement": "tsp.", "ingredient": "garlic"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "paprika"},
                {"quantity": 2, "measurement": "tsp.", "ingredient": "seasoned salt"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "black pepper"}
            ], 
            "metric": [
                {"quantity": 6, "ingredient": "large potatoes"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "olive oil"},
                {"quantity": 2, "measurement": "tsp.", "ingredient": "garlic"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "paprika"},
                {"quantity": 2, "measurement": "tsp.", "ingredient": "seasoned salt"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "black pepper"}
            ]
        },
        "reviews": [{"user": "Vladislav", "link": "vladislav", "stars": 2, "rev": "Bad one :(", "likes" : ["vlad"]}, {"user": "John", "link": "john", "stars": 4, "rev": "Perfect!", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "barbecue-ranch-turkey-burgers",
        "title": "Barbecue Ranch Turkey Burgers",
        "time": 30,
        "recipeCollection": ["vanya"],
        "resource": { "link": "homan-at-home", "name": "Homan At Home"},
        "nutrition": [{"label": "calories", "value": 170}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Main Dishes"}, {"tag": "Turkey Burger"}, {"tag": "Grilling"}, {"tag": "Burger"}, {"tag": "Low Sugar"}, {"tag": "Low Sodium"}, {"tag": "Low Fat"}, {"tag": "Low Carb"}, {"tag": "Low Calorie"}, {"tag": "Baking"}],
        "servings": 8,
        "ingredients": {
            "us": [       
                {"quantity": 1, "measurement": "lb.", "ingredient": "ground turkey"},
                {"quantity": 1, "ingredient": "egg"},
                {"quantity": 0.75, "measurement": "cup", "ingredient": "bread crumbs"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "onion", "technique": "dried"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "seasoned salt"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "garlic powder"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "barbecue sauce"},
                {"quantity": 4, "measurement": "Tbsp.", "ingredient": "ranch dressing"}
            ], 
            "metric": [
                {"quantity": 454, "measurement": "grams", "ingredient": "ground turkey"},
                {"quantity": 1, "ingredient": "egg"},
                {"quantity": 81, "measurement": "grams", "ingredient": "bread crumbs"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "onion", "technique": "dried"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "seasoned salt"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "garlic powder"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "barbecue sauce"},
                {"quantity": 4, "measurement": "Tbsp.", "ingredient": "ranch dressing"}
            ]
        },
        "reviews": [{"user": "Vladislav", "link": "vladislav", "stars": 2, "rev": "Bad one :(", "likes" : ["vlad"]}, {"user": "John", "link": "john", "stars": 4, "rev": "Perfect!", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "korean-beef-and-veggies",
        "title": "Korean Beef and Veggies",
        "time": 15,
        "recipeCollection": ["vanya"],
        "resource": { "link": "homan-at-home", "name": "Homan At Home"},
        "nutrition": [{"label": "calories", "value": 310}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Main Dishes"}, {"tag": "Korean"}, {"tag": "Quick And Easy"}, {"tag": "Low Carb"}, {"tag": "Frying"}, {"tag": "Quick"}, {"tag": "Easy"}, {"tag": "Low Calorie"}, {"tag": "Browning"}],
        "servings": 4,
        "ingredients": {
            "us": [       
                {"quantity": 1, "measurement": "lb.", "ingredient": "ground beef"},
                {"quantity": 2, "measurement": "cups", "ingredient": "veggies", "technique": "frozen stir-fry"},
                {"quantity": 0.3, "measurement": "cup", "ingredient": "brown sugar"},
                {"quantity": 0.25, "measurement": "cup", "ingredient": "soy sauce"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "red pepper flakes"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "garlic powder"}
            ], 
            "metric": [
                {"quantity": 454, "measurement": "grams", "ingredient": "ground beef"},
                {"quantity": 208, "measurement": "grams", "ingredient": "veggies", "technique": "frozen stir-fry"},
                {"quantity": 48, "measurement": "grams", "ingredient": "brown sugar"},
                {"quantity": 59, "measurement": "ml", "ingredient": "soy sauce"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "red pepper flakes"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "garlic powder"}
            ]
        },
        "reviews": [{"user": "Vladislav", "link": "vladislav", "stars": 2, "rev": "Bad one :(", "likes" : ["vlad"]}, {"user": "John", "link": "john", "stars": 4, "rev": "Perfect!", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "olive-garden-copycat-chicken-gnocchi-soup",
        "title": "Olive Garden Copycat Chicken Gnocchi Soup",
        "time": 45,
        "recipeCollection": ["vanya"],
        "resource": { "link": "homan-at-home", "name": "Homan At Home"},
        "nutrition": [{"label": "calories", "value": 320}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Soups"}, {"tag": "Low Sugar"}, {"tag": "Sauteeing"}, {"tag": "Low Sodium"}, {"tag": "Low Carb"}, {"tag": "Low Calorie"}, {"tag": "Boiling"}],
        "servings": 4,
        "ingredients": {
            "us": [       
                {"quantity": 1, "ingredient": "chicken breast ", "technique": "chopped and cooked"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "butter"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "olive oil"},
                {"quantity": 12, "measurement": "oz.", "ingredient": "evaporated milk"},
                {"quantity": 1, "measurement": "cup", "ingredient": "water"},
                {"quantity": 1, "ingredient": "chicken bouillon cube"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "cornstarch"},
                {"quantity": 0.25, "measurement": "cup", "ingredient": "warm water"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "garlic powder"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "shredded carrots"},
                {"quantity": 1, "ingredient": "onion", "technique": "small, diced"},
                {"quantity": 1, "measurement": "cup", "ingredient": "spinach", "technique": "chopped"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "thyme"},
                {"quantity": 1, "measurement": "pkg.", "ingredient": "gnocchi"}
            ], 
            "metric": [
                {"quantity": 1, "ingredient": "chicken breast ", "technique": "chopped and cooked"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "butter"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "olive oil"},
                {"quantity": 319, "measurement": "ml", "ingredient": "evaporated milk"},
                {"quantity": 237, "measurement": "ml", "ingredient": "water"},
                {"quantity": 1, "ingredient": "chicken bouillon cube"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "cornstarch"},
                {"quantity": 59, "measurement": "ml", "ingredient": "warm water"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "garlic powder"},
                {"quantity": 55, "measurement": "grams", "ingredient": "shredded carrots"},
                {"quantity": 1, "ingredient": "onion", "technique": "small, diced"},
                {"quantity": 30, "measurement": "grams", "ingredient": "spinach", "technique": "chopped"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "thyme"},
                {"quantity": 1, "measurement": "pkg.", "ingredient": "gnocchi"}
            ]
        },
        "reviews": [{"user": "Vladislav", "link": "vladislav", "stars": 2, "rev": "Bad one :(", "likes" : ["vlad"]}, {"user": "John", "link": "john", "stars": 4, "rev": "Perfect!", "likes" : ["vlad", "vanya"]}]
    },


    {
        "id": "mug-cakes-in-a-jar",
        "title": "Mug Cakes in a Jar",
        "time": 35,
        "recipeCollection": ["vanya"],
        "resource": { "link": "homan-at-home", "name": "Homan At Home"},
        "nutrition": [{"label": "calories", "value": 90}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Desserts"}, {"tag": "Easy"}, {"tag": "Microwaving"}],
        "servings": 4,
        "ingredients": {
            "us": [       
                {"quantity": 0.25, "measurement": "cup", "ingredient": "flour"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "cocoa powder"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "sugar"},
                {"quantity": 0.125, "measurement": "Tbsp.", "ingredient": "salt"},
                {"quantity": 3, "measurement": "Tbsp.", "ingredient": "flour"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "brown sugar"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "ground cinnamon"},
                {"quantity": 0.125, "measurement": "Tbsp.", "ingredient": "baking powder"}
            ], 
            "metric": [
                {"quantity": 31, "measurement": "grams", "ingredient": "flour"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "cocoa powder"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "sugar"},
                {"quantity": 0.125, "measurement": "Tbsp.", "ingredient": "salt"},
                {"quantity": 3, "measurement": "Tbsp.", "ingredient": "flour"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "brown sugar"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "ground cinnamon"},
                {"quantity": 0.125, "measurement": "Tbsp.", "ingredient": "baking powder"}
            ]
        },
        "reviews": [{"user": "Vladislav", "link": "vladislav", "stars": 2, "rev": "Bad one :(", "likes" : ["vlad"]}, {"user": "John", "link": "john", "stars": 4, "rev": "Perfect!", "likes" : ["vlad", "vanya"]}]
    },


    {
        "id": "peanut-butter-frosting",
        "title": "Peanut Butter Frosting",
        "time": 20,
        "recipeCollection": ["vanya"],
        "resource": { "link": "homan-at-home", "name": "Homan At Home"},
        "nutrition": [{"label": "calories", "value": 690}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Desserts"}, {"tag": "Quick And Easy"}, {"tag": "Frosting"}, {"tag": "Quick"}, {"tag": "Easy"}],
        "servings": 4,
        "ingredients": {
            "us": [       
                {"quantity": 1, "measurement": "stick", "ingredient": "butter"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "creamy peanut butter"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "vanilla"},
                {"quantity": 2.5, "measurement": "cups", "ingredient": "powdered sugar"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "milk"}
            ], 
            "metric": [
                {"quantity": 1, "measurement": "stick", "ingredient": "butter"},
                {"quantity": 129, "measurement": "grams", "ingredient": "creamy peanut butter"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "vanilla"},
                {"quantity": 300, "measurement": "grams", "ingredient": "powdered sugar"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "milk"}
            ]
        },
        "reviews": [{"user": "Vladislav", "link": "vladislav", "stars": 2, "rev": "Bad one :(", "likes" : ["vlad"]}, {"user": "John", "link": "john", "stars": 4, "rev": "Perfect!", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "green-chili-chicken-enchiladas",
        "title": "Green Chili Chicken Enchiladas",
        "time": 30,
        "recipeCollection": ["vanya"],
        "resource": { "link": "homan-at-home", "name": "Homan At Home"},
        "nutrition": [{"label": "calories", "value": 370}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Main Dishes"}, {"tag": "Quick"}, {"tag": "Enchiladas"}, {"tag": "Baking"}],
        "servings": 6,
        "ingredients": {
            "us": [       
                {"quantity": 10.5, "measurement": "oz.", "ingredient": "cream of chicken soup"},
                {"quantity": 6, "ingredient": "tortillas"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "milk"},
                {"quantity": 4, "measurement": "oz.", "ingredient": "green chilies"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "grated cheese"},
                {"quantity": 2, "measurement": "cups", "ingredient": "chicken", "technique": "cooked and shredded"}
            ], 
            "metric": [
                {"quantity": 298, "measurement": "grams", "ingredient": "cream of chicken soup"},
                {"quantity": 6, "ingredient": "tortillas"},
                {"quantity": 118, "measurement": "ml", "ingredient": "milk"},
                {"quantity": 113, "measurement": "grams", "ingredient": "green chilies"},
                {"quantity": 118, "measurement": "ml", "ingredient": "grated cheese"},
                {"quantity": 448, "measurement": "grams", "ingredient": "chicken", "technique": "cooked and shredded"}
            ]
        },
        "reviews": [{"user": "Vladislav", "link": "vladislav", "stars": 2, "rev": "Bad one :(", "likes" : ["vlad"]}, {"user": "John", "link": "john", "stars": 4, "rev": "Perfect!", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "eggless-sugar-cookie-dough",
        "title": "Eggless Sugar Cookie Dough",
        "time": 5,
        "recipeCollection": ["vanya"],
        "resource": { "link": "homan-at-home", "name": "Homan At Home"},
        "nutrition": [{"label": "calories", "value": 860}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Desserts"}, {"tag": "Quick"}],
        "servings": 4,
        "ingredients": {
            "us": [       
                {"quantity": 0.25, "measurement": "cup", "ingredient": "butter", "technique": "or margarine, softened"},
                {"quantity": 6, "measurement": "Tbsp.", "ingredient": "sugar"},
                {"quantity": 1.5, "measurement": "tsp.", "ingredient": "vanilla"},
                {"quantity": 0.75, "measurement": "cup", "ingredient": "flour"},
                {"quantity": 3, "measurement": "Tbsp.", "ingredient": "water", "technique": "or milk"},
                {"ingredient": "raisins", "technique": "optional"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "cinnamon"},
                {"quantity": 1, "measurement": "pinch", "ingredient": "cloves"},
                {"quantity": 0.75, "measurement": "cup", "ingredient": "oatmeal"}
            ], 
            "metric": [
                {"quantity": 57, "measurement": "grams", "ingredient": "butter", "technique": "or margarine, softened"},
                {"quantity": 6, "measurement": "Tbsp.", "ingredient": "sugar"},
                {"quantity": 1.5, "measurement": "tsp.", "ingredient": "vanilla"},
                {"quantity": 94, "measurement": "grams", "ingredient": "flour"},
                {"quantity": 3, "measurement": "Tbsp.", "ingredient": "water", "technique": "or milk"},
                {"ingredient": "raisins", "technique": "optional"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "cinnamon"},
                {"quantity": 1, "measurement": "pinch", "ingredient": "cloves"},
                {"quantity": 61, "measurement": "grams", "ingredient": "oatmeal"}
            ]
        },
        "reviews": [{"user": "Vladislav", "link": "vladislav", "stars": 2, "rev": "Bad one :(", "likes" : ["vlad"]}, {"user": "John", "link": "john", "stars": 4, "rev": "Perfect!", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "weightloss-protein-smoothie",
        "title": "Weightloss Protein Smoothie",
        "time": 15,
        "recipeCollection": ["vanya"],
        "resource": { "link": "homan-at-home", "name": "Homan At Home"},
        "nutrition": [{"label": "calories", "value": 140}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Beverages"}, {"tag": "Smoothie"}, {"tag": "Blending"}],
        "servings": 4,
        "ingredients": {
            "us": [       
                {"quantity": 1.5, "measurement": "scoops", "ingredient": "protein powder"},
                {"quantity": 0.75, "measurement": "cup", "ingredient": "frozen fruit"},
                {"quantity": 1, "measurement": "cup", "ingredient": "spinach"},
                {"ingredient": "water", "technique": "for consistency"}
            ], 
            "metric": [
                {"quantity": 1.5, "measurement": "scoops", "ingredient": "protein powder"},
                {"quantity": 112, "measurement": "grams", "ingredient": "frozen fruit"},
                {"quantity": 30, "measurement": "grams", "ingredient": "spinach"},
                {"ingredient": "water", "technique": "for consistency"}
            ]
        },
        "reviews": [{"user": "Vladislav", "link": "vladislav", "stars": 2, "rev": "Bad one :(", "likes" : ["vlad"]}, {"user": "John", "link": "john", "stars": 5, "rev": "Perfect!", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "edible-peanut-butter-cookie-dough",
        "title": "Edible Peanut Butter Cookie Dough",
        "time": 5,
        "recipeCollection": ["vanya"],
        "resource": { "link": "homan-at-home", "name": "Homan At Home"},
        "nutrition": [{"label": "calories", "value": 670}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Desserts"}, {"tag": "Quick And Easy"}, {"tag": "Quick"}, {"tag": "Easy"}],
        "servings": 2,
        "ingredients": {
            "us": [       
                {"quantity": 0.25, "measurement": "cup", "ingredient": "butter", "technique": "or margarine"},
                {"quantity": 0.25, "measurement": "cup", "ingredient": "peanut butter"},
                {"quantity": 0.25, "measurement": "cup", "ingredient": "granulated sugar"},
                {"quantity": 0.25, "measurement": "cup", "ingredient": "brown sugar"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "flour", "technique": "baked"}
            ], 
            "metric": [
                {"quantity": 57, "measurement": "grams", "ingredient": "butter", "technique": "or margarine"},
                {"quantity": 128, "measurement": "grams", "ingredient": "peanut butter"},
                {"quantity": 50, "measurement": "grams", "ingredient": "granulated sugar"},
                {"quantity": 36, "measurement": "grams", "ingredient": "brown sugar"},
                {"quantity": 63, "measurement": "grams", "ingredient": "flour", "technique": "baked"}
            ]
        },
        "reviews": [{"user": "Vladislav", "link": "vladislav", "stars": 2, "rev": "Bad one :(", "likes" : ["vlad"]}, {"user": "John", "link": "john", "stars": 5, "rev": "Perfect!", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "pumpkin-pie-mousse",
        "title": "Pumpkin Pie Mousse",
        "time": 120,
        "recipeCollection": ["vanya"],
        "resource": { "link": "homan-at-home", "name": "Homan At Home"},
        "nutrition": [{"label": "calories", "value": 470}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Desserts"}, {"tag": "Easy"}, {"tag": "Mousse"}, {"tag": "Thanksgiving"}],
        "servings": 4,
        "ingredients": {
            "us": [       
                {"quantity": 15, "measurement": "oz.", "ingredient": "pumpkin"},
                {"quantity": 8, "measurement": "oz.", "ingredient": "cream cheese", "technique": "room temperature"},
                {"quantity": 1, "measurement": "cup", "ingredient": "powdered sugar"},
                {"quantity": 2, "measurement": "tsp.", "ingredient": "vanilla"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "pumpkin pie spice"},
                {"quantity": 8, "measurement": "oz.", "ingredient": "cool whip", "technique": "defrosted"}
            ], 
            "metric": [
                {"quantity": 425, "measurement": "grams", "ingredient": "pumpkin"},
                {"quantity": 227, "measurement": "grams", "ingredient": "cream cheese", "technique": "room temperature"},
                {"quantity": 120, "measurement": "grams", "ingredient": "powdered sugar"},
                {"quantity": 2, "measurement": "tsp.", "ingredient": "vanilla"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "pumpkin pie spice"},
                {"quantity": 227, "measurement": "grams", "ingredient": "cool whip", "technique": "defrosted"}
            ]
        },
        "reviews": [{"user": "Vladislav", "link": "vladislav", "stars": 2, "rev": "Bad one :(", "likes" : ["vlad"]}, {"user": "John", "link": "john", "stars": 5, "rev": "Perfect!", "likes" : ["vlad", "vanya"]}]
    },


    {
        "id": "pumpkin-pie-mousse",
        "title": "Garlic Butter Green Beans",
        "time": 10,
        "recipeCollection": ["vanya"],
        "resource": { "link": "homan-at-home", "name": "Homan At Home"},
        "nutrition": [{"label": "calories", "value": 110}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Side Dishes"}, {"tag": "Quick And Easy"}, {"tag": "Steaming"}, {"tag": "Quick"}, {"tag" : "Easy"}],
        "servings": 4,
        "ingredients": {
            "us": [       
                {"quantity": 1, "measurement": "bag", "ingredient": "frozen green beans"},
                {"quantity": 4, "measurement": "Tbsp.", "ingredient": "butter"},
                {"quantity": 2, "measurement": "tsp.", "ingredient": "garlic powder"},
                {"ingredient": "salt"},
                {"ingredient": "pepper"}
            ], 
            "metric": [
                {"quantity": 1, "measurement": "bag", "ingredient": "frozen green beans"},
                {"quantity": 4, "measurement": "Tbsp.", "ingredient": "butter"},
                {"quantity": 2, "measurement": "tsp.", "ingredient": "garlic powder"},
                {"ingredient": "salt"},
                {"ingredient": "pepper"}
            ]
        },
        "reviews": [{"user": "Vladislav", "link": "vladislav", "stars": 2, "rev": "Bad one :(", "likes" : ["vlad"]}, {"user": "John", "link": "john", "stars": 5, "rev": "Perfect!", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "beef-and-broccoli-stirfry",
        "title": "Beef and Broccoli Stirfry",
        "time": 15,
        "recipeCollection": ["vanya"],
        "resource": { "link": "homan-at-home", "name": "Homan At Home"},
        "nutrition": [{"label": "calories", "value": 530}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Main Dishes"}, {"tag": "Quick And Easy"}, {"tag": "Low Sugar"}, {"tag": "Steaming"}, {"tag" : "Quick"}, {"tag": "Easy"}, {"tag": "Low Sodium"}, {"tag": "Low Carb"}, {"tag": "Frying"}, {"tag" : "Browning"}],
        "servings": 2,
        "ingredients": {
            "us": [       
                {"quantity": 12, "measurement": "oz.", "ingredient": "ground beef"},
                {"quantity": 2, "measurement": "cups", "ingredient": "broccoli"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "low sodium soy sauce"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "garlic powder"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "crushed red pepper flakes"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "olive oil"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "curry powder"}
            ], 
            "metric": [
                {"quantity": 340, "measurement": "grams", "ingredient": "ground beef"},
                {"quantity": 182, "measurement": "grams", "ingredient": "broccoli"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "low sodium soy sauce"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "garlic powder"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "crushed red pepper flakes"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "olive oil"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "curry powder"}
            ]
        },
        "reviews": [{"user": "Vladislav", "link": "vladislav", "stars": 2, "rev": "Bad one :(", "likes" : ["vlad"]}, {"user": "John", "link": "john", "stars": 5, "rev": "Perfect!", "likes" : ["vlad", "vanya"]}]
    },


    {
        "id": "shish-kebabs",
        "title": "Shish Kebabs",
        "time": 120,
        "recipeCollection": ["vanya"],
        "resource": { "link": "homan-at-home", "name": "Homan At Home"},
        "nutrition": [{"label": "calories", "value": 170}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Main Dishes"}, {"tag": "Easy"}, {"tag": "Kebab"}, {"tag": "Low Sugar"}, {"tag" : "Marinating"}, {"tag": "Low Fat"}, {"tag": "Low Carb"}, {"tag": "Low Calorie"}, {"tag": "Grilling"}, {"tag" : "Baking"}],
        "servings": 6,
        "ingredients": {
            "us": [       
                {"quantity": 0.25, "measurement": "cup", "ingredient": "brown sugar"},
                {"quantity": 0.25, "measurement": "cup", "ingredient": "soy sauce"},
                {"quantity": 2, "measurement": "tsp.", "ingredient": "garlic powder"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "black pepper"},
                {"quantity": 2, "ingredient": "chicken breasts"},
                {"quantity": 0.25, "measurement": "cup", "ingredient": "white vinegar"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "olive oil"},
                {"quantity": 2, "measurement": "tsp.", "ingredient": "garlic powder"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "black pepper"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "seasoned salt"},
                {"quantity": 3, "measurement": "cups", "ingredient": "veggies", "technique": "choice"}
            ], 
            "metric": [
                {"quantity": 36, "measurement": "grams", "ingredient": "brown sugar"},
                {"quantity": 59, "measurement": "ml", "ingredient": "soy sauce"},
                {"quantity": 2, "measurement": "tsp.", "ingredient": "garlic powder"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "black pepper"},
                {"quantity": 2, "ingredient": "chicken breasts"},
                {"quantity": 59, "measurement": "ml", "ingredient": "white vinegar"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "olive oil"},
                {"quantity": 2, "measurement": "tsp.", "ingredient": "garlic powder"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "black pepper"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "seasoned salt"},
                {"quantity": 312, "measurement": "grams", "ingredient": "veggies", "technique": "choice"}
            ]
        },
        "reviews": [{"user": "Vladislav", "link": "vladislav", "stars": 2, "rev": "Bad one :(", "likes" : ["vlad"]}, {"user": "John", "link": "john", "stars": 5, "rev": "Perfect!", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "ultimate-grilled-cheese-sandwich",
        "title": "Ultimate Grilled Cheese Sandwich",
        "time": 30,
        "recipeCollection": ["vanya"],
        "resource": { "link": "kj-and-company", "name": "KJ and Company"},
        "nutrition": [{"label": "calories", "value": 1410}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Lunch"}, {"tag": "Easy"}, {"tag": "Sandwich"}, {"tag": "Low Sugar"}, {"tag" : "Grilled Cheese"}],
        "servings": 2,
        "ingredients": {
            "us": [       
                {"quantity": 4, "measurement": "slices", "ingredient": "sourdough bread", "technique": "or country Italian"},
                {"quantity": 4, "measurement": "oz.", "ingredient": "butter", "technique": "softened"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "garlic salt"},
                {"quantity": 4, "measurement": "oz.", "ingredient": "mild cheddar cheese", "technique": "thinly sliced"},
                {"quantity": 4, "measurement": "oz.", "ingredient": "monterey jack cheese", "technique": "thinly sliced"},
                {"quantity": 4, "measurement": "oz.", "ingredient": "cream cheese", "technique": "softened or whipped"}
            ], 
            "metric": [
                {"quantity": 4, "measurement": "slices", "ingredient": "sourdough bread", "technique": "or country Italian"},
                {"quantity": 113, "measurement": "grams", "ingredient": "butter", "technique": "softened"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "garlic salt"},
                {"quantity": 113, "measurement": "grams", "ingredient": "mild cheddar cheese", "technique": "thinly sliced"},
                {"quantity": 113, "measurement": "grams", "ingredient": "monterey jack cheese", "technique": "thinly sliced"},
                {"quantity": 113, "measurement": "grams", "ingredient": "cream cheese", "technique": "softened or whipped"}
            ]
        },
        "reviews": [{"user": "Vladislav", "link": "vladislav", "stars": 2, "rev": "Bad one :(", "likes" : ["vlad"]}, {"user": "John", "link": "john", "stars": 5, "rev": "Perfect!", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "pink-lemonade-sangria",
        "title": "Pink Lemonade Sangria",
        "time": 75,
        "recipeCollection": ["vanya"],
        "resource": { "link": "kj-and-company", "name": "KJ and Company"},
        "nutrition": [{"label": "calories", "value": 80}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Cocktails"}, {"tag": "Easy"}, {"tag": "Sangria"}, {"tag": "Beverages"}],
        "servings": 6,
        "ingredients": {
            "us": [       
                {"quantity": 16, "measurement": "oz.", "ingredient": "strawberries", "technique": "fresh, quartered"},
                {"quantity": 2, "ingredient": "lemons", "technique": "sliced into 1/4 inch rings"},
                {"quantity": 1, "measurement": "btl.", "ingredient": "rosé wine"},
                {"quantity": 5, "measurement": "cups", "ingredient": "lemonade", "technique": "pink"}
            ],
            "metric": [
                {"quantity": 454, "measurement": "grams", "ingredient": "strawberries", "technique": "fresh, quartered"},
                {"quantity": 2, "ingredient": "lemons", "technique": "sliced into 1/4 inch rings"},
                {"quantity": 1, "measurement": "btl.", "ingredient": "rosé wine"},
                {"quantity": 1.18, "measurement": "liters", "ingredient": "lemonade", "technique": "pink"}
            ]
        },
        "reviews": [{"user": "Vladislav", "link": "vladislav", "stars": 2, "rev": "Bad one :(", "likes" : ["vlad"]}, {"user": "John", "link": "john", "stars": 5, "rev": "Perfect!", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "better-than-take-out-shrimp-noodles",
        "title": "Better than Take-Out Shrimp & Noodles",
        "time": 30,
        "recipeCollection": ["vanya"],
        "resource": { "link": "kj-and-company", "name": "KJ and Company"},
        "nutrition": [{"label": "calories", "value": 350}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Main Dishes"}, {"tag": "Asian"}, {"tag": "Low Sugar"}, {"tag": "Sauteeing"}, {"tag": "Low Calorie"}, {"tag": "Boiling"}],
        "servings": 4,
        "ingredients": {
            "us": [       
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "extra virgin olive oil"},
                {"quantity": 1, "measurement": "lb.", "ingredient": "shrimp", "technique": "peeled and deveined"},
                {"quantity": 8, "measurement": "oz.", "ingredient": "rice noodles"},
                {"quantity": 8, "measurement": "oz.", "ingredient": "snap peas"},
                {"quantity": 1, "measurement": "cup", "ingredient": "carrot sticks", "technique": "or shredded carrot"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "red bell pepper", "technique": "chopped into 1/4 inch pieces"},
                {"quantity": 2, "measurement": "tsp.", "ingredient": "chopped garlic"},
                {"quantity": 0.3, "measurement": "cup", "ingredient": "soy sauce"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "miso paste", "technique": "brown rice"},
                {"quantity": 0.25, "measurement": "cup", "ingredient": "hoisin sauce"}
            ],
            "metric": [
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "extra virgin olive oil"},
                {"quantity": 454, "measurement": "grams", "ingredient": "shrimp", "technique": "peeled and deveined"},
                {"quantity": 227, "measurement": "grams", "ingredient": "rice noodles"},
                {"quantity": 227, "measurement": "grams", "ingredient": "snap peas"},
                {"quantity": 122, "measurement": "grams", "ingredient": "carrot sticks", "technique": "or shredded carrot"},
                {"quantity": 74, "measurement": "grams", "ingredient": "red bell pepper", "technique": "chopped into 1/4 inch pieces"},
                {"quantity": 2, "measurement": "tsp.", "ingredient": "chopped garlic"},
                {"quantity": 79, "measurement": "ml", "ingredient": "soy sauce"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "miso paste", "technique": "brown rice"},
                {"quantity": 59, "measurement": "ml", "ingredient": "hoisin sauce"}
            ]
        },
        "reviews": [{"user": "Vladislav", "link": "vladislav", "stars": 2, "rev": "Bad one :(", "likes" : ["vlad"]}, {"user": "John", "link": "john", "stars": 5, "rev": "Perfect!", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "the-best-basic-banana-bread",
        "title": "The Best Basic Banana Bread",
        "time": 70,
        "recipeCollection": ["vanya"],
        "resource": { "link": "kj-and-company", "name": "KJ and Company"},
        "nutrition": [{"label": "calories", "value": 280}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Main Dishes"}, {"tag": "Asian"}, {"tag": "Low Sugar"}, {"tag": "Sauteeing"}, {"tag": "Low Calorie"}, {"tag": "Boiling"}],
        "servings": 10,
        "ingredients": {
            "us": [       
                {"quantity": 4, "ingredient": "bananas", "technique": "ripe"},
                {"quantity": 0.25, "measurement": "cup", "ingredient": "vegetable oil"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "sugar"},
                {"quantity": 2, "ingredient": "eggs"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "vanilla extract"},
                {"quantity": 1.5, "measurement": "cups", "ingredient": "flour"},
                {"quantity": 1.5, "measurement": "tsp.", "ingredient": "baking soda"},
                {"quantity": 0.75, "measurement": "tsp.", "ingredient": "salt"},
                {"quantity": 0.75, "measurement": "cup", "ingredient": "chopped walnuts"},
                {"quantity": 2, "measurement": "tsp.", "ingredient": "sugar"}
            ],
            "metric": [
                {"quantity": 4, "ingredient": "bananas", "technique": "ripe"},
                {"quantity": 59, "measurement": "ml", "ingredient": "vegetable oil"},
                {"quantity": 100, "measurement": "grams", "ingredient": "sugar"},
                {"quantity": 2, "ingredient": "eggs"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "vanilla extract"},
                {"quantity": 188, "measurement": "grams", "ingredient": "flour"},
                {"quantity": 1.5, "measurement": "tsp.", "ingredient": "baking soda"},
                {"quantity": 0.75, "measurement": "tsp.", "ingredient": "salt"},
                {"quantity": 94, "measurement": "grams", "ingredient": "chopped walnuts"},
                {"quantity": 2, "measurement": "tsp.", "ingredient": "sugar"}
            ]
        },
        "reviews": [{"user": "Vladislav", "link": "vladislav", "stars": 2, "rev": "Bad one :(", "likes" : ["vlad"]}, {"user": "John", "link": "john", "stars": 5, "rev": "Perfect!", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "no-churn-nutella-ice-cream",
        "title": "No-Churn Nutella Ice Cream",
        "time": 30,
        "recipeCollection": ["vanya"],
        "resource": { "link": "kj-and-company", "name": "KJ and Company"},
        "nutrition": [{"label": "calories", "value": 1080}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Desserts"}, {"tag": "Quick"}, {"tag": "Ice Cream"}],
        "servings": 4,
        "ingredients": {
            "us": [       
                {"quantity": 0.6, "measurement": "cup", "ingredient": "chocolate-hazelnut spread", "technique": "Nutella"},
                {"quantity": 2, "measurement": "cups", "ingredient": "heavy cream"},
                {"quantity": 14, "measurement": "oz.", "ingredient": "sweetened condensed milk"}
            ],
            "metric": [
                {"quantity": 203, "measurement": "grams", "ingredient": "chocolate-hazelnut spread", "technique": "Nutella"},
                {"quantity": 473, "measurement": "ml", "ingredient": "heavy cream"},
                {"quantity": 307, "measurement": "ml", "ingredient": "sweetened condensed milk"}
            ]
        },
        "reviews": [{"user": "Vladislav", "link": "vladislav", "stars": 2, "rev": "Bad one :(", "likes" : ["vlad"]}, {"user": "John", "link": "john", "stars": 5, "rev": "Perfect!", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "hungarian-mushroom-beef-stroganoff",
        "title": "Hungarian Mushroom Beef Stroganoff",
        "time": 60,
        "recipeCollection": ["vanya"],
        "resource": { "link": "kj-and-company", "name": "KJ and Company"},
        "nutrition": [{"label": "calories", "value": 650}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Main Dishes"}, {"tag": "Beef Stroganoff"}, {"tag": "Low Sugar"}, {"tag": "Low Sodium"}],
        "servings": 6,
        "ingredients": {
            "us": [       
                {"quantity": 1.5, "measurement": "lb.", "ingredient": "sirloin steak", "technique": "or thinly sliced flat iron, about 1/4 thick slices"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "butter"},
                {"quantity": 10, "measurement": "oz.", "ingredient": "mushrooms", "technique": "sliced"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "chopped garlic"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "fresh thyme", "technique": "chopped"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "dried dill"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "dry white wine"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "sour cream"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "Dijon mustard"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "Worcestershire sauce"},
                {"quantity": 1, "measurement": "cup", "ingredient": "heavy cream"},
                {"quantity": 2, "measurement": "cups", "ingredient": "beef stock"},
                {"quantity": 12, "measurement": "oz.", "ingredient": "egg noodles"}
            ],
            "metric": [
                {"quantity": 0.68, "measurement": "kilograms", "ingredient": "sirloin steak", "technique": "or thinly sliced flat iron, about 1/4 thick slices"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "butter"},
                {"quantity": 283, "measurement": "grams", "ingredient": "mushrooms", "technique": "sliced"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "chopped garlic"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "fresh thyme", "technique": "chopped"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "dried dill"},
                {"quantity": 118, "measurement": "ml", "ingredient": "dry white wine"},
                {"quantity": 118, "measurement": "ml", "ingredient": "sour cream"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "Dijon mustard"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "Worcestershire sauce"},
                {"quantity": 237, "measurement": "ml", "ingredient": "heavy cream"},
                {"quantity": 473, "measurement": "ml", "ingredient": "beef stock"},
                {"quantity": 12, "measurement": "oz.", "ingredient": "egg noodles"}
            ]
        },
        "reviews": [{"user": "Vladislav", "link": "vladislav", "stars": 2, "rev": "Bad one :(", "likes" : ["vlad"]}, {"user": "John", "link": "john", "stars": 5, "rev": "Perfect!", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "tahini-chocolate-chip-cookie-bars",
        "title": "Tahini Chocolate Chip Cookie Bars",
        "time": 80,
        "recipeCollection": ["vanya"],
        "resource": { "link": "kj-and-company", "name": "KJ and Company"},
        "nutrition": [{"label": "calories", "value": 520}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Desserts"}, {"tag": "Bars"}],
        "servings": 12,
        "ingredients": {
            "us": [       
                {"quantity": 16, "measurement": "Tbsp.", "ingredient": "butter", "technique": "softened"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "sugar"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "brown sugar"},
                {"quantity": 2, "ingredient": "large eggs"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "vanilla extract"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "Tahini"},
                {"quantity": 2.25, "measurement": "cups", "ingredient": "flour"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "baking soda"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "salt"},
                {"quantity": 11, "measurement": "oz.", "ingredient": "dark chocolate chips"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "chocolate chips", "technique": "additional, melted for topping"}
            ],
            "metric": [
                {"quantity": 16, "measurement": "Tbsp.", "ingredient": "butter", "technique": "softened"},
                {"quantity": 100, "measurement": "grams", "ingredient": "sugar"},
                {"quantity": 73, "measurement": "grams", "ingredient": "brown sugar"},
                {"quantity": 2, "ingredient": "large eggs"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "vanilla extract"},
                {"quantity": 120, "measurement": "grams", "ingredient": "Tahini"},
                {"quantity": 281, "measurement": "grams", "ingredient": "flour"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "baking soda"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "salt"},
                {"quantity": 312, "measurement": "grams", "ingredient": "dark chocolate chips"},
                {"quantity": 84, "measurement": "grams", "ingredient": "chocolate chips", "technique": "additional, melted for topping"}
            ]
        },
        "reviews": [{"user": "Vladislav", "link": "vladislav", "stars": 2, "rev": "Bad one :(", "likes" : ["vlad"]}, {"user": "John", "link": "john", "stars": 5, "rev": "Perfect!", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "turkey-sloppy-joes",
        "title": "Turkey Sloppy Joes",
        "time": 35,
        "recipeCollection": ["vanya"],
        "resource": { "link": "kj-and-company", "name": "KJ and Company"},
        "nutrition": [{"label": "calories", "value": 360}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Main Dishes"}, {"tag": "Sloppy Joes"}, {"tag": "Low Carb"}, {"tag": "Sauteeing"}, {"tag": "Low Calorie"}, {"tag": "Browning"}],
        "servings": 6,
        "ingredients": {
            "us": [       
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "extra virgin olive oil"},
                {"quantity": 1.5, "measurement": "lb.", "ingredient": "ground turkey"},
                {"quantity": 1, "ingredient": "medium onion", "technique": "finely diced"},
                {"quantity": 1, "measurement": "cup", "ingredient": "green bell pepper", "technique": "finely diced"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "chopped garlic"},
                {"quantity": 0.75, "measurement": "cup", "ingredient": "ketchup"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "Worcestershire sauce"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "yellow mustard"},
                {"quantity": 15, "measurement": "oz.", "ingredient": "tomato sauce"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "brown sugar"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "chili powder"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "butter"},
                {"ingredient": "salt"},
                {"ingredient": "pepper"},
                {"ingredient": "brioche buns", "technique": "for serving"}
            ],
            "metric": [
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "extra virgin olive oil"},
                {"quantity": 0.68, "measurement": "kilograms", "ingredient": "ground turkey"},
                {"quantity": 1, "ingredient": "medium onion", "technique": "finely diced"},
                {"quantity": 149, "measurement": "grams", "ingredient": "green bell pepper", "technique": "finely diced"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "chopped garlic"},
                {"quantity": 177, "measurement": "ml", "ingredient": "ketchup"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "Worcestershire sauce"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "yellow mustard"},
                {"quantity": 391, "measurement": "ml", "ingredient": "tomato sauce"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "brown sugar"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "chili powder"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "butter"},
                {"ingredient": "salt"},
                {"ingredient": "pepper"},
                {"ingredient": "brioche buns", "technique": "for serving"}
            ]
        },
        "reviews": [{"user": "Vladislav", "link": "vladislav", "stars": 2, "rev": "Bad one :(", "likes" : ["vlad"]}, {"user": "John", "link": "john", "stars": 5, "rev": "Perfect!", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "mom's-peach-tart",
        "title": "Mom’s Peach Tart",
        "time": 70,
        "recipeCollection": ["vanya"],
        "resource": { "link": "kj-and-company", "name": "KJ and Company"},
        "nutrition": [{"label": "calories", "value": 820}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Desserts"}, {"tag": "Easy"}, {"tag": "Tart"}, {"tag": "Browning"}, {"tag": "Baking"}],
        "servings": 4,
        "ingredients": {
            "us": [       
                {"quantity": 1.5, "measurement": "cups", "ingredient": "flour"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "salt"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "sugar"},
                {"quantity": 0.25, "measurement": "cup", "ingredient": "oil", "technique": "vegetable oil will do"},
                {"quantity": 0.25, "measurement": "cup", "ingredient": "olive oil"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "milk"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "almond extract"},
                {"quantity": 6, "ingredient": "peaches", "technique": "sliced"},
                {"quantity": 1, "measurement": "cup", "ingredient": "sugar"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "salt"},
                {"quantity": 4, "measurement": "Tbsp.", "ingredient": "butter", "technique": "melted"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "flour"}
            ],
            "metric": [
                {"quantity": 188, "measurement": "grams", "ingredient": "flour"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "salt"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "sugar"},
                {"quantity": 59, "measurement": "ml", "ingredient": "oil", "technique": "vegetable oil will do"},
                {"quantity": 59, "measurement": "ml", "ingredient": "olive oil"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "milk"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "almond extract"},
                {"quantity": 6, "ingredient": "peaches", "technique": "sliced"},
                {"quantity": 200, "measurement": "grams", "ingredient": "sugar"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "salt"},
                {"quantity": 4, "measurement": "Tbsp.", "ingredient": "butter", "technique": "melted"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "flour"}
            ]
        },
        "reviews": [{"user": "Vladislav", "link": "vladislav", "stars": 2, "rev": "Bad one :(", "likes" : ["vlad"]}, {"user": "John", "link": "john", "stars": 5, "rev": "Perfect!", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "mom's-peach-tart",
        "title": "Mom’s Peach Tart",
        "time": 70,
        "recipeCollection": ["vanya"],
        "resource": { "link": "kj-and-company", "name": "KJ and Company"},
        "nutrition": [{"label": "calories", "value": 820}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Desserts"}, {"tag": "Easy"}, {"tag": "Tart"}, {"tag": "Browning"}, {"tag": "Baking"}],
        "servings": 4,
        "ingredients": {
            "us": [       
                {"quantity": 1.5, "measurement": "cups", "ingredient": "flour"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "salt"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "sugar"},
                {"quantity": 0.25, "measurement": "cup", "ingredient": "oil", "technique": "vegetable oil will do"},
                {"quantity": 0.25, "measurement": "cup", "ingredient": "olive oil"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "milk"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "almond extract"},
                {"quantity": 6, "ingredient": "peaches", "technique": "sliced"},
                {"quantity": 1, "measurement": "cup", "ingredient": "sugar"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "salt"},
                {"quantity": 4, "measurement": "Tbsp.", "ingredient": "butter", "technique": "melted"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "flour"}
            ],
            "metric": [
                {"quantity": 188, "measurement": "grams", "ingredient": "flour"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "salt"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "sugar"},
                {"quantity": 59, "measurement": "ml", "ingredient": "oil", "technique": "vegetable oil will do"},
                {"quantity": 59, "measurement": "ml", "ingredient": "olive oil"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "milk"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "almond extract"},
                {"quantity": 6, "ingredient": "peaches", "technique": "sliced"},
                {"quantity": 200, "measurement": "grams", "ingredient": "sugar"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "salt"},
                {"quantity": 4, "measurement": "Tbsp.", "ingredient": "butter", "technique": "melted"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "flour"}
            ]
        },
        "reviews": [{"user": "Vladislav", "link": "vladislav", "stars": 2, "rev": "Bad one :(", "likes" : ["vlad"]}, {"user": "John", "link": "john", "stars": 5, "rev": "Perfect!", "likes" : ["vlad", "vanya"]}]
    },


    {
        "id": "red-wine-braised-beef-tips",
        "title": "Red Wine Braised Beef Tips",
        "time": 180,
        "recipeCollection": ["vanya"],
        "resource": { "link": "kj-and-company", "name": "KJ and Company"},
        "nutrition": [{"label": "calories", "value": 160}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Main Dishes"}, {"tag": "Low Sugar"}, {"tag": "Low Fat"}, {"tag": "Low Carb"}, {"tag": "Low Calorie"}],
        "servings": 8,
        "ingredients": {
            "us": [       
                {"quantity": 2.5, "measurement": "lb.", "ingredient": "beef stew meat", "technique": "cut into 1 to 2 inch chunks"},
                {"quantity": 0.3, "measurement": "cup", "ingredient": "flour"},
                {"quantity": 3, "measurement": "Tbsp.", "ingredient": "extra virgin olive oil"},
                {"quantity": 1, "ingredient": "large onion", "technique": "cut into slices"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "salt"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "pepper"},
                {"quantity": 2, "measurement": "cups", "ingredient": "red wine"},
                {"quantity": 0.75, "measurement": "cup", "ingredient": "balsamic vinegar"},
                {"quantity": 32, "measurement": "oz.", "ingredient": "beef stock"},
                {"quantity": 3, "measurement": "sprigs", "ingredient": "fresh rosemary"},
                {"quantity": 5, "measurement": "sprigs", "ingredient": "fresh thyme"}
            ],
            "metric": [
                {"quantity": 1.13, "measurement": "kilograms", "ingredient": "beef stew meat", "technique": "cut into 1 to 2 inch chunks"},
                {"quantity": 42, "measurement": "grams", "ingredient": "flour"},
                {"quantity": 3, "measurement": "Tbsp.", "ingredient": "extra virgin olive oil"},
                {"quantity": 1, "ingredient": "large onion", "technique": "cut into slices"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "salt"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "pepper"},
                {"quantity": 473, "measurement": "ml", "ingredient": "red wine"},
                {"quantity": 177, "measurement": "ml", "ingredient": "balsamic vinegar"},
                {"quantity": 0.89, "measurement": "liters", "ingredient": "beef stock"},
                {"quantity": 3, "measurement": "sprigs", "ingredient": "fresh rosemary"},
                {"quantity": 5, "measurement": "sprigs", "ingredient": "fresh thyme"}
            ]
        },
        "reviews": [{"user": "Vladislav", "link": "vladislav", "stars": 2, "rev": "Bad one :(", "likes" : ["vlad"]}, {"user": "John", "link": "john", "stars": 5, "rev": "Perfect!", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "brown-sugar-sweet-potato-wedges",
        "title": "Brown Sugar Sweet Potato Wedges",
        "time": 55,
        "recipeCollection": ["vanya"],
        "resource": { "link": "kj-and-company", "name": "KJ and Company"},
        "nutrition": [{"label": "calories", "value": 200}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Side Dishes"}, {"tag": "Easy"}, {"tag": "Low Sodium"}, {"tag": "Browning"}, {"tag": "Low Calorie"}],
        "servings": 4,
        "ingredients": {
            "us": [       
                {"quantity": 2, "ingredient": "sweet potatoes", "technique": "large, cut into 1-inch thick wedges with skins on"},
                {"quantity": 0.25, "measurement": "cup", "ingredient": "olive oil"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "brown sugar"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "seasoned salt"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "thyme"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "cinnamon"}
            ],
            "metric": [
                {"quantity": 2, "ingredient": "sweet potatoes", "technique": "large, cut into 1-inch thick wedges with skins on"},
                {"quantity": 59, "measurement": "ml", "ingredient": "olive oil"},
                {"quantity": 2, "measurement": "Tbsp.", "ingredient": "brown sugar"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "seasoned salt"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "thyme"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "cinnamon"}
            ]
        },
        "reviews": [{"user": "Vladislav", "link": "vladislav", "stars": 2, "rev": "Bad one :(", "likes" : ["vlad"]}, {"user": "John", "link": "john", "stars": 5, "rev": "Perfect!", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "homemade-chicken-ramen",
        "title": "Homemade Chicken Ramen",
        "time": 65,
        "recipeCollection": ["vanya"],
        "resource": { "link": "kj-and-company", "name": "KJ and Company"},
        "nutrition": [{"label": "calories", "value": 320}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Main Dishes"}, {"tag": "Ramen"}, {"tag": "Low Sugar"}, {"tag": "Low Fat"}, {"tag": "Low Carb"}, {"tag": "Low Calorie"}],
        "servings": 4,
        "ingredients": {
            "us": [       
                {"quantity": 32, "measurement": "oz.", "ingredient": "chicken stock"},
                {"quantity": 5, "measurement": "cups", "ingredient": "water"},
                {"quantity": 3, "ingredient": "chicken bouillon cubes"},
                {"quantity": 2, "ingredient": "skinless chicken breasts", "technique": "boneless"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "green onions", "technique": "chopped, plus more for garnishing"},
                {"quantity": 1, "measurement": "cup", "ingredient": "sliced mushrooms", "technique": "thinly"},
                {"quantity": 1.5, "measurement": "tsp.", "ingredient": "chopped garlic"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "salt"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "soy sauce"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "ground black pepper"},
                {"quantity": 3, "measurement": "oz.", "ingredient": "ramen noodles", "technique": "packages, flavor packets removed"}
            ],
            "metric": [
                {"quantity": 0.89, "measurement": "liters", "ingredient": "chicken stock"},
                {"quantity": 1.18, "measurement": "liters", "ingredient": "water"},
                {"quantity": 3, "ingredient": "chicken bouillon cubes"},
                {"quantity": 2, "ingredient": "skinless chicken breasts", "technique": "boneless"},
                {"quantity": 36, "measurement": "grams", "ingredient": "green onions", "technique": "chopped, plus more for garnishing"},
                {"quantity": 70, "measurement": "grams", "ingredient": "sliced mushrooms", "technique": "thinly"},
                {"quantity": 1.5, "measurement": "tsp.", "ingredient": "chopped garlic"},
                {"quantity": 0.5, "measurement": "tsp.", "ingredient": "salt"},
                {"quantity": 1, "measurement": "tsp.", "ingredient": "soy sauce"},
                {"quantity": 0.25, "measurement": "tsp.", "ingredient": "ground black pepper"},
                {"quantity": 85, "measurement": "grams", "ingredient": "ramen noodles", "technique": "packages, flavor packets removed"}
            ]
        },
        "reviews": [{"user": "Vladislav", "link": "vladislav", "stars": 2, "rev": "Bad one :(", "likes" : ["vlad"]}, {"user": "John", "link": "john", "stars": 5, "rev": "Perfect!", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "pineapple-margaritas",
        "title": "Pineapple Margaritas",
        "time": 5,
        "recipeCollection": ["vanya"],
        "resource": { "link": "kj-and-company", "name": "KJ and Company"},
        "nutrition": [{"label": "calories", "value": 260}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Cocktails"}, {"tag": "Quick And Easy"}, {"tag": "Margarita"}, {"tag": "Beverages"}, {"tag": "Quick"}, {"tag": "Easy"}],
        "servings": 1,
        "ingredients": {
            "us": [       
                {"quantity": 3, "measurement": "oz.", "ingredient": "pineapple juice"},
                {"quantity": 3, "measurement": "oz.", "ingredient": "lemon lime soda"},
                {"quantity": 1, "measurement": "shot", "ingredient": "tequila"},
                {"quantity": 1, "measurement": "shot", "ingredient": "triple sec"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "ice"},
                {"ingredient": "sea salt", "technique": "Pink Himalayan, for the rim"},
                {"ingredient": "pineapple slices", "technique": "for garnish, optional"}
            ],
            "metric": [
                {"quantity": 80, "measurement": "ml", "ingredient": "pineapple juice"},
                {"quantity": 84, "measurement": "ml", "ingredient": "lemon lime soda"},
                {"quantity": 1, "measurement": "shot", "ingredient": "tequila"},
                {"quantity": 1, "measurement": "shot", "ingredient": "triple sec"},
                {"quantity": 118, "measurement": "grams", "ingredient": "ice"},
                {"ingredient": "sea salt", "technique": "Pink Himalayan, for the rim"},
                {"ingredient": "pineapple slices", "technique": "for garnish, optional"}
            ]
        },
        "reviews": [{"user": "Vladislav", "link": "vladislav", "stars": 2, "rev": "Bad one :(", "likes" : ["vlad"]}, {"user": "John", "link": "john", "stars": 5, "rev": "Perfect!", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "cinnamon-pecan-rolls",
        "title": "Cinnamon Pecan Rolls",
        "time": 80,
        "recipeCollection": ["vanya"],
        "resource": { "link": "kj-and-company", "name": "KJ and Company"},
        "nutrition": [{"label": "calories", "value": 1360}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Breads"}],
        "servings": 4,
        "ingredients": {
            "us": [       
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "dry active yeast"},
                {"quantity": 0.25, "measurement": "cup", "ingredient": "warm water"},
                {"quantity": 1, "measurement": "cup", "ingredient": "sugar", "technique": "plus 1 Tablespoon"},
                {"quantity": 1, "measurement": "cup", "ingredient": "butter"},
                {"quantity": 1, "measurement": "cup", "ingredient": "milks"},
                {"quantity": 2, "ingredient": "eggs"},
                {"quantity": 4, "measurement": "cups", "ingredient": "flour"},
                {"quantity": 0.75, "measurement": "tsp.", "ingredient": "salt"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "cinnamon"},
                {"quantity": 0.75, "measurement": "cup", "ingredient": "chopped pecans"},
                {"quantity": 0.5, "measurement": "cup", "ingredient": "brown sugar"}
            ],
            "metric": [
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "dry active yeast"},
                {"quantity": 59, "measurement": "ml", "ingredient": "warm water"},
                {"quantity": 200, "measurement": "grams", "ingredient": "sugar", "technique": "plus 1 Tablespoon"},
                {"quantity": 227, "measurement": "grams", "ingredient": "butter"},
                {"quantity": 237, "measurement": "ml", "ingredient": "milks"},
                {"quantity": 2, "ingredient": "eggs"},
                {"quantity": 0.5, "measurement": "kilograms", "ingredient": "flour"},
                {"quantity": 0.75, "measurement": "tsp.", "ingredient": "salt"},
                {"quantity": 1, "measurement": "Tbsp.", "ingredient": "cinnamon"},
                {"quantity": 82, "measurement": "grams", "ingredient": "chopped pecans"},
                {"quantity": 73, "measurement": "grams", "ingredient": "brown sugar"}
            ]
        },
        "reviews": [{"user": "Vladislav", "link": "vladislav", "stars": 2, "rev": "Bad one :(", "likes" : ["vlad"]}, {"user": "John", "link": "john", "stars": 5, "rev": "Perfect!", "likes" : ["vlad", "vanya"]}]
    },

    {
        "id": "the-best-simple-guacamole",
        "title": "The Best Simple Guacamole",
        "time": 15,
        "recipeCollection": ["vanya"],
        "resource": { "link": "kj-and-company", "name": "KJ and Company"},
        "nutrition": [{"label": "calories", "value": 280}, {"label": "sodium", "value": 790}, {"label": "fat", "value": 790}, {"label": "carbs", "value": 790}, {"label": "fiber", "value": 790}, {"label": "potassium", "value": 790}],
        "tags": [{"tag": "Appetizers"}, {"tag": "Quick And Easy"}, {"tag": "Guacamole"}, {"tag": "Low Sugar"}, {"tag": "Quick"}, {"tag": "Easy"}, {"tag": "Low Sodium"}, {"tag": "High Fiber"}],
        "servings": 6,
        "ingredients": {
            "us": [       
                {"quantity": 5, "ingredient": "avocados", "technique": "skins removed and pitted"},
                {"quantity": 0.5, "ingredient": "red onion", "technique": "finely diced"},
                {"quantity": 1, "ingredient": "lime"},
                {"quantity": 0.3, "measurement": "cup", "ingredient": "fresh cilantro", "technique": "chopped"},
                {"ingredient": "salt", "technique": "to taste"}
            ],
            "metric": [
                {"quantity": 5, "ingredient": "avocados", "technique": "skins removed and pitted"},
                {"quantity": 0.5, "ingredient": "red onion", "technique": "finely diced"},
                {"quantity": 1, "ingredient": "lime"},
                {"quantity": 5, "measurement": "grams", "ingredient": "fresh cilantro", "technique": "chopped"},
                {"ingredient": "salt", "technique": "to taste"}
            ]
        },
        "reviews": [{"user": "Vladislav", "link": "vladislav", "stars": 2, "rev": "Bad one :(", "likes" : ["vlad"]}, {"user": "John", "link": "john", "stars": 5, "rev": "Perfect!", "likes" : ["vlad", "vanya"]}]
    }
    
]

export {recipes}
