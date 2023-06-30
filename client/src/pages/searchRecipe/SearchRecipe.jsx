import { Link, useLocation} from 'react-router-dom';
import s from './searchRecipe.module.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeItem from '../../components/recipeItem/RecipeItem'
import RecipeSkeleton from '../../components/recipeSkeleton/RecipeSkeleton';
import { navbar } from '../../helpers/searchRecipe/navbar';
import Inputs from '../../components/filterSearch/inputs/Inputs'
import Buttons from '../../components/filterSearch/buttons/Buttons';
import TitleAndDesc from '../../components/filterSearch/titles/TitleAndDesc';
import { nutrition as nutr} from '../../helpers/searchRecipe/filter';
import NoResults from '../../components/noResults/NoResults';


const SearchRecipe = () => {
    const location = useLocation()
    const query = location.state?.query
    const [activeInput, setActiveInput] = useState(false)
    const [recipes, setRecipes] = useState([])
    const [searchValue, setSearchValue] = useState(query ? query : '')
    const [loading, setLoading] = useState(false)
    const [openSort, setOpenSort] = useState(false)
    const [sortSettings, setSortSettings] = useState('relevance')
    const [results, setResults] = useState([])
    const [sorted, setSorted] = useState([])
    const [activeFilter, setActiveFilter] = useState(false)
    const [proRecipesOnly, setProRecipesOnly] = useState(false)
    const [guidedRecipesOnly, setGuidedRecipesOnly] = useState(false)
    const [filterPage, setFilterPage] = useState("ingredients")
    const [allowed, setAllowed] = useState("")
    const [banned, setBanned] = useState("")
    const [ingredients, setIngredients] = useState([])
    const [time, setTime] = useState()
    const [nutrition, setNutrition] = useState("")
    const [toolTips, setToolTips] = useState([])
    const [allowedRequest, setAllowedRequest] = useState([])
    const [bannedRequest, setBannedRequest] = useState([])
    // state settings
    window.history.replaceState({}, searchValue)
    const PF = process.env.REACT_APP_BASE_URL;

    useEffect(() => {
        document.title = "Recipes | Vummly"
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, [])

    useEffect(() => {
        const fetch = async () => {
            await axios.get(`/recipe/recipes?allowed=${allowed}&banned=${banned}&nutrition=${nutrition}&sort=${sortSettings}&time=${time}`).then((a) => {
                setRecipes(a.data)
            })
            setLoading(true)
        }
        fetch()
    }, [allowed, banned, nutrition, sortSettings, time])

    useEffect(() => {
        setIngredients(recipes.flatMap(r => r.ingredients.us.map(i => i.ingredient)).filter((value, index, array) => array.indexOf(value) === index))
    }, [recipes])

    useEffect(() => {
        recipes && setResults(recipes.filter((recipe => recipe.tags.find((tag) => tag.toLowerCase().includes(searchValue.toLowerCase())) || recipe.title.toLowerCase().includes(searchValue.toLowerCase()) || recipe.resource.name.toLowerCase().includes(searchValue.toLowerCase()))))
    }, [recipes, searchValue])


    useEffect(() => {
        const prev = JSON.parse(localStorage.getItem('search-history')) || []
        const act = prev ? JSON.stringify([query, ...prev.slice(0, 5)].filter((value, index, array) => array.indexOf(value) === index)) : []
        query && query !== "" && localStorage.setItem('search-history', act)
    }, [])


    // reset

    const resetEverything = () => {
        setAllowed([])
        setBanned([])
        setToolTips([])
        setBannedRequest([])
        setAllowedRequest([])
        setResults([])
        setTime(null)
        setNutrition("")
    }

    return (
        <div onClick={() => {setActiveInput(false); setOpenSort(false);}}>
            <div className={s.searchRecipe}>
                <div className="wrap1160">
                    <div className={s.searchRecipe__content}>
                        <div className={s.searchRecipe__Top} onClick={(e) => e.stopPropagation()}>
                            <div className={s.searchRecipe__inputBox}>
                                <div className={s.searchRecipe__inputBox__content}>
                                    <img className={s.searchRecipe__inputBoxIcon} src={`${PF}images/img/myFeed/searchIcon.svg`} alt="searchIcon" />
                                    <input onClick={() => setActiveInput(true)} placeholder='Search recipes' className={s.searchRecipe__inputBoxInput} type="text" onChange={(e) => setSearchValue(e.target.value)} value={searchValue}/>
                                </div>
                                {recipes ? <div className={(searchValue && activeInput && results.find((by => by.title))) ? s.searchRecipe__drop : `${s.searchRecipe__drop} ${s.hide}`}>
                                <div className={(searchValue && activeInput) ? s.searchRecipe__dropContent : `${s.searchRecipe__dropContent} ${s.hide}`}>
                                    <p className={s.searchRecipe__dropTitle}>recipe suggestions</p>
                                    <ul className={s.searchRecipe__dropList}>
                                        {results && results.slice(0, 6).map((recipe) => (
                                            <Link to={`/recipe/${recipe.id}`} key={recipe._id}>
                                                <li className={s.searchRecipe__dropList__item}>{recipe.title}</li> 
                                            </Link>
                                        ))}
                                    </ul>
                                </div>
                                </div> : null} 
                            </div>
                            <div className={s.searchRecipe__filter}>
                                <div className={s.searchRecipe__filterContent}>
                                    <div className={s.searchRecipe__filterLeft}>
                                        <div className={s.searchRecipe__filterButt} onClick={() => setActiveFilter(!activeFilter)}>
                                            <img src={`${PF}images/icons/recipes/lockFilter.svg`} alt="" />
                                            <h1 className={s.searchRecipe__filterButt__title}>Filter</h1>  
                                        </div>
                                        <button className={s.searchRecipe__filterResetButt} onClick={() => resetEverything()}>Reset</button>
                                        <ul className={s.searchRecipe__filterOptions}>
                                            
                                            {/* <li className={s.searchRecipe__filterOptions__item}>With {b}</li> */}
                                        </ul>
                                    </div>
                                    <div onClick={() => setOpenSort(!openSort)} className={s.searchRecipe__filterRight}>
                                        <div className={s.searchRecipe__filterRight__chosen}>
                                            <h1 className={s.searchRecipe__filterRight__title}>Sort By</h1>
                                            <span className={s.searchRecipe__filterRight__chosenOption}>{sortSettings === 'time' ? 'quick & easy' : sortSettings}</span>
                                            <img className={s.searchRecipe__filterRight__arrow} src={`${PF}images/icons/recipes/chevron-down.svg`} alt="" />
                                        </div>
                                        <ul className={openSort ? s.searchRecipe__filterRight__drop : `${s.searchRecipe__filterRight__drop} ${s.hide}`}>
                                            <li className={sortSettings === 'relevance' ? `${s.searchRecipe__filterRight__dropItem} ${s.active}` : s.searchRecipe__filterRight__dropItem} onClick={() => {setSortSettings('relevance'); }}>Relevance</li>
                                            <li className={sortSettings === 'popular' ? `${s.searchRecipe__filterRight__dropItem} ${s.active}` : s.searchRecipe__filterRight__dropItem} onClick={() => {setSortSettings('popular'); }}>Popular</li>
                                            <li className={sortSettings === 'time' ? `${s.searchRecipe__filterRight__dropItem} ${s.active}` : s.searchRecipe__filterRight__dropItem} onClick={() => {setSortSettings('time'); }}>Quick & Easy</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={activeFilter ? s.advancedFilter : `${s.advancedFilter} ${s.hidden}`}>
                            <div className={s.advancedFilter__content}>
                                <div className={activeFilter ? s.advancedFilter__top : `${s.advancedFilter__top} ${s.hidden}`}>
                                    <div className={s.switch__toggle} onClick={() => setGuidedRecipesOnly(!guidedRecipesOnly)}>
                                        <div className={guidedRecipesOnly ? `${s.switch} ${s.active}` : s.switch}>
                                            <span className={guidedRecipesOnly ? `${s.circle} ${s.active}` : s.circle } />
                                        </div>
                                        <p className={s.switch__toggleTitle}>Guided Recipes Only</p>
                                    </div>
                                    <div className={s.switch__toggle} onClick={() => setProRecipesOnly(!proRecipesOnly)}>
                                        <div className={proRecipesOnly ? `${s.switch} ${s.active}` : s.switch}>
                                            <span className={proRecipesOnly ? `${s.circle} ${s.active}` : s.circle } />
                                        </div>
                                        <p className={s.switch__toggleTitle}>Pro Recipes Only</p>
                                    </div>
                                </div>
                                
                                <div className={s.advancedFilter__bottom}>
                                    <ul className={s.advancedFilter__navbar}>
                                        {navbar.map(item => (
                                            <li className={filterPage === item.title ? `${s.advancedFilter__navbarItem} ${s.activePage}` : s.advancedFilter__navbarItem} onClick={() => setFilterPage(item.title)} key={item.id}>{item.title}</li>
                                        ))}
                                    </ul>   
                                    <div className={s.advancedFilter__group}>
                                        <Inputs visibility={filterPage === 'ingredients' ? true : false} allowedRequest={allowedRequest} setAllowedRequest={setAllowedRequest} bannedRequest={bannedRequest} setBannedRequest={setBannedRequest} toolTips={toolTips} setToolTips={setToolTips} setWith={setAllowed} setWithout={setBanned} ingredients={ingredients}/> 
                                        <Buttons visibility={filterPage === 'time' ? true : false}  setTime={setTime} minutes={[5, 10, 15, 20, 30, 45, 60, 120]} bold={false} title={'Cooking time, less than:'}/>
                                        <TitleAndDesc visibility={filterPage === 'nutrition' ? true : false}  setActive={setNutrition} active={nutrition} items={nutr}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={s.recipesMain}>
                            {results.length !== 0 && <h1 className={s.suggestedRecipes__title}>{results.length} suggested recipes</h1>}
                            {(results.length === 0 && loading) ? <NoResults length={results.length} searchVal={searchValue}/> : null}
                            {<div className={s.recipeList}>
                                {!loading && <RecipeSkeleton recipes={100}/>}
                                {results.map((r) => (
                                    <RecipeItem key={r._id} recipe={r} rating={r.rating}/> 
                                ))}
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default SearchRecipe;