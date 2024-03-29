import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import {
	MyFeed,
	Overview,
	Activate,
	Support,
	Category,
	Article,
	SearchSupport,
	SubmitRequest,
	Recipe,
	SearchRecipe,
	Resource,
	Profile,
	Collection,
	MealPlanner,
	Ideas,
	MealPlannerSupport,
	Browse,
	CookBook,
} from './pages/pages'
import SupportLayout from './layouts/support/SupportLayout'
import MainLayout from './layouts/main/MainLayout'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, selectUser } from './redux/features/userSlice'
import axios from 'axios'
import Ingredient from './pages/ingredient/Ingredient'

function App() {
	const dispatch = useDispatch()
	const user = useSelector(selectUser)

	useEffect(() => {
		const fetchme = async () => {
			await axios.get(`/user/getUser/${JSON.parse(localStorage.getItem('_auth'))}`).then(me => {
				dispatch(login(me.data))
			})
		}
		localStorage.getItem('_auth') && fetchme()
	}, [])

	return (
		<Router>
			<Routes>
				{/* thermometer pages */}
				<Route path="/thermometer/" element={<MainLayout />}>
					<Route path={'overview'} element={<Overview />} />
					<Route path={'activate'} element={<Activate />} />
				</Route>

				{/*  */}

				{/* Support */}
				<Route path={'/support/'} element={<SupportLayout />}>
					<Route path={'categories/:categoryId'} element={<Category />} />
					<Route path={'articles/:articleId'} element={<Article />} />
					<Route path={'search'} element={<SearchSupport />} />
					<Route path={''} element={<Support />} />
					<Route path={'submit-request'} element={<SubmitRequest />} />
				</Route>

				<Route path={'/'} element={<MainLayout />}>
					<Route path={'recipe/:recipeId'} element={<Recipe />} />
					{/* <Route path={'recipes'} element={<SearchRecipe />} /> */}
					<Route path={'recipes'} element={<CookBook />} />
					<Route path={''} element={<MyFeed />} />
					<Route path={'page/:id'} element={<Resource />} />
					<Route path={'profile/:userId'} element={<Profile />} />
					<Route path={'profile/:userId/collections/:collectionName'} element={<Collection />} />

					<Route path={'meal-planner'} element={<MealPlanner />} />
					<Route path={'meal-planner/ideas'} element={<Ideas />} />
					<Route path={'meal-planner/support'} element={<MealPlannerSupport />} />

					<Route path={'browse'} element={<Browse />} />

					<Route path={'ingredient/:name'} element={<Ingredient />} />
				</Route>
			</Routes>
		</Router>
	)
}

export default App
