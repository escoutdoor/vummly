import Skeleton from 'react-loading-skeleton'
import s from './mealPlannerItemSkeleton.module.css'

const MealPlannerItemSkeleton = () => {
	return (
		<div className={s.item}>
			<Skeleton borderRadius={8} height={168} width={168} />
			<div className={s.text}>
				<Skeleton height={32} />
				<Skeleton height={19} width={166} />
				<Skeleton height={30} width={120} />
			</div>
		</div>
	)
}

export default MealPlannerItemSkeleton
