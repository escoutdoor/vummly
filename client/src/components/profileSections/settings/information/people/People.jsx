import axios from 'axios';
import s from  './people.module.css'
import { useEffect, useState } from 'react';

const People = ({active, user, setPeople, people}) => {
    const PF = process.env.REACT_APP_BASE_URL;
    const [hover, setHover] = useState("")


    const choosePeople = async (adults, kids) => {
        if(user._id) {
            await axios.put(`/settings/household/${user._id}`, {
                adults: adults,
                kids: kids
            }).then((p) => {
                setPeople(p.data.people)
            })
        }
    }




    return (
        <div className={active ? `${s.board} ${s.active}` : s.board}>
            <div className={s.board__content}>
                <h1 className={s.board__title}>Select the number of people you cook for</h1>
                <div className={s.inputs}>
                    <div className={s.input}>
                        <div className={s.input__status}>
                            <p className={s.counter}>{people.adults}</p>
                            <img className={s.peopleIcon} src={`${PF}images/icons/profile/settings/adult.svg`} alt="adultIcon" />
                            <div className={s.arrows}>
                                <img className={s.icon} onClick={() => choosePeople(people.adults + 1, people.kids)} src={`${PF}images/icons/profile/settings/up.svg`} alt="imgBubble" />
                                <img className={s.icon} onClick={() => people.adults > 0 && choosePeople(people.adults - 1, people.kids)} src={`${PF}images/icons/profile/settings/down.svg`} alt="imgBubble" />
                            </div>
                        </div>
                        <h1 className={s.chosenOption}>adults</h1>
                    </div>
                    <div className={s.input}>
                        <div className={s.input__status}>
                            <p className={s.counter}>{people.kids}</p>
                            <img className={s.peopleIcon} src={`${PF}images/icons/profile/settings/kid.svg`} alt="kidIcon" />
                            <div className={s.arrows}>
                                <img className={s.icon} onClick={() => choosePeople(people.adults, people.kids + 1)} src={`${PF}images/icons/profile/settings/up.svg`} alt="imgBubble" />
                                <img className={s.icon} onClick={() => people.kids > 0 && choosePeople(people.adults, people.kids - 1)} src={`${PF}images/icons/profile/settings/down.svg`} alt="imgBubble" />
                            </div>
                        </div>
                        <h1 className={s.chosenOption}>kids</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default People;