import s from './savedRecipes.module.css'

const SavedRecipes = ({user}) => {
    return (
        <div>
            {user?.name}
        </div>
    );
};

export default SavedRecipes;