const mongoose = require('mongoose')
const book = mongoose.createConnection(process.env.DATABASE_BOOK_CONNECTION)

const shoppingListSchema = book.model(
	'shoppingList',
	new mongoose.Schema({
		userId: {
			type: mongoose.Types.ObjectId,
			required: true,
			unique: true,
		},
		shoppingList: [
			{
				name: { type: String, required: true },
				quantity: { type: Number, default: 1 },
				measurement: { type: String, default: '' },
				addedToShoppingList: {
					type: Date,
					default: Date.now,
				},
				recipeId: { type: mongoose.Types.ObjectId },
				purchased: { type: Boolean, default: false },
			},
		],
	})
)

module.exports = shoppingListSchema
