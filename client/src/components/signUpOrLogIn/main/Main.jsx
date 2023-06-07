import { useEffect, useState } from 'react';
import s from './main.module.css'
import StartPage from '../startPage/StartPage';
import EmailPage from '../emailPage/EmailPage';
import NamePage from '../namePage/NamePage';
import axios from 'axios'
import PasswordPage from '../passwordPage/PasswordPage';

const Main = ({active, setActive}) => {
    const PF = 'http://localhost:3000/assets/'
    const [user, setUser] = useState({})

    const [name, setName] = useState("")
    const [nameError, setNameError] = useState(false)
    const [mail, setMail] = useState("")
    const [mailError, setMailError] = useState(false)

    const [login, setLogin] = useState(false)

    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState(false)

    const [users, setUsers] = useState([])
    const [activePage, setActivePage] = useState('start')

    useEffect(() => {
        const fetch = async () => {
            await axios.get(`/user/getAll`).then(users => setUsers(users.data))
        }
        active && fetch()
    }, [active])


    useEffect(() => {
        const pattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        if(!pattern.test(mail)) {
            setMailError("Invalid email address")
        } else {
            setMailError("")
        }
        users.find(user => user.mail === mail) ? setLogin(true) : setLogin(false)
    }, [mail, activePage])


    const nameHandler = (n) => {
        setName(n)
        if(n.length < 3) {
            setNameError(true)
        } else {
            setNameError(false)
        }
    }


    const passwordHandler = (p) => {
        setPassword(p)
        // const pattern = ^[@#](?=.{7,13}$)(?=\w{7,13})(?=[^aeiou_]{7,13})(?=.*[A-Z])(?=.*\d);
        if(!/(?=.*[A-Z])/.test(p)) {
            setPasswordError("Password should contain at least one capital char")
        } 
        else if(!/(?=.{7,40}$)/.test(p)) {
            setPasswordError("Password should be at least 7 characters")
        } 
        else if(!/[ -/:-@[-`{-~]/.test(p)) {
            setPasswordError("Password should contain at least one symbol")
        } 
        else if(!/(?=.*[0-9])/.test(p)) {
            setPasswordError("Password should contain at least one number")
        }
        else {
            setPasswordError("")
        }
    }

    console.log(users);

    useEffect(() => {
        console.log(user);
    }, [user])


    const createUser = async () => {
        await axios.post(`/user/createOne`, {
            name: name,
            mail: mail,
            password: password
        })
        setActive(false)
        setActivePage('start')
        setMail('')
        setName('')
        setPassword('')
    }

    const logInUser = async () => {
        await axios.get(`/user/login`, {
            mail: mail,
            password: password
        }).then(u => setUser(u.data))
        setActive(false)
        setActivePage('start')
    }

    return (
        <div onClick={() => activePage === 'start' && setActive(false)} className={active ? s.window : `${s.window} ${s.hidden}`}>
            <div onClick={(e) => e.stopPropagation()} className={s.modal}>
                <div className={s.content}>
                    {activePage === 'start' ? 
                        <StartPage setActive={setActive} setPage={setActivePage}/>
                    : activePage === 'email' ?
                        <EmailPage setPage={setActivePage} mailError={mailError} setMail={setMail} mail={mail}/>
                    : activePage === 'password' ?
                        <PasswordPage setPage={setActivePage} passwordHandler={passwordHandler} passwordError={passwordError} password={password} login={login} logInUser={logInUser} />
                    : activePage === 'name' ?
                        <NamePage setPage={setActivePage} name={name} nameHandler={nameHandler} nameError={nameError} createUser={createUser}/>
                    : null
                    }
                </div>
            </div>
        </div>
    );
};

export default Main;