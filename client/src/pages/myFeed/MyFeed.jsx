import s from './myFeed.module.css'
import React, { useEffect, useState } from 'react'
import SearchRecipes from '../../components/searchRecipes/SearchRecipes'
import axios from 'axios'

import RecipeItem from '../../components/recipeElements/recipeItem/RecipeItem'
import RecipeItemSkeleton from '../../components/recipeElements/recipeItemSkeleton/RecipeItemSkeleton'
import { selectUser } from '../../redux/features/userSlice'
import { useSelector } from 'react-redux'

const MyFeed = () => {
	const [recipes, setRecipes] = useState([])
	const [loading, setLoading] = useState(false)
	const user = useSelector(selectUser)

	useEffect(() => {
		document.title = 'Vummly: Personalized Recipe Recommendations and Search'
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
	}, [])

	const fetch = async () => {
		try {
			await axios.get(`/recipe/all?userId=${user?._id || ''}`).then(info => {
				setRecipes(info.data)
				setTimeout(() => setLoading(true), 400)
			})
		} catch (error) {
			console.log('fetchMyFeed', error)
		}
	}

	useEffect(() => {
		fetch()
	}, [user])

	return (
		<div className={s.myFeed}>
			<SearchRecipes />
			<div className={s.recipes}>
				<div className="wrap1160">
					<div className={s.recipes__content}>
						<h1 className={s.title}>just for you</h1>
						<div className={s.list}>
							{loading
								? recipes.map(recipe => <RecipeItem key={recipe._id} recipe={recipe} />)
								: Array(100)
										.fill(0)
										.map((item, index) => <RecipeItemSkeleton key={index} />)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MyFeed
