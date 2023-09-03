import s from './appScreenshot.module.css'

const AppScreenshot = ({ screenshot }) => {
	const PF = process.env.REACT_APP_BASE_URL

	return (
		<div className={s.screenshot}>
			<img className={s.screenshot__image} src={`${PF}` + screenshot.img} alt="screenshot" />
			<p className={s.screenshot__text}>
				{screenshot.id}. {screenshot.step}
			</p>
		</div>
	)
}

export default AppScreenshot
