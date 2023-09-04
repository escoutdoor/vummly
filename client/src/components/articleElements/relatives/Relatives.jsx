import { useEffect, useState } from 'react'
import Relative from './relative/Relative'
import s from './relatives.module.css'

const Relatives = ({ article }) => {
	const [recentlyViewed, setRecentlyViewed] = useState([])
	const [related, setRelated] = useState([])

	const addToStorage = () => {
		const storage = JSON.parse(localStorage.getItem('articles')) || []

		const newItem = {
			articleTitle: article.title,
			articleId: article.id,
		}

		if (!storage.find(item => item.articleTitle === newItem.articleTitle && item.articleId === newItem.articleId)) {
			const updated = [...storage, newItem]
			storage.length > 4 && updated.splice(0, 1)
			localStorage.setItem('articles', JSON.stringify(updated))
		}
	}

	useEffect(() => {
		addToStorage()
		setRecentlyViewed([...JSON.parse(localStorage.getItem('articles'))] || [])
	}, [article])

	return (
		<div className={s.relatives}>
			<Relative
				title={'Recently viewed articles'}
				list={recentlyViewed.filter(item => item.articleId !== article.id)}
			/>
			<Relative
				title={'Related articles'}
				list={article.section?.filter(item => item.articleId !== article.id).slice(0, 5)}
			/>
		</div>
	)
}

export default Relatives
