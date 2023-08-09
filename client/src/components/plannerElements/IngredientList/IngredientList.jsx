import { useEffect, useState } from 'react'
import s from './ingredientList.module.css'
import IngredientListItem from './ingredientListItem/IngredientListItem'
import IngredientListItemSkeleton from './ingredientListItemSkeleton/IngredientListItemSkeleton'
import axios from 'axios'

const IngredientList = ({ ingredientsByRecipe, setIngredientsByRecipe, loaded, ingredients, setIngredients, user }) => {
	const fetchByRecipe = async () => {
		try {
			await axios.get(`/shopping/shoppingByRecipe/${user?._id}`).then(sr => {
				setIngredientsByRecipe(sr.data)
			})
		} catch (error) {
			console.log('fetchByRecipe error: ', error)
		}
	}

	const deleteIngredient = async ingredient => {
		try {
			await axios
				.put(`/shopping/delete/${user?._id}`, {
					ingredientId: ingredient?._id,
				})
				.then(i => {
					setIngredients(i.data)
				})
			console.log(ingredient?._id)
		} catch (error) {
			console.log('deleteIngredient error: ', error)
		}
	}

	useEffect(() => {
		if (user?._id) {
			fetchByRecipe()
		}
	}, [user, ingredients])

	return (
		<div className={s.list}>
			{!loaded &&
				Array(5)
					.fill(0)
					.map((ingredient, index) => <IngredientListItemSkeleton key={index} />)}
			{loaded &&
				ingredientsByRecipe?.map(item => (
					<IngredientListItem
						deleteIngredient={deleteIngredient}
						ingredientsByRecipe={ingredientsByRecipe}
						setIngredientsByRecipe={setIngredientsByRecipe}
						key={item._id}
						recipeGroup={item}
						user={user}
					/>
				))}
		</div>
	)
}

export default IngredientList
