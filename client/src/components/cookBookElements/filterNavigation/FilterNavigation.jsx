import s from './filterNavigation.module.css'

const FilterNavigation = ({ activeFilter, activeTab, setActiveTab, tabs }) => {
	return (
		<ul className={activeFilter ? `${s.navigation} ${s.active}` : s.navigation}>
			{tabs.map((tab, index) => (
				<li
					className={activeTab === tab ? `${s.navigation__item} ${s.active}` : s.navigation__item}
					onClick={() => setActiveTab(tab)}
					key={index}
				>
					{tab}
				</li>
			))}
		</ul>
	)
}

export default FilterNavigation
