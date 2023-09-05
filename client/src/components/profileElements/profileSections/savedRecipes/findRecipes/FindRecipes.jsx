import { Link } from 'react-router-dom'
import s from './findRecipes.module.css'

const FindRecipes = () => {
	const PF = process.env.REACT_APP_BASE_URL
	return (
		<Link to={'/recipes'}>
			<div className={s.find}>
				<div className={s.content}>
					<img className={s.searchIcon} src={`${PF}images/icons/profile/search.svg`} alt="searchIcon" />
					<h1 className={s.title}>find new recipes</h1>
				</div>
			</div>
		</Link>
	)
}

export default FindRecipes
