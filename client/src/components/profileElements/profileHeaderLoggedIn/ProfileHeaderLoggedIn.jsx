import s from './profileHeaderLoggedIn.module.css'
import { useDispatch } from 'react-redux'
import { login, logout } from '../../../redux/features/userSlice'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import EditInput from '../editInput/EditInput'
import EditText from '../editText/EditText'
import Residence from '../residence/Residence'

const ProfileHeaderLoggedIn = ({ user, setUser }) => {
	const PF = process.env.REACT_APP_BASE_URL
	const nav = useNavigate()
	const dispatch = useDispatch()

	const updateAvatar = async avatar => {
		const data = new FormData()

		data.append('avatar', avatar)

		await axios
			.put(`/upload/avatar/${user._id}`, data, {
				headers: {
					'content-type': 'multipart/form-data',
				},
			})
			.then(d => {
				setUser(d.data)
				dispatch(login(d.data))
			})
	}

	const updateUser = async data => {
		try {
			setUser(data)
			await axios
				.put(`/user/${user._id}`, {
					user: data,
				})
				.then(u => {
					console.log(u.data)
				})
		} catch (error) {
			console.log('updateUser error:', error)
		}
	}

	return (
		<div className={s.header}>
			<div className={s.left}>
				<div className={s.change__avatar}>
					<img
						className={s.avatar}
						src={`${PF}images/avatars/${user.avatar ? user.avatar : 'no-avatar.webp'}`}
						alt="avatar"
					/>
					<div className={s.avatar__click}>
						<input
							className={s.avatar__input}
							type="file"
							onChange={e => updateAvatar(e.target.files[0])}
						/>
					</div>
				</div>
				<button
					onClick={() => {
						dispatch(logout())
						localStorage.removeItem('_auth')
						nav('/')
					}}
					className={s.logout__button}
				>
					Log Out
				</button>
			</div>
			<div className={s.details}>
				<EditInput user={user} update={updateUser} />
				<EditText user={user} update={updateUser} />
				<Residence user={user} update={updateUser} />
			</div>
		</div>
	)
}

export default ProfileHeaderLoggedIn
