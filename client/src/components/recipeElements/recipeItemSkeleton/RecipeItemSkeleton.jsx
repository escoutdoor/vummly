import React from 'react'
import Skeleton from 'react-loading-skeleton'
import s from './recipeItemSkeleton.module.css'

const RecipeItemSkeleton = () => {
	return (
		<div className={s.recipe}>
			<Skeleton width={176} height={176} />
			<div className={s.recipeText}>
				<Skeleton height={20} />
				<Skeleton height={41} />
			</div>
		</div>
	)
}

export default RecipeItemSkeleton
