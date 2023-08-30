import s from './browseNavigation.module.css'

const BrowseNavigation = ({ active, setActive }) => {
	const navigation = [
		{ id: 1, tab: 'home' },
		{ id: 2, tab: 'ingredients' },
		{ id: 3, tab: 'cuisines' },
		{ id: 4, tab: 'diets' },
		{ id: 5, tab: 'courses' },
		{ id: 6, tab: 'techniques' },
		{ id: 7, tab: "quick n' easy" },
		{ id: 8, tab: 'seasonal' },
	]

	return (
		<ul className={s.navigation}>
			{navigation.map(item => (
				<li
					key={item.id}
					onClick={() => setActive(item.tab)}
					className={active === item.tab ? `${s.navigation__item} ${s.active}` : s.navigation__item}
				>
					{item.tab}
				</li>
			))}
		</ul>
	)
}

export default BrowseNavigation
