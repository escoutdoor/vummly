import styles from './myFeed.module.css'
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
	const [active, setActive] = useState(false)
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
		<div className={styles.MyFeed}>
			<SearchRecipes setActive={setActive} active={active} />
			<div className="wrap1160">
				<div className={styles.myFeed__content}>
					<h1 className={styles.myFeed__title}>Just For You</h1>
					<div className={active ? styles.myFeed__rec : `${styles.myFeed__rec} ${styles.show}`}>
						{!loading && <RecipeItemSkeleton recipes={100} />}
						{recipes?.map(r => (
							<RecipeItem key={r._id} recipe={r} rating={r.rating} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default MyFeed
