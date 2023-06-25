import axios from 'axios';
import s from  './level.module.css'

const Level = ({active, setActive, user, setLevel, level}) => {
    const PF = process.env.REACT_APP_BASE_URL;

    const chooseLevel = async (l) => {
        if(user._id && l) {
            await axios.put(`/settings/level/${user._id}`, {
                level: l
            }).then((l) => {
                setLevel(l.data.cookingLevel)
                setActive("")
            })
        }
    }

    const options = [
        {id: 1, title: 'beginner'},
        {id: 2, title: 'intermediate'},
        {id: 3, title: 'advanced'}
    ]

    return (
        <div className={active ? `${s.board} ${s.active}` : s.board}>
            <div className={s.board__content}>
                <h1 className={s.board__title}>My cooking level is...</h1>
                <div className={s.bubbles}>
                    {options.map((o) => (
                        <div onClick={() => {chooseLevel(o.title)}} key={o.id} className={level === o.title ? `${s.bubble} ${s.active}` : s.bubble}>
                            <img className={s.icon} src={`${PF}images/icons/profile/settings/${o.title}.svg`} alt="imgBubble" />
                            <span className={s.chosenOption}>{o.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Level;