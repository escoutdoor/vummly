import axios from 'axios'
import s from './mealRecommendations.module.css'
import { useEffect, useState } from 'react'
import RecipeCarouselSkeleton from '../recipeCarouselSkeleton/RecipeCarouselSkeleton'
import RecipeCarousel from '../recipeCarousel/RecipeCarousel'

const MealRecommendations = ({ user }) => {
	const [collectionsByTags, setCollectionsByTags] = useState([])
	const [loaded, setLoaded] = useState(false)

	const fetch = async () => {
		await axios.get(`/recipe/recommendationsByTags/${user._id}`).then(u => {
			setCollectionsByTags(u.data)
			setLoaded(true)
		})
	}

	useEffect(() => {
		if (user) {
			fetch()
		}
	}, [user])

	return (
		<div className={s.recommendations}>
			<div className={s.collections}>
				{loaded
					? collectionsByTags.map((collection, index) => <RecipeCarousel key={index} collection={collection} />)
					: Array(5)
							.fill(0)
							.map((c, index) => <RecipeCarouselSkeleton key={index} />)}
			</div>
		</div>
	)
}

export default MealRecommendations
