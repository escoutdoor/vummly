import Skeleton from 'react-loading-skeleton'
import s from './profileHeaderSkeleton.module.css'

const ProfileHeaderSkeleton = () => {
	return (
		<div className={s.header}>
			<Skeleton className={s.ava} circle={true} height={124} width={124} />
			<div className={s.detailsUser}>
				<Skeleton width={200} height={34} className={s.name} />
				<Skeleton width={286} height={20} className={s.description} />
				<Skeleton width={300} height={24} />
			</div>
		</div>
	)
}

export default ProfileHeaderSkeleton
