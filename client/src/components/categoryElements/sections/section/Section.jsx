import { Link } from 'react-router-dom'
import s from './section.module.css'

const Section = ({ section }) => {
	return (
		<div className={s.section}>
			<h1 className={s.section__title}>{section.title}</h1>
			<ul className={s.list}>
				{section.list?.map(item => (
					<li className={s.list__item} key={item.articleId}>
						<Link to={`/support/articles/${item.articleId}`}>{item.articleTitle}</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Section
