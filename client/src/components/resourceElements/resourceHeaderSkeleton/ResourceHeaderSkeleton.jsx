import s from './resourceHeaderSkeleton.module.css'
import Skeleton from 'react-loading-skeleton'

const ResourceHeaderSkeleton = () => {
	return (
		<div className={s.header}>
			<div className={s.info}>
				<Skeleton circle={true} width={148} height={148} />
				<div className={s.details}>
					<Skeleton width={220} height={34} />
					<Skeleton height={25} />
					<div className={s.socials}>
						<Skeleton height={16} width={16} />
						<Skeleton height={16} width={16} />
						<Skeleton height={16} width={16} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default ResourceHeaderSkeleton
