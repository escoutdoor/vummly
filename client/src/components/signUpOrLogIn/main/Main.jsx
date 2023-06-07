import { useEffect, useState } from 'react';
import s from './main.module.css'
import FirstPage from '../first/FirstPage';
import SecondPage from '../second/SecondPage';
import ThirdPage from '../third/ThirdPage';
import axios from 'axios'

const Main = ({active, setActive}) => {
    const PF = 'http://localhost:3000/assets/'
    const [name, setName] = useState("")
    const [nameError, setNameError] = useState(false)
    const [activePage, setActivePage] = useState('first')
    const [mail, setMail] = useState("")
    const [mailError, setMailError] = useState(false)
    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetch = async () => {
            await axios.get(`/user/getAll`).then(users => setUsers(users.data))
        }
        active && fetch()
    }, [active])


    useEffect(() => {
        const pattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        if(users.some(u => u.mail === mail) || !pattern.test(mail)) {
            setMailError(true)
        } else {
            setMailError(false)
        }
    }, [mail])


    const nameHandler = (n) => {
        setName(n)
        if(n.length < 3) {
            setNameError(true)
        } else {
            setNameError(false)
        }
    }


    const createUser = async () => {
        await axios.post(`/user/createOne`, {
            name: name,
            mail: mail
        })
        setActive(false)
        setActivePage('first')
        setMail('')
        setName('')
    }

    return (
        <div onClick={() => activePage === 'first' && setActive(false)} className={active ? s.window : `${s.window} ${s.hidden}`}>
            <div onClick={(e) => e.stopPropagation()} className={s.modal}>
                <div className={s.content}>
                    {activePage === 'first' ? 
                        <FirstPage setActive={setActive} setPage={setActivePage}/>
                    : activePage === 'second' ?
                        <SecondPage setPage={setActivePage} mailError={mailError} setMail={setMail} mail={mail}/>
                    : activePage === 'third' ?
                        <ThirdPage setPage={setActivePage} name={name} nameHandler={nameHandler} nameError={nameError} createUser={createUser}/>
                    : null
                    }
                </div>
            </div>
        </div>
    );
};

export default Main;