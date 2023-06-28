import { useParams, Link, useOutletContext } from 'react-router-dom';
import s from './recipe.module.css'
import { useEffect, useRef, useState } from 'react';
import moment from 'moment';
import axios from 'axios'
// rating
import { Rating, Star } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import RecipeItem from '../../components/recipeItem/RecipeItem';
import RecipeSkeleton from '../../components/recipeSkeleton/RecipeSkeleton';

const Recipe = () => {
    const PF = process.env.REACT_APP_BASE_URL;
    const {recipeId} = useParams()
    const [loggedInUser, setNotLoggedInUser, setActiveLoginModal] = useOutletContext()
    const [collectionsNotInclude, setCollectionsNotInclude] = useState([])
    const [activeModalCollection, setActiveModalCollection] = useState(false)
    const [activeNewCollection, setActiveNewCollection] = useState(false)
    const [collectionsInclude, setCollectionsInclude] = useState([])
    const [recipeData, setRecipeData] = useState({})
    const [system, setSystem] = useState('us')
    const [ingredients, setIngredients] = useState([])
    const [made, setMade] = useState(false)
    const [loading, setLoading] = useState(false)
    const [more, setMore] = useState([])
    const [related, setRelated] = useState([])
    const [activeReview, setActiveReview] = useState(false)
    const [activeInput, setActiveInput] = useState(false)
    const [reviewValue, setReviewValue] = useState('')
    const [reviewRating, setReviewRating] = useState(0)
    const [collectionName, setCollectionName] = useState("")

    // add Ingr
    const addIngredient = (ingredient) => {
        const newList = ingredients.filter(ing => ing !== ingredient)
        !ingredients.includes(ingredient) ? setIngredients([...ingredients, ingredient]) : setIngredients(newList)
    }

    useEffect(() => {
        const fetch = async () => {
            await axios.get(`/recipe/one/${recipeId}`).then((r) => {
                setRecipeData(r.data.recipe)
                setMore(r.data.more)
                setRelated(r.data.related)
            })
            setLoading(true)
        }
        fetch()
    }, [recipeId])

    useEffect(() => {
        const fetchCollections = async () => {
            await axios.get(`/collections/all/${loggedInUser._id}/${recipeData._id}`).then((c) => {
                setCollectionsNotInclude(c.data.notinclude)
                setCollectionsInclude(c.data.include)
            })
        }
        loggedInUser._id && recipeData._id && fetchCollections()
    }, [recipeData])


    useEffect(() => {
        document.title =  recipeData.title ? `${recipeData.title} | Vummly` : 'Vummly'
    }, [recipeData])

    
    // hide text in 2 sec
    const [actionText, setActionText] = useState(null)
    useEffect(() => {
        setTimeout(() => setActionText(!actionText), 2000)
    }, [made])
    // 

    // scroll onclick
    const usersReviews = useRef()
    const scrollRev = () => {
        usersReviews.current.scrollIntoView({behavior: 'smooth', block: 'center'})
    }

    // review 

    const inputHandler = (e) => {
        e.target.value ? setActiveInput(true) : setActiveInput(false)
    }
    // 
    const ratingStars = {
        itemShapes: Star,
        activeFillColor: '#e16120', 
        inactiveFillColor: '#f1f1f1'
    }

    // add to collection

    const fetch = async () => {
        await axios.get(`/recipe/one/${recipeId}`).then((r) => {
            setRecipeData(r.data.recipe)
        })
    }


    const addToCollection = () => {
        if(loggedInUser._id && collectionName) {
            axios.put(`/collections/${loggedInUser._id}/${recipeData._id}`, {
                collectionName: collectionName
            }).then((c) => {
                setCollectionsInclude([c.data, ...collectionsInclude])
                setCollectionName("")
                setActiveNewCollection(false)
            })
        } else {
            setActiveLoginModal(true)
        }
    }

    const addToCollectionNotIncluded = async (item) => {
        if(loggedInUser._id && item.name) {
            await axios.put(`/collections/${loggedInUser._id}/${recipeData._id}`, {
                collectionName: item.name
            }).then((c) => {
                setCollectionsInclude([c.data, ...collectionsInclude])
                setCollectionsNotInclude([...collectionsNotInclude].filter(co => co._id !== c.data._id))
            })
        }
    }

    const deletFromCollectionIncluded = async (item) => {
        if(loggedInUser._id && item.name) {
            await axios.put(`/collections/${loggedInUser._id}/${recipeData._id}`, {
                collectionName: item.name
            }).then((c) => {
                setCollectionsNotInclude([c.data, ...collectionsNotInclude])
                setCollectionsInclude([...collectionsInclude].filter(co => co._id !== c.data._id))
            })
        }
    }

    const addOnKey = (e) => {
        e.key === 'Enter' && collectionName && addToCollection()
    }


    const createReview = async () => {
        if(loggedInUser._id && reviewValue.length !== 0) {
            await axios.post(`/reviews/postReview/${loggedInUser._id}/${recipeData._id}`, {
                rating: reviewRating,
                text: reviewValue,
            }).then((r) => {
                fetch()
                setActiveReview(false);
                setActiveInput(false)
                setReviewRating(0)
                setReviewValue("")
            })
        } else {
            setActiveLoginModal(true)
        }
    }

    return (
        <>
            {loading ?
            <div className={s.recipe} onClick={() => setActiveModalCollection(false)}>
                <div className={s.recipeWrapper}>
                    <div className={s.recipe__content}>
                        <div className={s.recipeSummary}>
                            <div className={s.recipeSummary__text}>
                                <h1 className={s.recipeSummary__title}>{recipeData.title}</h1>
                                <Link className={s.recipeSummary__resource} to={`/page/${recipeData.resource.link}`}>{recipeData.resource.name}</Link>
                                <div className={s.recipeSummary__rating}>
                                    <Rating halfFillMode='svg' className={s.ratingStars} readOnly={true} value={recipeData.rating} itemStyles={ratingStars} />
                                    <p>({recipeData.reviews[0]._id ? recipeData.reviews.length : 0})</p>
                                </div>
                                    {recipeData.reviews[0]._id ? 
                                        <div className={s.recipeSummary__reviews}>
                                            <div className={s.recipeSummary__review} >
                                                <Link className={s.recipeSummary__user} to={`/profile/${recipeData.reviews[0]?.user?.name}-${recipeData.reviews[0]?.user?._id}`}>{recipeData.reviews[0]?.user?.name}</Link>
                                                {`: ${recipeData.reviews[0]?.text}`}
                                            </div>
                                            <button title='Read More' onClick={() => scrollRev()} className={s.recipeSummary__readMore}>Read More</button>
                                        </div>
                                    : null}
                                <div className={s.recipeSummary__statistics}>
                                    <div className={s.recipeSummary__statisticsItem}>
                                        <h1 className={s.recipeSummary__statisticsValue}>{recipeData.ingredients.metric.length || recipeData.ingredients.us.length}</h1>
                                        <span className={s.recipeSummary__statisticsCategory}>Ingredients</span>
                                    </div>
                                    <div className={s.recipeSummary__statisticsItem}>
                                        <h1 className={s.recipeSummary__statisticsValue}>{recipeData.time}</h1>
                                        <span className={s.recipeSummary__statisticsCategory}>Minutes</span>
                                    </div>
                                    <div className={s.recipeSummary__statisticsItem}>
                                        {recipeData.nutrition.map((nutr, i) => (
                                            <h1 key={i} className={s.recipeSummary__statisticsValue}>{nutr.value}</h1>
                                        ))[0]}
                                        <span className={s.recipeSummary__statisticsCategory}>Calories</span>
                                    </div>
                                </div>
                                <div className={s.recipeSummary__buttons}>
                                    <button title='Read Directions' className={s.recipeSummary__readDir}>Read Directions</button>
                                    <div className={s.recipeSummary__addYumm} onClick={e => e.stopPropagation() }>
                                        <button onClick={() => loggedInUser._id ? setActiveModalCollection(!activeModalCollection) : setActiveLoginModal(true)} title='Add Recipe' className={s.recipeSummary__addRecipe} />
                                        <div className={activeModalCollection ? `${s.dropdown} ${s.active}` : s.dropdown} onClick={(e) => e.stopPropagation()}>
                                            <div className={s.dropdownHeader}>
                                                <p style={{color : '#232323'}} className={s.modalText}>add to collection</p>
                                                <img className={s.closeIcon} onClick={() => setActiveModalCollection(false)} src={`${PF}images/icons/recipes/xgray.svg`} alt="closeIconModal" />
                                            </div>
                                            <div className={s.addCollection}>
                                                <div onClick={() => setActiveNewCollection(true)} className={activeNewCollection ? `${s.addCollection__target} ${s.active}` : s.addCollection__target}>
                                                    <img src={`${PF}images/icons/recipes/plus.svg`} alt="plusModal" />
                                                    <p style={{lineHeight: '28px'}} className={s.modalText}>new collection</p>
                                                </div>
                                                <div className={activeNewCollection ? `${s.createCollection} ${s.active}` : s.createCollection}>
                                                    <img onClick={() => addToCollection()} className={s.folderIcon} src={`${PF}images/icons/recipes/folder-plus.svg`} alt="folderNameCollection" />
                                                    <input onKeyDown={addOnKey} maxLength={40} placeholder='Name Collection' className={s.nameCollectionInput} value={collectionName} onChange={(e) => setCollectionName(e.target.value)} type="text" />
                                                    <img style={{marginRight: '7px'}} onClick={() => setActiveNewCollection(false)} className={s.closeIcon} src={`${PF}images/icons/recipes/x.svg`} alt="closeNameCollection" />
                                                </div>
                                            </div>
                                            <div className={s.collectionsContainer}>
                                                <div className={s.collectionsBox}>
                                                    <h1 className={s.collections__title}>included</h1>
                                                    <ul className={s.collectionsList}>
                                                        {collectionsInclude.map((i, index) => (
                                                            <li key={index} onClick={() => {deletFromCollectionIncluded(i)}} className={s.collectionsList__item}>
                                                                <img className={s.folderIcon} src={`${PF}images/icons/recipes/folder-minus.svg`} alt="folderNameCollection" />
                                                                {i.name}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className={s.collectionsBox}>
                                                    <h1 className={s.collections__title}>Not included</h1>
                                                    <ul className={s.collectionsList}>
                                                        {collectionsNotInclude.map((ni, index) => (
                                                            <li key={index} onClick={() => {addToCollectionNotIncluded(ni)}} className={s.collectionsList__item}>
                                                                <img className={s.folderIcon} src={`${PF}images/icons/recipes/folder-plus.svg`} alt="folderNameCollection" />
                                                                {ni.name}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div> 
                                        </div>
                                        <span className={s.recipeSummary__addYumm__added}>{recipeData.collections}</span>
                                    </div>
                                    <div className={s.recipeSummary__addMealPlanner}>
                                        <img className={s.recipeSummary__lock} src={`${PF}images/icons/recipes/lock.svg`} alt="" />
                                        <button className={s.recipeSummary__addMeal__butt}>Add to Meal Planner</button>
                                    </div>
                                </div>
                            </div>
                            <img className={s.recipeSummary__img} src={`${PF}images/img/recipes/${recipeData.id}.webp`} alt="" />
                        </div>

                        <div className={s.recipeIngr}>
                            <div className={s.recipe__infoWrapper}>
                                <div className={s.recipeIngr__content}>
                                    <div className={s.recipeIngr__header}>
                                        <h1 className={s.recipeIngr__title}>Ingredients</h1>
                                        <div className={s.recipeIngr__buttons}>
                                            <div className={s.recipeIngr__systems}>
                                                <button style={{color: system === 'us' ? '#3a9691' : '#bababa'}} className={s.recipeIngr__systemButt} onClick={() => setSystem('us')}>us</button>
                                                <button style={{color: system === 'metric' ? '#3a9691' : '#bababa'}} className={s.recipeIngr__systemButt} onClick={() => setSystem('metric')}>metric</button>
                                            </div>
                                            <span className={s.recipeIngr__servings}>{recipeData.servings} servings</span>
                                        </div>
                                    </div>
                                    <div className={s.recipeIngr__list}>
                                        {system === 'us' ? recipeData.ingredients.us.map((ingr, index) => (
                                            <div className={s.recipeIngr__listItem} key={index}>
                                                <button onClick={() => addIngredient(ingr)} className={s.recipeIngr__addIngrButt} title='Add this ingredient to your shopping list'>{ingredients.includes(ingr) ? '-' : '+'}</button>
                                                {ingr.quantity ? <span>{ingr.quantity}</span> : null}
                                                {ingr.measurement ? <span>{ingr.measurement}</span> : null}
                                                <h1 className={s.recipeIngr__ingr}>{ingr?.ingredient}</h1>
                                                {ingr.technique && <span style={{fontSize: '14px'}} className={s.techniqueRecipe}>({ingr.technique})</span>}
                                            </div>
                                        )) 
                                        : system === 'metric' ? recipeData.ingredients.metric.map((ingr, index) => (
                                            <div className={s.recipeIngr__listItem} key={index}>
                                                <button onClick={() => addIngredient(ingr)} className={s.recipeIngr__addIngrButt} title='Add this ingredient to your shopping list'>{ingredients.includes(ingr) ? '-' : '+'}</button>
                                                {ingr.quantity ? <span>{ingr.quantity}</span> : null}
                                                <span>{ingr.measurement}</span>
                                                <h1 className={s.recipeIngr__ingr}>{ingr?.ingredient}</h1>
                                                {ingr.technique && <span style={{fontSize: '14px'}} className={s.techniqueRecipe}>({ingr.technique})</span>}
                                            </div>
                                        )): null}
                                    </div>
                                    <div className={s.recipeIngr__order}>
                                        <Link className={s.recipeIngr__orderButt}>
                                            <img src={`${PF}images/icons/recipes/shopping-bag.svg`} alt="" />
                                            Order Ingredients
                                        </Link>
                                        <button onClick={() => {setMade(!made); setActionText(true)}} className={s.recipeIngr__didYou}>
                                            <span className={s.recipeIngr__didYou__text}>{made ? 'Made it' : 'Did you make this?'}</span>
                                            <img src={made ? `${PF}images/icons/recipes/check-circleActive.svg` : `${PF}images/icons/recipes/check-circle.svg`} alt="checkedRecipe" />
                                        </button>
                                        <span className={actionText && made ? `${s.recipeIngr__action}` : `${s.recipeIngr__action} ${s.hide}`}>{made && 'This recipe has been added to your collection Scheduled and Made'}</span>
                                    </div>
                                    <div className={s.recipeIngr__all}>
                                        <div className={s.recipeIngr__addButton}>
                                            <img src={`${PF}images/icons/recipes/shopping-cart.svg`} alt="" />
                                            <h1 className={s.recipeTitle}>{'Add All to Shopping List'}</h1>
                                        </div>
                                        <div className={s.recipeIngr__addButton}>
                                            <img src={`${PF}images/icons/recipes/lock.svg`}/>
                                            <h1 className={s.recipeTitle}>Add to Meal Planner</h1>
                                        </div>
                                    </div>
                                    <div className={s.nutrition}>
                                        <div className={s.nutritionTop}>
                                            <h1 className={s.titleBig}>Nutrition</h1>
                                            <div className={s.nutritionTop__viewMore}>
                                                <img src={`${PF}images/icons/recipes/lock.svg`} alt="lockView" />
                                                <span>View More</span>
                                            </div>
                                        </div>
                                        <div className={s.nutritionDetails}>
                                            <p className={s.nutritionDetails__desc}>Unlock full nutritional details with subscription</p>
                                            <div className={s.nutritionDetailsBubbles}>
                                                {recipeData.nutrition.map((nutr, i) => (
                                                    loggedInUser._id ? 
                                                    <div key={i} style={{backgroundImage: `linear-gradient(to top, rgb(190, 218, 217) ${(nutr.value / 2500)*100}%, rgb(245, 245, 245) ${(nutr.value / 2500)*100}%)`}} className={s.nutritionDetailsBubbles__item}>
                                                        <span className={s.nutritionValue}>{nutr.value}</span>
                                                        <span className={s.nutritionLabel}>{nutr.label}</span>
                                                    </div>
                                                    : <div key={nutr.label} className={`${s.nutritionDetailsBubbles__item} ${s.locked}`}>
                                                        <img src={`${PF}images/icons/recipes/lockNutr.svg`} alt="" />
                                                        <span style={{margin: '5px 0 0 '}} className={s.nutritionLabel}>{nutr.label}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={s.tags}>
                                        <h1 className={s.titleBig}>Recipe Tags</h1>
                                        <ul className={s.tagsBoxes}>
                                            {recipeData.tags.map((t, index) => (
                                                <Link to={'/recipes'} state={{query: t}} key={index} title={t}>
                                                    <li className={s.tagsBoxes__item}>{t}</li>
                                                </Link>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className={s.reviews}>
                                        <div className={s.reviewsTop}>
                                            <h1 className={s.titleBig}>Reviews </h1>
                                            <span className={s.reviewsHowMany}>({recipeData.reviews[0]._id ? recipeData.reviews.length : 0})</span>
                                            <Rating halfFillMode='svg' className={s.ratingStars} readOnly={true} value={recipeData.rating} itemStyles={ratingStars} />
                                        </div>
                                        <div className={s.reviewsWrite}>
                                            <div className={activeReview ? `${s.reviewsWrite__content}` : `${s.reviewsWrite__content} ${s.hideContent}`}>
                                                <div className={s.reviewsWriteTop}>
                                                    <img className={s.reviewAvatar} src={loggedInUser.avatar ? `${PF}images/avatars/${loggedInUser.avatar}` : `${PF}images/avatars/no-avatar.webp`} alt="avatarRev" />
                                                    {!activeReview ? <p onClick={(e) => {setActiveReview(true); setReviewValue(e.target.value)}} value={reviewValue} className={s.reviewTarget}>Write your review or comment here</p> : 
                                                        <div className={activeReview ? `${s.reviewPerson} ${s.show}` : `${s.reviewPerson}`}>
                                                            <h1 className={s.reviewName}>{loggedInUser?.name || "Vummly User"}</h1>
                                                            <Rating className={s.ratingStars} value={reviewRating} onChange={setReviewRating} itemStyles={ratingStars} />
                                                        </div>
                                                    }
                                                </div>
                                                <div className={activeReview ? `${s.reviewBody}` : `${s.reviewBody} ${s.hide}`}>
                                                    <textarea onChange={(e) => {inputHandler(e); setReviewValue(e.target.value)}} value={reviewValue} placeholder='Write your review or comment here' style={{height: activeInput && '164px'}} className={activeReview ?  s.reviewBody__input : `${s.reviewBody__input} ${s.active}`} type="text" />
                                                    <div className={s.reviewButtons}>
                                                        <button onClick={() => createReview()} className={s.reviewSubmit}>Submit</button>
                                                        <button onClick={() => {setActiveReview(false); setActiveInput(false); setReviewValue(''); setReviewRating(0)}} className={s.reviewCancel}>Cancel</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={s.usersReviews} ref={usersReviews}>
                                        {recipeData.reviews[0]?._id && recipeData.reviews?.map((rev, index) => (
                                            <div className={s.usersReviews__item} key={index}>
                                                <Link to={`/profile/${rev.user.name}-${rev.user._id}`}>
                                                    <img className={s.reviewAvatar} src={rev.user.avatar ? `${PF}images/avatars/${rev.user.avatar}` : `${PF}images/no-avatar.webp`} alt="avatarRev" />
                                                </Link>
                                                <div className={s.reviewDetails}>
                                                    <div className={s.reviewDetailsMain}>
                                                        <div className={s.reviewDetailsMain__date}>
                                                            <Link to={`/profile/${rev.user.name}-${rev.user._id}`}>
                                                                <span>{rev.user.name}</span> 
                                                            </Link>
                                                            <h1>{moment(rev.createdAt).fromNow()}</h1>
                                                        </div>
                                                        <Rating halfFillMode='svg' className={s.ratingStars} readOnly={true} value={rev.rating} itemStyles={ratingStars} />
                                                        <p className={s.reviewDetails__text}>{rev.text}</p>
                                                    </div>
                                                    <div className={s.reviewDetails__socActions}>
                                                        <img className={s.reviewDetails__socActions__icon} src={`${PF}images/icons/recipes/flag.svg`} alt="" />
                                                        <img className={s.reviewDetails__socActions__icon} src={`${PF}images/icons/recipes/like.svg`} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className={s.related}>
                                        <h1 className={s.relatedTitle}>Related</h1>
                                        <div className={s.relatedList}>
                                            {!loading && <RecipeSkeleton recipes={4}/>}
                                            {related.map((r) => (
                                                <RecipeItem key={r._id} loading={loading} setLoading={setLoading} rating={r.rating} recipe={r}/>
                                            ))}
                                        </div>
                                    </div>
                                    <div className={s.recommendations}>
                                        <div className={s.recommendationsHeader}>
                                            <h1 className={s.recommendationsTitle}>More Recipes from</h1>
                                            <p className={s.recommendationsFrom}>{recipeData.resource.name}</p>
                                        </div>
                                        <div className={s.recommendationsList}>
                                            {!loading && <RecipeSkeleton recipes={4}/>}
                                            {more.map((m => (
                                                <RecipeItem key={m._id} loading={loading} setLoading={setLoading} rating={m.rating} recipe={m}/>
                                            )))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> : <img className={'loaderRecipe'} src={`${PF}images/videos/loader.gif`} alt="" />}
        </>
    )
};

export default Recipe;