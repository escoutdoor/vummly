import ProfileHeader from '../../components/profileElements/profileHeader/ProfileHeader'
import s from './profile.module.css'
import { login, logout, update, selectUser } from '../../redux/features/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ProfileHeaderLoggedIn from '../../components/profileElements/profileHeaderLoggedIn/ProfileHeaderLoggedIn'
import ProfileHeaderSkeleton from '../../components/profileElements/profileHeaderSkeleton/ProfileHeaderSkeleton'
import Navigation from '../../components/profileElements/navigation/Navigation'
import ProfileSearch from '../../components/profileElements/profileSearch/ProfileSearch'

import SavedRecipes from '../../components/profileElements/profileSections/savedRecipes/SavedRecipes'
import Preferences from '../../components/profileElements/profileSections/preferences/Preferences'
import Settings from '../../components/profileElements/profileSections/settings/Settings'

const Profile = () => {
	const PF = process.env.REACT_APP_BASE_URL
	const { userId } = useParams()

	const [loaded, setLoaded] = useState(false)
	const [user, setUser] = useState({})
	const [recipes, setRecipes] = useState([])
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const loggedInUser = useSelector(selectUser)

	const [section, setSection] = useState('saved recipes')

	const fetchUser = async () => {
		try {
			await axios.get(`/user/${userId.split('-')[1]}`).then(u => {
				setUser(u.data)
				setLoaded(true)
			})
		} catch (error) {
			console.log('fetchUser error:', error)
		}
	}

	useEffect(() => {
		fetchUser()
	}, [userId])

	useEffect(() => {
		if (loggedInUser && user) {
			setIsLoggedIn(user._id === loggedInUser._id)
		}
	}, [user, loggedInUser])

	return (
		<div className={s.profile}>
			<div className="wrap1160">
				<div className={s.profile__banner}>
					{loaded ? (
						isLoggedIn ? (
							<ProfileHeaderLoggedIn user={user} setUser={setUser} />
						) : (
							<ProfileHeader user={user} />
						)
					) : (
						<ProfileHeaderSkeleton />
					)}
					{isLoggedIn && <Navigation setSection={setSection} section={section} />}
				</div>
				{isLoggedIn && section === 'saved recipes' && (
					<ProfileSearch recipes={recipes} title={'Search My Vums'} />
				)}
				<div className={s.section}>
					{section === 'saved recipes' && (
						<SavedRecipes user={user} recipes={recipes} setRecipes={setRecipes} isLoggedIn={isLoggedIn} />
					)}
					{section === 'preferences' && <Preferences user={user} />}
					{section === 'settings' && <Settings setUser={setUser} user={user} />}
				</div>
			</div>
		</div>
	)
}

export default Profile
