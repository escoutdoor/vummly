import { Link } from 'react-router-dom'
import s from './relative.module.css'

const Relative = ({ title, list }) => {
	return (
		<div className={s.relative}>
			<h1 className={s.title}>{title}</h1>
			<ul className={s.list}>
				{list.map(item => (
					<li className={s.list__item} key={item.articleId}>
						<Link to={`/support/articles/${item.articleId}`}>{item.articleTitle}</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Relative
