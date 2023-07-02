import { Link } from 'react-router-dom';
import s from './recipeCard.module.css'
import CardSkeleton from '../cardSkeleton/CardSkeleton';
import { Rating, Star } from '@smastrom/react-rating';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';


const RecipeCard = ({user, setActiveModal, recipe, loaded, include, setInclude, notInclude, setNotInclude, addToCollection, deleteFromCollection, addMealPlanner}) => {
    const PF = process.env.REACT_APP_BASE_URL;
    const review = recipe.reviews?.[0]?._id 
    const [activeCollection, setActiveCollection] = useState(false)
    const [collection, setCollection] = useState("")

    const [activeCreateCollection, setActiveCreateCollection] = useState(false)
    const input = useRef()

    useEffect(() => {
        activeCreateCollection && input.current.focus()
    })

    const ratingStars = {
        itemShapes: Star,
        activeFillColor: '#e16120', 
        inactiveFillColor: '#f1f1f1'
    }

    const fetchCollections = async () => {
        await axios.get(`/collections/all/${user._id}/${recipe._id}`).then((collections) => {
            setInclude(collections.data.include)
            setNotInclude(collections.data.notinclude)
        })
    }

    useEffect(() => {
        if(user?._id && recipe?._id) {
            fetchCollections()
        }
    }, [user, recipe])

    const createCollection = async () => {
        if(collection && !include.find(i => i.name === collection) && !notInclude.find(n => n.name === collection)) {
            await axios.put(`/collections/${user._id}/${recipe._id}`, {
                name: collection.trim()
            }).then((col) => {
                setInclude([ col.data, ...include])
                setCollection("")
                setActiveCreateCollection(false)
            })
        }
    }

    return (
        loaded ? <div className={s.card}>
            <div className={s.details}>
                <div className={s.header}>
                    <h1 className={s.title}>{recipe.title}</h1>
                    <Link to={`/page/${recipe.resource.link}`} className={s.resource}>
                        {recipe.resource.name}
                    </Link>
                    <div className={s.rating}>
                        <Rating className={s.stars} readOnly={true} value={recipe.rating} itemStyles={ratingStars}/>
                        <p className={review ? `${s.count} ${s.active}` : s.count}>({review ? recipe.reviews.length : 0})</p>
                    </div>
                </div>
                <div className={s.stats}>
                    {review ? 
                        <div className={s.review}>
                            <Link to={`/profile/${recipe.reviews[0].user.name}-${recipe.reviews[0].user._id}`}>
                                <h1 className={s.review__username}>{recipe.reviews[0].user.name}</h1> 
                            </Link> 
                            : {recipe.reviews[0].text}
                        </div>
                    :
                        null
                    }
                    <div className={s.summary}>
                        <div className={s.summary__item}>
                            <p className={s.summary__value}>{recipe.ingredients.us.length || recipe.ingredients.metric.length}</p>
                            <span className={s.summary__title}>ingredients</span>
                        </div>
                        <div className={s.summary__item}>
                            <p className={s.summary__value}>{recipe.time}</p>
                            <span className={s.summary__title}>minutes</span>
                        </div>
                        <div className={s.summary__item}>
                            <p className={s.summary__value}>{recipe.nutrition.find(n => n.label === 'calories').value}</p>
                            <span className={s.summary__title}>calories</span>
                        </div>
                    </div>
                    <div className={s.buttons}>
                        <div className={s.bookmark} >
                            <div className={s.bookmark__stats}>
                                <button onClick={() => user ? setActiveCollection(!activeCollection) : setActiveModal(true)} className={s.collectionButton} />
                                <p className={s.bookmark__count}>{recipe.collections}</p>
                            </div>
                            <div className={activeCollection ? `${s.menu} ${s.active}` : s.menu}>
                                <div className={s.menu__content}>
                                    <div className={s.menu__header}>
                                        <p className={s.menu__title}>add to collection</p>
                                        <img className={s.close} onClick={() => setActiveCollection(false)} src={`${PF}images/icons/profile/x.svg`} alt="closeMenuIcon" />
                                    </div>
                                    <div className={s.create}>
                                        <div className={activeCreateCollection ? `${s.create__target} ${s.active}` : s.create__target} onClick={() => {setActiveCreateCollection(true)}} >
                                            <img src={`${PF}images/icons/recipes/plus.svg`} alt="plusModal" />
                                            <p>new collection</p>
                                        </div>
                                        <div className={activeCreateCollection ? `${s.createCollection__box} ${s.active}` : s.createCollection__box}>
                                            <img onClick={() => createCollection()} className={s.folderIcon} src={`${PF}images/icons/recipes/folder-plus.svg`} alt="folderNameCollection" />
                                            <input onKeyDown={(e) => e.key === 'Enter' && createCollection()} placeholder='Name Collection' ref={input} value={collection} onChange={e => setCollection(e.target.value)} type="text" className={s.create__input} />
                                            <img className={s.close} onClick={() => setActiveCreateCollection(false)} src={`${PF}images/icons/profile/x.svg`} alt="closeMenuIcon" />
                                        </div>
                                    </div>
                                    <div className={s.collections}>
                                        <h1 className={s.menu__title}>included</h1>
                                        <ul className={s.collectionList}>
                                            {include.map((item) => (
                                                <li key={item._id} className={s.collectionList__item} onClick={() => deleteFromCollection(item.name)}>
                                                    <img src={`${PF}images/icons/recipes/folder-minus.svg`} alt="minusCollection" />
                                                    {item.name}
                                                </li>
                                            ))}
                                        </ul>
                                        <h1 className={s.menu__title}>not included</h1>
                                        <ul className={s.collectionList}>
                                            {notInclude.map((item) => (
                                                <li key={item._id} className={s.collectionList__item} onClick={() => addToCollection(item.name)}>
                                                    <img src={`${PF}images/icons/recipes/folder-plus.svg`} alt="plusCollection" />
                                                    {item.name}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={s.mealPlanner} onClick={() => addMealPlanner()}>
                            <img src={`${PF}images/icons/recipes/lock.svg`} alt="lockIcon" />
                            <p className={s.mealPlanner__button}>Add to Meal Planner</p>
                        </div>
                    </div>
                </div>
            </div>
            <img className={s.image} src={`${PF}images/img/recipes/${recipe.id}.webp`} alt="recipeImage" />
        </div> : <CardSkeleton/>
    );
};

export default RecipeCard;