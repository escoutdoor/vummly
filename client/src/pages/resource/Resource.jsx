import { useState, useEffect } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import s from './resource.module.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import RecipeItem from '../../components/recipeItem/RecipeItem';

const Resource = () => {
    const [page, setPage] = useState([])
    const [searchValue, setSearchValue] = useState("")
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    useEffect(() => {
        const fetch = async () => {
            await axios.get(`/recipe/page/${id}`).then(i => setPage(i.data))
        }
        fetch()
    }, [])

    console.log(page)

    // sum for stars
    const sum = (items) => {
        return items.reduce(function(a, b){
            return a + b['stars'];
        }, 0);
    }

    return (
        <div>
            <Sidebar />
            <div className={s.resource}>
                <div className={s.banner}>
                    <div className={s.userInfo}>
                        
                    </div>
                    <div className={s.search}>
                        
                    </div>
                </div>
                <div>
                    {page.map((p) => (
                        <RecipeItem recipe={p} key={p._id} rating={sum(p.reviews)/p.reviews.length}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Resource;