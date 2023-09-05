import s from './collectionList.module.css'
import AddCollection from './collection/addCollection/AddCollection'
import CollectionItem from './collection/CollectionItem'

const CollectionList = ({ collections, user, setCollections, isLoggedIn }) => {
	return (
		<div className={s.list}>
			{isLoggedIn && <AddCollection setCollections={setCollections} collections={collections} user={user} />}
			{collections.map(c => (
				<CollectionItem key={c._id} name={c.name} image={c.image} recipes={c.count} />
			))}
		</div>
	)
}

export default CollectionList
