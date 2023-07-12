import { Link } from 'react-router-dom'
import s from './mealPlannerItem.module.css'
import { useInView } from 'react-intersection-observer'
import 'react-loading-skeleton/dist/skeleton.css'
import MealPlannerItemSkeleton from '../mealPlannerItemSkeleton/MealPlannerItemSkeleton'
import { useEffect, useState } from 'react'
import axios from 'axios'

const MealPlannerItem = ({ recipe, remove }) => {
	const PF = process.env.REACT_APP_BASE_URL

	const { ref, inView } = useInView({
		threshold: 0.3,
		triggerOnce: true,
		delay: 500,
	})

	const [checked, setChecked] = useState(false)

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
						<ul className={s.details}>
							<li className={s.details__item}>{recipe.time} minutes</li>
							<li className={s.details__item}>{recipe.ingredients?.us.length} ingredients</li>
						</ul>
						<div
							className={s.madeIt}
							onClick={() => {
								setChecked(!checked)
								remove(recipe._id)
							}}>
							<div className={s.checkbox}>
								<input type="checkbox" className={s.checkbox__input} />
								<span className={checked ? `${s.display__check} ${s.active}` : s.display__check} />
							</div>
							<h1 className={s.madeIt__title}>Made it</h1>
						</div>
					</div>
				</>
			) : (
				<MealPlannerItemSkeleton />
			)}
		</div>
	)
}

export default MealPlannerItem
