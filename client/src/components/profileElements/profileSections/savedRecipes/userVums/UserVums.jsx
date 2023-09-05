import s from './userVums.module.css'
import RecipeList from '../../../recipeList/RecipeList'
import RecipeItemSkeleton from '../../../../recipeElements/recipeItemSkeleton/RecipeItemSkeleton'
import { Link } from 'react-router-dom'

const UserVums = ({ recipes, loaded, isLoggedIn }) => {
	return (
		<div className={s.vums}>
			<div className={s.vums__header}>
				<h1 className={s.title}>All Vums</h1>
				<Link to={'collections/all-vums'} className={s.all__button}>
					SEE ALL
				</Link>
			</div>
			{loaded ? (
				<RecipeList recipes={isLoggedIn ? recipes.slice(0, 5) : recipes} isLoggedIn={isLoggedIn} />
			) : (
				<div className={s.list}>
					{Array(6)
						.fill(0)
						.map((item, index) => (
							<RecipeItemSkeleton key={index} />
						))}
				</div>
			)}
		</div>
	)
}

export default UserVums
