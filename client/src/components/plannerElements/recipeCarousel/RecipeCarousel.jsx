import s from './recipeCarousel.module.css'
import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import RecipeItem from '../../recipeElements/recipeItem/RecipeItem'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import SwiperRecipeCarouselButtons from '../swiperRecipeCarouselButtons/SwiperRecipeCarouselButtons'
import { useInView } from 'react-intersection-observer'
import RecipeCarouselSkeleton from '../recipeCarouselSkeleton/RecipeCarouselSkeleton'

const RecipeCarousel = ({ collection, addAllToMealPlanner, isAdded }) => {
	const PF = process.env.REACT_APP_BASE_URL

	const { ref, inView } = useInView({
		threshold: 0.3,
		triggerOnce: true,
		delay: 500,
	})

	return (
		<div className={s.carousel} ref={ref}>
			{inView ? (
				<>
					<div className={s.header}>
						<h1 className={s.title}>{collection.name}</h1>
						<div onClick={() => addAllToMealPlanner(collection.recipes)} className={s.button}>
							<h1 className={s.button__title}>{isAdded ? 'Remove All From Meal Plan' : 'Add All To Meal Plan'}</h1>
						</div>
					</div>
					<Swiper slidesPerView={5} spaceBetween={10} modules={[Pagination, Navigation]} className={s.swiper}>
						{collection.recipes.map(recipe => (
							<SwiperSlide className={s.swiper__item} key={recipe._id}>
								<RecipeItem recipe={recipe} rating={recipe.rating} />
							</SwiperSlide>
						))}
						{collection.recipes.length > 5 && <SwiperRecipeCarouselButtons />}
					</Swiper>
				</>
			) : (
				<RecipeCarouselSkeleton />
			)}
		</div>
	)
}

export default RecipeCarousel
