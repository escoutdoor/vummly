import { Link } from 'react-router-dom'
import s from './ingredientHeader.module.css'

const IngredientHeader = ({ ingredient }) => {
	const PF = process.env.REACT_APP_BASE_URL

	return (
		<div className={s.header}>
			<img className={s.image} src={`${PF}images/icons/browse/no-ingredient.jpeg`} alt="ingredientImage" />
			<div className={s.details}>
				<div className={s.breadcrumbs}>
					<Link className={s.link} to={'/browse'}>
						browse
					</Link>
					<span className={s.slash}>/</span>
					<Link className={s.link} to={'/browse'} state={{ section: 'ingredients' }}>
						ingredients
					</Link>
				</div>
				<h1 className={s.title}>{ingredient}</h1>
			</div>
		</div>
	)
}

export default IngredientHeader
