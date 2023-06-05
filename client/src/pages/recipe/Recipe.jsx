import { useParams, Link } from 'react-router-dom';
import styles from './recipe.module.css'
import Sidebar from '../../components/sidebar/Sidebar';
import { useEffect, useRef, useState } from 'react';
import moment from 'moment';
import axios from 'axios'
// rating
import { Rating, Star } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import RecipeItem from '../../components/recipeItem/RecipeItem';

const Recipe = () => {
    const PF = 'http://localhost:3000/assets/'
    const {recipe} = useParams()
    const [rating, setRating] = useState()
    const [recipeData, setRecipeData] = useState({})
    const [system, setSystem] = useState('us')
    const [ingredients, setIngredients] = useState([])
    const [made, setMade] = useState(false)
    const [loading, setLoading] = useState(false)
    const [more, setMore] = useState([])
    const [related, setRelated] = useState([])
    const [tags, setTags] = useState("")

    // add Ingr
    const addIngredient = (ingredient) => {
        const newList = ingredients.filter(ing => ing !== ingredient)
        !ingredients.includes(ingredient) ? setIngredients([...ingredients, ingredient]) : setIngredients(newList)
    }

    // getOne
    useEffect(() => {
        const fetchRecipe = async () => {
            await axios.get(`/recipe/getOne/${recipe}`).then(res => setRecipeData(res.data))
        }
        setTimeout(() => fetchRecipe(), 600)
    }, [recipe])

    // more
    useEffect(() => {
        const fetchMore = async () => {
            await axios.get(`/recipe/moreFrom/${recipeData.resource.link}`).then(res => setMore([...res.data].sort((a, b) => 0.5 - Math.random())))
        }
        fetchMore()
        document.title = recipeData.title ? recipeData.title : 'Vummly'
    }, [recipeData])

    // related
    useEffect(() => {
        const fetchAll = async () => {
            const ts = recipeData.tags.map((t) => t.tag.replace(" ", "_"))
            setTags(ts.join("-"))
            await axios.get(`/recipe/related/${tags}`).then(result => setRelated([...result.data].sort((a, b) => 0.5 - Math.random())))
            setLoading(true)
        }
        fetchAll()
    }, [recipeData]) 

    useEffect(() => {
        const sum = (items) => {
            return items.reduce(function(a, b){
                return a + b['stars'];
            }, 0);
        }
        const res = recipeData.reviews && sum(recipeData.reviews)/recipeData.reviews.length
        setRating(res)
    }, [recipeData])

    // sum
    const sum = (items) => {
        return items.reduce(function(a, b){
            return a + b['stars'];
        }, 0);
    }

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
    const [activeReview, setActiveReview] = useState(false)
    const [activeInput, setActiveInput] = useState(false)
    const [reviewValue, setReviewValue] = useState('')
    const [reviewRating, setReviewRating] = useState(0)
    const inputHandler = (e) => {
        e.target.value ? setActiveInput(true) : setActiveInput(false)
    }
    // 
    const ratingStars = {
        itemShapes: Star,
        activeFillColor: '#e16120', 
        inactiveFillColor: '#f1f1f1'
    }


    return (
        <>
            {loading ?
            <div className={styles.recipe}>
                <div className={styles.recipeWrapper}>
                    <div className={styles.recipe__content}>
                        <div className={styles.recipeSummary}>
                            <div className={styles.recipeSummary__text}>
                                <h1 className={styles.recipeSummary__title}>{recipeData.title}</h1>
                                <Link className={styles.recipeSummary__resource} to={`/page/${recipeData.resource.link}`}>{recipeData.resource.name}</Link>
                                <div className={styles.recipeSummary__rating}>
                                    <Rating halfFillMode='svg' className={styles.ratingStars} readOnly={true} value={rating} itemStyles={ratingStars} />
                                    <p>({recipeData.reviews.length})</p> 
                                </div>
                                <div className={styles.recipeSummary__reviews} >
                                    {recipeData.reviews.sort((a,b) => b.likes.length - a.likes.length).map((r, index) => (
                                        <div className={styles.recipeSummary__review} key={index}>
                                            <h1 className={styles.recipeSummary__user}>{r.user}</h1>:
                                            <p className={styles.recipeSummary__textRev}>{r.rev}</p>
                                        </div>
                                    ))[0]}
                                    <button title='Read More' onClick={() => scrollRev()} className={styles.recipeSummary__readMore}>Read More</button>
                                </div>
                                <div className={styles.recipeSummary__statistics}>
                                    <div className={styles.recipeSummary__statisticsItem}>
                                        <h1 className={styles.recipeSummary__statisticsValue}>{recipeData.ingredients.metric.length || recipeData.ingredients.us.length}</h1>
                                        <span className={styles.recipeSummary__statisticsCategory}>Ingredients</span>
                                    </div>
                                    <div className={styles.recipeSummary__statisticsItem}>
                                        <h1 className={styles.recipeSummary__statisticsValue}>{recipeData.time}</h1>
                                        <span className={styles.recipeSummary__statisticsCategory}>Minutes</span>
                                    </div>
                                    <div className={styles.recipeSummary__statisticsItem}>
                                        {recipeData.nutrition.map((nutr, i) => (
                                            <h1 key={i} className={styles.recipeSummary__statisticsValue}>{nutr.value}</h1>
                                        ))[0]}
                                        <span className={styles.recipeSummary__statisticsCategory}>Calories</span>
                                    </div>
                                </div>
                                <div className={styles.recipeSummary__buttons}>
                                    <button title='Read Directions' className={styles.recipeSummary__readDir}>Read Directions</button>
                                    <div className={styles.recipeSummary__addYumm}>
                                        <button title='Add Recipe' className={styles.recipeSummary__addRecipe}></button>
                                        <span className={styles.recipeSummary__addYumm__added}>{recipeData.recipeCollection.length >= 1000 ? recipeData.recipeCollection.length / 1000 + 'k' : recipeData.recipeCollection.length}</span>
                                    </div>
                                    <div className={styles.recipeSummary__addMealPlanner}>
                                        <img className={styles.recipeSummary__lock} src={`${PF}images/icons/recipes/lock.svg`} alt="" />
                                        <button className={styles.recipeSummary__addMeal__butt}>Add to Meal Planner</button>
                                    </div>
                                </div>
                            </div>
                            <img className={styles.recipeSummary__img} src={`${PF}images/img/recipes/${recipeData.id}.webp`} alt="" />
                        </div>

                        <div className={styles.recipeIngr}>
                            <div className={styles.recipe__infoWrapper}>
                                <div className={styles.recipeIngr__content}>
                                    <div className={styles.recipeIngr__header}>
                                        <h1 className={styles.recipeIngr__title}>Ingredients</h1>
                                        <div className={styles.recipeIngr__buttons}>
                                            <div className={styles.recipeIngr__systems}>
                                                <button style={{color: system === 'us' ? '#3a9691' : '#bababa'}} className={styles.recipeIngr__systemButt} onClick={() => setSystem('us')}>us</button>
                                                <button style={{color: system === 'metric' ? '#3a9691' : '#bababa'}} className={styles.recipeIngr__systemButt} onClick={() => setSystem('metric')}>metric</button>
                                            </div>
                                            <span className={styles.recipeIngr__servings}>{recipeData.servings} servings</span>
                                        </div>
                                    </div>
                                    <div className={styles.recipeIngr__list}>
                                        {system === 'us' ? recipeData.ingredients.us.map((ingr, index) => (
                                            <div className={styles.recipeIngr__listItem} key={index}>
                                                <button onClick={() => addIngredient(ingr)} className={styles.recipeIngr__addIngrButt} title='Add this ingredient to your shopping list'>{ingredients.includes(ingr) ? '-' : '+'}</button>
                                                {ingr.quantity && <span>{ingr.quantity}</span>}
                                                {ingr.measurement && <span>{ingr.measurement}</span>}
                                                <h1 className={styles.recipeIngr__ingr}>{ingr?.ingredient}</h1>
                                                {ingr.technique && <span style={{fontSize: '14px'}} className={styles.techniqueRecipe}>({ingr.technique})</span>}
                                            </div>
                                        )) : system === 'metric' ? recipeData.ingredients.metric.map((ingr, index) => (
                                            <div className={styles.recipeIngr__listItem} key={index}>
                                                <button onClick={() => addIngredient(ingr)} className={styles.recipeIngr__addIngrButt} title='Add this ingredient to your shopping list'>{ingredients.includes(ingr) ? '-' : '+'}</button>
                                                {ingr.quantity && <span>{ingr.quantity}</span>}
                                                {ingr.measurement && <span>{ingr.measurement}</span>}
                                                <h1 className={styles.recipeIngr__ingr}>{ingr?.ingredient}</h1>
                                                {ingr.technique && <span style={{fontSize: '14px'}} className={styles.techniqueRecipe}>({ingr.technique})</span>}
                                            </div>
                                        )): null}
                                    </div>
                                    <div className={styles.recipeIngr__order}>
                                        <Link className={styles.recipeIngr__orderButt}>
                                            <img src={`${PF}images/icons/recipes/shopping-bag.svg`} alt="" />
                                            Order Ingredients
                                        </Link>
                                        <button onClick={() => {setMade(!made); setActionText(true)}} className={styles.recipeIngr__didYou}>
                                            <span className={styles.recipeIngr__didYou__text}>{made ? 'Made it' : 'Did you make this?'}</span>
                                            <img src={made ? `${PF}images/icons/recipes/check-circleActive.svg` : `${PF}images/icons/recipes/check-circle.svg`} alt="checkedRecipe" />
                                        </button>
                                        <span className={actionText && made ? `${styles.recipeIngr__action}` : `${styles.recipeIngr__action} ${styles.hide}`}>{made && 'This recipe has been added to your collection Scheduled and Made'}</span>
                                    </div>
                                    <div className={styles.recipeIngr__all}>
                                        <div className={styles.recipeIngr__addButton}>
                                            <img src={`${PF}images/icons/recipes/shopping-cart.svg`} alt="" />
                                            <h1 className={styles.recipeTitle}>{'Add All to Shopping List'}</h1>
                                        </div>
                                        <div className={styles.recipeIngr__addButton}>
                                            <img src={`${PF}images/icons/recipes/lock.svg`}/>
                                            <h1 className={styles.recipeTitle}>Add to Meal Planner</h1>
                                        </div>
                                    </div>
                                    <div className={styles.nutrition}>
                                        <div className={styles.nutritionTop}>
                                            <h1 className={styles.titleBig}>Nutrition</h1>
                                            <div className={styles.nutritionTop__viewMore}>
                                                <img src={`${PF}images/icons/recipes/lock.svg`} alt="lockView" />
                                                <span>View More</span>
                                            </div>
                                        </div>
                                        <div className={styles.nutritionDetails}>
                                            <p className={styles.nutritionDetails__desc}>Unlock full nutritional details with subscription</p>
                                            <div className={styles.nutritionDetailsBubbles}>
                                                {recipeData.nutrition.map((nutr, i) => (
                                                    nutr.label === 'calories' ? 
                                                    <div key={i} style={{backgroundImage: `linear-gradient(to top, rgb(190, 218, 217) ${(nutr.value / 2500)*100}%, rgb(245, 245, 245) ${(nutr.value / 2500)*100}%)`}} className={styles.nutritionDetailsBubbles__item}>
                                                        <span className={styles.nutritionValue}>{nutr.value}</span>
                                                        <span className={styles.nutritionLabel}>{nutr.label}</span>
                                                    </div>
                                                    : <div key={nutr._id} className={`${styles.nutritionDetailsBubbles__item} ${styles.locked}`}>
                                                        <img src={`${PF}images/icons/recipes/lockNutr.svg`} alt="" />
                                                        <span style={{margin: '5px 0 0 '}} className={styles.nutritionLabel}>{nutr.label}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.tags}>
                                        <h1 className={styles.titleBig}>Recipe Tags</h1>
                                        <ul className={styles.tagsBoxes}>
                                            {recipeData.tags.map((t, index) => (
                                                <Link to={'/recipes'} state={{query: t.tag}} key={index} title={t.tag}>
                                                    <li className={styles.tagsBoxes__item}>{t.tag}</li>
                                                </Link>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className={styles.reviews}>
                                        <div className={styles.reviewsTop}>
                                            <h1 className={styles.titleBig}>Reviews </h1>
                                            <span className={styles.reviewsHowMany}>({recipeData.reviews.length})</span>
                                            <Rating halfFillMode='svg' className={styles.ratingStars} readOnly={true} value={rating} itemStyles={ratingStars} />
                                        </div>
                                        <div className={styles.reviewsWrite}>
                                            <div className={activeReview ? `${styles.reviewsWrite__content}` : `${styles.reviewsWrite__content} ${styles.hideContent}`}>
                                                <div className={styles.reviewsWriteTop}>
                                                    <img className={styles.reviewAvatar} src={`${PF}images/icons/no-avatar.webp`} alt="avatarRev" />
                                                    {!activeReview ? <p onClick={(e) => {setActiveReview(true); setReviewValue(e.target.value)}} value={reviewValue} className={styles.reviewTarget}>Write your review or comment here</p> : 
                                                        <div className={activeReview ? `${styles.reviewPerson} ${styles.show}` : `${styles.reviewPerson}`}>
                                                            <h1 className={styles.reviewName}>Popov Ivan</h1>
                                                            <Rating className={styles.ratingStars} value={reviewRating} onChange={setReviewRating} itemStyles={ratingStars} />
                                                        </div>
                                                    }
                                                </div>
                                                <div className={activeReview ? `${styles.reviewBody}` : `${styles.reviewBody} ${styles.hide}`}>
                                                    <textarea onChange={(e) => {inputHandler(e); setReviewValue(e.target.value)}} value={reviewValue} placeholder='Write your review or comment here' style={{height: activeInput && '164px'}} className={activeReview ?  styles.reviewBody__input : `${styles.reviewBody__input} ${styles.active}`} type="text" />
                                                    <div className={styles.reviewButtons}>
                                                        <button className={styles.reviewSubmit}>Submit</button>
                                                        <button onClick={() => {setActiveReview(false); setActiveInput(false); setReviewValue(''); setReviewRating(0)}} className={styles.reviewCancel}>Cancel</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.usersReviews} ref={usersReviews}>
                                        {recipeData.reviews.map((rev) => (
                                            <div className={styles.usersReviews__item} key={rev._id}>
                                                <Link to={`/profile/${rev.link}`}>
                                                    <img className={styles.reviewAvatar} src={`${PF}images/icons/no-avatar.webp`} alt="avatarRev" />
                                                </Link>
                                                <div className={styles.reviewDetails}>
                                                    <div className={styles.reviewDetailsMain}>
                                                        <div className={styles.reviewDetailsMain__date}>
                                                            <Link to={`/profile/${rev.link}`}>
                                                                <span>{rev.user}</span> 
                                                            </Link>
                                                            <h1>{moment(rev.time).fromNow()}</h1>
                                                        </div>
                                                        <Rating halfFillMode='svg' className={styles.ratingStars} readOnly={true} value={rev.stars} itemStyles={ratingStars} />
                                                        <p className={styles.reviewDetails__text}>{rev.rev}</p>
                                                    </div>
                                                    <div className={styles.reviewDetails__socActions}>
                                                        <img className={styles.reviewDetails__socActions__icon} src={`${PF}images/icons/recipes/flag.svg`} alt="" />
                                                        <img className={styles.reviewDetails__socActions__icon} src={`${PF}images/icons/recipes/like.svg`} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className={styles.related}>
                                        <h1 className={styles.relatedTitle}>Related</h1>
                                        <div className={styles.relatedList}>
                                            {related.filter(rel => rel.id !== recipe).slice(0, 4).map((r) => (
                                                <RecipeItem key={r._id} loading={loading} setLoading={setLoading} rating={sum(r.reviews)/r.reviews.length} recipe={r}/>
                                            ))}
                                        </div>
                                    </div>
                                    <div className={styles.recommendations}>
                                        <div className={styles.recommendationsHeader}>
                                            <h1 className={styles.recommendationsTitle}>More Recipes from</h1>
                                            <p className={styles.recommendationsFrom}>{recipeData.resource.name}</p>
                                        </div>
                                        <div className={styles.recommendationsList}>
                                            {more.filter(mr => mr.id !== recipe).slice(0, 4).map((m => (
                                                <RecipeItem key={m._id} loading={loading} setLoading={setLoading} rating={sum(m.reviews)/m.reviews.length} recipe={m}/>
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