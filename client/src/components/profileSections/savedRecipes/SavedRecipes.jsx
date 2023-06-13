import { useEffect, useState } from 'react';
import s from './savedRecipes.module.css'
import {Link, useNavigate} from 'react-router-dom'
import RecipeItem from '../../recipeItem/RecipeItem'
import axios from 'axios';
import Collection from '../../collection/Collection';

const SavedRecipes = ({user, isMe}) => {
    const PF = process.env.REACT_APP_BASE_URL;
    const navigate = useNavigate()
    const [searchVal, setSearchVal] = useState("")
    const [recipes, setRecipes] = useState([])
    const [collections, setCollections] = useState([])
    const [activeSortMenu, setActiveSortMenu] = useState(false)

    useEffect(() => {
        const fetch = async () => {
            await axios.get(`/collections/${user._id}`).then((c) => {
                setCollections(c.data.collections)
                setRecipes(c.data.recipes)
            })
        }
        fetch()
    }, [user])

    console.log(collections);

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
                    {recipes && recipes.slice(0, 6).map((r) => (
                        <RecipeItem key={r._id} recipe={r} />
                    ))}
                </div>
            </div>
            <div className={s.collections}>
                <div className={s.blocks__header}>
                    <h1 className={s.title}>Collections</h1>
                    <div className={activeSortMenu ? `${s.sortMenu} ${s.active}` : s.sortMenu}>

                    </div>
                </div>
                <div className={s.allRecipes}>
                    {collections && collections.map((c) => (
                        <Collection key={c._id} collection={c} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SavedRecipes;