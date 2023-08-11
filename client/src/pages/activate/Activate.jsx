import './activate.css'
import Navbar from './../../components/navbar/Navbar'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { faqs } from '../../helpers/activate/faqs'
import Tip from '../../components/tip/Tip'

const Activate = () => {
	const PF = process.env.REACT_APP_BASE_URL

	useEffect(() => {
		document.title = 'Activate Thermometer'
	}, [])

	return (
		<div className="activate">
			<div className="activate__content">
				<Navbar value={false} />
				<div className="activateMobile">
					<p>To activate your Yummly® Smart Thermometer visit this page on your mobile device</p>
				</div>
				<div className="activateDownload">
					<div className="activateWrapper">
						<div className="activateDownload__content">
							<div className="activateDownload__text">
								<h1>Activate Thermometer</h1>
								<p>
									Congratulations on your Smart Thermometer purchase! To get started, download the free Yummly® app, available for iOS or Android smartphones and
									tablets.
								</p>
								<Link title={'Download'} to={'https://github.com/escoutdoor'} target="_blank">
									<img src={`${PF}images/img/activate/badge-ios.svg`} alt="iosDownloadIcon" />
								</Link>
							</div>
							<img src={`${PF}images/img/activate/Activate_Your_Yummly_Smart_Thermometer.webp`} alt="" />
						</div>
					</div>
				</div>
				<div className="activateFaqs">
					<div className="activateWrapper" style={{ padding: '0px 77px 100px 77px' }}>
						<h1 className="activateFaqs__title">FAQs</h1>
						<div className="activateFaqs__box">
							{faqs.map(f => (
								<Tip tip={f} />
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Activate
