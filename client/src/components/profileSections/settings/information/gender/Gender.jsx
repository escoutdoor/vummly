import axios from 'axios';
import s from  './gender.module.css'

const Gender = ({active, setActive, user, setGender, gender}) => {
    const PF = process.env.REACT_APP_BASE_URL;

    const chooseGender = async (g) => {
        if(user._id && g) {
            await axios.put(`/settings/gender/${user._id}`, {
                gender: g
            }).then((gen) => {
                setGender(gen.data.gender)
                setActive("")
            })
        }
    }

    const options = [
        {id: 1, title: 'female'},
        {id: 2, title: 'male'}
    ]

    return (
        <div className={active ? `${s.board} ${s.active}` : s.board}>
            <div className={s.board__content}>
                <h1 className={s.board__title}>I identify my gender as...</h1>
                <div className={s.bubbles}>
                    {options.map((o) => (
                        <div onClick={() => {chooseGender(o.title)}} key={o.id} className={gender === o.title ? `${s.bubble} ${s.active}` : s.bubble}>
                            <img className={s.icon} src={`${PF}images/icons/profile/settings/${o.title}.svg`} alt="imgBubble" />
                            <span className={s.chosenOption}>{o.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gender;