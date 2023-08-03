import { useEffect, useState } from 'react'
import axios from 'axios'
import s from './searchIngredients.module.css'
import SearchMenu from './searchMenu/SearchMenu'
import RecentlyAdded from './recentlyAdded/RecentlyAdded'
import SuggestedIngredients from './suggestedIngredients/SuggestedIngredients'

const SearchIngredients = ({ list, activeSearch, setActiveSearch, user, addToShoppingList, suggestions }) => {
	const [ingredients, setIngredients] = useState([])

	const fetchIngredients = async () => {
		try {
			await axios.get(`/shopping/ingredients/${user?._id}`).then(i => {
				setIngredients(i.data)
			})
		} catch (error) {
			console.log('fetchIngredients error: ', error)
		}
	}

	useEffect(() => {
		if (user) {
			fetchIngredients()
		}
	}, [user])

	return (
		<div className={activeSearch ? `${s.searchIngredients} ${s.active}` : s.searchIngredients}>
			<SearchMenu addToShoppingList={addToShoppingList} setActiveSearch={setActiveSearch} ingredients={ingredients} />
			<RecentlyAdded ingredients={list} />
			<SuggestedIngredients addToShoppingList={addToShoppingList} suggestions={suggestions} />
		</div>
	)
}

export default SearchIngredients
