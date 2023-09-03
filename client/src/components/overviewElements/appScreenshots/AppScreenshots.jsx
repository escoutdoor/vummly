import { Swiper, SwiperSlide } from 'swiper/react'
import s from './appScreenshots.module.css'
import AppScreenshot from './appScreenshot/AppScreenshot'

const AppScreenshots = ({ screenshots, title, bigTitle }) => {
	return (
		<div className={s.screenshots}>
			<h1 className={s.title}>{title}</h1>
			<h1 className={s.bigTitle}>{bigTitle}</h1>
			<Swiper watchSlidesProgress={true} slidesPerView={3}>
				{screenshots.map(screenshot => (
					<SwiperSlide key={screenshot.id}>
						<AppScreenshot screenshot={screenshot} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default AppScreenshots
