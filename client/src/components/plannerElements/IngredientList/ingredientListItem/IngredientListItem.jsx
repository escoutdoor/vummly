import s from './ingredientListItem.module.css'

const IngredientListItem = ({ ingredient }) => {
	return (
		<div className={s.ingredient}>
			<div className={s.header}>
				<img src="" alt="" />
				<h1 className={s.ingredient__title}>{ingredient.name}</h1>
			</div>
		</div>
	)
}

export default IngredientListItem
