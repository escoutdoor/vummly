import s from './shoppingList.module.css'
import IngredientList from '../../ingredientList/IngredientList'
import AddIngredients from '../../addIngredients/AddIngredients'
import ShoppingListActions from '../../shoppingListActions/ShoppingListActions'
import axios from 'axios'
import { useState } from 'react'

const ShoppingList = ({
	ingredientsByRecipe,
	setIngredientsByRecipe,
	ingredients,
	addToShoppingList,
	setIngredients,
	user,
	suggestions,
	loaded,
	recipes,
}) => {
	const clearList = async () => {
		try {
			await axios.put(`/shopping/clearList/${user?._id}`).then(list => {
				setIngredients(list.data.shoppingList)
			})
		} catch (error) {
			console.log('clearList error: ', error)
		}
	}

	const uncheckAll = async () => {
		try {
			await axios.put(`/shopping/uncheck/${user?._id}`).then(list => {
				setIngredientsByRecipe(list.data)
			})
		} catch (error) {
			console.log('clearList error: ', error)
		}
	}

	return (
		<div className={s.rightbar}>
			<div className={s.header}>
				<h1 className={s.header__title}>shopping list</h1>
				<ShoppingListActions clearList={clearList} uncheckAll={uncheckAll} />
			</div>
			<AddIngredients
				suggestions={suggestions}
				ingredients={ingredients}
				user={user}
				addToShoppingList={addToShoppingList}
			/>
			<IngredientList
				ingredientsByRecipe={ingredientsByRecipe}
				setIngredientsByRecipe={setIngredientsByRecipe}
				user={user}
				recipes={recipes}
				loaded={loaded}
				ingredients={ingredients}
				setIngredients={setIngredients}
			/>
		</div>
	)
}

export default ShoppingList
