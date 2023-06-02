import s from './noResults.module.css'

const NoResults = ({searchVal, length}) => {
    const PF = 'http://localhost:3000/assets/'
    return (
        <div className={length !== 0 ? `${s.no__result} ${s.hidden}` : s.no__result}>
            <div className={s.no__resultContent}>
                <h1 className={s.no__resultTitle}>{searchVal ? `We searched all over but didn't find a recipe for '${searchVal}'` : "We searched all over but found nothing"}</h1>
                <p className={s.no__resultSubTitle}>Try some of our most popular recipes below or search again with these tips:</p>
                <div className={s.no__resultProblems}>
                    <div className={s.no__resultProblems__item}>
                        <img className={s.no__resultImg} src={`${PF}images/icons/recipes/check_spelling.svg`} alt="checkSpelling" />
                        <p className={s.no__resultSubTitle}>Check Spelling</p>
                    </div>
                    <div className={s.no__resultProblems__item}>
                        <img  className={s.no__resultImg} src={`${PF}images/icons/recipes/different_keywords.svg`} alt="diffKeywords" />
                        <p className={s.no__resultSubTitle}>Different Keywords</p>
                    </div>
                    <div className={s.no__resultProblems__item}>
                        <img className={s.no__resultImg} src={`${PF}images/icons/recipes/simplify_search.svg`} alt="simplifySearch" />
                        <p className={s.no__resultSubTitle}>Simplify Search</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoResults;