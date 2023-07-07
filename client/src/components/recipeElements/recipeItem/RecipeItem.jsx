import s from './recipeItem.module.css'
import { Link } from 'react-router-dom'
import { Rating, Star } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useInView } from 'react-intersection-observer'
import 'react-loading-skeleton/dist/skeleton.css'
import RecipeItemSkeleton from '../recipeItemSkeleton/RecipeItemSkeleton'
import AddToCollection from '../addToCollection/AddToCollection'
import { useEffect } from 'react'
import axios from 'axios'

const RecipeItem = ({ recipe, loading, setLoading, rating }) => {
	const PF = process.env.REACT_APP_BASE_URL
	//
	const ratingStars = {
		itemShapes: Star,
		activeFillColor: '#e16120',
		inactiveFillColor: '#f1f1f1',
	}

	const { ref, inView } = useInView({
		threshold: 0.3,
		triggerOnce: true,
		delay: 500,
	})

	return (
		<div
			ref={ref}
			className={s.recipe}
			onClick={() => {
				loading && setLoading(false)
			}}>
			{inView ? (
				<div>
					<Link to={`/recipe/${recipe.id}`}>
						<div title={recipe.title} className={s.imgBlock}>
							<img className={s.recipeImg} src={`${PF}images/img/recipes/${recipe.id}.webp`} alt="" />
							<div className={s.ingredients}>{recipe.ingredients.metric.map(ing => (recipe.ingredients.metric[0] !== ing ? ', ' + ing.ingredient.toLowerCase() : ing.ingredient.toLowerCase()))}</div>
						</div>
					</Link>
					<div className={s.details}>
						<Link to={`/recipe/${recipe.id}`}>
							<h1 title={recipe.title} className={s.title}>
								{recipe.title}
							</h1>
						</Link>
						<Link to={`/page/${recipe.resource.link}`}>
							<span title={recipe.resource.name} className={s.resource}>
								{recipe.resource.name}
							</span>
						</Link>
						<Rating halfFillMode="svg" className={s.rating} readOnly={true} value={rating || 0} itemStyles={ratingStars} />
					</div>
				</div>
			) : (
				<RecipeItemSkeleton />
			)}
		</div>
	)
}

export default RecipeItem
