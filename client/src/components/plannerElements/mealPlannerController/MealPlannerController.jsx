import { Link } from 'react-router-dom'
import s from './mealPlannerController.module.css'

const MealPlannerController = ({ clearList, addToShoppingList }) => {
	const PF = process.env.REACT_APP_BASE_URL

	return (
		<div className={s.controller}>
			<div className={s.buttons}>
				<Link to={'/recipes'}>
					<button className={s.button__more}>add more recipes</button>
				</Link>
				<button onClick={clearList} className={s.button__clear}>
					clear all
				</button>
			</div>
			<div className={s.shopping__list} onClick={() => addToShoppingList()}>
				<img src={`${PF}images/icons/recipes/shopping-cart.svg`} alt="shoppingCartIcon" />
				<h1 className={s.shopping__listLabel}>add all recipes to shopping list</h1>
			</div>
		</div>
	)
}

export default MealPlannerController
