import s from './recipeCarousel.module.css'
import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import RecipeItem from '../../recipeElements/recipeItem/RecipeItem'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const RecipeCarousel = ({ collection, addMealPlanner }) => {
	const PF = process.env.REACT_APP_BASE_URL

	return (
		<div className={s.carousel}>
			<div className={s.header}>
				<h1 className={s.title}>{collection.name}</h1>
				<div onClick={() => addMealPlanner(collection._id)} className={s.button}>
					<img src={`${PF}images/icons/planner/lock.svg`} alt="lockIcon" />
					<h1 className={s.button__title}>Add All To Meal Plan</h1>
				</div>
			</div>
			<Swiper slidesPerView={5} spaceBetween={10} navigation={true} modules={[Pagination, Navigation]} className={s.swiper}>
				{collection.recipes.map(recipe => (
					<SwiperSlide key={recipe._id}>
						<RecipeItem recipe={recipe} rating={recipe.rating} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default RecipeCarousel
