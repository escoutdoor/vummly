import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useOutletContext, useParams } from 'react-router-dom';
import s from './collection.module.css'
import RecipeItem from './../../components/recipeItem/RecipeItem'
import DeleteCollection from '../../components/deleteCollectionModa/DeleteCollection';

const Collection = () => {
    const {userId, collectionName} = useParams()
    const [user] = useOutletContext()
    const [activeModal, setActiveModal] = useState(false)
    const [activeSortMenu, setActiveSortMenu] = useState(false)
    const [sortSettings, setSortSettings] = useState("last added")
    const [activeTrash, setActiveTrash] = useState(false)
    const [activeName, setActiveName] = useState(false)
    const [activeDescription, setActiveDescription] = useState(false)
    const [collection, setCollection] = useState({})
    const [recipesLastAdded, setRecipesLastAdded] = useState([])
    const [recipesByName, setRecipesByName] = useState([])
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
                setRecipesLastAdded(c.data.recipesLast)
                setRecipesByName(c.data.recipesName)
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

    const deleteCollection = async () => {
        if(collection._id) {
            await axios.delete(`/collections/deleteOne/${collection._id}`).then(() => {
                nav(`/profile/${userId}`)
                document.body.style.overflow = 'visible'
            })
        }
    }

    return (
        loaded ? <>
            <div className={s.collection} onBlur={() => {setActiveName(false); setActiveDescription(false); setActiveSortMenu(false); handleChanges()}}>
                <div className={s.header} style={{backgroundImage: recipesLastAdded.length !== 0 ? `url(${PF}images/img/recipes/${recipesLastAdded.at(-1).id}.webp)` : `url(${PF}images/img/collections/default.jpg)`}}>
                    <div className={s.headerContent}>
                        <div className={s.collectionInfo}>
                            {isMe && collectionName !== 'all-vums' ? <div className={s.changeBox} onClick={() => setActiveName(true)}>
                                <p className={!activeName ? s.displayName : `${s.displayName} ${s.hidden}`}>{name}</p>
                                <input maxLength={20} ref={nameInput} className={activeName ? `${s.nameInput} ${s.active}` : s.nameInput } type="text" value={name || ''} onChange={(e) => setName(e.target.value)} />
                            </div> : <p className={s.displayName}>{name}</p>}
                            <p className={s.stat}>{recipesLastAdded.length} Recipes</p>
                            {isMe && collectionName !== 'all-vums' ? <div className={s.changeBox} onClick={() => setActiveDescription(true)}>
                                <p className={!activeDescription ? s.displayDescription : `${s.displayDescription} ${s.hidden}`}>{description || 'Tell us more about your collection.'}</p>
                                <textarea maxLength={60} ref={descInput} className={activeDescription ? `${s.descInput} ${s.active}` : s.descInput } type="text" value={description || ''} onChange={(e) => setDescription(e.target.value)} />
                            </div> : <p className={s.displayDescription}>{description}</p>}
                        </div>
                        {isMe && collectionName !== 'all-vums' && <div className={s.delete} onMouseOver={() => setActiveTrash(true)} onMouseOut={() => setActiveTrash(false)}>
                            <img src={activeTrash ? `${PF}images/icons/profile/trashActive.svg` : `${PF}images/icons/profile/trash.svg`} alt="trashIcon" />
                            <p onClick={() => setActiveModal(true)} className={s.deleteText}>delete collection</p>
                        </div>}
                    </div>
                </div>
                <div className={s.main}>  
                    <div className="wrap1160">
                        <div className={s.mainContent}>
                            {recipesLastAdded.length !== 0 && <div className={s.mainHeader}>
                                <div className={s.sortMenu}>
                                    <div className={s.text} onClick={() => setActiveSortMenu(!activeSortMenu)}>
                                        <h1 style={{color: '#bababa'}} className={s.sortTitle}>Sort By</h1>
                                        <h1 className={s.sortTitle}>{sortSettings}</h1>
                                        <img className={s.sortIcon} src={`${PF}images/icons/recipes/chevron-down.svg`} alt="sortIcon" />
                                    </div>
                                    <ul className={activeSortMenu ? `${s.dropdown} ${s.active}` : s.dropdown}>
                                        <li className={sortSettings === 'last added' ? `${s.dropdown__item} ${s.active}` : s.dropdown__item} onClick={() => {setSortSettings("last added"); setActiveSortMenu(false)}}>last added</li>
                                        <li className={sortSettings === 'recipe name' ? `${s.dropdown__item} ${s.active}` : s.dropdown__item} onClick={() => {setSortSettings("recipe name"); setActiveSortMenu(false)}}>recipe name</li>
                                    </ul>
                                </div>
                            </div>}
                            <div className={s.recipes}>
                                {sortSettings === "last added" ? recipesLastAdded.map((r) => (
                                    <RecipeItem key={r._id} recipe={r} rating={r.rating}/>
                                )) :
                                sortSettings === 'recipe name' ? recipesByName.map((r) => (
                                    <RecipeItem key={r._id} recipe={r} rating={r.rating}/>
                                ))
                                : null}
                                {recipesLastAdded.length === 0 && loaded ? (
                                    <Link to={'/recipes'} className={s.noRecipes}>
                                        <div className={s.noRecipes__content}>
                                            <img src={`${PF}images/icons/profile/searchGray.svg`} alt="searchIcon" />
                                            <h1 className={s.noRecipes__title}>Search for {`${collectionName}`} on Vummly</h1>
                                            <h2 className={s.noRecipes__sub}>You have yet to add any recipes to this collection</h2>
                                        </div>
                                    </Link>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
                <DeleteCollection active={activeModal} setActive={setActiveModal} deleteCollection={deleteCollection}/>
            </div>
        </> : <img className={'loaderRecipe'} src={`${PF}images/videos/loader.gif`} alt="" />
    );
};

export default Collection;