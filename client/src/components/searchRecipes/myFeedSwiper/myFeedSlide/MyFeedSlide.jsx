import { Link } from 'react-router-dom'
import s from './myFeedSlide.module.css'

const MyFeedSlide = ({ slide }) => {
	const PF = process.env.REACT_APP_BASE_URL

	return (
		<div className={s.slide}>
			<div className={s.text}>
				<h1 className={s.title}>{slide.title}</h1>
				{slide.points && (
					<ul className={s.list}>
						{slide.points.map(point => (
							<li key={point.id} className={s.list__item}>
								{point.label}
							</li>
						))}
					</ul>
				)}
				{slide.description && <p className={s.description}>{slide.description}</p>}
				<Link to={`/${slide.button.link}`} className={s.button}>
					{slide.button.title}
				</Link>
			</div>
			<div className={s.images}>
				{slide.images.map(i => (
					<img key={i.id} className={s.image} src={`${PF}images/img/myFeed/${i.img}`} alt="slideImage" />
				))}
			</div>
		</div>
	)
}

export default MyFeedSlide
