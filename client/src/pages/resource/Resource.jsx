import { useState, useEffect } from 'react'
import s from './resource.module.css'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import RecipeItem from '../../components/recipeElements/recipeItem/RecipeItem'
import RecipeItemSkeleton from '../../components/recipeElements/recipeItemSkeleton/RecipeItemSkeleton'
import ResourceHeader from '../../components/resourceElements/resourceHeader/ResourceHeader'
import ProfileSearch from '../../components/profileElements/profileSearch/ProfileSearch'
import ResourceHeaderSkeleton from '../../components/resourceElements/resourceHeaderSkeleton/ResourceHeaderSkeleton'
import RecipeList from '../../components/profileElements/recipeList/RecipeList'

const Resource = () => {
	const PF = process.env.REACT_APP_BASE_URL
	const { id } = useParams()

	const [resource, setResource] = useState([])
	const [loaded, setLoaded] = useState(false)
	const [searchValue, setSearchValue] = useState('')

	const fetch = async () => {
		await axios.get(`/recipe/resource/${id}`).then(i => {
			setResource(i.data)
			setLoaded(true)
		})
	}

	useEffect(() => {
		fetch()
	}, [id])

	useEffect(() => {
		document.title = loaded ? `${resource[0].resource.name} on Vummly` : 'Vummly'
	}, [loaded])

	return (
		<div>
			<div className={s.resource}>
				<div className="wrap1160">
					<div className={s.resource__content}>
						{loaded ? <ResourceHeader name={resource[0].resource.name} /> : <ResourceHeaderSkeleton />}
						<ProfileSearch title={'Profile Search'} recipes={resource} />
						<div className={s.recipes}>
							{!loaded &&
								Array(50)
									.fill(0)
									.map((item, index) => <RecipeItemSkeleton key={index} />)}
							<RecipeList recipes={resource} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Resource
