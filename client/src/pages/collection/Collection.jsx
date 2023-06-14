import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useOutletContext, useParams } from 'react-router-dom';
import s from './collection.module.css'
import RecipeSkeleton from './../../components/recipeSkeleton/RecipeSkeleton'
import RecipeItem from './../../components/recipeItem/RecipeItem'

const Collection = () => {
    const {userId, collectionName} = useParams()
    const [user] = useOutletContext()
    const [activeTrash, setActiveTrash] = useState(false)
    const [activeName, setActiveName] = useState(false)
    const [activeDescription, setActiveDescription] = useState(false)
    const [collection, setCollection] = useState({})
    const [recipes, setRecipes] = useState([])
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [loaded, setLoaded] = useState(false)
    const [isMe, setIsMe] = useState(false)
    const nav = useNavigate()
    const PF = process.env.REACT_APP_BASE_URL;

    const nameInput = useRef()
    const descInput = useRef()

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
        document.title = collection?.name ? `${collection.name} by ${userId.split("-")[0]} on Vummly` : 'Vummly'
        if(collection) {
            setName(collection.name)
            setDescription(collection.description)
        }
    }, [collection])

    useEffect(() => {
        user?._id === userId.split("-")[1] ? setIsMe(true) : setIsMe(false)
    }, [user])


    useEffect(() => {
        if(activeName) {
            nameInput.current.focus()
        } else if(activeDescription) {
            descInput.current.focus()
        }
    }, [activeName, activeDescription])


    const handleChanges = async () => {
        if(collection.name !== name && name.length !== 0 && user._id) {
            await axios.put(`/collections/name/${collection._id}/${user._id}`, {
                name: name
            }).then((c) => {nav(`/profile/${userId}/collections/${c.data.name}`); setCollection(c.data)})
        } else if(collection.description !== description && user._id) {
            await axios.put(`/collections/description/${collection._id}/${user._id}`, {
                description: description
            }).then((c) => setCollection(c.data))
        }
    }

    return (
        <div className={s.collection} onBlur={() => {setActiveName(false); setActiveDescription(false); handleChanges()}}>
            <div className={s.header} style={{backgroundImage: recipes.length !== 0 ? `url(${PF}images/img/recipes/${recipes.at(-1).id}.webp)` : `url(${PF}images/img/collections/default.jpg)`}}>
                <div className={s.headerContent}>
                    <div className={s.collectionInfo}>
                        {isMe ? <div className={s.changeBox} onClick={() => setActiveName(true)}>
                            <p className={!activeName ? s.displayName : `${s.displayName} ${s.hidden}`}>{name}</p>
                            <input maxLength={20} ref={nameInput} className={activeName ? `${s.nameInput} ${s.active}` : s.nameInput } type="text" value={name || ''} onChange={(e) => setName(e.target.value)} />
                        </div> : <p className={s.displayName}>{name}</p>}
                        {recipes.length !== 0 && <p className={s.stat}>{recipes.length} Recipes</p>}
                        {isMe ? <div className={s.changeBox} onClick={() => setActiveDescription(true)}>
                            <p className={!activeDescription ? s.displayDescription : `${s.displayDescription} ${s.hidden}`}>{description || 'Tell us more about your collection.'}</p>
                            <textarea maxLength={60} ref={descInput} className={activeDescription ? `${s.descInput} ${s.active}` : s.descInput } type="text" value={description || ''} onChange={(e) => setDescription(e.target.value)} />
                        </div> : <p className={s.displayDescription}>{description}</p>}
                    </div>
                    {isMe && <div className={s.delete} onMouseOver={() => setActiveTrash(true)} onMouseOut={() => setActiveTrash(false)}>
                        <img src={activeTrash ? `${PF}images/icons/profile/trashActive.svg` : `${PF}images/icons/profile/trash.svg`} alt="trashIcon" />
                        <p className={s.deleteText}>delete collection</p>
                    </div>}
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