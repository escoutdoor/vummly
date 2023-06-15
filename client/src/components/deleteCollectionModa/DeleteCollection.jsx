import { useEffect } from 'react';
import s from './deleteCollection.module.css'

const DeleteCollection = ({setActive, active, deleteCollection}) => {
    const PF = process.env.REACT_APP_BASE_URL;

    useEffect(() => {
        document.body.style.overflow = active ? 'hidden' : 'visible'
    }, [active])

    return (
        <div className={active ? `${s.background} ${s.active}`: s.background} onClick={() => setActive(false)}>
            <div className={s.modal} onClick={(e) => e.stopPropagation()}>
                <div className={s.content}>
                    <img onClick={() => setActive(false)} className={s.cancelIcon} src={`${PF}images/icons/profile/x.svg`} alt="cancelIcon" />
                    <h1 className={s.title}>Are you sure you'd like to delete this collection?</h1>
                    <div className={s.buttons}>
                        <button onClick={() => deleteCollection()} className={s.button}>Delete</button>
                        <button onClick={() => setActive(false)} className={s.button}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteCollection;