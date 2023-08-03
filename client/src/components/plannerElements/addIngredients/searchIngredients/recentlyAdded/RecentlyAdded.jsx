import s from './recentlyAdded.module.css'

const RecentlyAdded = ({ ingredients }) => {
	return (
		<div className={s.recentlyAdded}>
			<h1 className={s.title}>recently added</h1>
			<div className={s.list}>
				{ingredients?.map((ingredient, index) => (
					<p className={s.list__item} key={index}>
						{ingredient.name}
					</p>
				))}
			</div>
		</div>
	)
}

export default RecentlyAdded
