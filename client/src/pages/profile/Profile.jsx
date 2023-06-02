import { useParams } from 'react-router-dom';
import s from './profile.module.css'

const Profile = () => {
    const {id} = useParams()

    return (
        <div>
            {id}
        </div>
    );
};

export default Profile;