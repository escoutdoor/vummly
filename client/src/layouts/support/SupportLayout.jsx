import { Outlet } from 'react-router-dom'
import Footer from '../../components/supportElements/footer/Footer'
import Navbar from '../../components/supportElements/navbar/Navbar'
import s from './supportLayout.module.css'

const SupportLayout = () => {
	return (
		<>
			<Navbar />
			<div className={s.main}>
				<Outlet />
			</div>
			<Footer />
		</>
	)
}

export default SupportLayout
