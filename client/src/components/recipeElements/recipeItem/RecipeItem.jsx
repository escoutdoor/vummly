import s from './recipeItem.module.css'
import { Link } from 'react-router-dom';
import { Rating, Star} from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useInView } from 'react-intersection-observer';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import RecipeItemSkeleton from '../recipeItemSkeleton/RecipeItemSkeleton';
import { useEffect, useState } from 'react';

const RecipeItem = ({recipe, loading, setLoading, rating}) => {
    const PF = process.env.REACT_APP_BASE_URL;
    // 
    const ratingStars = {
        itemShapes: Star,
        activeFillColor: '#e16120', 
        inactiveFillColor: '#f1f1f1'
    }

    const { ref, inView} = useInView({
        threshold: 0.3,
        triggerOnce: true, 
        delay: 500,
    });
    
    return (
        <div ref={ref} className={s.recommendationsList__item}  onClick={() => {loading && setLoading(false)}}>
            {inView ?
                <div>
                    <Link to={`/recipe/${recipe.id}`}>
                        <div title={recipe.title} className={s.recommImgBlock}>
                            <img className={s.recipeImg} src={`${PF}images/img/recipes/${recipe.id}.webp`} alt="" />
                            <div className={s.recipeShowIngredients}>
                                {recipe.ingredients.metric.map((ing) => (
                                    recipe.ingredients.metric[0] !== ing ? ', ' + ing.ingredient.toLowerCase() : ing.ingredient.toLowerCase()
                                ))}
                            </div>
                        </div>
                    </Link>
                    <div className={s.recommendationsText}>
                        <Link to={`/recipe/${recipe.id}`}>
                            <h1 title={recipe.title} className={s.recommendationsList__itemTitle}>{recipe.title}</h1> 
                        </Link>
                        <Link to={`/page/${recipe.resource.link}`}>
                            <span title={recipe.resource.name} className={s.recommendationsList__itemResource}>{recipe.resource.name}</span>
                        </Link>
                    </div>
                    <Rating halfFillMode='svg' className={s.ratingStars} readOnly={true} value={rating || 0} itemStyles={ratingStars} />
                </div> 
            : <RecipeItemSkeleton />}
        </div>
    );
};

export default RecipeItem;