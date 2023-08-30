import s from './popularIngredients.module.css'
import SwiperRecipeCarouselButtons from '../../plannerElements/swiperRecipeCarouselButtons/SwiperRecipeCarouselButtons'
import PopularIngredient from './popularIngredient/PopularIngredient'
import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { popularIngredients } from '../../../helpers/browse/popular'

const PopularIngredients = () => {
	return (
		<div className={s.carousel}>
			<h1 className={s.title}>popular ingredients</h1>
			<Swiper slidesPerView={7} spaceBetween={10} modules={[Pagination, Navigation]} className={s.swiper}>
				{popularIngredients.map((item, index) => (
					<SwiperSlide key={index}>
						<PopularIngredient item={item} />
					</SwiperSlide>
				))}
				<SwiperRecipeCarouselButtons />
			</Swiper>
		</div>
	)
}

export default PopularIngredients
