import React, { useState } from 'react';
import Header from '../components/subcomponents/Header';
import Profile from '../components/Profile';
import Subjects from '../components/Subjects';
import NewsFeed from '../components/NewsFeed';
import ExamRegistration from '../components/ExamRegistration';
import ExamDeadlines from '../components/ExamDeadlines';
import Final from '../components/Final';
import Exams from '../components/Exams';
import SubjectSelection from '../components/SubjectSelection';
import NavItem from '../components/subcomponents/NavItem';
import Calendar from '../components/Calendar';
import Practice from '../components/Practice';
import '../style/Home.css';
import ProfileBar from '../components/subcomponents/ProfileBar';

function Home(props) {
    const { name, surname, id } = props;
    const [activeTab, setActiveTab] = useState('NewsFeed');
    // const [isNavExpanded, setIsNavExpanded] = useState(false);

    const handleLogout = () => {
        props.onLogout();
    };

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
        // setIsNavExpanded(false);
    };

    // const toggleNav = () => {
    //     setIsNavExpanded(!isNavExpanded);
    // };

    const renderActiveTab = () => {
        switch (activeTab) {
            case 'NewsFeed':
                return <NewsFeed />;
            case 'Subjects':
                return <Subjects id={id}/>;
            case 'ExamDeadlines':
                return <ExamDeadlines />;
            case 'Exams':
                return <Exams id={id}/>;
            case 'ExamRegistration':
                return <ExamRegistration id={id}/>;
            case 'SubjectSelection':
                return <SubjectSelection />;
            case 'Practice':
                return <Practice />;
            case 'Final':
                return <Final />;
            case 'Profile':
                return <Profile id={id} />;
            case 'Calendar':
                return <Calendar id={id}/>;
            default:
                return null;
        }
    };

    return (
        <div className="home-container">
            <div className="header-container">
                <Header />
                <ProfileBar onLogout={handleLogout} onOpenProfile={() => handleTabClick('Profile')} name={name} surname={surname} id={id}/>
            </div>
            <div className="nav-container">
                <div className="nav-toggle-container">
                    <NavItem activeTab={activeTab} onClick={() => handleTabClick('NewsFeed')} iconClass="fas fa-home" label="Обавештења" />
                    <NavItem activeTab={activeTab} onClick={() => handleTabClick('Subjects')} iconClass="fas fa-chalkboard-teacher" label="Предмети" />
                    <NavItem activeTab={activeTab} onClick={() => handleTabClick('ExamDeadlines')} iconClass="fas fa-calendar-alt" label="Испитни рокови" />
                    <NavItem activeTab={activeTab} onClick={() => handleTabClick('Exams')} iconClass="fas fa-clipboard-check" label="Испити" />
                    <NavItem activeTab={activeTab} onClick={() => handleTabClick('ExamRegistration')} iconClass="fas fa-edit" label="Пријава испита" />
                    {/* <NavItem activeTab={activeTab} onClick={() => handleTabClick('SubjectSelection')} iconClass="fas fa-book" label="Бирање предмета" />
                    <NavItem activeTab={activeTab} onClick={() => handleTabClick('SV20')} iconClass="fas fa-user-graduate" label="ШВ 20" /> */}
                    {/* <NavItem activeTab={activeTab} onClick={() => handleTabClick('Practice')} iconClass="fas fa-graduation-cap" label="Пракса" />
                    <NavItem activeTab={activeTab} onClick={() => handleTabClick('Final')} iconClass="fas fa-graduation-cap" label="Завршни рад" /> */}
                    <NavItem activeTab={activeTab} onClick={() => handleTabClick('Calendar')} iconClass="fas fa-graduation-cap" label="Мој Календар" />
                </div>
            </div>
            <div className="main-container">
                {renderActiveTab()}
            </div>
        </div>
    );
}

export default Home;
