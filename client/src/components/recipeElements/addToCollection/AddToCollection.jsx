import { useEffect, useRef, useState } from 'react'
import s from './addToCollection.module.css'
import axios from 'axios'

const AddToCollection = ({ include, notInclude, user, setInclude, addToCollection, deleteFromCollection, recipe, setActiveModal }) => {
	const PF = process.env.REACT_APP_BASE_URL
	const [activeCollection, setActiveCollection] = useState(false)
	const [collection, setCollection] = useState('')

	const [activeCreateCollection, setActiveCreateCollection] = useState(false)
	const input = useRef()

	useEffect(() => {
		activeCreateCollection && input.current.focus()
	})

	const createCollection = async () => {
		if (collection && !include.find(i => i.name === collection) && !notInclude.find(n => n.name === collection)) {
			await axios
				.put(`/collections/${user._id}/${recipe._id}`, {
					name: collection.trim(),
				})
				.then(col => {
					setInclude([col.data, ...include])
					setCollection('')
					setActiveCreateCollection(false)
					recipe.collections++
				})
		}
	}

	return (
		<div className={s.bookmark}>
			<div className={s.bookmark__stats}>
				<button onClick={() => (user ? setActiveCollection(!activeCollection) : setActiveModal(true))} className={s.collectionButton} />
				<p className={s.bookmark__count}>{recipe?.collections}</p>
			</div>
			<div className={activeCollection ? `${s.menu} ${s.active}` : s.menu}>
				<div className={s.menu__content}>
					<div className={s.menu__header}>
						<p className={s.menu__title}>add to collection</p>
						<img className={s.close} onClick={() => setActiveCollection(false)} src={`${PF}images/icons/profile/x.svg`} alt="closeMenuIcon" />
					</div>
					<div className={s.create}>
						<div
							className={activeCreateCollection ? `${s.create__target} ${s.active}` : s.create__target}
							onClick={() => {
								setActiveCreateCollection(true)
							}}>
							<img src={`${PF}images/icons/recipes/plus.svg`} alt="plusModal" />
							<p>new collection</p>
						</div>
						<div className={activeCreateCollection ? `${s.createCollection__box} ${s.active}` : s.createCollection__box}>
							<img onClick={() => createCollection()} className={s.folderIcon} src={`${PF}images/icons/recipes/folder-plus.svg`} alt="folderNameCollection" />
							<input
								onKeyDown={e => e.key === 'Enter' && createCollection()}
								placeholder="Name Collection"
								ref={input}
								value={collection}
								onChange={e => setCollection(e.target.value)}
								type="text"
								className={s.create__input}
							/>
							<img className={s.close} onClick={() => setActiveCreateCollection(false)} src={`${PF}images/icons/profile/x.svg`} alt="closeMenuIcon" />
						</div>
					</div>
					<div className={s.collections}>
						<h1 className={s.menu__title}>included</h1>
						<ul className={s.collectionList}>
							{include?.map(item => (
								<li key={item._id} className={s.collectionList__item} onClick={() => deleteFromCollection(item.name)}>
									<img src={`${PF}images/icons/recipes/folder-minus.svg`} alt="minusCollection" />
									{item.name}
								</li>
							))}
						</ul>
						<h1 className={s.menu__title}>not included</h1>
						<ul className={s.collectionList}>
							{notInclude?.map(item => (
								<li key={item._id} className={s.collectionList__item} onClick={() => addToCollection(item.name)}>
									<img src={`${PF}images/icons/recipes/folder-plus.svg`} alt="plusCollection" />
									{item.name}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AddToCollection
