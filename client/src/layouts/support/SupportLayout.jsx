import { Outlet } from "react-router-dom";
import SuppFooter from "../../components/suppFooter/SuppFooter";
import SuppNavbar from "../../components/suppNavbar/SuppNavbar";


const SupportLayout = () => {
    return (
        <>
            <SuppNavbar />
                <Outlet/>
            <SuppFooter />
        </>
    );
};

export default SupportLayout;