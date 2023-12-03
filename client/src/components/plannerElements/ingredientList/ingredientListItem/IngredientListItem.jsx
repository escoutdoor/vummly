import s from './ingredientListItem.module.css'
import { Link } from 'react-router-dom'
import ShoppingItem from './shoppingItem/ShoppingItem'

const IngredientListItem = ({ recipeGroup, setIngredientsByRecipe, ingredientsByRecipe, deleteIngredient, user }) => {
	const PF = process.env.REACT_APP_BASE_URL

	return (
		<div className={s.group}>
			<Link to={recipeGroup.recipe ? `/recipe/${recipeGroup.recipe?.id}` : ''} className={s.header}>
				<img
					className={s.recipeImg}
					src={recipeGroup.recipe ? `${PF}images/img/recipes/${recipeGroup.recipe.id}.webp` : `${PF}images/img/recipes/notInRecipe.jpeg`}
					alt="recipeImg"
				/>
				<h1 className={s.title}>{recipeGroup.recipe?.title || 'not in a recipe'}</h1>
			</Link>
			<ul className={s.list}>
				{recipeGroup.shoppingList?.map(item => (
					<ShoppingItem
						user={user}
						deleteIngredient={deleteIngredient}
						ingredientsByRecipe={ingredientsByRecipe}
						setIngredientsByRecipe={setIngredientsByRecipe}
						ingredient={item}
						key={item._id}
					/>
				))}
			</ul>
		</div>
	)
}

export default IngredientListItem
