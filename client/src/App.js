import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { MyFeed, Overview, Activate, Support, Category, Article, SearchSupport, SubmitRequest, Recipe, SearchRecipe, Resource, Profile, Collection, UserRecipes } from './pages/pages'
import SupportLayout from './layouts/support/SupportLayout'
import MainLayout from './layouts/main/MainLayout'

function App() {
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
					<Route path={'categories/:categories'} element={<Category />} />
					<Route path={'articles/:ctgr/:article'} element={<Article />} />
					<Route path={'search'} element={<SearchSupport />} />
					<Route path={''} element={<Support />} />
					<Route path={'submit-request'} element={<SubmitRequest />} />
				</Route>

				<Route path={'/'} element={<MainLayout />}>
					<Route path={'recipe/:recipeId'} element={<Recipe />} />
					<Route path={'recipes'} element={<SearchRecipe />} />
					<Route path={''} element={<MyFeed />} />
					<Route path={'page/:id'} element={<Resource />} />
					<Route path={'profile/:id'} element={<Profile />} />
					<Route path={'profile/:userId/collections/:collectionName'} element={<Collection />} />
				</Route>
			</Routes>
		</Router>
	)
}

export default App
