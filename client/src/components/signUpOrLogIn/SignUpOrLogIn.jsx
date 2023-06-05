import { useEffect } from 'react';
import s from './signUpOrLogIn.module.css'

const SignUpOrLogIn = ({active, setActive}) => {

    return (
        <div onClick={() => setActive(false)} className={active ? s.window : `${s.window} ${s.hidden}`}>
            <div onClick={(e) => e.stopPropagation()} className={s.modal}>
                <div className={s.content}>
                    1
                </div>
            </div>
        </div>
    );
};

export default SignUpOrLogIn;