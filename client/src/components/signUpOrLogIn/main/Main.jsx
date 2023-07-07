import { useEffect, useState } from 'react'
import s from './main.module.css'
import StartPage from '../startPage/StartPage'
import EmailPage from '../emailPage/EmailPage'
import NamePage from '../namePage/NamePage'
import axios from 'axios'
import PasswordPage from '../passwordPage/PasswordPage'
import { useDispatch } from 'react-redux'
import { login } from '../../../redux/features/userSlice'

const Main = ({ active, setActive }) => {
	const [name, setName] = useState('')
	const [nameError, setNameError] = useState(false)
	const [mail, setMail] = useState('')
	const [mailError, setMailError] = useState(false)

	const [loginForm, setLoginForm] = useState(false)

	const [password, setPassword] = useState('')
	const [passwordError, setPasswordError] = useState(false)

	const [users, setUsers] = useState([])
	const [activePage, setActivePage] = useState('start')

	const dispatch = useDispatch()

	useEffect(() => {
		const fetch = async () => {
			await axios.get(`/user/getAll`).then(users => setUsers(users.data))
		}
		active && fetch()
	}, [active])

	useEffect(() => {
		const pattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
		if (!pattern.test(mail)) {
			setMailError('Invalid email address')
		} else {
			setMailError('')
		}
		users.find(user => user.mail === mail) ? setLoginForm(true) : setLoginForm(false)
	}, [mail])

	const nameHandler = n => {
		setName(n)
		if (n.length < 3) {
			setNameError(true)
		} else {
			setNameError(false)
		}
	}

	const passwordHandler = p => {
		setPassword(p)
		if (!/(?=.*[A-Z])/.test(p)) {
			setPasswordError('Password should contain at least one capital char')
		} else if (!/(?=.{7,40}$)/.test(p)) {
			setPasswordError('Password should be at least 7 characters')
		} else if (!/[ -/:-@[-`{-~]/.test(p)) {
			setPasswordError('Password should contain at least one symbol')
		} else if (!/(?=.*[0-9])/.test(p)) {
			setPasswordError('Password should contain at least one number')
		} else {
			setPasswordError('')
		}
	}

	const createUser = async () => {
		await axios
			.post(
				`/auth/createOne`,
				{
					name: name,
					mail: mail,
					password: password,
				},
				{ withCredentials: true }
			)
			.then(u => {
				dispatch(login(u.data))
				setActivePage('start')
				setActive(false)
				localStorage.setItem('_auth', JSON.stringify(u.data.token))
			})
	}

	const logInUser = async () => {
		await axios
			.post(
				`/auth/login`,
				{
					mail,
					password,
				},
				{ withCredentials: true }
			)
			.then(u => {
				dispatch(login(u.data))
				setActivePage('start')
				setActive(false)
				localStorage.setItem('_auth', JSON.stringify(u.data.token))
				window.location.reload()
			})
			.catch(() => setPasswordError('Invalid password'))
	}

	return (
		<div onClick={() => activePage === 'start' && setActive(false)} className={active ? s.window : `${s.window} ${s.hidden}`}>
			<div onClick={e => e.stopPropagation()} className={s.modal}>
				<div className={s.content}>
					{activePage === 'start' ? (
						<StartPage setActive={setActive} setPage={setActivePage} />
					) : activePage === 'email' ? (
						<EmailPage setPage={setActivePage} mailError={mailError} setMail={setMail} mail={mail} />
					) : activePage === 'password' ? (
						<PasswordPage setPage={setActivePage} passwordHandler={passwordHandler} passwordError={passwordError} password={password} login={loginForm} logInUser={logInUser} />
					) : activePage === 'name' ? (
						<NamePage setPage={setActivePage} name={name} nameHandler={nameHandler} nameError={nameError} createUser={createUser} />
					) : null}
				</div>
			</div>
		</div>
	)
}

export default Main
