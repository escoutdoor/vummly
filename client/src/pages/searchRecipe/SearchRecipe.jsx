import { Link, useLocation} from 'react-router-dom';
import s from './searchRecipe.module.css'
import { useState, useEffect, useRef } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import axios from 'axios';
import RecipeItem from '../../components/recipeItem/RecipeItem'
import RecipeSkeleton from '../../components/recipeSkeleton/RecipeSkeleton';
import { navbar } from '../../helpers/searchRecipe/navbar';
import Inputs from '../../components/filterSearch/inputs/Inputs'


const SearchRecipe = () => {
    const location = useLocation()
    const query = location.state?.query
    const [activeInput, setActiveInput] = useState(false)
    const [recipes, setRecipes] = useState([])
    const [searchValue, setSearchValue] = useState(query ? query : '')
    const [loading, setLoading] = useState(false)
    const [openSort, setOpenSort] = useState(false)
    const [sortSettings, setSortSettings] = useState('relevance')
    const [tagsAndTitle, setTagsAndTitle] = useState([])
    const [sorted, setSorted] = useState([])
    const [activeFilter, setActiveFilter] = useState(false)
    const [proRecipesOnly, setProRecipesOnly] = useState(false)
    const [guidedRecipesOnly, setGuidedRecipesOnly] = useState(false)
    const [filterPage, setFilterPage] = useState("ingredients")
    const [allowed, setAllowed] = useState("")
    const [banned, setBanned] = useState("")
    const [ingredients, setIngredients] = useState([])

    useEffect(() => {
        setIngredients(recipes.flatMap(r => r.ingredients.us.map(i => i.ingredient)).filter((value, index, array) => array.indexOf(value) === index).sort((a, b) => 0.5 - Math.random()))
    }, [recipes])

    // all
    useEffect(() => {
        const fetch = async () => {
            await axios.get(allowed && banned ? `/recipe/all/${allowed}/${banned}` : allowed ? `/recipe/with/${allowed}` : banned ? `/recipe/without/${banned}` : `/recipe/all`).then(info => {
                setRecipes(info.data)
            })
            setLoading(true)
        }
        fetch()
    }, [allowed, banned])
    // sum for stars
    const sum = (items) => {
        return items.reduce(function(a, b){
            return a + b['stars'];
        }, 0);
    }
    // title and scroll
    useEffect(() => {
        document.title = "Recipes | Vummly"
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, [])
    // search recipes
    useEffect(() => {
        recipes && setTagsAndTitle(recipes.filter((recipe => recipe.tags.find((tag) => tag.tag.toLowerCase().includes(searchValue.toLowerCase())) && recipe || recipe.title.toLowerCase().includes(searchValue.toLowerCase()) || recipe.resource.name.toLowerCase().includes(searchValue.toLowerCase()))))
    }, [recipes, searchValue])
    // state settings
    window.history.replaceState({}, searchValue)
    const PF = 'http://localhost:3000/assets/'
    // filter by menu
    useEffect(() => {
        const filter = () => {
            let filteredRecipes = [...tagsAndTitle];
            if (sortSettings === 'popular') {
                filteredRecipes.sort((a, b) => b.recipeCollection.length - a.recipeCollection.length);
            } else if (sortSettings === 'time') {
                filteredRecipes.sort((a, b) => a.time - b.time);
            } else if (sortSettings === 'relevance') {
                filteredRecipes = tagsAndTitle
            }
            setSorted([...filteredRecipes]);
        };
        filter()
    }, [sortSettings, tagsAndTitle])
    // search history
    useEffect(() => {
        const prev = JSON.parse(localStorage.getItem('search-history')) || []
        const act = prev ? JSON.stringify([query, ...prev.slice(0, 5)].filter((value, index, array) => array.indexOf(value) === index)) : []
        query && query !== "" && localStorage.setItem('search-history', act)
    }, [])

    console.log(banned.replace("_", " ").split("-"))

    return (
        <div onClick={() => {setActiveInput(false); setOpenSort(false);}}>
            <Sidebar/>
            <div className={s.searchRecipe}>
                <div className="supportWrap">
                    <div className={s.searchRecipe__content}>
                        <div className={s.searchRecipe__Top} onClick={(e) => e.stopPropagation()}>
                            <div className={s.searchRecipe__inputBox}>
                                <div className={s.searchRecipe__inputBox__content}>
                                    <img className={s.searchRecipe__inputBoxIcon} src={`${PF}images/img/myFeed/searchIcon.svg`} alt="searchIcon" />
                                    <input onClick={() => setActiveInput(true)} placeholder='Search recipes' className={s.searchRecipe__inputBoxInput} type="text" onChange={(e) => setSearchValue(e.target.value)} value={searchValue}/>
                                </div>
                                {recipes ? <div className={(searchValue && activeInput && tagsAndTitle.find((by => by.title))) ? s.searchRecipe__drop : `${s.searchRecipe__drop} ${s.hide}`}>
                                <div className={(searchValue && activeInput) ? s.searchRecipe__dropContent : `${s.searchRecipe__dropContent} ${s.hide}`}>
                                    <p className={s.searchRecipe__dropTitle}>recipe suggestions</p>
                                    <ul className={s.searchRecipe__dropList}>
                                        {tagsAndTitle && tagsAndTitle.slice(0, 6).map((recipe) => (
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
                                        <button className={s.searchRecipe__filterResetButt} onClick={() => {}}>Reset</button>
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
                                        {filterPage === 'ingredients' ? <Inputs setWith={setAllowed} setWithout={setBanned} ingredients={ingredients}/> : null}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={s.recipesMain}>
                            {tagsAndTitle.length !== 0 && <h1 className={s.suggestedRecipes__title}>{tagsAndTitle.length} suggested recipes</h1>}
                            {(tagsAndTitle.length === 0 && loading) ? <div className={tagsAndTitle.length !== 0 ? `${s.no__result} ${s.hidden}` : s.no__result}>
                                <div className={s.no__resultContent}>
                                    <h1 className={s.no__resultTitle}>We searched all over but didn't find a recipe for '{searchValue}'</h1>
                                    <p className={s.no__resultSubTitle}>Try some of our most popular recipes below or search again with these tips:</p>
                                    <div className={s.no__resultProblems}>
                                        <div className={s.no__resultProblems__item}>
                                            <img className={s.no__resultImg} src={`${PF}images/icons/recipes/check_spelling.svg`} alt="checkSpelling" />
                                            <p className={s.no__resultSubTitle}>Check Spelling</p>
                                        </div>
                                        <div className={s.no__resultProblems__item}>
                                            <img  className={s.no__resultImg} src={`${PF}images/icons/recipes/different_keywords.svg`} alt="diffKeywords" />
                                            <p className={s.no__resultSubTitle}>Different Keywords</p>
                                        </div>
                                        <div className={s.no__resultProblems__item}>
                                            <img className={s.no__resultImg} src={`${PF}images/icons/recipes/simplify_search.svg`} alt="simplifySearch" />
                                            <p className={s.no__resultSubTitle}>Simplify Search</p>
                                        </div>
                                    </div>
                                </div>
                            </div> : null}
                            {<div className={s.recipeList}>
                                {!loading && <RecipeSkeleton recipes={100}/>}
                                {sorted.map((r) => (
                                    <RecipeItem key={r._id} recipe={r} rating={sum(r.reviews)/r.reviews.length}/> 
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