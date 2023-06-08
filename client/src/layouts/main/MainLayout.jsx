import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import s from './mainLayout.module.css'
import { useEffect, useState } from "react";
import Main from "../../components/signUpOrLogIn/main/Main";
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/features/userSlice';

const MainLayout = () => {
    const [activeLoginModal, setActiveLoginModal] = useState(false)
    const user = useSelector(selectUser)
    useEffect(() => {
        document.body.style.overflow = activeLoginModal ? 'hidden' : 'visible'
    }, [activeLoginModal])

    return (
        <div>
            <Sidebar setActive={setActiveLoginModal} user={user}/>
            <div className={s.main}>
                <Outlet context={[user]}/>
                <Main active={activeLoginModal} setActive={setActiveLoginModal}/>
            </div>
        </div>
    );
};

export default MainLayout;