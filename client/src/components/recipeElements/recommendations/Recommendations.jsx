import RecipeItem from '../recipeItem/RecipeItem';
import s from './recommendations.module.css'

const Recommendations = ({related, more}) => {
    return (
        <div className={s.recommendations}>
            <div className={s.category}>
                <h1 className={s.title}>Related</h1>
                <div className={s.list}>
                    {related?.map((recipe) => (
                        <RecipeItem key={recipe._id} recipe={recipe} rating={recipe.rating}/>
                    ))}
                </div>
            </div>
            <div className={s.category}>
                <div className={s.category__header}>
                    <h1 className={s.title}>More Recipes from</h1>
                    <p className={s.light__title}>{more?.[0]?.resource.name}</p>
                </div>
                <div className={s.list}>
                    {more?.map((recipe) => (
                        <RecipeItem key={recipe._id} recipe={recipe} rating={recipe.rating}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Recommendations;