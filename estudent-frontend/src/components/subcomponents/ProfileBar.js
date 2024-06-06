import { RiLogoutCircleRLine } from 'react-icons/ri';
import { FaUser } from 'react-icons/fa';
import '../../style/ProfileBar.css';
import Notifications from '../../components/subcomponents/Notifications';
function ProfileBar(props) {
    const { name, surname, id } = props;
    const handleLogout = () => {
        props.onLogout();
    };
    const handleOpeningProfile = () => {
        props.onOpenProfile();
    };
    return (
        <div className="profile-bar">
            <Notifications id={id} />
            <div className="profile-icon">
                <FaUser size={24} color="white" />
            </div>
            <div className="profile-actions">
                <span className="logout-label" onClick={handleOpeningProfile}>{name} {surname}</span>
                <RiLogoutCircleRLine className="logout-icon" size={24} color="white" onClick={handleLogout} />
            </div>
        </div>
    );
}

export default ProfileBar;
