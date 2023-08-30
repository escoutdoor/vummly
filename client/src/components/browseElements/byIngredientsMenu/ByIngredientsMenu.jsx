import s from './byIngredientsMenu.module.css'
import { menu } from '../../../helpers/browse/menu'

const ByIngredientsMenu = () => {
	return (
		<div className={s.menu}>
			<h1 className={s.title}>browse by ingredients</h1>
			<ul className={s.list}>
				{menu.map((item, index) => (
					<li className={s.list__item} key={index}>
						{item}
					</li>
				))}
			</ul>
		</div>
	)
}

export default ByIngredientsMenu
