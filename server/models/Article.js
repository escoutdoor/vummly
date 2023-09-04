const mongoose = require('mongoose')
const support = mongoose.createConnection(process.env.DATABASE_SUPPORT_CONNECTION)

const articleSchema = support.model(
	'Article',
	new mongoose.Schema({
		id: { type: String, unique: true, required: true },
		title: { type: String },
		data: [
			{
				text: [
					{
						textline: { type: String },
						fontweight: { type: Number },
						fontstyle: { type: String },
						image: [
							{
								img: { type: String },
							},
						],
						bigImage: [
							{
								img: { type: String },
							},
						],
						link: { type: String },
						mail: { type: String },
					},
				],
				points: [
					{
						point: { type: String },
						image: [
							{
								img: { type: String },
							},
						],
						bigImage: [
							{
								img: { type: String },
							},
						],
						bold: { type: String },
						link: { type: String },
						mail: { type: String },
					},
				],
			},
		],
		createdAt: {
			type: Date,
			default: Date.now,
		},
		updatedAt: {
			type: Date,
			default: Date.now,
		},
	})
)

module.exports = articleSchema
