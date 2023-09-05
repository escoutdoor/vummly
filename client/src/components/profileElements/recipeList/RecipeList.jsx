import s from './recipeList.module.css'
import RecipeItem from '../../recipeElements/recipeItem/RecipeItem'
import FindRecipes from '../profileSections/savedRecipes/findRecipes/FindRecipes'

const RecipeList = ({ recipes, isLoggedIn }) => {
	return (
		<div className={s.list}>
			{isLoggedIn && <FindRecipes />}
			{recipes.map((r, index) => (
				<RecipeItem key={index} recipe={r} rating={r.rating} />
			))}
		</div>
	)
}

export default RecipeList
