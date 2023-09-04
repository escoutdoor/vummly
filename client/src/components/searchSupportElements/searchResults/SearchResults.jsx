import SearchResult from './searchResult/SearchResult'
import s from './searchResults.module.css'

const SearchResults = ({ articles, searchValue, category }) => {
	return (
		<div className={s.results}>
			<h1 className={s.title}>
				{articles.length} {articles.length > 1 ? 'results' : 'result'} for "{`${searchValue}`}" in{' '}
				{category ? category : 'All Categories'}
			</h1>
			<div className={s.list}>
				{articles.map(article => (
					<SearchResult key={article._id} article={article} />
				))}
			</div>
		</div>
	)
}

export default SearchResults
