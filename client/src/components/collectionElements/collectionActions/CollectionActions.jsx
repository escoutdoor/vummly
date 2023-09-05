import s from './collectionActions.module.css'

const CollectionActions = ({ sortBy, setSortBy, active, setActive }) => {
	const PF = process.env.REACT_APP_BASE_URL

	return (
		<div className={s.actions} onClick={e => e.stopPropagation()}>
			<div className={s.container}>
				<div className={s.text} onClick={() => setActive(!active)}>
					<h1 style={{ color: '#bababa' }} className={s.title}>
						Sort By
					</h1>
					<h1 className={s.title}>{sortBy}</h1>
					<img className={s.icon} src={`${PF}images/icons/recipes/chevron-down.svg`} alt="sortIcon" />
				</div>
				<ul className={active ? `${s.dropdown} ${s.active}` : s.dropdown}>
					<li
						className={sortBy === 'last added' ? `${s.dropdown__item} ${s.active}` : s.dropdown__item}
						onClick={() => {
							setSortBy('last added')
							setActive(false)
						}}
					>
						last added
					</li>
					<li
						className={sortBy === 'recipe name' ? `${s.dropdown__item} ${s.active}` : s.dropdown__item}
						onClick={() => {
							setSortBy('recipe name')
							setActive(false)
						}}
					>
						recipe name
					</li>
				</ul>
			</div>
		</div>
	)
}

export default CollectionActions
