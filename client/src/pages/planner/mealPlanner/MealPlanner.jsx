import axios from 'axios'
import s from './mealPlanner.module.css'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../redux/features/userSlice'
import { Link } from 'react-router-dom'
import MoreMenu from '../../../components/plannerElements/moreMenu/MoreMenu'
import MealPlannerList from '../../../components/plannerElements/mealPlannerList/MealPlannerList'
import EmptyMealPlanner from '../../../components/plannerElements/emptyMealPlanner/EmptyMealPlanner'
import MealPlannerController from '../../../components/plannerElements/mealPlannerController/MealPlannerController'
import ShoppingList from '../../../components/plannerElements/rightbar/shoppingList/ShoppingList'
import MealPlannerItemSkeleton from '../../../components/plannerElements/mealPlannerItemSkeleton/MealPlannerItemSkeleton'

const MealPlanner = () => {
	const PF = process.env.REACT_APP_BASE_URL
	const [mealPlanner, setMealPlanner] = useState([])
	const [loaded, setLoaded] = useState(false)
	const [shoppingList, setShoppingList] = useState([])
	const [suggestions, setSuggestions] = useState([])
	const [ingredientsByRecipe, setIngredientsByRecipe] = useState([])

	const user = useSelector(selectUser)

	const fetchPlanner = async () => {
		try {
			await axios.get(`/meal-planner/${user?._id}`).then(p => {
				setMealPlanner(p.data)
				setLoaded(true)
			})
		} catch (error) {
			console.log('fetchPlanner', error)
		}
	}

	const fetchShoppingList = async () => {
		try {
			await axios.get(`/shopping/${user?._id}`).then(p => {
				setShoppingList(p.data.shoppingList)
				setSuggestions(p.data.suggestions)
			})
		} catch (error) {
			console.log('fetchPlanner', error)
		}
	}

	useEffect(() => {
		if (user) {
			fetchPlanner()
			fetchShoppingList()
		}
	}, [user])

	useEffect(() => {
		document.title = 'Meal Planning & Grocery Shopping Made Easy | Vummly'
	}, [])

	const clearList = async () => {
		try {
			await axios.put(`/meal-planner/clear/${user?._id}`).then(p => {
				setMealPlanner(p.data)
			})
		} catch (error) {
			console.log('clearList', error)
		}
	}

	const addToShoppingList = async (ingredient, recipeId) => {
		try {
			await axios
				.put(`/shopping/${user?._id}`, {
					name: ingredient.ingredient,
					measurement:
						ingredient.measurement === 'grams' ? 'kgs' : ingredient.measurement === 'ml' ? 'ltrs' : '',
					quantity:
						Number.isInteger(ingredient.quantity) && !ingredient.measurement ? ingredient.quantity : 0,
					recipeId: recipeId,
				})
				.then(i => {
					setShoppingList(i.data.shoppingList)
				})
		} catch (error) {
			console.log('addToShoppingList erorr: ', error)
		}
	}

	const addAllToShoppingList = async () => {
		try {
			// add all
			const ingredients = mealPlanner.recipes
				?.flatMap(recipe =>
					recipe.ingredients.metric.map(ingredient => {
						return {
							name: ingredient.ingredient,
							measurement:
								ingredient.measurement === 'grams'
									? 'kgs'
									: ingredient.measurement === 'ml'
									? 'ltrs'
									: '',
							quantity:
								Number.isInteger(ingredient.quantity) && !ingredient.measurement
									? ingredient.quantity
									: 1,
							recipeId: recipe._id,
						}
					})
				)
				.filter((ingredient, index, arr) => index === arr.findIndex(i => i.name === ingredient.name))

			await axios
				.put(`/shopping/addAll/${user._id}`, {
					ingredients,
				})
				.then(ing => {
					setIngredientsByRecipe(ing.data)
				})
		} catch (error) {
			console.log('addAllToShoppingList error: ', error)
		}
	}

	return (
		<div className={s.planner}>
			<div className={s.wrapper}>
				<div className={s.header}>
					<div className={s.buttons}>
						<Link to={'/meal-planner/support'}>
							<img className={s.icon} src={`${PF}images/icons/planner/info.svg`} alt="infoIcon" />
						</Link>
						<MoreMenu user={user} planner={mealPlanner} clear={clearList} />
					</div>
					<h1 className={s.title}>meal planner</h1>
					{mealPlanner.recipes?.length !== 0 && (
						<MealPlannerController
							isAdded={mealPlanner.recipes
								?.flatMap(item => item.ingredients.metric.map(ingredient => ingredient.ingredient))
								.every(name =>
									ingredientsByRecipe
										?.flatMap(item => item.shoppingList.map(listItem => listItem.name === name))
										.some(Boolean)
								)}
							clearList={clearList}
							addAllToShoppingList={addAllToShoppingList}
						/>
					)}
				</div>
				<div className={s.main}>
					{loaded ? (
						mealPlanner.recipes?.length !== 0 ? (
							<MealPlannerList
								addToShoppingList={addToShoppingList}
								user={user}
								setPlanner={setMealPlanner}
								planner={mealPlanner}
							/>
						) : (
							<EmptyMealPlanner user={user} />
						)
					) : (
						<div style={{ display: 'flex', gap: '50px', flexDirection: 'column' }}>
							{Array(8)
								.fill(0)
								.map((r, index) => (
									<MealPlannerItemSkeleton key={index} />
								))}
						</div>
					)}
				</div>
			</div>
			<ShoppingList
				loaded={loaded}
				recipes={mealPlanner?.recipes}
				suggestions={suggestions}
				user={user}
				setIngredients={setShoppingList}
				ingredients={shoppingList}
				addToShoppingList={addToShoppingList}
				clearList={clearList}
				ingredientsByRecipe={ingredientsByRecipe}
				setIngredientsByRecipe={setIngredientsByRecipe}
			/>
		</div>
	)
}

export default MealPlanner
