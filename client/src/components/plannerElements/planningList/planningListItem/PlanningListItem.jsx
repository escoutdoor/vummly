import { Link } from 'react-router-dom'
import s from './planningListItem.module.css'
import MadeButton from '../../madeButton/MadeButton'

const PlanningListItem = ({ recipe, remove }) => {
	const PF = process.env.REACT_APP_BASE_URL

	return (
		<div className={s.recipe}>
			<Link to={`/recipe/${recipe?.id}`}>
				<img className={s.image} src={`${PF}images/img/recipes/${recipe?.id}.webp`} alt="recipeImg" />
			</Link>
			<div className={s.details}>
				<Link className={s.title} to={`/recipe/${recipe.id}`}>
					{recipe.title}
				</Link>
				<MadeButton remove={remove} recipeId={recipe?._id} />
			</div>
		</div>
	)
}

export default PlanningListItem
