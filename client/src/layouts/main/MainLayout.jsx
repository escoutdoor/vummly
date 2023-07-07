import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/sidebar/Sidebar'
import s from './mainLayout.module.css'
import { useEffect, useState } from 'react'
import LoginForm from '../../components/signUpOrLogIn/main/Main'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { login, logout } from '../../redux/features/userSlice'

const MainLayout = () => {
	const [activeLoginModal, setActiveLoginModal] = useState(false)
	const [hiddenSideBar, setHiddenSideBar] = useState(false)
	const dispatch = useDispatch()

	useEffect(() => {
		document.body.style.overflow = activeLoginModal ? 'hidden' : 'visible'
	}, [activeLoginModal])

	useEffect(() => {
		const fetchme = async () => {
			await axios.get(`/user/getUser/${JSON.parse(localStorage.getItem('_auth'))}`).then(me => {
				dispatch(login(me.data))
			})
		}
		localStorage.getItem('_auth') && fetchme()
	}, [])

	return (
		<div>
			<Sidebar setHidden={setHiddenSideBar} hidden={hiddenSideBar} setActive={setActiveLoginModal} activeLoginModal={activeLoginModal} />
			<div className={hiddenSideBar ? `${s.main} ${s.full}` : s.main}>
				<Outlet context={[setActiveLoginModal, setHiddenSideBar, hiddenSideBar]} />
				<LoginForm active={activeLoginModal} setActive={setActiveLoginModal} />
			</div>
		</div>
	)
}

export default MainLayout
