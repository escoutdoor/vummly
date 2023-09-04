import { Link, useParams } from 'react-router-dom'
import s from './category.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

// loading
import SkewLoader from 'react-spinners/SkewLoader'
import SearchInput from '../../components/searchInput/SearchInput'
import Sections from '../../components/categoryElements/sections/Sections'

const Category = () => {
	const { categoryId } = useParams()
	const [searchVal, setSearchVal] = useState(null)

	const [category, setCategory] = useState([])
	const [loaded, setLoaded] = useState(false)

	const fetch = async () => {
		await axios.get(`/support/sections/${categoryId}`).then(res => {
			setCategory(res.data)
			setLoaded(true)
		})
	}

	useEffect(() => {
		fetch()
		document.title = category.title ? category.title : 'Vummly Help Center'
	}, [categoryId])

	return loaded ? (
		<div className={s.category}>
			<div className="wrap1160">
				<div className={s.category__content}>
					<SearchInput title={category[0]?.categoryName} />
					<h1 className={s.category__title}>{category[0].categoryName}</h1>
					<Sections sections={category} />
				</div>
			</div>
		</div>
	) : (
		<SkewLoader color="#3a9691" size={30} className="loaderSkew" />
	)
}

export default Category
