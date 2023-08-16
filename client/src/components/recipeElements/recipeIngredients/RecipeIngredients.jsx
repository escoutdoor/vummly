import { useEffect, useState } from 'react'
import s from './recipeIngredients.module.css'
import IngredientListItem from './ingredientListItem/IngredientListItem'
import Skeleton from 'react-loading-skeleton'
import axios from 'axios'

const RecipeIngredients = ({ user, setActiveModal, recipe, loaded, include, addToCollection, deleteFromCollection, addMealPlanner }) => {
	const PF = process.env.REACT_APP_BASE_URL
	const madeIt = include?.find(c => c.name === 'Scheduled and Made')
	const [measurement, setMeasurement] = useState('us')

	const addToShoppingList = async ingredient => {
		try {
			if (user && recipe) {
				await axios
					.put(`/shopping/${user?._id}`, {
						name: ingredient.ingredient,
						measurement: ingredient.measurement === 'grams' ? 'kgs' : ingredient.measurement === 'ml' ? 'ltrs' : '',
						quantity: Number.isInteger(ingredient.quantity) && !ingredient.measurement ? ingredient.quantity : 1,
						recipeId: recipe._id,
					})
					.then(i => {
						console.log(i.data)
					})
			} else {
				setActiveModal(true)
			}
		} catch (error) {
			console.log('addToShoppingList error: ', error)
		}
	}

	const addAllToShoppingList = async ingredients => {
		try {
			if (user && recipe) {
				await axios
					.put(`/shopping/addAll/${user?._id}`, {
						ingredients: ingredients.map(ingredient => {
							return {
								name: ingredient.ingredient,
								measurement: ingredient.measurement === 'grams' ? 'kgs' : ingredient.measurement === 'ml' ? 'ltrs' : '',
								quantity: Number.isInteger(ingredient.quantity) && !ingredient.measurement ? ingredient.quantity : 1,
								recipeId: recipe._id,
							}
						}),
					})
					.then(i => {
						console.log(i.data)
					})
			} else {
				setActiveModal(true)
			}
		} catch (error) {
			console.log('addAllToShoppingList error: ', error)
		}
	}

	return (
		<div className={s.ingredients}>
			<div className={s.header}>
				<h1 className={s.title}>Ingredients</h1>
				<div className={s.header__right}>
					<ul className={s.measurementSelect}>
						<li onClick={() => setMeasurement('us')} className={measurement === 'us' ? `${s.measurementSelect__item} ${s.active}` : s.measurementSelect__item}>
							us
						</li>
						<li onClick={() => setMeasurement('metric')} className={measurement === 'metric' ? `${s.measurementSelect__item} ${s.active}` : s.measurementSelect__item}>
							metric
						</li>
					</ul>
					<h1 className={s.servings}>{recipe.servings ? `${recipe.servings} servings` : <Skeleton width={80} height={12} />}</h1>
				</div>
			</div>
			<div className={s.list}>
				{loaded
					? measurement === 'us'
						? recipe.ingredients.us?.map((ingredient, index) => <IngredientListItem key={index} ingredient={ingredient} addToShoppingList={addToShoppingList} />)
						: measurement === 'metric'
						? recipe.ingredients.metric.map((ingredient, index) => <IngredientListItem key={index} ingredient={ingredient} addToShoppingList={addToShoppingList} />)
						: null
					: Array(8)
							.fill(0)
							.map((a, index) => (
								<Skeleton
									height={35}
									style={{
										margin: '5px 0px',
									}}
									key={index}
								/>
							))}
			</div>
			<div className={s.buttons}>
				<button onClick={() => addAllToShoppingList(recipe.ingredients.metric)} className={s.orderButton}>
					<img src={`${PF}images/icons/recipes/shopping-bag.svg`} alt="" />
					add all to shopping list
				</button>
				<div
					className={s.checkButton}
					onClick={() => (user ? (madeIt ? deleteFromCollection('Scheduled and Made') : addToCollection('Scheduled and Made')) : setActiveModal(true))}>
					<h1 className={s.checkButton__status}>{madeIt ? 'Made it!' : 'Did you make this?'}</h1>
					<img src={madeIt ? `${PF}images/icons/recipes/check-circleActive.svg` : `${PF}images/icons/recipes/check-circle.svg`} alt="checkedRecipe" />
				</div>
				<div className={s.manage}>
					<div className={s.mealPlanner} onClick={() => addMealPlanner()}>
						{!user && <img src={`${PF}images/icons/recipes/lock.svg`} alt="lockIcon" />}
						<p className={s.mealPlanner__button}>{recipe.isAdded ? 'Remove from Meal Planner' : 'Add to Meal Planner'}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RecipeIngredients
