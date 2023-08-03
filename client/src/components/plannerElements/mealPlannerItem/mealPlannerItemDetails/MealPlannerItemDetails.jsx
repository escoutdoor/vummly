import { useState } from 'react'
import s from './mealPlannerItemDetails.module.css'

const MealPlannerItemDetails = ({ recipe, addToShoppingList }) => {
	const PF = process.env.REACT_APP_BASE_URL
	const [active, setActive] = useState(false)

	return (
		<div className={s.details}>
			<h1 className={`${s.text} ${s.left}`}>{recipe.time} minutes</h1>
			<div className={s.ingredients}>
				<div onClick={() => setActive(!active)} className={s.target}>
					<h1 className={s.text}>{recipe.ingredients?.us.length} ingredients</h1>
					<img className={active ? `${s.icon} ${s.active}` : s.icon} src={`${PF}images/icons/recipes/chevron-down.svg`} alt="arrow" />
				</div>
				<ul className={active ? `${s.menu} ${s.active}` : s.menu}>
					{recipe.ingredients.metric.map((ingredient, index) => (
						<div key={index} className={s.menu__item} onClick={() => addToShoppingList(ingredient)}>
							<div className={s.ingredient__details}>
								<h1 className={s.ingredient}>{ingredient.ingredient}</h1>
								{ingredient.quantity ? <p className={s.text__small}>{ingredient.quantity}</p> : <p className={s.text__small}>1</p>}
								{ingredient.measurement ? <p className={s.text__small}>{ingredient.measurement}</p> : null}
							</div>
							<h1 className={s.button}>Add</h1>
						</div>
					))}
				</ul>
			</div>
		</div>
	)
}

export default MealPlannerItemDetails
