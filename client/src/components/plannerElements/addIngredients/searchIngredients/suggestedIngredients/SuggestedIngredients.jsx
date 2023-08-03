import { useState } from 'react'
import s from './suggestedIngredients.module.css'
import axios from 'axios'

const SuggestedIngredients = ({ suggestions, addToShoppingList }) => {
	return (
		<div className={s.suggestedIng}>
			<h1 className={s.title}>suggested ingredients</h1>
			<ul className={s.list}>
				{suggestions?.map((suggestion, index) => (
					<li onClick={() => addToShoppingList({ ingredient: suggestion })} key={index} className={s.list__item}>
						{suggestion}
					</li>
				))}
			</ul>
		</div>
	)
}

export default SuggestedIngredients
