import s from './sidebarByCategory.module.css'

const SidebarByCategory = ({ category, setCategory, list }) => {
	return (
		<div className={s.sidebar}>
			{list.length !== 0 && <h1 className={s.title}>By Category</h1>}
			<ul className={s.list}>
				{list.map(item => (
					<li
						onClick={() => setCategory(item.categoryId)}
						key={item.categoryId}
						className={category === item.categoryId ? `${s.list__item} ${s.active}` : s.list__item}
					>
						{item.categoryName} ({item.results})
					</li>
				))}
			</ul>
		</div>
	)
}

export default SidebarByCategory
