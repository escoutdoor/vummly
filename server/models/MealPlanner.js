const mongoose = require('mongoose')
const book = mongoose.createConnection(process.env.DATABASE_BOOK_CONNECTION)

const mealPlannerSchema = book.model(
	'MealPlanner',
	new mongoose.Schema({
		userId: {
			required: true,
			type: mongoose.Schema.ObjectId,
			unique: true,
		},
		recipes: [
			{
				recipeId: {
					type: mongoose.Types.ObjectId,
				},
				addedToMealPlanner: {
					type: Date,
					default: Date.now,
				},
			},
		],
	})
)

module.exports = mealPlannerSchema
