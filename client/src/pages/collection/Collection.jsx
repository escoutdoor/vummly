import s from './collection.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { selectUser } from '../../redux/features/userSlice'
import { useSelector } from 'react-redux'
import CollectionHeader from '../../components/collectionElements/collectionHeader/CollectionHeader'
import CollectionRecipes from '../../components/collectionElements/collectionRecipes/CollectionRecipes'

const Collection = () => {
	const PF = process.env.REACT_APP_BASE_URL
	const nav = useNavigate()
	const { userId, collectionName } = useParams()

	const loggedInUser = useSelector(selectUser)

	const [collection, setCollection] = useState({})
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [loaded, setLoaded] = useState(false)

	const fetchCollection = async () => {
		try {
			await axios.get(`/collections/getOne/${userId.split('-')[1]}/${collectionName}`).then(c => {
				setLoaded(true)
				setCollection(c.data)
			})
		} catch (error) {
			console.log('fetchCollection error:', error)
		}
	}

	console.log(collection)

	useEffect(() => {
		if (loggedInUser) {
			setIsLoggedIn(userId.split('-')[1] === loggedInUser._id)
		}
	}, [userId, loggedInUser])

	useEffect(() => {
		fetchCollection()
	}, [collectionName, userId])

	const updateCollection = async data => {
		try {
			setCollection(data)
			await axios.put(`/collections/${collection._id}`, {
				data,
			})
			nav(`/profile/${userId}/collections/${data.name}`)
		} catch (error) {
			console.log('updateCollection error:', error)
		}
	}

	const deleteCollection = async () => {
		try {
			await axios.delete(`/collections/deleteOne/${collection._id}`).then(() => {
				nav(`/profile/${userId}`)
				document.body.style.overflow = 'visible'
			})
		} catch (error) {
			console.log('deleteCollection error:', error)
		}
	}

	return loaded ? (
		<div className={s.collection}>
			<CollectionHeader
				collection={collection}
				isLoggedIn={isLoggedIn}
				update={updateCollection}
				deleteCollection={deleteCollection}
				isAllVums={collectionName === 'all-vums'}
			/>
			<div className="wrap1160">
				<CollectionRecipes
					userId={userId.split('-')[1]}
					collectionId={collection._id || 'all-vums'}
					isAllVums={collectionName === 'all-vums'}
				/>
			</div>
		</div>
	) : (
		<img className={'loaderRecipe'} src={`${PF}images/videos/loader.gif`} alt="" />
	)
}

export default Collection
