import s from './editQuantity.module.css'
import { useState } from 'react'

const EditQuantity = ({ ingredientsByRecipe, setIngredientsByRecipe, ingredient, active, setActive }) => {
	const PF = process.env.REACT_APP_BASE_URL

	return (
		<div className={active ? `${s.menu} ${s.active}` : s.menu}>
			<div className={s.header} onClick={() => setActive(false)}>
				<p className={s.text}>{ingredient.quantity}</p>
				<p className={s.text}>{ingredient.name}</p>
			</div>
			<div className={s.editMenu}>
				<div className={s.select}></div>
			</div>
		</div>
	)
}

export default EditQuantity
