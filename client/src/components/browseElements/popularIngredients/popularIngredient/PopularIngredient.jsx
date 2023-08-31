import { Link } from 'react-router-dom'
import s from './popularIngredient.module.css'

const PopularIngredient = ({ item }) => {
	const PF = process.env.REACT_APP_BASE_URL

	return (
		<Link to={`/ingredient/${item}`} className={s.ingredient}>
			<img className={s.img} src={`${PF}images/icons/browse/no-ingredient.jpeg`} alt="ingredient" />
			<span className={s.title}>{item}</span>
		</Link>
	)
}

export default PopularIngredient
