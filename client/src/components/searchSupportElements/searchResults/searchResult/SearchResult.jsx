import s from './searchResult.module.css'
import moment from 'moment'
import { Link } from 'react-router-dom'

const SearchResult = ({ article }) => {
	return (
		<div className={s.result}>
			<Link className={s.title} to={`/support/articles/${article.id}`}>
				{article.title}
			</Link>
			<div className={s.result__details}>
				<div className={s.breadcrumbs}>
					<Link to={'/support'}>Vummly Help Center</Link> {'>'}
					<Link to={`/support/categories/${article.categoryId}`}>{article.categoryName}</Link> {'>'}
					<Link to={`/support/articles/${article.id}`}>{article.title}</Link>
				</div>
				<p className={s.result__date}>{moment(article.updatedAt).format('LLL')}</p>
			</div>
		</div>
	)
}

export default SearchResult
