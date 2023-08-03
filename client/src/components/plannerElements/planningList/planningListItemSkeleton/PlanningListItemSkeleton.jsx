import s from './planningListItemSkeleton.module.css'
import Skeleton from 'react-loading-skeleton'

const PlanningListItemSkeleton = () => {
	return (
		<div className={s.recipe}>
			<Skeleton borderRadius={4} width={60} height={60} />
			<div className={s.details}>
				<Skeleton height={21} />
				<Skeleton width={78.5} height={21} />
			</div>
		</div>
	)
}

export default PlanningListItemSkeleton
