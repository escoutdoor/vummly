import s from './myFeedSwiper.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'
import { slider } from '../../../helpers/myFeed/myfeedSlider'
import 'swiper/css'
import 'swiper/css/pagination'
import MyFeedSlide from './myFeedSlide/MyFeedSlide'

const MyFeedSwiper = () => {
	return (
		<div className={s.myFeedSwiper}>
			<div className={s.wrapper}>
				<Swiper className={s.slider} pagination={{ clickable: true }} modules={[Pagination, Autoplay]}>
					{slider.map((slide, index) => (
						<SwiperSlide key={slide.id} className={s.slide}>
							<MyFeedSlide slide={slide} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	)
}

export default MyFeedSwiper
