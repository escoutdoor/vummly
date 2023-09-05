import { useEffect, useState } from 'react'
import s from './savedRecipes.module.css'
import { Link, useNavigate } from 'react-router-dom'

import axios from 'axios'
import UserVums from './userVums/UserVums'
import Collections from './collections/Collections'

const SavedRecipes = ({ user, recipes, setRecipes, isLoggedIn }) => {
	const PF = process.env.REACT_APP_BASE_URL
	const navigate = useNavigate()

	const [loaded, setLoaded] = useState(false)

	const fetchRecipes = async () => {
		try {
			await axios.get(`/collections/recipes/${user._id}`).then(c => {
				setRecipes(c.data)
				setLoaded(true)
			})
		} catch (error) {
			console.log('fetchRecipes error:', error)
		}
	}

	useEffect(() => {
		if (user._id) {
			fetchRecipes()
		}
	}, [user])

	return (
		<div className={s.saved__recipes}>
			<UserVums recipes={recipes} loaded={loaded} isLoggedIn={isLoggedIn} />
			<Collections isLoggedIn={isLoggedIn} user={user} />
		</div>
	)
}

export default SavedRecipes
