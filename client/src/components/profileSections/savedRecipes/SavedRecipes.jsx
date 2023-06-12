import { useState } from 'react';
import s from './savedRecipes.module.css'
import {useNavigate} from 'react-router-dom'

const SavedRecipes = ({user, setFoundRecipes, foundRecipes}) => {
    const PF = process.env.REACT_APP_BASE_URL;
    const navigate = useNavigate()
    const [searchVal, setSearchVal] = useState("")

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

                </div>
            </div>
        </div>
    );
};

export default SavedRecipes;