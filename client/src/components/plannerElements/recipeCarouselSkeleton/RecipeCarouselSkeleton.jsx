import Skeleton from 'react-loading-skeleton'
import s from './recipeCarouselSkeleton.module.css'
import RecipeItemSkeleton from '../../recipeElements/recipeItemSkeleton/RecipeItemSkeleton'

const RecipeCarouselSkeleton = ({ recipes }) => {
	return (
		<div className={s.skeleton}>
			<Skeleton height={38} />
			<div style={{ gap: recipes === 6 ? 20 : 15 }} className={s.recipes}>
				{Array(recipes)
					.fill(0)
					.map((r, index) => (
						<RecipeItemSkeleton key={index} />
					))}
			</div>
		</div>
	)
}

export default RecipeCarouselSkeleton
