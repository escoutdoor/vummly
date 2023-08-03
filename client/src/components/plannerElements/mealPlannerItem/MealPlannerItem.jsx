import { Link } from 'react-router-dom'
import s from './mealPlannerItem.module.css'
import { useInView } from 'react-intersection-observer'
import 'react-loading-skeleton/dist/skeleton.css'
import MealPlannerItemSkeleton from '../mealPlannerItemSkeleton/MealPlannerItemSkeleton'
import { useEffect, useState } from 'react'
import axios from 'axios'
import MadeButton from '../madeButton/MadeButton'
import MealPlannerItemDetails from './mealPlannerItemDetails/MealPlannerItemDetails'

const MealPlannerItem = ({ recipe, remove, addToShoppingList }) => {
	const PF = process.env.REACT_APP_BASE_URL

	const { ref, inView } = useInView({
		threshold: 0.3,
		triggerOnce: true,
		delay: 500,
	})

	return (
		<div className={s.item} ref={ref}>
			{inView ? (
				<>
					<Link to={`/recipe/${recipe.id}`}>
						<img className={s.item__img} src={`${PF}images/img/recipes/${recipe.id}.webp`} alt="recipeImg" />
					</Link>
					<div className={s.text}>
						<Link to={`/recipe/${recipe.id}`}>
							<h1 className={s.title}>{recipe.title}</h1>
						</Link>
						<MealPlannerItemDetails recipe={recipe} addToShoppingList={addToShoppingList} />
						<MadeButton remove={remove} recipeId={recipe?._id} />
					</div>
				</>
			) : (
				<MealPlannerItemSkeleton />
			)}
		</div>
	)
}

export default MealPlannerItem
