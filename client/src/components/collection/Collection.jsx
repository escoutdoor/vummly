import s from './collection.module.css'

const Collection = ({collection, image}) => {
    const PF = process.env.REACT_APP_BASE_URL;

    return (
        <div title={collection.name} className={s.collection}>
            <img className={s.collectionImage} src={image ? `${PF}images/img/recipes/${image}.webp` : `${PF}images/img/collections/default.jpg`} alt="" />
            <div className={s.collectionInfo}>
                <p className={s.collectionText}>{collection.name}</p>
                <div className={s.collectionStat}>
                    <p className={s.collectionText}>{collection.recipes.length}</p>
                    <span className={s.collectionSmallText}>recipes</span>
                </div>
            </div>
        </div>
    );
};

export default Collection;