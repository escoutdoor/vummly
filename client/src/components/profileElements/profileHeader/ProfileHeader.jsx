import s from './profileHeader.module.css'

const ProfileHeader = ({ user }) => {
	const PF = process.env.REACT_APP_BASE_URL

	return (
		<div className={s.header}>
			<img
				className={s.avatar}
				src={`${PF}images/avatars/${user.avatar ? user.avatar : 'no-avatar.webp'}`}
				alt="avatar"
			/>
			<div className={s.details}>
				<h1 className={s.name}>{user.name}</h1>
				<p className={s.description}>{user.description}</p>
				<div className={s.location}>
					<p className={s.location__text}>
						{user.city}
						{user.city && ', '}
					</p>
					<p className={s.location__text}>{user.country}</p>
				</div>
			</div>
		</div>
	)
}

export default ProfileHeader
