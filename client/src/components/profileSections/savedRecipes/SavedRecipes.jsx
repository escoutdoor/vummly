import { useEffect, useState } from 'react';
import s from './savedRecipes.module.css'
import {Link, useNavigate} from 'react-router-dom'
import RecipeItem from '../../recipeItem/RecipeItem'
import axios from 'axios';
import CollectionItem from '../../collection/CollectionItem';
import RecipeSkeleton from '../../recipeSkeleton/RecipeSkeleton';
import AddCollection from '../../collection/addCollection/AddCollection';

const SavedRecipes = ({user, isMe}) => {
    const PF = process.env.REACT_APP_BASE_URL;
    const navigate = useNavigate()
    const [searchVal, setSearchVal] = useState("")
    const [recipes, setRecipes] = useState([])
    const [collections, setCollections] = useState([])
    const [activeSortMenu, setActiveSortMenu] = useState(false)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const fetch = async () => {
            await axios.get(`/collections/${user._id}`).then((c) => {
                setCollections(c.data.collections)
                setRecipes(c.data.recipes)
                setLoaded(true)
            })
        }
        fetch()
    }, [user])


    const handleEnter = (event) => {
        event.key === 'Enter' && navigate('recipes', {state: {query: searchVal}})
    }

    return (
        <div className={s.savedRecipes}>
            {isMe && 
                <div className={s.findRecipes}>
                    <img className={s.searchIcon} src={`${PF}images/icons/recipes/search.svg`} alt="" />
                    <input onClick={() => fetch()} value={searchVal} onChange={(e) => setSearchVal(e.target.value)} onKeyDown={handleEnter} placeholder='Search My Yums' type="text" className={s.searchInput}/>
                </div>
            }
            <div className={s.allYums}>
                <div className={s.blocks__header}>
                    <h1 className={s.title}>All Vums</h1>
                    <Link to={'recipes'} className={s.seeAll}>SEE ALL</Link>
                </div>
                <div className={s.allRecipes}>
                    {!loaded && <RecipeSkeleton recipes={6}/>}
                    {recipes && recipes.slice(0, 6).map((r) => (
                        <RecipeItem key={r._id} recipe={r} />
                    ))}
                </div>
            </div>
            <div className={s.allYums}>
                <div className={s.blocks__header}>
                    <h1 className={s.title}>Collections</h1>
                    <div className={activeSortMenu ? `${s.sortMenu} ${s.active}` : s.sortMenu}>

                    </div>
                </div>
                <div className={s.allRecipes}>
                    {!loaded && <RecipeSkeleton recipes={6}/>}
                    {isMe && loaded && <AddCollection setCollections={setCollections} collections={collections} user={user}/>}
                    {collections && collections.map((c) => (
                        <CollectionItem key={c._id} collection={c} image={recipes.find(r => r._id === c.recipes.at(-1))?.id}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SavedRecipes;