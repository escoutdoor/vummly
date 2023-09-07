import { Link } from 'react-router-dom'
import s from './toolTipMenu.module.css'

const ToolTipMenu = ({ recipes, active }) => {
	return (
		<div className={active ? `${s.menu} ${s.active}` : s.menu}>
			<p className={s.title}>suggestions</p>
			<ul className={s.list}>
				{recipes.map(recipe => (
					<li key={recipe._id} className={s.list__item}>
						<Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default ToolTipMenu
