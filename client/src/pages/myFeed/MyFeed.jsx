import styles from './myFeed.module.css'
import Sidebar from '../../components/sidebar/Sidebar';
import React, { Suspense, useEffect, useState } from 'react';
import SearchRecipes from '../../components/searchRecipes/SearchRecipes';
import axios from 'axios';
import RecipeItem from '../../components/recipeItem/RecipeItem';
import RecipeSkeleton from '../../components/recipeSkeleton/RecipeSkeleton';

// const LazyRecipe = React.lazy(() => import('../../components/recipeItem/RecipeItem'))

const MyFeed = () => {
    const [recipes, setRecipes] = useState([])
    const [loading, setLoading] = useState(false)
    const [active, setActive] = useState(false)

    useEffect(() => {
        document.title = 'Vummly: Personalized Recipe Recommendations and Search'
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, [])

    const sum = (items) => {
        return items.reduce(function(a, b){
            return a + b['stars'];
        }, 0);
    }
    
    useEffect(() => {
        const fetch = async () => {
            await axios.get('/recipe/all').then(info => setRecipes(info.data))
            setLoading(true)
        }
        fetch()
    }, [])
    return (
        <div className={styles.MyFeed} >
            <SearchRecipes setActive={setActive} active={active} />
            <div className="wrap1160">
                <div className={styles.myFeed__content}  >
                    <h1 className={styles.myFeed__title}>Just For You</h1>
                    <div className={active ? styles.myFeed__rec : `${styles.myFeed__rec} ${styles.show}`}>
                        {!loading && <RecipeSkeleton recipes={100}/>}
                        {recipes.map((r) => (
                            <RecipeItem key={r._id} recipe={r} rating={sum(r.reviews)/r.reviews.length}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};



export default MyFeed;