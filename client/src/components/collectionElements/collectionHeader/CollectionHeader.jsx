import s from './collectionHeader.module.css'
import { useState } from 'react'
import EditDescription from '../editDescription/EditDescription'
import EditName from '../editName/EditName'
import DeleteCollectionModal from '../deleteCollectionModal/DeleteCollection'

const CollectionHeader = ({ collection, isLoggedIn, update, deleteCollection, isAllVums }) => {
	const PF = process.env.REACT_APP_BASE_URL
	const [activeTrash, setActiveTrash] = useState(false)
	const [activeModal, setActiveModal] = useState(false)

	return (
		<div
			className={s.header}
			style={{
				backgroundImage:
					collection.count !== 0
						? `url(${PF}images/img/recipes/${collection.image}.webp)`
						: `url(${PF}images/img/collections/default.jpg)`,
			}}
		>
			<div className={s.container}>
				<div className={s.info}>
					{isLoggedIn && !isAllVums ? (
						<EditName collection={collection} update={update} />
					) : (
						<p className={s.name}>{collection.name}</p>
					)}
					<p className={s.counter}>{collection.count} Recipes</p>
					{isLoggedIn && !isAllVums ? (
						<EditDescription collection={collection} update={update} />
					) : (
						<p className={s.description}>{collection.description}</p>
					)}
				</div>
				{isLoggedIn && !isAllVums && (
					<div
						className={s.delete}
						onMouseOver={() => setActiveTrash(true)}
						onMouseOut={() => setActiveTrash(false)}
					>
						<img
							className={s.icon}
							src={
								activeTrash
									? `${PF}images/icons/profile/trashActive.svg`
									: `${PF}images/icons/profile/trash.svg`
							}
							alt="trashIcon"
						/>
						<p onClick={() => setActiveModal(true)} className={s.delete__text}>
							delete collection
						</p>
					</div>
				)}
			</div>
			<DeleteCollectionModal
				active={activeModal}
				setActive={setActiveModal}
				deleteCollection={deleteCollection}
			/>
		</div>
	)
}

export default CollectionHeader
