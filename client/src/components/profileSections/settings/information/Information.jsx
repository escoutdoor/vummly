import { useState } from 'react';
import Gender from './gender/Gender';
import s from './information.module.css'
import Level from './level/Level';
import People from './people/People';
import Skeleton from 'react-loading-skeleton';

const Information = ({user, level, setLevel, people, setPeople, gender, setGender, loaded}) => {
    const PF = process.env.REACT_APP_BASE_URL;

    const [active, setActive] = useState("")

    return (
        <div className={s.information}>
            <h1 className={s.title}>General Information</h1>
            <div className={s.menu}>
                <div className={s.bubbles}>
                    {!loaded ? Array(3).fill(0).map((a, index) => <Skeleton key={index} width={150} height={150} circle={true} />)
                    :
                        <>
                            <div className={s.bubble} onClick={() => setActive(active === "gender" ? "" : "gender")}>
                                {gender ? <img className={s.icon} src={`${PF}images/icons/profile/settings/${gender}.svg`} alt="imgBubble" /> : <img className={s.icon} src={`${PF}images/icons/profile/preferences/plus.svg`}/>}
                                <span className={s.chosenOption}>{gender || 'gender'}</span>
                            </div>
                            <div className={s.bubble} onClick={() => setActive(active === "level" ? "" : "level")}>
                                {level ? <img className={s.icon} src={`${PF}images/icons/profile/settings/${level}.svg`} alt="imgBubble" /> : <img className={s.icon} src={`${PF}images/icons/profile/preferences/plus.svg`}/>}
                                <span className={s.chosenOption}>{level || 'skills'}</span>
                            </div>
                            <div className={s.bubble} onClick={() => setActive(active === "people" ? "" : "people")}>
                                {(people.adults || people.kids) ? <img className={s.icon} src={`${PF}images/icons/profile/settings/house.svg`} alt="imgBubble" /> : <img className={s.icon} src={`${PF}images/icons/profile/preferences/plus.svg`}/>}
                                <span className={s.chosenOption}>{(people.adults || people.kids) ? `${people.adults} adults / ${people.kids} kids` : 'household size'}</span>
                            </div>
                        </>
                    }
                </div>
                <div className={s.boards}>
                    <Gender gender={gender} setGender={setGender} active={active === 'gender'} setActive={setActive} user={user}/>
                    <Level level={level} setLevel={setLevel} active={active === 'level'} setActive={setActive} user={user}/>
                    <People people={people} setPeople={setPeople} active={active === 'people'} setActive={setActive} user={user} />
                </div>
            </div>
        </div>
    );
};

export default Information;