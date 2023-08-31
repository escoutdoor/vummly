import { useParams } from 'react-router-dom'
import s from './ingredient.module.css'
import IngredientHeader from '../../components/ingredientElements/ingredientHeader/IngredientHeader'
import PopularIngredients from '../../components/browseElements/popularIngredients/PopularIngredients'
import TagCarousel from '../../components/browseElements/tagCarousel/TagCarousel'
import { useEffect, useState } from 'react'
import axios from 'axios'
import RecipeCarouselSkeleton from '../../components/plannerElements/recipeCarouselSkeleton/RecipeCarouselSkeleton'

const Ingredient = () => {
	const { name } = useParams()
	const [collections, setCollections] = useState([])
	const [isLoaded, setIsLoaded] = useState(false)

	const fetch = async () => {
		try {
			await axios.get(`/recipe/byIngredients/${name}`).then(c => {
				setCollections(c.data)
				setIsLoaded(true)
			})
		} catch (error) {
			console.log('fetch collections ingredient error:', error)
		}
	}

	useEffect(() => {
		if (name) {
			setIsLoaded(false)
			fetch()
		}
	}, [name])

	return (
		<div className={s.ingredient}>
			<div className="wrap1160">
				<div className={s.ingredient__content}>
					<IngredientHeader ingredient={name} />
					<PopularIngredients />
					<div className={s.collections}>
						{isLoaded ? (
							collections.map((collection, index) => <TagCarousel key={index} collection={collection} />)
						) : (
							<RecipeCarouselSkeleton recipes={6} />
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Ingredient
