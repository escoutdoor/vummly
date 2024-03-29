import axios from 'axios'
import s from './mealRecommendations.module.css'
import { useEffect, useState } from 'react'
import RecipeCarouselSkeleton from '../recipeCarouselSkeleton/RecipeCarouselSkeleton'
import RecipeCarousel from '../recipeCarousel/RecipeCarousel'

const MealRecommendations = ({ user, addAllToMealPlanner, recipes }) => {
	const [collectionsByTags, setCollectionsByTags] = useState([])
	const [loaded, setLoaded] = useState(false)
	const [limit, setLimit] = useState(5)

	const fetch = async () => {
		try {
			await axios.get(`/recipe/recommendationsByTags/${user._id}?limit=${limit}`).then(u => {
				setCollectionsByTags(u.data)
				setLoaded(true)
			})
		} catch (error) {
			console.log('fetchRecommendations', error)
		}
	}

	useEffect(() => {
		if (user) {
			fetch()
		}
	}, [user, limit])

	return (
		<div className={s.recommendations}>
			<div className={s.collections}>
				{loaded
					? collectionsByTags.map((collection, index) => (
							<RecipeCarousel
								isAdded={collection.recipes.every(c => recipes?.some(recipe => c._id === recipe._id))}
								key={index}
								addAllToMealPlanner={addAllToMealPlanner}
								collection={collection}
							/>
					  ))
					: Array(5)
							.fill(0)
							.map((c, index) => <RecipeCarouselSkeleton recipes={5} key={index} />)}
			</div>
			<footer>
				<button className={s.loadMore} onClick={() => setLimit(limit + 5)}>
					load more
				</button>
			</footer>
		</div>
	)
}

export default MealRecommendations
