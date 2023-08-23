import s from './recipe.module.css'
import { useParams, useOutletContext } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { selectUser } from '../../redux/features/userSlice'
import axios from 'axios'
import { useSelector } from 'react-redux'

import '@smastrom/react-rating/style.css'

import RecipeCard from '../../components/recipeElements/recipeCard/RecipeCard'
import RecipeIngredients from '../../components/recipeElements/recipeIngredients/RecipeIngredients'
import Nutrition from '../../components/recipeElements/nutrition/Nutrition'
import Reviews from '../../components/recipeElements/reviews/Reviews'
import Recommendations from '../../components/recipeElements/recommendations/Recommendations'

const Recipe = () => {
	const PF = process.env.REACT_APP_BASE_URL
	const { recipeId } = useParams()
	const [setActiveLoginModal] = useOutletContext()
	const user = useSelector(selectUser)
	const [loaded, setLoaded] = useState(false)

	const [recipe, setRecipe] = useState({})
	const [relatedRecipes, setRelatedRecipes] = useState([])
	const [moreRecipes, setMoreRecipes] = useState([])

	const [include, setInclude] = useState([])
	const [notInclude, setNotInclude] = useState([])

	const fetch = async () => {
		await axios.get(`/recipe/getOne/${recipeId}${user ? `?userId=${user?._id}` : ''}`).then(recipe => {
			setRecipe(recipe.data.recipe)
			setRelatedRecipes(recipe.data.related)
			setMoreRecipes(recipe.data.more)
			document.title = `${recipe.data.recipe.title} | Vummly`
		})
	}

	useEffect(() => {
		if (recipeId) {
			fetch()
			setTimeout(() => setLoaded(true), 500)
		}
	}, [recipeId, user])

	const deleteFromCollection = async name => {
		if (name) {
			await axios.put(`/collections/${user._id}/${recipe._id}`, { name }).then(col => {
				setInclude(include.filter(collection => collection.name !== col.data.name))
				setNotInclude([...notInclude, col.data])
				recipe.collections--
			})
		}
	}

	const addToCollection = async name => {
		if (name) {
			await axios.put(`/collections/${user._id}/${recipe._id}`, { name }).then(col => {
				setNotInclude(notInclude.filter(collection => collection.name !== col.data.name))
				setInclude([...include, col.data])
				recipe.collections++
			})
		}
	}

	const addMealPlanner = async () => {
		if (user && recipe._id) {
			try {
				await axios.put(`/meal-planner/addOrRemove/${user._id}/${recipe._id}`).then(planner => {
					console.log(planner.data)
					const recipeBefore = recipe
					recipeBefore.isAdded = !recipeBefore.isAdded
					setRecipe({ ...recipeBefore })
				})
			} catch (error) {
				console.log('addMealPlanner', error)
			}
		} else {
			setActiveLoginModal(true)
		}
	}

	return (
		<div className={s.recipe}>
			<div className={s.wrapper}>
				<RecipeCard
					addMealPlanner={addMealPlanner}
					addToCollection={addToCollection}
					deleteFromCollection={deleteFromCollection}
					user={user}
					setActiveModal={setActiveLoginModal}
					recipe={recipe}
					loaded={loaded}
					include={include}
					setInclude={setInclude}
					notInclude={notInclude}
					setNotInclude={setNotInclude}
				/>
				<RecipeIngredients
					addMealPlanner={addMealPlanner}
					addToCollection={addToCollection}
					deleteFromCollection={deleteFromCollection}
					user={user}
					setActiveModal={setActiveLoginModal}
					recipe={recipe}
					loaded={loaded}
					include={include}
					setInclude={setInclude}
					notInclude={notInclude}
					setNotInclude={setNotInclude}
				/>
				<Nutrition user={user} loaded={loaded} recipe={recipe} />
				<Reviews
					user={user}
					recipe={recipe}
					loaded={loaded}
					setActiveLoginModal={setActiveLoginModal}
					fetch={fetch}
				/>
				<Recommendations related={relatedRecipes} more={moreRecipes} />
			</div>
		</div>
	)
}

export default Recipe
