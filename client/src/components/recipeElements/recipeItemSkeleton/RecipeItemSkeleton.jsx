import React from 'react'
import Skeleton from 'react-loading-skeleton'
import s from './recipeItemSkeleton.module.css'

const RecipeItemSkeleton = ({ recipes }) => {
	return Array(recipes)
		.fill(0)
		.map((recipe, i) => (
			<div className={s.recipe} key={i}>
				<Skeleton width={176} height={176} />
				<div className={s.recipeText}>
					<Skeleton height={20} />
					<Skeleton height={41} />
				</div>
			</div>
		))
}

export default RecipeItemSkeleton
