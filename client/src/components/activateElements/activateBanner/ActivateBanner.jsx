import { Link } from 'react-router-dom'
import s from './activateBanner.module.css'

const ActivateBanner = () => {
	const PF = process.env.REACT_APP_BASE_URL

	return (
		<div className={s.banner}>
			<div className={s.details}>
				<h1 className={s.title}>activate thermometer</h1>
				<p className={s.description}>
					Congratulations on your Smart Thermometer purchase! To get started, download the free Vummly® app,
					available for iOS or Android smartphones and tablets.
				</p>
				<Link title={'Download'} to={'https://github.com/escoutdoor'} target="_blank">
					<img src={`${PF}images/img/activate/badge-ios.svg`} alt="iosDownloadIcon" />
				</Link>
			</div>
			<img src={`${PF}images/img/activate/Activate_Your_Yummly_Smart_Thermometer.webp`} alt="image" />
		</div>
	)
}

export default ActivateBanner
