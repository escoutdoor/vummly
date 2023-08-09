import s from './ingredientListItemSkeleton.module.css'
import Skeleton from 'react-loading-skeleton'

const IngredientListItemSkeleton = () => {
	return (
		<div className={s.item}>
			<div className={s.header}>
				<Skeleton height={60} width={60} borderRadius={4} />
				<Skeleton height={21} width={200} />
			</div>
			<ul className={s.list}>
				<Skeleton height={48} />
				<Skeleton height={48} />
				<Skeleton height={48} />
			</ul>
		</div>
	)
}

export default IngredientListItemSkeleton
