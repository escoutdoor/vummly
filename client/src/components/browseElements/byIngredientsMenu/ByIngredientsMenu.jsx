import s from './byIngredientsMenu.module.css'
import { menu } from '../../../helpers/browse/menu'
import { Link } from 'react-router-dom'

const ByIngredientsMenu = () => {
	return (
		<div className={s.menu}>
			<h1 className={s.title}>browse by ingredients</h1>
			<ul className={s.list}>
				{menu.map((item, index) => (
					<Link key={index} className={s.list__item} to={`/ingredient/${item}`}>
						{item}
					</Link>
				))}
			</ul>
		</div>
	)
}

export default ByIngredientsMenu
