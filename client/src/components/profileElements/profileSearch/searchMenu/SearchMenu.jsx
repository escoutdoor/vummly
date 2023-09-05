import { Link } from 'react-router-dom'
import s from './searchMenu.module.css'

const SearchMenu = ({ recipes, active }) => {
	return (
		<div className={active ? `${s.menu} ${s.active}` : s.menu}>
			{recipes.map(item => (
				<Link key={item._id} to={`/recipe/${item.id}`}>
					<h1 className={s.menu__item}>{item.title}</h1>
				</Link>
			))}
		</div>
	)
}

export default SearchMenu
