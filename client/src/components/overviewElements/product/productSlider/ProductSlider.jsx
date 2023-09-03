import s from './productSlider.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { thermSwiper } from '../../../../helpers/thermometer/thermSwiper'
import { useState } from 'react'

const ProductSlider = () => {
	const PF = process.env.REACT_APP_BASE_URL
	const [thumbsSwiper, setThumbsSwiper] = useState(null)

	return (
		<div className={s.slider}>
			<Swiper
				style={{
					'--swiper-navigation-color': '#000',
					'--swiper-pagination-color': '#fff',
				}}
				loop={true}
				spaceBetween={10}
				navigation={true}
				thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
				modules={[FreeMode, Navigation, Thumbs]}
				className={s.mainSwiper}
			>
				{thermSwiper.map(el => (
					<SwiperSlide key={el.id}>
						<img className={s.mainSwiper__image} src={`${PF}` + el.img} alt="" />
					</SwiperSlide>
				))}
			</Swiper>
			<Swiper
				onSwiper={setThumbsSwiper}
				spaceBetween={0}
				slidesPerView={5}
				freeMode={true}
				watchSlidesProgress={true}
				modules={[FreeMode, Navigation, Thumbs]}
				className={s.bottomSwiper}
			>
				{thermSwiper.map(el => (
					<SwiperSlide key={el.id}>
						<img className={s.bottomSwiper__image} src={`${PF}` + el.img} alt="" />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default ProductSlider
