import s from './ingredientListItem.module.css'

const IngredientListItem = ({ ingredient, addToShoppingList }) => {
	return (
		<div className={s.ingredientItem}>
			<span onClick={() => addToShoppingList(ingredient)} className={s.plus}>
				+
			</span>

			{ingredient.quantity ? <p className={s.text}>{ingredient.quantity}</p> : null}

			{ingredient.measurement ? <p className={s.text}>{ingredient.measurement}</p> : null}

			<h1 className={s.text}>{ingredient.ingredient}</h1>

			{ingredient.technique ? <p className={s.technique}>({ingredient.technique})</p> : null}
		</div>
	)
}

export default IngredientListItem
