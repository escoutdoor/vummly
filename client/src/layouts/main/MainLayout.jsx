import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import s from './mainLayout.module.css'
import { useEffect, useState } from "react";
import Main from "../../components/signUpOrLogIn/main/Main";
import axios from "axios";

const MainLayout = () => {
    const [activeLoginModal, setActiveLoginModal] = useState(false)
    useEffect(() => {
        document.body.style.overflow = activeLoginModal ? 'hidden' : 'visible'
    }, [activeLoginModal])

    return (
        <div>
            <Sidebar setActive={setActiveLoginModal} activeLoginModal={activeLoginModal}/>
            <div className={s.main}>
                <Outlet />
                <Main active={activeLoginModal} setActive={setActiveLoginModal}/>
            </div>
        </div>
    );
};

export default MainLayout;