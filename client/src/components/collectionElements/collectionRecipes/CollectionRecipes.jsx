import { useEffect, useState } from 'react'
import CollectionActions from '../collectionActions/CollectionActions'
import s from './collectionRecipes.module.css'
import RecipeList from '../../profileElements/recipeList/RecipeList'
import axios from 'axios'

const CollectionRecipes = ({ userId, collectionId, isAllVums }) => {
	const [active, setActive] = useState(false)
	const [recipes, setRecipes] = useState([])
	const [sortBy, setSortBy] = useState('last added')

	const fetchRecipes = async () => {
		try {
			await axios.get(`/collections/getCollectionRecipes/${userId}/${collectionId}?sortBy=${sortBy}`).then(c => {
				setRecipes(c.data)
			})
		} catch (error) {
			console.log('fetchRecipes error:', error)
		}
	}

	useEffect(() => {
		if (userId && collectionId) {
			fetchRecipes()
		}
	}, [collectionId, userId, sortBy])

	return (
		<div className={s.collection__recipes} onClick={() => setActive(false)}>
			{!isAllVums && (
				<CollectionActions sortBy={sortBy} setSortBy={setSortBy} setActive={setActive} active={active} />
			)}
			<RecipeList recipes={recipes} />
		</div>
	)
}

export default CollectionRecipes
