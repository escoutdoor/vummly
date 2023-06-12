import { useEffect, useState } from 'react';
import s from './savedRecipes.module.css'
import {useNavigate} from 'react-router-dom'
import RecipeItem from '../../recipeItem/RecipeItem'
import axios from 'axios';

const SavedRecipes = ({vums, setFoundRecipes, foundRecipes}) => {
    const PF = process.env.REACT_APP_BASE_URL;
    const navigate = useNavigate()
    const [searchVal, setSearchVal] = useState("")
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        const fetch = async () => {
            await axios.get(`/recipe/getSome`, {
                recipes: [...vums.map(v => v.recipes)]
            }   
            ).then(r => setRecipes(r.data))
        }   
        fetch()
        console.log(recipes);
    }, [vums])

    // console.log(vums);

    const handleEnter = (event) => {
        event.key === 'Enter' && navigate('recipes', {state: {query: searchVal}})
    }

    return (
        <div className={s.savedRecipes}>
            <div className={s.findRecipes}>
                <img className={s.searchIcon} src={`${PF}images/icons/recipes/search.svg`} alt="" />
                <input value={searchVal} onChange={(e) => setSearchVal(e.target.value)} onKeyDown={handleEnter} placeholder='Search My Yums' type="text" className={s.searchInput}/>
            </div>
            <div className={s.allYums}>
                <div className={s.allYums__header}>
                    <h1>All Yums</h1>
                    {/* {vums && vums.map((item) => (
                        <RecipeItem />
                    ))} */}
                    {vums.map((item) => (
                        <h1>{item.name}</h1>
                    ))}

                    {recipes && recipes.map((r) => (
                        <RecipeItem recipe={r} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SavedRecipes;