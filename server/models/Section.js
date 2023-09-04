const mongoose = require('mongoose')
const support = mongoose.createConnection(process.env.DATABASE_SUPPORT_CONNECTION)

const sectionSchema = support.model(
	'Section',
	new mongoose.Schema({
		categoryId: {
			type: String,
			required: true,
		},
		categoryName: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		list: [
			{
				articleTitle: { type: String, required: true },
				articleId: { type: String, unique: true },
			},
		],
	})
)

module.exports = sectionSchema
