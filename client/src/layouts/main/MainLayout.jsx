import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/sidebar/Sidebar'
import s from './mainLayout.module.css'
import { useEffect, useState } from 'react'
import LoginForm from '../../components/signUpOrLogIn/main/Main'
import { selectUser } from '../../redux/features/userSlice'
import { useSelector } from 'react-redux'

const MainLayout = () => {
	const [activeLoginModal, setActiveLoginModal] = useState(false)
	const [hiddenSideBar, setHiddenSideBar] = useState(false)

	useEffect(() => {
		document.body.style.overflow = activeLoginModal ? 'hidden' : 'visible'
	}, [activeLoginModal])

	return (
		<div className={s.layout}>
			<Sidebar
				setHidden={setHiddenSideBar}
				hidden={hiddenSideBar}
				setActive={setActiveLoginModal}
				activeLoginModal={activeLoginModal}
			/>
			<div className={hiddenSideBar ? `${s.main} ${s.full}` : s.main}>
				<Outlet context={[setActiveLoginModal, setHiddenSideBar, hiddenSideBar]} />
				<LoginForm active={activeLoginModal} setActive={setActiveLoginModal} />
			</div>
		</div>
	)
}

export default MainLayout
