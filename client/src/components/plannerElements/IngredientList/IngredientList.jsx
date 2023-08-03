import { useEffect, useState } from 'react'
import s from './ingredientList.module.css'
import IngredientListItem from './ingredientListItem/IngredientListItem'
import IngredientListItemSkeleton from './ingredientListItemSkeleton/IngredientListItemSkeleton'

const IngredientList = ({ loaded, ingredients, setIngredients, recipes }) => {
	const [recipeItems, setRecipeItems] = useState([])

	const groupByRecipe = () => {}

	useEffect(() => {
		if (loaded) {
			groupByRecipe()
		}
	}, [ingredients])

	return (
		<div className={s.list}>
			{!loaded &&
				Array(5)
					.fill(0)
					.map((ingredient, index) => <IngredientListItemSkeleton key={index} />)}
			{loaded && ingredients?.map(ingredient => <IngredientListItem key={ingredient._id} ingredient={ingredient} />)}
		</div>
	)
}

export default IngredientList
