const router = require('express').Router()
const Article = require('./../models/Article');

// get an article

router.get('/:ctgr/:idPage', async (req, res) => {
	try {
		const article = await Article.findOne({idPage: req.params.idPage})
        res.status(200).json(article)
	} catch (err) {
		res.status(500).json(err)
	}
})

router.post('/postArticle', async (req, res) => {
    const newArticle = await new Article(req.body)
    try {
        const saveArticle = await newArticle.save()
        res.status(200).json(saveArticle)
    } catch (err) {
        res.status(500).json(err)
    }
})


router.put('/:idPage', async (req, res) => {
    try {
        const article = await Article.findOne({idPage: req.params.idPage})
		if (article.idPage === req.params.idPage) {
			await article.updateOne({ $set: req.body })
			res.status(200).json('the post has been updated')
		} else {
			res.status(403).json('You can update only your post')
		}
    } catch (err) {
        res.status(500).json(err)
    }
})

// get all 

router.get('/getAll', async (req, res) => {
    try {
        const data = await Article.find({})
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json(err)
    }
})

// get all / by category using switch case

router.get('/:filter', async (req, res) => {
    let data = []
    switch(req.params.filter) {
        case 'all' : 
            data = await Article.find({})
            break;
        case 'thermometer': 
            data = await Article.find({way: {$elemMatch: {link: "categories/thermometer"}}})
            break;
        case 'website-help-topics': 
            data = await Article.find({way: {$elemMatch: {link: "categories/website-help-topics"}}})
            break;
        case 'sub': 
            data = await Article.find({way: {$elemMatch: {link: "categories/sub"}}})
            break;
        case 'ios-app' : 
            data = await Article.find({way: {$elemMatch: {link: "categories/ios-app"}}})
            break;
        case 'android-app' : 
            data = await Article.find({way: {$elemMatch: {link: "categories/android-app"}}})
            break;
        case 'publisher-help-topics' : 
            data = await Article.find({way: {$elemMatch : {link: 'categories/publisher-help-topics'}}})
            break
    }
    res.status(200).json(data)
})



module.exports = router