import { Link } from 'react-router-dom'
import s from './recipeCard.module.css'
import CardSkeleton from '../cardSkeleton/CardSkeleton'
import { Rating, Star } from '@smastrom/react-rating'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import AddToCollection from '../addToCollection/AddToCollection'

const RecipeCard = ({ user, setActiveModal, recipe, loaded, include, setInclude, notInclude, setNotInclude, addToCollection, deleteFromCollection, addMealPlanner }) => {
	const PF = process.env.REACT_APP_BASE_URL
	const review = recipe.reviews?.[0]?._id

	const ratingStars = {
		itemShapes: Star,
		activeFillColor: '#e16120',
		inactiveFillColor: '#f1f1f1',
	}

	const fetchCollections = async () => {
		await axios.get(`/collections/all/${user._id}/${recipe._id}`).then(collections => {
			setInclude(collections.data.include)
			setNotInclude(collections.data.notinclude)
		})
	}

	useEffect(() => {
		if (user?._id && recipe?._id) {
			fetchCollections()
		}
	}, [user, recipe])

	return loaded ? (
		<div className={s.card}>
			<div className={s.details}>
				<div className={s.header}>
					<h1 className={s.title}>{recipe.title}</h1>
					<Link to={`/page/${recipe.resource?.link}`} className={s.resource}>
						{recipe.resource?.name}
					</Link>
					<div className={s.rating}>
						<Rating className={s.stars} readOnly={true} value={recipe.rating} itemStyles={ratingStars} />
						<p className={review ? `${s.count} ${s.active}` : s.count}>({review ? recipe.reviews.length : 0})</p>
					</div>
				</div>
				<div className={s.stats}>
					{review ? (
						<div className={s.review}>
							<Link to={`/profile/${recipe.reviews[0].user.name}-${recipe.reviews[0].user._id}`}>
								<h1 className={s.review__username}>{recipe.reviews[0].user.name}</h1>
							</Link>
							: {recipe.reviews[0].text}
						</div>
					) : null}
					<div className={s.summary}>
						<div className={s.summary__item}>
							<p className={s.summary__value}>{recipe.ingredients?.us.length || recipe.ingredients?.metric.length}</p>
							<span className={s.summary__title}>ingredients</span>
						</div>
						<div className={s.summary__item}>
							<p className={s.summary__value}>{recipe.time}</p>
							<span className={s.summary__title}>minutes</span>
						</div>
						<div className={s.summary__item}>
							<p className={s.summary__value}>{recipe.nutrition.find(n => n.label === 'calories').value}</p>
							<span className={s.summary__title}>calories</span>
						</div>
					</div>
					<div className={s.buttons}>
						<AddToCollection
							addToCollection={addToCollection}
							deleteFromCollection={deleteFromCollection}
							user={user}
							recipe={recipe}
							setInclude={setInclude}
							include={include}
							notInclude={notInclude}
							setActiveModal={setActiveModal}
						/>
						<div className={s.mealPlanner} onClick={() => addMealPlanner()}>
							<img src={`${PF}images/icons/recipes/lock.svg`} alt="lockIcon" />
							<p className={s.mealPlanner__button}>Add to Meal Planner</p>
						</div>
					</div>
				</div>
			</div>
			<img className={s.image} src={`${PF}images/img/recipes/${recipe.id}.webp`} alt="recipeImage" />
		</div>
	) : (
		<CardSkeleton />
	)
}

export default RecipeCard
