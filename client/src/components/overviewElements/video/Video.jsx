import s from './video.module.css'

const Video = ({ title, description, video, poster }) => {
	return (
		<div className={s.video}>
			<h1 className={s.video__title}>{title}</h1>
			<p className={s.video__description}>{description}</p>
			<video className={s.video__player} controls poster={poster}>
				<source src={video} type="video/mp4" />
			</video>
		</div>
	)
}

export default Video
