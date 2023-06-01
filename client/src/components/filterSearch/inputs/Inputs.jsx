import { useEffect, useState } from 'react';
import s from './inputs.module.css'


const Inputs = ({ingredients, setWith, setWithout, clear, setClear, visibility}) => {
    const PF = 'http://localhost:3000/assets/'
    const [searchValue, setSearchValue] = useState("")
    const [searchValueWithout, setSearchValueWithout] = useState("")
    const [toolTips, setToolTips] = useState([])
    const [activeWith, setActiveWith] = useState(false)
    const [activeWithout, setActiveWithout] = useState(false)
    const [allowed, setAllowed] = useState([])
    const [banned, setBanned] = useState([])

    useEffect(() => {
        setToolTips(ingredients.filter((ingredient) => ingredient.toLowerCase().includes(searchValue.toLowerCase()) && !allowed.find(a => a === ingredient) && !banned.find(a => a === ingredient)))
    }, [searchValue, allowed])

    const removeIngredient = (i) => {
        setToolTips(toolTips.filter(t => t !== i))
        setAllowed(allowed.filter(a => a !== i))
    }

    const removeBanned = (i) => {
        setToolTips(toolTips.filter(t => t !== i))
        setBanned(banned.filter(a => a !== i))
    }

    useEffect(() => {
        setToolTips(ingredients.filter((ingredient) => ingredient.toLowerCase().includes(searchValueWithout.toLowerCase()) && !banned.find(a => a === ingredient) && !allowed.find(a => a === ingredient)))
    }, [searchValueWithout, banned])

    useEffect(() => {
        const allowedString = allowed.join("-").replace(" ", "_")
        const bannedString = banned.join("-").replace(" ", "_")
        setWith(allowedString)
        setWithout(bannedString)
    }, [allowed, banned])

    useEffect(() => {
        if(clear) {
            setToolTips(ingredients.filter((ingredient) => ingredient.toLowerCase().includes(searchValueWithout.toLowerCase()) && !banned.find(a => a === ingredient) && !allowed.find(a => a === ingredient)))
            setAllowed([])
            setBanned([])
            setClear(false)
        }
    }, [clear])

    return (
        <div className={s.filter} style={{display: visibility ? 'block' : 'none'}}>
            <div className={s.filter__container}>
                <div className={s.filterItem}>
                    <div className={s.filterField}>
                        <img className={s.searchIcon} src={`${PF}images/icons/recipes/search.svg`} alt="" />
                        <input onBlur={() => setActiveWith(false)} onFocus={() => setActiveWith(true)} value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className={s.filterInput} type="text" placeholder='With Ingredients' />
                    </div>
                    <div className={activeWith ? s.dropList : `${s.dropList} ${s.hidden}`}>
                        {toolTips.slice(0,6).map((t, index) => (
                            <div onClick={(e) => {setAllowed([...allowed, t]); setActiveWith(false); setSearchValue("")}} className={s.dropList__item} key={index}>
                                <span className={s.plus}>+</span>
                                <h1 className={s.suggestText}>{t}</h1>
                            </div>
                        ))}
                    </div>
                    <div className={s.ingredientsList}>
                        {allowed.map((a, index) => (
                            <div className={s.ingredientsList__item} onClick={() => removeIngredient(a)} key={index}>
                                <span className={s.ingredient}>{a}</span>
                                <img className={s.removeIcon} src={`${PF}images/icons/recipes/x.svg`} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className={s.filterItem}>
                    <div className={s.filterField}>
                        <img className={s.searchIcon} src={`${PF}images/icons/recipes/search.svg`} alt="" />
                        <input onBlur={() => setActiveWithout(false)} onFocus={() => setActiveWithout(true)} className={s.filterInput} value={searchValueWithout} onChange={(e) => setSearchValueWithout(e.target.value)} type="text" placeholder='Without Ingredients' />
                    </div>
                    <div className={activeWithout ? s.dropList : `${s.dropList} ${s.hidden}`}>
                        {toolTips.slice(0,6).map((t, index) => (
                            <div onClick={(e) => {setBanned([...banned, t]); setActiveWithout(false); setSearchValueWithout("")}} className={s.dropList__item} key={index}>
                                <span className={s.plus}>+</span>
                                <h1 className={s.suggestText}>{t}</h1>
                            </div>
                        ))}
                    </div>
                    <div className={s.ingredientsList}>
                        {banned.map((b, index) => (
                            <div className={s.ingredientsList__item} onClick={() => removeBanned(b)} key={index}>
                                <span className={s.ingredient}>{b}</span>
                                <img className={s.removeIcon} src={`${PF}images/icons/recipes/x.svg`} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inputs;