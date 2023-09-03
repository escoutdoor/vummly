import s from './overview.module.css'
import { useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'

import { advatages } from './../../helpers/thermometer/adavantages'
import { features } from '../../helpers/thermometer/features'
import { howitWorks as screenshots } from '../../helpers/thermometer/howitworksNspecs'
import { faqs } from '../../helpers/thermometer/faqs'

import Product from '../../components/overviewElements/product/Product'
import Video from '../../components/overviewElements/video/Video'
import Benefits from '../../components/overviewElements/benefits/Benefits'
import Features from '../../components/overviewElements/features/Features'
import AppScreenshots from '../../components/overviewElements/appScreenshots/AppScreenshots'
import Faqs from '../../components/faqs/Faqs'
import Banner from '../../components/overviewElements/banner/Banner'
import Footer from '../../components/overviewElements/footer/Footer'

const Overview = () => {
	const PF = process.env.REACT_APP_BASE_URL

	useEffect(() => {
		document.title = 'Vummly Smart Thermometer'
	}, [])

	return (
		<>
			<Navbar />
			<div className={s.overview}>
				<div className="wrap1160">
					<div className={s.container}>
						<Product />
						<Video
							title={'Take the guesswork out of cooking'}
							description={`The Yummly wireless meat thermometer sets you up for cooking success. With convenient app-based cooking
								assistance, timers, and alerts, you can be confident in your cooking — even when you're multitasking.`}
							video={`${PF}images/videos/thermometrVideo.mp4`}
							poster={`${PF}images/videos/poster.jpg`}
						/>
						<Benefits benefits={advatages} />
					</div>
				</div>
				<div className={s.features}>
					<div className="wrap1160">
						<Features features={features} title={'key features'} bigTitle={'Smart cooking done right'} />
					</div>
				</div>
				<div className="wrap1160">
					<div className={s.bottom__container}>
						<AppScreenshots
							screenshots={screenshots}
							title={'cooking with the app'}
							bigTitle={'how it works'}
						/>
						<Faqs faqs={faqs} />
						<Banner />
						<Footer />
					</div>
				</div>
			</div>
		</>
	)
}

export default Overview
