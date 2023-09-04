import s from './search.module.css'
import { useLocation, Link } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'
import SearchInput from '../../components/searchInput/SearchInput'

// loading
import SkewLoader from 'react-spinners/SkewLoader'
import { useEffect, useState } from 'react'
import SidebarByCategory from '../../components/searchSupportElements/sidebarByCategory/SidebarByCategory'
import SearchResults from '../../components/searchSupportElements/searchResults/SearchResults'
import { list } from '../../helpers/help/search'

const SearchSupport = () => {
	const PF = process.env.REACT_APP_BASE_URL
	const location = useLocation()
	const data = location.state?.data
	const [articles, setArticles] = useState([])
	const [loaded, setLoaded] = useState(false)

	const [text, setText] = useState(data || '')
	const [category, setCategory] = useState('')
	window.history.replaceState({}, text)

	const fetchSupport = async () => {
		try {
			await axios.get(`/support/articles/getAll?category=${category}`).then(info => {
				setArticles(info.data)
				setLoaded(true)
			})
		} catch (error) {
			console.log('fetchSupport error:', error)
		}
	}

	useEffect(() => {
		fetchSupport()
	}, [category])

	return loaded ? (
		<div className={s.search}>
			<div className="wrap1160">
				<SearchInput setText={setText} text={text} title={'Search results'} />
				<div className={s.search__content}>
					<SidebarByCategory
						list={list
							.map(item => {
								return {
									...item,
									results: articles
										.filter(
											article => !item.categoryId || article.categoryName === item.categoryName
										)
										.filter(article => article.title.toLowerCase().includes(text.toLowerCase()))
										.length,
								}
							})
							.filter(category => category.results !== 0)}
						category={category}
						setCategory={setCategory}
					/>

					<SearchResults
						searchValue={text}
						articles={articles.filter(article => article.title.toLowerCase().includes(text.toLowerCase()))}
						category={list.find(item => item.categoryId === category)?.categoryName}
					/>
				</div>
			</div>
		</div>
	) : (
		<SkewLoader color="#3a9691" size={30} className="loaderSkew" />
	)
}

export default SearchSupport
