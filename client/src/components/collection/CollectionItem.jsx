import { Link } from 'react-router-dom'
import s from './collectionItem.module.css'

const CollectionItem = ({ collection, image }) => {
	const PF = process.env.REACT_APP_BASE_URL

	return (
		<div title={collection.name} className={s.collection}>
			<Link to={`collections/${collection.name}`}>
				<img className={s.collectionImage} src={image ? `${PF}images/img/recipes/${image}.webp` : `${PF}images/img/collections/default.jpg`} alt="" />
				<div className={s.collectionInfo}>
					<p className={s.collectionText}>{collection.name}</p>
					<div className={s.collectionStat}>
						<p className={s.collectionText}>{collection.recipes?.length}</p>
						<span className={s.collectionSmallText}>recipes</span>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default CollectionItem
