import axios from 'axios'
import s from './planningList.module.css'
import PlanningListItem from './planningListItem/PlanningListItem'
import PlanningListItemSkeleton from './planningListItemSkeleton/PlanningListItemSkeleton'

const PlanningList = ({ planner, setPlanner, user, loaded }) => {
	const removeRecipe = async recipeId => {
		try {
			await axios.put(`/meal-planner/addOrRemove/${user._id}/${recipeId}`).then(p => {
				setPlanner(planner.filter(item => item._id !== recipeId))
			})
		} catch (error) {
			console.log('removeRecipe', error)
		}
	}

	return (
		<div className={s.list}>
			{loaded
				? planner?.map(recipe => <PlanningListItem remove={removeRecipe} key={recipe?._id} recipe={recipe} />)
				: Array(9)
						.fill(0)
						.map((item, index) => <PlanningListItemSkeleton key={index} />)}
		</div>
	)
}

export default PlanningList
