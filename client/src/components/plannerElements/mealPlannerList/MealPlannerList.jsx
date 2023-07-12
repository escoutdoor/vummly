import s from './mealPlannerList.module.css'
import MealPlannerItem from '../mealPlannerItem/MealPlannerItem'
import axios from 'axios'

const MealPlannerList = ({ planner, user, setPlanner }) => {
	const removeRecipe = async recipeId => {
		try {
			await axios.put(`/meal-planner/addOrRemove/${user._id}/${recipeId}`).then(p => {
				const { recipes, ...etc } = planner
				setPlanner({ etc, recipes: recipes.filter(r => r._id !== recipeId) })
			})
		} catch (error) {
			console.log('removeRecipe', error)
		}
	}

	return (
		<div className={s.list}>
			{planner.recipes?.map(recipe => (
				<MealPlannerItem remove={removeRecipe} key={recipe._id} recipe={recipe} />
			))}
		</div>
	)
}

export default MealPlannerList
