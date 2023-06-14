import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import s from './collection.module.css'
import RecipeSkeleton from './../../components/recipeSkeleton/RecipeSkeleton'
import RecipeItem from './../../components/recipeItem/RecipeItem'

const Collection = () => {
    const {userId, collectionName} = useParams()
    const [recipes, setRecipes] = useState([])
    const [collection, setCollection] = useState({})
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [loaded, setLoaded] = useState(false)
    const [isMe, setIsMe] = useState(false)
    const PF = process.env.REACT_APP_BASE_URL;

    useEffect(() => {
        const fetchCollection = async () => {
            await axios.get(`/collections/getCollection/${userId.split("-")[1]}/${collectionName}`).then((c) => {
                setCollection(c.data.collection)
                setRecipes(c.data.recipes)
            })
            setLoaded(true)
        }
        fetchCollection()
    }, [])

    useEffect(() => {
        const fetchuser = async () => {
            await axios.get(`/user/getUser/${JSON.parse(localStorage.getItem('_auth'))}`).then((u) => {
                u.data?._id === userId.split("-")[1] ? setIsMe(true) : setIsMe(false)
            })
        }   
        localStorage.getItem('_auth') && fetchuser()
    }, [])

    return (
        <div className={s.collection} >
            <div className={s.header} style={{backgroundImage: recipes.length !== 0 ? `url(${PF}images/img/recipes/${recipes.at(-1).id}.webp)` : `url(${PF}images/img/collections/default.jpg)`}}>
                <div className={s.headerContent}>
                    <div className={s.collectionInfo}>
                        <div className={s.name}>
                            <p></p>
                        </div>
                    </div>
                    <div className={s.delete}>
                        <img src={`${PF}images/icons/profile/trash.svg`} alt="trashIcon" />
                        <p className={s.deleteText}>delete collection</p>
                    </div>
                </div>
            </div>
            <div className={s.main}>  
                <div className="wrap1160">
                    <div className={s.mainContent}>
                        <div className={s.mainHeader}>

                        </div>
                        <div className={s.recipes}>
                            {!loaded && <RecipeSkeleton recipes={6}/>}
                            {recipes && recipes.map((r) => (
                                <RecipeItem key={r._id} recipe={r}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collection;