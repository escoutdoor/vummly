import s from './tagCarousel.module.css'
import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import RecipeItem from '../../recipeElements/recipeItem/RecipeItem'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import SwiperRecipeCarouselButtons from '../../plannerElements/swiperRecipeCarouselButtons/SwiperRecipeCarouselButtons'
import { useInView } from 'react-intersection-observer'
import RecipeCarouselSkeleton from '../../plannerElements/recipeCarouselSkeleton/RecipeCarouselSkeleton'
import { Link } from 'react-router-dom'

const TagCarousel = ({ collection }) => {
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
						<Link to={'/recipes'} state={{ query: collection.name }}>
							<h1 className={s.seeAll__button}>see all</h1>
						</Link>
					</div>
					<Swiper slidesPerView={6} spaceBetween={10} modules={[Pagination, Navigation]} className={s.swiper}>
						{collection.recipes.map(recipe => (
							<SwiperSlide className={s.swiper__item} key={recipe._id}>
								<RecipeItem recipe={recipe} rating={recipe.rating} />
							</SwiperSlide>
						))}
						{collection.recipes.length > 6 && <SwiperRecipeCarouselButtons />}
					</Swiper>
				</>
			) : (
				<RecipeCarouselSkeleton recipes={6} />
			)}
		</div>
	)
}

export default TagCarousel
