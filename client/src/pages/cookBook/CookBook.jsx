import s from './cookbook.module.css'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SearchTools from '../../components/cookBookElements/searchTools/SearchTools'
import RecipeList from '../../components/profileElements/recipeList/RecipeList'
import axios from 'axios'
import RecipeItemSkeleton from '../../components/recipeElements/recipeItemSkeleton/RecipeItemSkeleton'

const CookBook = () => {
	const PF = process.env.REACT_APP_BASE_URL
	const location = useLocation()
	const query = location.state?.query
	const [searchValue, setSearchValue] = useState(query || '')
	window.history.replaceState({}, searchValue)

	const [recipes, setRecipes] = useState([])
	const [loaded, setLoaded] = useState(false)
	const [activeToolTip, setActiveToolTip] = useState(false)

	const [allowedIngredients, setAllowedIngredients] = useState([])
	const [bannedIngredients, setBannedIngredients] = useState([])
	const [nutrition, setNutrition] = useState('')
	const [time, setTime] = useState()
	const [sortBy, setSortBy] = useState('relevance')
	const [suggestions, setSuggestions] = useState([])

	const fetchRecipes = async () => {
		try {
			await axios
				.get(
					`/recipe/recipes?allowed=${allowedIngredients}&banned=${bannedIngredients}&nutrition=${nutrition}&sort=${
						sortBy === 'quick & easy' ? 'time' : sortBy
					}&time=${time}`
				)
				.then(r => {
					setRecipes(r.data)
					setLoaded(true)
				})
		} catch (error) {
			console.log('fetchRecipes error:', error)
		}
	}

	console.log(recipes)

	useEffect(() => {
		fetchRecipes()
	}, [allowedIngredients, bannedIngredients, nutrition, sortBy, time])

	useEffect(() => {
		setSuggestions([
			...recipes?.filter(
				recipe =>
					recipe.tags.find(tag => tag.toLowerCase().includes(searchValue.toLowerCase())) ||
					recipe.title.toLowerCase().includes(searchValue.toLowerCase()) ||
					recipe.resource.name.toLowerCase().includes(searchValue.toLowerCase())
			),
		])
	}, [searchValue, recipes])

	useEffect(() => {
		const prev = JSON.parse(localStorage.getItem('search-history')) || []
		const act = prev
			? JSON.stringify(
					[query, ...prev.slice(0, 5)].filter((value, index, array) => array.indexOf(value) === index)
			  )
			: []
		query && query !== '' && localStorage.setItem('search-history', act)
	}, [])

	return (
		<div className={s.cookbook} onClick={() => setActiveToolTip(false)}>
			<div className="wrap1160">
				<div className={s.container}>
					<SearchTools
						recipes={recipes}
						searchValue={searchValue}
						setSearchValue={setSearchValue}
						allowedIngredients={allowedIngredients}
						setAllowedIngredients={setAllowedIngredients}
						bannedIngredients={bannedIngredients}
						setBannedIngredients={setBannedIngredients}
						nutrition={nutrition}
						setNutrition={setNutrition}
						time={time}
						setTime={setTime}
						sortBy={sortBy}
						setSortBy={setSortBy}
						activeToolTip={activeToolTip}
						setActiveToolTip={setActiveToolTip}
					/>
					<div className={s.main}>
						<h1 className={s.counter}>{suggestions.length} suggested recipes</h1>
						{!loaded ? (
							<div className={s.list}>
								{Array(100)
									.fill(0)
									.map((item, index) => (
										<RecipeItemSkeleton key={index} />
									))}
							</div>
						) : (
							<RecipeList recipes={suggestions} />
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default CookBook
