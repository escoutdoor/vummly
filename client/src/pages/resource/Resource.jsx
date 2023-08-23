import { useState, useEffect } from 'react'
import s from './resource.module.css'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import NoResults from '../../components/noResults/NoResults'
import RecipeItem from '../../components/recipeElements/recipeItem/RecipeItem'
import RecipeItemSkeleton from '../../components/recipeElements/recipeItemSkeleton/RecipeItemSkeleton'

const Resource = () => {
	const [page, setPage] = useState([])
	const [searchValue, setSearchValue] = useState('')
	const [loading, setLoading] = useState(false)
	const [icon, setIcon] = useState('')
	const [searched, setSearched] = useState([])
	const { id } = useParams()

	useEffect(() => {
		const fetch = async () => {
			await axios.get(`/recipe/page/${id}`).then(i => setPage(i.data))
			setLoading(true)
		}
		fetch()
	}, [])

	useEffect(() => {
		setSearched(page.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())) || page)
	}, [searchValue, page])

	useEffect(() => {
		document.title = page && loading ? `${page[0].resource.name} on Vummly` : 'Vummly'
	}, [loading])

	const PF = process.env.REACT_APP_BASE_URL

	return (
		<div>
			<div className={s.resource}>
				<div className="wrap1160">
					<div className={s.resource__content}>
						<div className={s.banner}>
							<div className={s.info}>
								<img className={s.icon} src={`${PF}images/icons/resource/pageIcon.png`} alt="icon" />
								<div className={s.details}>
									<h1 className={s.title}>
										{page && loading ? page[0].resource.name : <Skeleton width={220} />}
									</h1>
									<p className={s.description}>
										{page && loading ? (
											`${page[0].resource.name}, it's what's cooking online! Over 100,000 recipes for any cuisine imaginable. For home cooks and gourmets alike.`
										) : (
											<Skeleton height={25} />
										)}
									</p>
									<div className={s.socials}>
										<Link
											onMouseOut={() => setIcon('')}
											onMouseOver={() => setIcon('mail')}
											to={'mailto:vanap387@gmail.com'}>
											<img
												className={s.social}
												src={`${PF}images/icons/resource/${
													icon === 'mail' ? `${icon}Active.svg` : 'mail.svg'
												}`}
												alt="mail"
											/>
										</Link>
										<Link
											onMouseOut={() => setIcon('')}
											onMouseOver={() => setIcon('github')}
											to={'https://github.com/escoutdoor'}>
											<img
												className={s.social}
												src={`${PF}images/icons/resource/${
													icon === 'github' ? `${icon}Active.svg` : 'github.svg'
												}`}
												alt="github"
											/>
										</Link>
										<Link
											onMouseOut={() => setIcon('')}
											onMouseOver={() => setIcon('linkedin')}
											to={'https://www.linkedin.com/in/ivan-popov-015b61252/'}>
											<img
												className={s.social}
												src={`${PF}images/icons/resource/${
													icon === 'linkedin' ? `${icon}Active.svg` : 'linkedin.svg'
												}`}
												alt="linkedin"
											/>
										</Link>
									</div>
								</div>
							</div>
							<div className={s.search}>
								<div className={s.search__container}>
									<div className={s.searchbar}>
										<img
											className={s.searchIcon}
											src={`${PF}images/icons/recipes/search.svg`}
											alt="search"
										/>
										<input
											className={s.searchInput}
											placeholder="Profile Search"
											value={searchValue}
											onChange={e => setSearchValue(e.target.value)}
											type="text"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className={s.recipes}>
							{!loading &&
								Array(50)
									.fill(0)
									.map((item, index) => <RecipeItemSkeleton key={index} />)}
							{searched.map(p => (
								<RecipeItem recipe={p} key={p._id} rating={p.rating} />
							))}
							{loading && searched.length === 0 ? (
								<NoResults length={searched.length} searchVal={searchValue} />
							) : null}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Resource
