import s from './sortMenu.module.css'

const SortMenu = ({ sortBy, setSortBy, active, setActive, options }) => {
	const PF = process.env.REACT_APP_BASE_URL

	return (
		<div className={s.actions} onClick={e => e.stopPropagation()}>
			<div className={s.text} onClick={() => setActive(!active)}>
				<h1 style={{ color: '#bababa' }} className={s.title}>
					Sort By
				</h1>
				<h1 className={s.title}>{sortBy}</h1>
				<img className={s.icon} src={`${PF}images/icons/recipes/chevron-down.svg`} alt="sortIcon" />
			</div>
			<ul className={active ? `${s.dropdown} ${s.active}` : s.dropdown}>
				{options.map((option, index) => (
					<li
						key={index}
						className={sortBy === option ? `${s.dropdown__item} ${s.active}` : s.dropdown__item}
						onClick={() => {
							setSortBy(option)
							setActive(false)
						}}
					>
						{option}
					</li>
				))}
			</ul>
		</div>
	)
}

export default SortMenu
