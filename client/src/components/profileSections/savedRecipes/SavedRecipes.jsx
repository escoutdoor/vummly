import { useEffect, useState } from 'react';
import s from './savedRecipes.module.css'
import {Link, useNavigate} from 'react-router-dom'
import RecipeItem from '../../recipeItem/RecipeItem'
import axios from 'axios';
import CollectionItem from '../../collection/CollectionItem';
import RecipeSkeleton from '../../recipeSkeleton/RecipeSkeleton';
import AddCollection from '../../collection/addCollection/AddCollection';
import FindRecipes from '../../findRecipes/FindRecipes';

const SavedRecipes = ({user, isMe}) => {
    const PF = process.env.REACT_APP_BASE_URL;
    const navigate = useNavigate()
    const [searchVal, setSearchVal] = useState("")
    const [recipes, setRecipes] = useState([])
    const [collectionsLastModified, setCollectionsLastModified] = useState([])
    const [collectionsLastCreated, setCollectionsLastCreated] = useState([])
    const [collectionsName, setCollectionsName] = useState([])
    const [activeSortMenu, setActiveSortMenu] = useState(false)
    const [sortSettings, setSortSettings] = useState("last modified")
    const [loaded, setLoaded] = useState(false)
    const [toolTip, setToolTip] = useState([])
    const [activeToolTip, setActiveToolTip] = useState(false)

    useEffect(() => {
        const fetch = async () => {
            await axios.get(`/collections/${user._id}`).then((c) => {
                setCollectionsLastModified(c.data.collectionsLastModified)
                setCollectionsLastCreated(c.data.collectionsLastCreated)
                setCollectionsName(c.data.collectionsName)
                setRecipes(c.data.recipes)
                setLoaded(true)
            })
        }
        user._id && fetch()
    }, [collectionsLastModified])

    
    useEffect(() => {
        if(searchVal.trim().length !== 0) {
            setActiveToolTip(true)
            setToolTip(recipes.filter(r => r.title.toLowerCase().includes(searchVal.toLowerCase())))
        } else {
            setActiveToolTip(false)
        }
    }, [searchVal])

    return (
        <div className={s.savedRecipes} onClick={() => setActiveSortMenu(false)}>
            {isMe && 
                <div className={s.findRecipes}>
                    <div className={s.searchBar}>
                        <img className={s.searchIcon} src={`${PF}images/icons/recipes/search.svg`} alt="" />
                        <input value={searchVal} onChange={(e) => setSearchVal(e.target.value)} placeholder='Search My Vums' type="text" className={s.searchInput}/>
                    </div>
                    <div className={activeToolTip ? `${s.toolTip} ${s.active}` : `${s.toolTip}`}>
                        {toolTip.slice(0, 7).map((item) => (
                            <Link to={`/recipe/${item.id}`}>
                                <h1 className={s.toolTip__item}>{item.title}</h1>
                            </Link>
                        ))}
                    </div>
                </div>
            }
            <div className={s.allYums}>
                <div className={s.blocks__header}>
                    <h1 className={s.title}>All Vums</h1>
                    <Link to={'collections/all-vums'} className={s.seeAll}>SEE ALL</Link>
                </div>
                <div className={s.allRecipes}>
                    {!loaded && <RecipeSkeleton recipes={6}/>}
                    {isMe && loaded && <FindRecipes />}
                    {recipes.slice(0, 5).map((r, index) => (
                        <RecipeItem key={index} recipe={r} rating={r.rating}/>
                    ))}
                </div>
            </div>
            <div className={s.allYums}>
                <div className={s.blocks__header}>
                    <h1 className={s.title}>Collections</h1>
                    <div className={s.sortMenu} onClick={e => e.stopPropagation()}>
                        <div onClick={() => setActiveSortMenu(!activeSortMenu)} className={s.sortMenu__text}>
                            <h1 style={{color: '#bababa'}} className={s.sortMenu__title}>sort by</h1>
                            <h1 className={s.sortMenu__title}>{sortSettings}</h1>
                            <img className={s.sortIcon} src={`${PF}images/icons/recipes/chevron-down.svg`} alt="sortIcon" />
                        </div>
                        <ul className={activeSortMenu ? `${s.dropdown} ${s.active}` : s.dropdown}>
                            <li onClick={() => {setSortSettings("last modified"); setActiveSortMenu(false)}} className={sortSettings === 'last modified' ? `${s.dropdown__item}  ${s.active}` : s.dropdown__item}>last modified</li>
                            <li onClick={() => {setSortSettings("collection name"); setActiveSortMenu(false)}} className={sortSettings === 'collection name' ? `${s.dropdown__item}  ${s.active}` : s.dropdown__item}>collection name</li>
                            <li onClick={() => {setSortSettings("last created"); setActiveSortMenu(false)}} className={sortSettings === 'last created' ? `${s.dropdown__item}  ${s.active}` : s.dropdown__item}>last created</li>
                        </ul>
                    </div>
                </div>
                <div className={s.allRecipes}>
                    {!loaded && <RecipeSkeleton recipes={6}/>}
                    {isMe && loaded && <AddCollection setCollections={setCollectionsLastModified} collections={collectionsLastModified} user={user}/>}
                    {sortSettings === 'last modified' ? collectionsLastModified.map((c) => (
                        <CollectionItem key={c._id} collection={c} image={recipes.find(r => r?._id === c.recipes.at(-1)?.recipeId)?.id}/>
                    )) :
                    sortSettings === 'collection name' ? collectionsName.map((c) => (
                        <CollectionItem key={c._id} collection={c} image={recipes.find(r => r?._id === c.recipes?.at(-1)?.recipeId)?.id}/>
                    )) :
                    sortSettings === 'last created' ? collectionsLastCreated.map((c) => (
                        <CollectionItem key={c._id} collection={c} image={recipes.find(r => r?._id === c.recipes?.at(-1)?.recipeId)?.id}/>
                    )) :
                    null}
                </div>
            </div>
        </div>
    );
};

export default SavedRecipes;