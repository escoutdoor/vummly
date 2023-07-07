import Skeleton from 'react-loading-skeleton'
import s from './recipeCarouselSkeleton.module.css'
import RecipeItemSkeleton from '../../recipeElements/recipeItemSkeleton/RecipeItemSkeleton'

const RecipeCarouselSkeleton = () => {
	return (
		<div className={s.skeleton}>
			<Skeleton height={38} />
			<div className={s.recipes}>
				{Array(5)
					.fill(0)
					.map((r, index) => (
						<RecipeItemSkeleton key={index} />
					))}
			</div>
		</div>
	)
}

export default RecipeCarouselSkeleton
