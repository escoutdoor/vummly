import { useEffect } from 'react'
import s from './swiperRecipeCarouselButtons.module.css'
import { useSwiper } from 'swiper/react'

const SwiperRecipeCarouselButtons = () => {
	const swiper = useSwiper()
	const PF = process.env.REACT_APP_BASE_URL

	return (
		<div className={s.buttons}>
			<img onClick={() => swiper.slidePrev()} src={`${PF}images/icons/planner/left.svg`} alt="left_arrow" />
			<img onClick={() => swiper.slideNext()} src={`${PF}images/icons/planner/right.svg`} alt="right_arrow" />
		</div>
	)
}

export default SwiperRecipeCarouselButtons
