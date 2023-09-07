import axios from 'axios'
import s from './collections.module.css'
import { useEffect, useState } from 'react'
import SortMenu from '../../../../sortMenu/SortMenu'
import CollectionList from './collectionList/CollectionList'
import RecipeItemSkeleton from '../../../../recipeElements/recipeItemSkeleton/RecipeItemSkeleton'

const Collections = ({ isLoggedIn, user }) => {
	const [sortBy, setSortBy] = useState('last modified')
	const [collections, setCollections] = useState([])
	const [activeMenu, setActiveMenu] = useState(false)
	const [loaded, setLoaded] = useState(false)

	const fetchCollections = async () => {
		try {
			await axios.get(`/collections/${user?._id}?sortBy=${sortBy}`).then(c => {
				setLoaded(true)
				setCollections(c.data)
			})
		} catch (error) {
			console.log('fetchCollections error:', error)
		}
	}

	useEffect(() => {
		if (user._id) {
			fetchCollections()
		}
	}, [user, sortBy])

	return (
		<div className={s.collections} onClick={() => setActiveMenu(false)}>
			<div className={s.collections__header}>
				<h1 className={s.title}>Collections</h1>
				<SortMenu
					sortBy={sortBy}
					setSortBy={setSortBy}
					active={activeMenu}
					setActive={setActiveMenu}
					options={['last modified', 'collection name', 'last created']}
				/>
			</div>
			{loaded ? (
				<CollectionList
					collections={collections}
					isLoggedIn={isLoggedIn}
					user={user}
					setCollections={setCollections}
				/>
			) : (
				<div className={s.list}>
					{Array(6)
						.fill(0)
						.map((item, index) => (
							<RecipeItemSkeleton key={index} />
						))}
				</div>
			)}
		</div>
	)
}

export default Collections
