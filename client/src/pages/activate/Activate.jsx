import s from './activate.module.css'
import Navbar from './../../components/navbar/Navbar'
import { useEffect } from 'react'
import ActivateBanner from '../../components/activateElements/activateBanner/ActivateBanner'
import { faqs } from '../../helpers/activate/faqs'
import Faqs from '../../components/faqs/Faqs'

const Activate = () => {
	useEffect(() => {
		document.title = 'Activate Thermometer'
	}, [])

	return (
		<div className={s.activate}>
			<Navbar />
			<ActivateBanner />
			<div className="wrap1160">
				<Faqs faqs={faqs} />
			</div>
		</div>
	)
}

export default Activate
