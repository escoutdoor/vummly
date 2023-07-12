import s from './emptyMealPlanner.module.css'
import { Link } from 'react-router-dom'

const EmptyMealPlanner = ({ user }) => {
	const PF = process.env.REACT_APP_BASE_URL

	return (
		<div className={s.block}>
			<img className={s.icon} src={`${PF}images/icons/planner/book.svg`} alt="bookIcon" />
			<h1 className={s.title}>Your Meal Plan is Empty</h1>
			<p className={s.explanation}>
				Add some recipes now. Get{' '}
				<Link className={s.link} to={`/profile/${user?.name}-${user?._id}`}>
					personalized recommendations
				</Link>{' '}
				or add any recipe on Yummly.
			</p>
			<Link className={s.button} to={'/recipes'}>
				find new recipes
			</Link>
		</div>
	)
}

export default EmptyMealPlanner
