import { useState } from 'react';
import s from './recipeIngredients.module.css'
import IngredientListItem from './ingredientListItem/IngredientListItem';
import Skeleton from 'react-loading-skeleton';
import axios from 'axios';


const RecipeIngredients = ({ user, setActiveModal, recipe, loaded, include, addToCollection, deleteFromCollection, addMealPlanner }) => {
    const PF = process.env.REACT_APP_BASE_URL;
    const madeIt = include?.find(c => c.name === "Scheduled and Made")
    const [measurement, setMeasurement] = useState("us")

    const orderIngredient = async (ingredient) => {
        if(user && ingredient) {
            console.log(ingredient);
        } else {
            setActiveModal(true)
        }
    }


    return (
        <div className={s.ingredients}>
            <div className={s.header}>
                <h1 className={s.title}>Ingredients</h1>
                <div className={s.header__right}>
                    <ul className={s.measurementSelect}>
                        <li onClick={() => setMeasurement("us")} className={measurement === 'us' ? `${s.measurementSelect__item} ${s.active}` : s.measurementSelect__item}>us</li>
                        <li onClick={() => setMeasurement("metric")} className={measurement === 'metric' ? `${s.measurementSelect__item} ${s.active}` : s.measurementSelect__item}>metric</li>
                    </ul>
                    <h1 className={s.servings}>{recipe.servings ? `${recipe.servings} servings` : <Skeleton width={80} height={12}/>} </h1>
                </div>
            </div>
            <div className={s.list}>
                {loaded ?
                    measurement === 'us' ? recipe.ingredients.us.map((ingredient, index) => (
                        <IngredientListItem key={index} ingredient={ingredient} orderIngredient={orderIngredient}/>
                    )) :
                    measurement === 'metric' ? recipe.ingredients.metric.map((ingredient, index) => (
                        <IngredientListItem key={index} ingredient={ingredient} orderIngredient={orderIngredient}/>
                    )) : null
                : Array(8).fill(0).map((a, index) => <Skeleton height={35} style={{margin: '5px 0px'}} key={index}/>)}
            </div>
            <div className={s.buttons}>
                <button onClick={() => orderIngredient(recipe.ingredients.metric || recipe.ingredients.us)} className={s.orderButton}>
                    <img src={`${PF}images/icons/recipes/shopping-bag.svg`} alt="" />
                    add all to shopping list
                </button>
                <div className={s.checkButton} onClick={() => user ? madeIt ? deleteFromCollection("Scheduled and Made") : addToCollection("Scheduled and Made") : setActiveModal(true)}>
                    <h1 className={s.checkButton__status}>{madeIt ? "Made it!" : "Did you make this?"}</h1>
                    <img src={madeIt ? `${PF}images/icons/recipes/check-circleActive.svg` : `${PF}images/icons/recipes/check-circle.svg`} alt="checkedRecipe" />
                </div>
                <div className={s.manage}>
                    <div className={s.mealPlanner} onClick={() => addMealPlanner()}>
                        <img src={`${PF}images/icons/recipes/lock.svg`} alt="lockIcon" />
                        <p className={s.mealPlanner__button}>Add to Meal Planner</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeIngredients;