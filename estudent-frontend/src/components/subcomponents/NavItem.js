import '../../style/Home.css';

function NavItem(props) {
    const { activeTab, onClick, iconClass, label } = props;
    const isActive = activeTab === label.toLowerCase();

    return (
        <div
            className={`nav-item ${isActive ? 'active' : ''}`}
            onClick={() => onClick(label.toLowerCase())}
        >
            <i className={`nav-icon ${iconClass}`}></i>
            <span>{label}</span>
        </div>
    );
}

export default NavItem;
