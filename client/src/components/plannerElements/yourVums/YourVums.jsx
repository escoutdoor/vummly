import { useEffect, useState } from 'react'
import s from './yourVums.module.css'
import axios from 'axios'
import RecipeCarousel from '../recipeCarousel/RecipeCarousel'
import RecipeCarouselSkeleton from '../recipeCarouselSkeleton/RecipeCarouselSkeleton'

const YourVums = ({ user }) => {
	const [loaded, setLoaded] = useState(false)
	const [recipesByCollection, setRecipesByCollection] = useState([])

	const fetchVums = async () => {
		await axios.get(`/recipe/vums/${user._id}`).then(v => {
			setRecipesByCollection(v.data)
			setLoaded(true)
		})
	}

	console.log(recipesByCollection)

	useEffect(() => {
		if (user) {
			fetchVums()
		}
	}, [user])

	const addMealPlanner = async () => {}

	return (
		<div className={s.vums}>
			<div className={s.collections}>
				{loaded
					? recipesByCollection.map(collection => <RecipeCarousel addMealPlanner={addMealPlanner} key={collection._id} collection={collection} />)
					: Array(5)
							.fill(0)
							.map((c, index) => <RecipeCarouselSkeleton key={index} />)}
			</div>
		</div>
	)
}

export default YourVums
