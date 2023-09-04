import { Link } from 'react-router-dom'
import s from './sidebar.module.css'

const Sidebar = ({ list, articleId }) => {
	return (
		<div className={s.sidebar}>
			<h1 className={s.title}>Articles in the section</h1>
			<ul className={s.list}>
				{list?.map(item => (
					<Link
						key={item.articleId}
						className={articleId === item.articleId ? `${s.list__item} ${s.active}` : s.list__item}
						to={`/support/articles/${item.articleId}`}
					>
						{item.articleTitle}
					</Link>
				))}
			</ul>
		</div>
	)
}

export default Sidebar
