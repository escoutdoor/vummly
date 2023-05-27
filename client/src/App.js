import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import { MyFeed, Overview, Activate, Support, Category, Article, SearchSupport, SubmitRequest, Recipe } from './pages/pages'
import SupportLayout from "./layouts/support/SupportLayout";
import SearchRecipe from "./pages/searchRecipe/SearchRecipe";

function App() {
    return (
        <Router>
            <Routes>

                {/* thermometer pages */}
                <Route path="/thermometer/">
                    <Route path={'overview'} element={<Overview/>} />
                    <Route path={'activate'} element={<Activate/>} />
                </Route>

                {/*  */}


                {/* Support */}
                <Route path={'/support/'} element={<SupportLayout/>}>
                    <Route path={'categories/:categories'} element={<Category />} />
                    <Route path={'articles/:ctgr/:article'} element={<Article />} />
                    <Route path={'search'} element={<SearchSupport />} />
                    <Route path={''} element={<Support />}/>
                    <Route path={'submit-request'} element={<SubmitRequest />}/>
                </Route>

                <Route path={'/'}>
                    <Route path={'recipe/:recipe'} element={<Recipe />} />
                    <Route path={'recipes'} element={<SearchRecipe />} />
                    <Route path={''} element={<MyFeed/>} />
                </Route>
                
            </Routes>
        </Router>
    );
}

export default App;
